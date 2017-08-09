import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PlatformValues} from '../platform/PlatformValues';
import {SettingsService} from './settings.service';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  public selectedValue: string;
  public productSelected: string;
  public formSelected: string;

  private examineeId = '1234';

  public platformValue: PlatformValues = new PlatformValues();
  public showSettings = false;
  public forms: string;
  public products;
  public enableLoadManualEntryButton: boolean;
  public enableManualEntryRelatedButtons: boolean;


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

  public validate() {
    document.getElementById('buttonDisableButton').click();
  }

  public enable() {
    document.getElementById('buttonEnableButton').click();
  }

  public productChange() {

    if (this.productSelected == 'Plese select') {
      return;
    }
    this.manageEnableButtons(false);
    //this.destroyManualEntryModule();
    this.settingsService.listForms(this.productSelected).subscribe(resp => {
      this.forms = resp.json();
      this.productChangeEvent.emit(this.productSelected);
    });
  }

  public formChange() {
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

    console.log('selected form value : ' + this.formSelected);
  }

  public loadManualEntryForm() {
    this.manualEntryLoadEvent.emit(true);
    this.enableManualEntryRelatedButtons = true;

  }

  public sendSaveResponseEvent() {
    this.saveResponseEvent.emit(true);
  }

  public manageEnableButtons(flag: boolean) {
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
