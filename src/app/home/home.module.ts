import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component"
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms"
import {HomeRoutingModule} from "./home-routing.module"
import {CoreModule} from "../core/core.module"
import {ManualEntryModule} from "../manual-entry/manual-entry.module"


@NgModule({
  declarations: [HomeComponent],
  imports: [CoreModule, CommonModule, FormsModule, HomeRoutingModule, ManualEntryModule]
})
export class HomeModule {

}
