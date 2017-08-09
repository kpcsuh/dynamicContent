import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import {environment} from "../../../environments/environment"
@Injectable()
export class SettingsService {

  private apiHostName: string;
  constructor(private http: Http) {
    this.apiHostName = environment.apiHostName;
  }



  public listProducts(): Observable<Response> {
    return this.http.get(`${this.apiHostName}/bundle/product/all`);
  }

  public listForms(productId: string): Observable<Response> {
    return this.http.get(`${this.apiHostName}/bundle/product/forms/${productId}`);
  }

  public getPlatformValues(formId: string, examineeId: string): Observable<Response> {
    return this.http.get(`${this.apiHostName}/bundle/assessment/data/values/{formId}/{examineeId}`)
  }
}
