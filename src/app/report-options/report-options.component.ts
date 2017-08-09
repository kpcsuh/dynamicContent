import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ReportOptionsService} from './report-options.service';
import {OptionsViewComponent} from './options-view/options-view.component';
import {ReportOptionsResponse} from './dto/report-options-response';


@Component({
  selector: 'report-options',
  templateUrl: './report-options.component.html',
  styleUrls: ['./report-options.component.css']
})
export class ReportOptionsComponent implements OnInit, OnDestroy {
  public selectedProduct: string;
  public selectedForm: string;
  public selectedReport: string;
  public products: string[];
  public forms: string[];
  public reports: string[];
  public showActions: boolean;
  private examineeIdString = '1234';

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
    });
  }

  public productChange() {
    console.log('Selected product : ' + this.selectedProduct);
    this.clearForms();
    this.reportOptionsService.listForms(this.selectedProduct).subscribe(resp => {
      this.forms = resp.json();
    });
  }


  public formChange() {
    this.clearReports();
    this.reportOptionsService.listReports(this.selectedProduct, this.selectedForm).subscribe(resp => {
      this.reports = resp.json();
    });

  }

  public reportChange() {
    console.log('Selected Report :' + this.selectedReport);
    this.viewComponent.destroyComponent();
    this.buildReportOptionsModule();
  }

  private buildReportOptionsModule() {
    this.reportOptionsService.getOptionsHTML(this.selectedProduct, this.selectedForm, this.selectedReport).subscribe(htmlResp => {
        this.reportOptionsService.getOptionsJS(this.selectedProduct, this.selectedForm, this.selectedReport).subscribe(jsResp => {

          this.reportOptionsService.getOptionsCSS(this.selectedProduct, this.selectedForm, this.selectedReport).subscribe(cssResp => {
            this.reportOptionsService.getOptionsResponses(this.examineeIdString, this.selectedReport).subscribe(optionsResp => {

              const reportOptionsResponse: ReportOptionsResponse = optionsResp.text() ? optionsResp.json() : null;
              let response = null;
              if (!!reportOptionsResponse) {
                response = reportOptionsResponse.response;
              }
              this.viewComponent.createOptions(htmlResp.text(), jsResp.text(), cssResp.text(), response);
              this.showActions = true;
            });

          });

        });
      },
      (err) => {
        this.viewComponent.createOptions('<md-chip color=\"warn\" selected=\"true\">Report options are not found in bundle.' +
          ' You may get it from database. </md-chip>', '', '', '');
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
    this.clearReports();
    this.forms = [];
    this.selectedForm = null;
  }

  ngOnDestroy() {
    this.viewComponent.ngOnDestroy();
  }


  public validateOptions() {
    document.getElementById('validationButtionHidden').click();
  }

  public saveOptionsJson() {
    document.getElementById('saveJsonButton').click();
    const optionsResponses = (<HTMLInputElement>document.getElementById('reportOptionForm:reportOptionsJsonFormData')).value;
    const responses = {
      id: null,
      examineeId: this.examineeIdString,
      reportId: this.selectedReport,
      response: optionsResponses
    };
    this.reportOptionsService.saveOptionsResponses(responses).subscribe(resp => {
      console.log('Saved Response :');
      console.log(resp.json());
    });
    console.log('saveOptionsJson' + optionsResponses);
  }

  private loadOptions() {
    this.reportOptionsService.getOptionsResponses(this.examineeIdString, this.selectedReport).subscribe(resp => {

      const reportOptionsResponse: ReportOptionsResponse = resp.text() ? resp.json() : null;
      console.log('reportOptionsResponse :' + reportOptionsResponse);
      if (!!reportOptionsResponse) {
        (<HTMLInputElement>document.getElementById('reportOptionForm:reportOptionsJsonFormData')).value =
          reportOptionsResponse.response;
        document.getElementById('loadResponsesButton').click();
      }

    });

  }

}
