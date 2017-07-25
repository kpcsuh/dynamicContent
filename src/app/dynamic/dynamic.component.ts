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

@Component({
    selector: 'dynamic',
    templateUrl: './dynamic.component.html',
    styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements AfterViewInit, AfterViewChecked, OnChanges, OnDestroy, OnInit {

    @ViewChild("itemEntry", {read: ViewContainerRef})
    private vcr: ViewContainerRef;

    protected componentRef: ComponentRef<any>;

    protected productCode: string;
    private manualEntry: string = null;
    private manulaEntryCss: string = null;
    private manualEntryJs: string = null;
    private manualEntryResponses: string = null;
    itemResponseIput: string = "";
    private products;
    private productSelected: string;
    private formSelected: string;
    private forms: string;


    // until ngAfterViewInit, we cannot start (firstly) to process dynamic stuff
    protected wasViewInitialized = false;

    constructor(private dynamicService: DynamicService) {
        this.productCode = "BASC-3";

    }

    /**
     * This method creates manual entry component. It takes html, css and js strings.
     * @param html
     * @param css
     * @param js
     */
    createManualEntryModule(html: string, css: string, js: string, response: string) {

        let componet = this.dynamicService.createComponentModule(html, css, js, response).then((factory: ComponentFactory<IDynamicComponent>) => {
            let componentRef = this.vcr.createComponent(factory);
            let comp = componentRef.instance;
        })
    }

    ngOnInit() {
        this.loadAllProducts();
    }


    ngAfterViewInit() {
        this.wasViewInitialized = true;
        this.createDynamicManualEntry(this.productCode);

    }

    /**
     * This method cteates Dynamic component for manual entry.
     * @param productCode
     */
    private createDynamicManualEntry(productCode: string) {
        this.dynamicService.fetchManualEntry(productCode).subscribe(respHtml => {
            this.manualEntry = respHtml.text();

            this.dynamicService.fetchManualEntryCSS(productCode).subscribe(respCss => {
                this.manulaEntryCss = respCss.text();
                this.dynamicService.fetchManualEntryJS(productCode).subscribe(respJs => {
                    this.manualEntryJs = respJs.text();
                    this.dynamicService.fetchManualEntryResponse(productCode, "1234").subscribe(respResponse => {
                        this.manualEntryResponses = respResponse.text();
                        this.createManualEntryModule(this.manualEntry, this.manulaEntryCss,
                            this.manualEntryJs, this.manualEntryResponses);
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
        this.createManualEntryModule(this.manualEntry, this.manulaEntryCss, this.manualEntryJs, this.manualEntryResponses);
    }

    ngOnDestroy() {
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
            "acronym": this.productCode,
            "examineeId": "1234",
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

    productChange(productId: string) {
        console.log("selected value : " + productId + " " + this.productSelected);
        if (productId == "Plese select") {
            return;
        }

        this.dynamicService.listForms(productId).subscribe(resp => {
            this.forms = resp.json();
        })
    }

    formChange(value: string) {
        console.log("selected form value : " + value + " " + this.formSelected);
    }

}
