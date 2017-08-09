import {NgModule} from "@angular/core";
import {ReportOptionsComponent} from "./report-options.component";
import {CoreModule} from "../core/core.module"
import {CommonModule} from "@angular/common"
import {FormsModule} from "@angular/forms";
import {ReportOptionsService} from "./report-options.service";
import {ReportOptionsRoutingModule} from "./report-options-routing.module"
import {OptionsViewModule} from "./options-view/options-view.module";


@NgModule({
  declarations: [ReportOptionsComponent],
  imports: [CoreModule, CommonModule, FormsModule, ReportOptionsRoutingModule, OptionsViewModule],
  exports: [ReportOptionsComponent],
  providers: [ReportOptionsService]
})
export class ReportOptionsModule {

}
