import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";

@Injectable()
export class SettingsService {

  constructor(private http: Http) {

  }

  public listProducts(): Observable<Response> {
    return this.http.get(`http://localhost:9001/bundle/product/all`);
  }

  public listForms(productId: string): Observable<Response> {
    return this.http.get(`http://localhost:9001/bundle/product/forms/${productId}`);
  }

  public getPlatformValues(formId: string, examineeId: string): Observable<Response> {
    return this.http.get(`http://localhost:9001/bundle/assessment/data/values/{formId}/{examineeId}`)
  }
}
