import {NgModule} from "@angular/core";
import {LoginComponent} from "./login.component";
import {LoginRoutingModule} from "./login-routing.module";
import {LoginService} from "./login.service";
import {CoreModule} from "../core/core.module"
import {CommonModule} from "@angular/common"
import {FormsModule} from "@angular/forms"


@NgModule({
  declarations: [LoginComponent],
  imports: [CoreModule, CommonModule, LoginRoutingModule, FormsModule],
  exports: [],
  providers: [LoginService]
})
export class LoginModule {

}
