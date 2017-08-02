import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PlatformValues} from "../platform/PlatformValues";
import {SettingsService} from "./settings.service"

@Component({
  selector: "settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.css"]
})
export class SettingsComponent implements OnInit {

  selectedValue: string;
  private productSelected: string;
  private formSelected: string;

  private examineeId: string = "1234";

  private platformValue: PlatformValues = new PlatformValues();
  private showSettings = false;
  private forms: string;
  private products;
  private enableLoadManualEntryButton: boolean;
  private enableManualEntryRelatedButtons: boolean;


  @Output() productChangeEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() formChangeEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() manualEntryLoadEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() saveResponseEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() platformValuesChangeEvent: EventEmitter<PlatformValues> = new EventEmitter<PlatformValues>();

  constructor(private settingsService: SettingsService) {
  }

  ngOnInit() {
    this.loadAllProducts();
  }

  public loadAllProducts() {
    this.settingsService.listProducts().subscribe(resp => {
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
    this.settingsService.listForms(this.productSelected).subscribe(resp => {
      this.forms = resp.json();
      this.productChangeEvent.emit(this.productSelected);
    });
  }

  formChange() {
    this.formSelected;
    // this.destroyManualEntryModule();
    this.settingsService.getPlatformValues(this.formSelected, this.examineeId).subscribe(map => {
      this.platformValue = map.json();
      this.formChangeEvent.emit(this.formSelected);
      /**
       * Pushes platformValues to listener.
       */
      this.platformValuesChangeEvent.emit(this.platformValue);
      this.manageEnableButtons(true);
    });

    console.log("selected form value : " + this.formSelected);
  }

  private loadManualEntryForm() {
    this.manualEntryLoadEvent.emit(true);
    this.enableManualEntryRelatedButtons = true;

  }

  private sendSaveResponseEvent() {
    this.saveResponseEvent.emit(true);
  }

  private manageEnableButtons(flag: boolean) {
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
