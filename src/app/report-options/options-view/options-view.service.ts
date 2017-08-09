import {
  AfterViewInit,
  Compiler,
  Component,
  EventEmitter,
  Inject,
  Injectable,
  ModuleWithComponentFactories,
  NgModule
} from "@angular/core";
import {Http} from "@angular/http";
import {CoreModule} from "../../core/core.module";


@Injectable()
export class OptionsViewService {
  constructor(@Inject(Compiler) private compiler: Compiler, private http: Http) {

  }


  public createOptionsComponent(html: string, js: string, css: string, response: string) {
    @Component({
      selector: "optionsViewDynamic",
      host: {'class': 'tundra', 'id': 'optionsContainer', 'name': 'optionsContainer'},
      template: html,
      styles: [css]
    })
    class OptionsViewDynamicComponent implements AfterViewInit {
      private responsesEvent: EventEmitter<string> = new EventEmitter<string>();

      constructor(private http: Http) {

      }

      ngAfterViewInit() {
        this.addAllInputHiddenElesToContainer();
        this.appendJavaScript(js);
        this.createValidateDivElement();
        this.http.get("assets/local/report/reportOptions.js").subscribe(map => {
          this.appendJavaScript(map.text());
        });
        this.createSaveReponsesButton();
        this.createLoadResponsesButton();


      }

      private appendJavaScript(script: string) {
        if (!script) {
          return;
        }
        let node = document.createElement("script");
        node.innerHTML = script;
        document.getElementById('optionsContainer').appendChild(node);
      }

      private createValidateDivElement() {
        let node = document.createElement("div");
        node.style.display = "none";
        node.innerHTML = "<button id ='validationButtionHidden' name = 'validationButtionHidden' onclick='validateReportOptionsForm();'> Validate </button>"

        document.getElementById('optionsContainer').appendChild(node);
      }

      private createSaveReponsesButton() {
        let node = document.createElement("div");
        node.style.display = "none";
        node.innerHTML = "<button id ='saveJsonButton' name = 'saveJsonButton' onclick='fnConvertReportOptionsToJSON();'> Save </button>"

        document.getElementById('optionsContainer').appendChild(node);

      }

      private createLoadResponsesButton() {
        let node = document.createElement("div");
        node.style.display = "none";
        node.innerHTML = "<button id ='loadResponsesButton' name = 'loadResponsesButton' onclick='loadResponses();'> Load Responses </button>"

        document.getElementById('optionsContainer').appendChild(node);
      }


      private addAllInputHiddenElesToContainer() {
        let objs: any[] = [{id: "reportOptionForm:manualEntryJsonFormData", data: "{}"},
          {id: "reportOptionForm:reportOptionsJsonFormData", data: !!response ? response : "{}"},
          {id: "progressReportOptionForm:manualEntryJsonFormData", data: "{}"},
          {id: "progressReportOptionForm:progressReportOptionsJsonFormData", data: "{}"}];

        for (let obj of objs) {
          this.addInputHiddenElesToContainer(obj);
        }

      }

      private addInputHiddenElesToContainer(obj: any) {
        let node = document.createElement("input");
        node.type = "hidden";
        node.id = obj.id;
        node.value = obj.data;
        document.getElementById('optionsContainer').appendChild(node);
      }
    }


    return OptionsViewDynamicComponent;
  }

  public createOptionsModule(component: any) {
    @NgModule({
      declarations: [component],
      imports: [CoreModule]
    })
    class OptionsDynamicModule {

    }

    return OptionsDynamicModule;
  }

  public compileOptionsModule(html: string, js: string, css: string, response: string) {
    let component = this.createOptionsComponent(html, js, css, response);
    let module = this.createOptionsModule(component);

    return new Promise((resolve) => {
      this.compiler.compileModuleAndAllComponentsAsync(module).then((moduleWithFactories: ModuleWithComponentFactories<any>) => {
        let factory = moduleWithFactories.componentFactories.find((x: any) => x.selector === "optionsViewDynamic");
        resolve(factory);
      });

    })
  }


}
