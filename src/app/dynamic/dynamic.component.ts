import {
    Component,
    OnInit,
    ViewChild,
    ViewContainerRef,
    ComponentRef,
    AfterViewInit,
    AfterViewChecked,
    OnChanges,
    OnDestroy,
    SimpleChange,
    ComponentFactory
} from "@angular/core";
import { DynamicService, IDynamicComponent } from "./dynamic.service";
import { PlatformValues } from "./platform/PlatformValues";

class Test {
    private name: string;
    private flag: boolean;
    private obj2: Obj2[];

    constructor(name: string, flag: boolean, obj2: Obj2[]) {
        this.name = name;
        this.flag = flag;
        this.obj2 = obj2;
    }
}

class Obj2 {
    private ele: any;

    constructor(ele: any) {
        this.ele = ele;
    }
}


@Component({
    selector: 'dynamic',
    templateUrl: './dynamic.component.html',
    styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements AfterViewInit, AfterViewChecked, OnChanges, OnDestroy, OnInit {


    @ViewChild("itemEntry", {read: ViewContainerRef})
    private vcr: ViewContainerRef;

    protected componentRef: ComponentRef<any>;

    private manualEntry: string = null;
    private manulaEntryCss: string = null;
    private manualEntryJs: string = null;
    private manualEntryResponses: string = null;
    itemResponseIput: string = "";
    private products;
    private productSelected: string;
    private formSelected: string;
    private forms: string;
    private platformValue: PlatformValues = new PlatformValues();
    private showSettings: boolean = false;

    private test: Test;

    private examineeId: string = "1234";


    // until ngAfterViewInit, we cannot start (firstly) to process dynamic stuff
    protected wasViewInitialized = false;

    constructor(private dynamicService: DynamicService) {

    }

    /**
     * This method creates manual entry component. It takes html, css and js strings.
     * @param html
     * @param css
     * @param js
     */
    createManualEntryModule(html: string, css: string, js: string, response: string, settings: string) {

        let componet = this.dynamicService.createComponentModule(html, css, js, response, settings).then((factory: ComponentFactory<IDynamicComponent>) => {
            let componentRef = this.vcr.createComponent(factory);
            let comp = componentRef.instance;
        });
    }


    ngOnInit() {
        this.loadAllProducts();
    }


    ngAfterViewInit() {
        this.wasViewInitialized = true;
    }

    /**
     * This method cteates Dynamic component for manual entry.
     * @param productCode
     */
    private createDynamicManualEntry(productCode: string, formName: string) {
        this.dynamicService.fetchManualEntry(productCode, formName).subscribe(respHtml => {
            this.manualEntry = respHtml.text();

            this.dynamicService.fetchManualEntryCSS(productCode, formName).subscribe(respCss => {
                this.manulaEntryCss = respCss.text();
                this.dynamicService.fetchManualEntryJS(productCode, formName).subscribe(respJs => {
                    this.manualEntryJs = respJs.text();
                    this.dynamicService.fetchManualEntryResponse(productCode, this.examineeId).subscribe(respResponse => {

                        this.manualEntryResponses = respResponse.text();
                        console.log(this.manualEntryResponses);
                        this.createManualEntryModule(this.manualEntry, this.manulaEntryCss,
                            this.manualEntryJs, this.manualEntryResponses,
                            this.createSettingsScript(JSON.stringify(this.platformValue)));
                    });
                });
            });

        });
    }

    ngAfterViewChecked() {
        //no code yet
    }

    public ngOnChanges(changes: {[key: string]: SimpleChange}): void {
        if (this.wasViewInitialized) {
            return;
        }
        this.createManualEntryModule(this.manualEntry, this.manulaEntryCss, this.manualEntryJs,
            this.manualEntryResponses, this.createSettingsScript(JSON.stringify(this.platformValue)));
    }

    ngOnDestroy() {
        this.cleanUpComponentRef();
    }

    private cleanUpComponentRef() {
        if (this.componentRef) {
            this.componentRef.destroy();
        }
        this.componentRef = null;
    }

    public saveResponse() {
        console.log("Response saved");
        document.getElementById('buttonItemResponseButton').click();

        var object = {
            "id": null,
            "acronym": this.productSelected,
            "examineeId": this.examineeId,
            "responses": document.getElementById('formDiv').innerHTML
        }

        this.dynamicService.saveResponses(object).subscribe(resp => {
            console.log("Save Response :" + resp);
        })


        //  this.componentRef.instance.
    }

    // saveItemResponses() {
    //     this.componentRef.instance.
    // }

    public loadAllProducts() {
        this.dynamicService.listProducts().subscribe(resp => {
            this.products = resp.json();
        });
    }

    private destroyManualEntryModule() {
        this.cleanUpComponentRef();
        this.vcr.clear();
    }

    productChange(productId: string) {
        console.log("selected value : " + productId + " " + this.productSelected);
        if (productId == "Plese select") {
            return;
        }
        this.productSelected = productId;
        this.destroyManualEntryModule();
        this.dynamicService.listForms(productId).subscribe(resp => {
            this.forms = resp.json();
        });
    }

    formChange(value: string) {
        this.formSelected = value;
        this.destroyManualEntryModule();
        this.dynamicService.getPlatformValues(this.formSelected, this.examineeId).subscribe(map => {
            this.platformValue = map.json();
            this.showSettings = true;
        });

        console.log("selected form value : " + value + " " + this.formSelected);


    }

    private validate() {
        document.getElementById('buttonDisableButton').click();
    }

    private enable() {
        document.getElementById('buttonEnableButton').click();
    }

    private loadManualEntryForm() {
        /** destroy existing component **/
        this.destroyManualEntryModule();

        /**
         * Create component.
         */
        this.createDynamicManualEntry(this.productSelected, this.formSelected);
    }

    private createSettingsScript(json: string): string {
        return "onPlatformChange(" + json + ")";
    }

}
