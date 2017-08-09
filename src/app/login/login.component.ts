import {Component, OnInit} from '@angular/core';
import {LoginService} from './login.service';
import {Router} from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;
  public errorMessage: string;

  constructor(private loginService: LoginService, private router: Router) {

  }

  ngOnInit() {

  }

  login() {

    const valid = this.loginService.validateCredentials(this.username, this.password);
    if (valid) {
      this.router.navigate(['home']);
    } else {
      this.errorMessage = 'Invalid username and password';
    }


  }
}
