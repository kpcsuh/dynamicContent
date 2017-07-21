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

    private manualEntry: string = null;
    private manulaEntryCss: string = null;
    private manualEntryJs: string = null;


    // until ngAfterViewInit, we cannot start (firstly) to process dynamic stuff
    protected wasViewInitialized = false;

    constructor(private dynamicService: DynamicService) {

    }

    createManualEntryModule(html: string, css: string, js: string) {

        let componet = this.dynamicService.createComponentModule(html, css, js).then((factory: ComponentFactory<IDynamicComponent>) => {
            let componentRef = this.vcr.createComponent(factory);
            let comp = componentRef.instance;
        })
    }

    ngOnInit() {

    }


    ngAfterViewInit() {
        this.wasViewInitialized = true;
        this.dynamicService.fetchManualEntry().subscribe(respHtml => {
            this.manualEntry = respHtml.text();

            this.dynamicService.fetchManualEntryCSS().subscribe(respCss => {
                this.manulaEntryCss = respCss.text();
                this.dynamicService.fetchManualEntryJS().subscribe(respJs => {
                    this.manualEntryJs = respJs.text();
                    this.createManualEntryModule(this.manualEntry, this.manulaEntryCss, this.manualEntryJs);
                })

            })


            //this.includeCSS();

        });

    }

    ngAfterViewChecked() {
        //no code yet
    }

    public ngOnChanges(changes: {[key: string]: SimpleChange}): void {
        if (this.wasViewInitialized) {
            return;
        }
        this.createManualEntryModule(this.manualEntry, this.manulaEntryCss, this.manualEntryJs);
    }

    ngOnDestroy() {
        if (this.componentRef) {
            this.componentRef.destroy();
        }
        this.componentRef = null;
    }
}
