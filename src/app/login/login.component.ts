import {Component, OnInit} from "@angular/core";
import {LoginService} from "./login.service";
import {Router} from "@angular/router"


@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  private username: string;
  private password: string;
  private errorMessage: string;

  constructor(private loginService: LoginService, private router: Router) {

  }

  ngOnInit() {

  }

  login() {

    let valid = this.loginService.validateCredentials(this.username, this.password);
    if (valid) {
      this.router.navigate(["home"]);
    } else {
      this.errorMessage = "Invalid username and password";
    }


  }
}
