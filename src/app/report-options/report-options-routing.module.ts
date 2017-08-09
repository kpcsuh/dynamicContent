import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ReportOptionsComponent} from "./report-options.component";


const routes: Routes = [
  {path: "",
  component: ReportOptionsComponent}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportOptionsRoutingModule {

}
