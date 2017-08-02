import {NgModule} from "@angular/core";
import {ManualEntryComponent} from "./manual-entry.component";
import {ManualEntryService} from "./manual-entry.service";
import {ManualEntryRoutingModule} from "./manual-entry-routing.module"
import {CoreModule} from "../core/core.module";
import {CommonModule} from "@angular/common"
import {SettingsModule} from "./settings/settings.module"
import {FormsModule} from "@angular/forms"


@NgModule({
  declarations: [ManualEntryComponent],
  imports: [ManualEntryRoutingModule, SettingsModule, CoreModule, CommonModule, FormsModule],
  exports: [ManualEntryComponent, CoreModule, CommonModule],
  providers: [ManualEntryService]
})

export class ManualEntryModule {

}
