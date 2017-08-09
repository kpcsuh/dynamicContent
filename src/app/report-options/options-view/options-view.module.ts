import {NgModule} from "@angular/core"
import {OptionsViewComponent} from "./options-view.component";
import {OptionsViewService} from "./options-view.service";

@NgModule({
  declarations: [OptionsViewComponent],
  imports: [],
  exports: [OptionsViewComponent],
  providers: [OptionsViewService]
})
export class OptionsViewModule {

}
