import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DynamicService, IDynamicComponent} from "../dynamic.service";
import {PlatformValues} from "../platform/PlatformValues";

@Component({
  selector: "settings",
  templateUrl: "./settings.component.html",
})
export class SettingsComponent implements OnInit {

  selectedValue: string;
  private productSelected: string;
  private DynamicService;
  private formSelected: string;

  private examineeId: string = "1234";

  private platformValue: PlatformValues = new PlatformValues();
  private showSettings = false;
  private forms: string;
  private products;
  private enableLoadManualEntryButton:boolean;
  private enableManualEntryRelatedButtons:boolean;


  @Output() productChangeEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() formChangeEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() manualEntryLoadEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() saveResponseEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private _dynamicService: DynamicService) {
  }

  ngOnInit() {
    this.loadAllProducts();
  }

  public loadAllProducts() {
    this._dynamicService.listProducts().subscribe(resp => {
      this.products = resp.json();
    });
  }

  private validate() {
    document.getElementById('buttonDisableButton').click();
  }

  private enable() {
    document.getElementById('buttonEnableButton').click();
  }

  productChange() {

    if (this.productSelected == "Plese select") {
      return;
    }
    this.manageEnableButtons(false);
    //this.destroyManualEntryModule();
    this._dynamicService.listForms(this.productSelected).subscribe(resp => {
      this.forms = resp.json();
      this.productChangeEvent.emit(this.productSelected);
    });
  }

  formChange() {
    this.formSelected;
    // this.destroyManualEntryModule();
    this._dynamicService.getPlatformValues(this.formSelected, this.examineeId).subscribe(map => {
      this.platformValue = map.json();
      this.formChangeEvent.emit(this.formSelected);
      this.manageEnableButtons(true);
    });

    console.log("selected form value : " + this.formSelected);
  }

  private loadManualEntryForm() {
    this.manualEntryLoadEvent.emit(true);
    this.enableManualEntryRelatedButtons = true;

  }

  private seneSaveResponseEvent() {
    this.saveResponseEvent.emit(true);
  }

  private manageEnableButtons(flag:boolean) {
    if (!flag) {
      this.enableLoadManualEntryButton = flag;
      this.enableManualEntryRelatedButtons = flag;
    } else {
      this.enableLoadManualEntryButton = flag;
    }

    console.log(this.enableLoadManualEntryButton);
    console.log(this.enableManualEntryRelatedButtons);
  }
}
