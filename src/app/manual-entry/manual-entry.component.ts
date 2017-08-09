import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ComponentFactory,
  ComponentRef,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChange,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import {IDynamicComponent, ManualEntryService} from "./manual-entry.service";
import {PlatformValues} from "./platform/PlatformValues";

@Component({
  selector: 'manaul-entry',
  templateUrl: './manual-entry.component.html',
  styleUrls: ['./manual-entry.component.css'],
})
export class ManualEntryComponent implements AfterViewInit, AfterViewChecked, OnChanges, OnDestroy, OnInit {


  @ViewChild("itemEntry", {read: ViewContainerRef})
  private vcr: ViewContainerRef;

  protected componentRef: ComponentRef<any>;

  private manualEntry: string = null;
  private manulaEntryCss: string = null;
  private manualEntryJs: string = null;
  private manualEntryResponses: string = null;
  private productSelected: string = "";
  private formSelected: string;
  private platformValue: PlatformValues = new PlatformValues();
  private showProductChip:boolean = false;


  private examineeId: string = "1234";


  // until ngAfterViewInit, we cannot start (firstly) to process manual-entry stuff
  protected wasViewInitialized = false;

  constructor(private manualEntryService: ManualEntryService) {

  }

  /**
   * This method creates manual entry component. It takes html, css and js strings.
   * @param html
   * @param css
   * @param js
   */
  createManualEntryModule(html: string, css: string, js: string, response: string, settings: string) {

    let componet = this.manualEntryService.createComponentModule(html, css, js, response, settings).then((factory: ComponentFactory<IDynamicComponent>) => {
      let componentRef = this.vcr.createComponent(factory);
      let comp = componentRef.instance;
    });
  }


  ngOnInit() {
  }


  ngAfterViewInit() {
    this.wasViewInitialized = true;
  }

  /**
   * This method cteates Dynamic component for manual entry.
   * @param productCode
   */
  private createDynamicManualEntry(productCode: string, formName: string) {
    this.showProductChip = true;
    this.manualEntryService.fetchManualEntry(productCode, formName).subscribe(respHtml => {
      this.manualEntry = respHtml.text();

      this.manualEntryService.fetchManualEntryCSS(productCode, formName).subscribe(respCss => {
        this.manulaEntryCss = respCss.text();
        this.manualEntryService.fetchManualEntryJS(productCode, formName).subscribe(respJs => {
          this.manualEntryJs = respJs.text();
          this.manualEntryService.fetchManualEntryResponse(productCode, this.examineeId).subscribe(respResponse => {

            this.manualEntryResponses = respResponse.text();
            console.log(this.manualEntryResponses);
            this.createManualEntryModule(this.manualEntry, this.manulaEntryCss,
              this.manualEntryJs, this.manualEntryResponses,
              this.createSettingsScript(JSON.stringify(this.platformValue))
            );
          });
        });
      });

    });
  }

  ngAfterViewChecked() {
    //no code yet
  }

  public ngOnChanges(changes: { [key: string]: SimpleChange }): void {
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

  public saveResponse(event: any) {
    console.log("Response saved");
    document.getElementById('buttonItemResponseButton').click();

    var object = {
      "id": null,
      "acronym": this.productSelected,
      "examineeId": this.examineeId,
      "responses": document.getElementById('formDiv').innerHTML
    }

    this.manualEntryService.saveResponses(object).subscribe(resp => {
      console.log("Save Response :" + resp);
    })


    //  this.componentRef.instance.
  }

  // saveItemResponses() {
  //     this.componentRef.instance.
  // }

  productChange(productId: string) {

    if (this.productSelected == "Plese select") {
      return;
    }
    this.productSelected = productId;
    this.destroyManualEntryModule();
    console.log("selected product id : " + this.productSelected);
  }

  formChange(formId: string) {
    this.formSelected = formId;

    this.destroyManualEntryModule();
    console.log("selected form value : " + this.formSelected);
  }

  private destroyManualEntryModule() {
    this.showProductChip = false;
    this.cleanUpComponentRef();
    this.vcr.clear();
  }

  private loadManualEntryForm(value: boolean) {
    console.log("Logged value :" + value);
    /** destroy existing component **/
    this.destroyManualEntryModule();

    /**
     * Create component.
     */
    this.createDynamicManualEntry(this.productSelected, this.formSelected);
  }

  private consumePlatformValues(object: PlatformValues) {
    console.log("consumePlatformValues:");
    console.log(object);
    this.platformValue = object;
  }

  private createSettingsScript(json: string): string {
    console.log('createSettingsScript: ');
    console.log("onPlatformChange(" + json + ")");
    return "onPlatformChange(" + json + ")";
  }

}
