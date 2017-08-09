import {Injectable} from "@angular/core";
import {Headers, Http, Response} from "@angular/http"
import {environment} from "../../environments/environment"
import {Observable} from "rxjs/Observable";


@Injectable()
export class ReportOptionsService {

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

  public listReports(productId: string, formName: string): Observable<Response> {
    return this.http.get(`${this.apiHostName}/bundle/product/reports/list/${productId}/${formName}`);
  }

  public getOptionsHTML(productId: string, formName: string, reportId: string): Observable<Response> {
    return this.http.get(`${this.apiHostName}/bundle/product/options/html/${productId}/${formName}/${reportId}`);
  }

  public getOptionsCSS(productId: string, formName: string, reportId: string): Observable<Response> {
    return this.http.get(`${this.apiHostName}/bundle/product/options/css/${productId}/${formName}/${reportId}`);
  }

  public getOptionsJS(productId: string, formName: string, reportId: string): Observable<Response> {
    return this.http.get(`${this.apiHostName}/bundle/product/options/js/${productId}/${formName}/${reportId}`);
  }

  public saveOptionsResponses(response: any): Observable<Response> {
    let headers = new Headers()
    headers.append("Content-Type", "application/json");
    return this.http.put(`${this.apiHostName}/bundle/product/options/responses/save`,
      JSON.stringify(response), {headers: headers})
  }

  public getOptionsResponses(examineeId: string, reportId: string) {
    return this.http.get(`${this.apiHostName}/bundle/product/options/responses/${examineeId}/${reportId}`);
  }

}
