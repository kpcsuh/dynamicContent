import {NgModule} from "@angular/core";
import {SettingsComponent} from "./settings.component";
import {SettingsService} from "./settings.service";
import {CoreModule} from "../../core/core.module"
import {CommonModule} from "@angular/common"
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [SettingsComponent],
  imports: [CommonModule, CoreModule, FormsModule],
  exports: [SettingsComponent],
  providers: [SettingsService]
})
export class SettingsModule {

}
