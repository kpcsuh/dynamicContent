import {Component, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {ReportOptionsService} from "./report-options.service";
import {OptionsViewComponent} from "./options-view/options-view.component";
import {ReportOptionsResponse} from "./dto/report-options-response";


@Component({
  selector: "report-options",
  templateUrl: "./report-options.component.html",
  styleUrls: ["./report-options.component.css"]
})
export class ReportOptionsComponent implements OnInit, OnDestroy {
  private selectedProduct: string;
  private selectedForm: string;
  private selectedReport: string;
  private products: string[];
  private forms: string[];
  private reports: string[];
  private showActions: boolean;
  private examineeIdString: string = "1234";

  @ViewChild(OptionsViewComponent)
  private viewComponent: OptionsViewComponent;


  constructor(private reportOptionsService: ReportOptionsService) {

  }

  ngOnInit() {
    this.listAllProducts();
  }

  private listAllProducts() {
    this.reportOptionsService.listProducts().subscribe(resp => {
      this.products = resp.json();
    })
  }

  private productChange() {
    console.log("Selected product : " + this.selectedProduct);
    this.clearForms();
    this.reportOptionsService.listForms(this.selectedProduct).subscribe(resp => {
      this.forms = resp.json();
    })
  }


  private formChange() {
    this.clearReports();
    this.reportOptionsService.listReports(this.selectedProduct, this.selectedForm).subscribe(resp => {
      this.reports = resp.json();
    });

  }

  private reportChange() {
    console.log('Selected Report :' + this.selectedReport);
    this.viewComponent.destroyComponent();
    this.buildReportOptionsModule();
  }

  private buildReportOptionsModule() {
    this.reportOptionsService.getOptionsHTML(this.selectedProduct, this.selectedForm, this.selectedReport).subscribe(htmlResp => {
        this.reportOptionsService.getOptionsJS(this.selectedProduct, this.selectedForm, this.selectedReport).subscribe(jsResp => {

          this.reportOptionsService.getOptionsCSS(this.selectedProduct, this.selectedForm, this.selectedReport).subscribe(cssResp => {
            this.reportOptionsService.getOptionsResponses(this.examineeIdString, this.selectedReport).subscribe(optionsResp => {

              let reportOptionsResponse: ReportOptionsResponse = optionsResp.text() ? optionsResp.json() : null;
              let response = null;
              if (!!reportOptionsResponse) {
                response = reportOptionsResponse.response
              }
              this.viewComponent.createOptions(htmlResp.text(), jsResp.text(), cssResp.text(), response);
              this.showActions = true;
            })

          })

        })
      },
      (err) => {
        this.viewComponent.createOptions("<md-chip color=\"warn\" selected=\"true\">Report options are not found in bundle." +
          " You may get it from database. </md-chip>", "", "", "");
        this.showActions = false;
      });
  }

  private clearReports() {
    this.reports = [];
    this.selectedReport = null;
    this.viewComponent.destroyComponent();
    this.showActions = false;

  }

  private clearForms() {
    this.clearReports()
    this.forms = [];
    this.selectedForm = null;
  }

  ngOnDestroy() {
    this.viewComponent.ngOnDestroy();
  }


  private validateOptions() {
    document.getElementById('validationButtionHidden').click();
  }

  private saveOptionsJson() {
    document.getElementById("saveJsonButton").click();
    let optionsResponses = (<HTMLInputElement>document.getElementById("reportOptionForm:reportOptionsJsonFormData")).value;
    var responses = {
      id: null,
      examineeId: this.examineeIdString,
      reportId: this.selectedReport,
      response: optionsResponses
    }
    this.reportOptionsService.saveOptionsResponses(responses).subscribe(resp => {
      console.log("Saved Response :");
      console.log(resp.json());
    });
    console.log("saveOptionsJson" + optionsResponses);
  }

  private loadOptions() {
    this.reportOptionsService.getOptionsResponses(this.examineeIdString, this.selectedReport).subscribe(resp => {

      let reportOptionsResponse: ReportOptionsResponse = resp.text() ? resp.json() : null;
      console.log("reportOptionsResponse :" + reportOptionsResponse);
      if (!!reportOptionsResponse) {
        (<HTMLInputElement>document.getElementById("reportOptionForm:reportOptionsJsonFormData")).value =
          reportOptionsResponse.response;
        document.getElementById("loadResponsesButton").click();
      }

    });

  }

}
