import {Injectable} from '@angular/core';

@Injectable()
export class LoginService {
  constructor() {

  }

  public validateCredentials(username: string, password: string): boolean {
    return (username == "prasad" && password == "password") ? true : false;
  }
}
