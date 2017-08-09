import {
  AfterViewInit,
  Compiler,
  Component,
  ComponentFactory,
  Inject,
  Injectable,
  Input,
  ModuleWithComponentFactories,
  NgModule
} from "@angular/core";
import {Headers, Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import {environment} from "../../environments/environment"

export interface IDynamicComponent {
  entity: any;
}


@Injectable()
export class ManualEntryService {
  private apiHostName: string;

  constructor(@Inject(Compiler) protected compiler: Compiler, private http: Http) {
    this.apiHostName = environment.apiHostName;
  }


  private factoryCache: { [templateKey: string]: ComponentFactory<IDynamicComponent> } = {};

  createComponentModule(template: string, css: string, js: string, responses: string, settings: string) {
    /**
     * We should not load cached factory for manual entry. It won't run some required functions. So commenting below
     * factory loading from cache.
     * @type {ComponentFactory<IDynamicComponent>}
     */
      // let factory = this.factoryCache[template];
      // console.log("Factory loaded from cache" + factory);
      // if (factory) {
      //   console.log("Factory loaded from cache");
      //   return new Promise((resolve) => {
      //     resolve(factory);
      //   })
      // }

    let component = this.createComponent(template, css, js, responses, settings);
    let module = this.createModule(component);

    return new Promise((resolve) => {
      this.compiler.compileModuleAndAllComponentsAsync(module)
        .then((moduleWithFactories: ModuleWithComponentFactories<any>) => {
          console.log("Module with Components");
          let factory = moduleWithFactories.componentFactories.find((x: any) => x.selector === 't1');
          /**
           * See above comment about factory loading from cache.
           * @type {ComponentFactory<any>}
           */
          this.factoryCache[template] = factory;
          resolve(factory);

        });
    });
  }


  private createComponent(html: string, css: string, js: string, responses: string, settings: string) {


    @Component({
      selector: 't1',
      host: {'class': 'tundra', "id": "container"},
      template: html,
      styles: [css],
    })
    class TemplateComponent implements IDynamicComponent, AfterViewInit {
      @Input() entity: any;

      constructor(private http: Http) {
      }

      ngOnInit() {

      }

      ngAfterViewInit() {
        this.appendJavaScript(js);
        this.createItemResponseElement(responses);
        this.createSaveButtonDivElement();
        this.createDisableDivElement();
        /*Reads javascript from file  innerComponetJs.js abd appends it*/
        this.http.get("assets/local/innerComponetJs.js").subscribe(map => {
          this.appendJavaScript(map.text());
          this.appendJavaScript(settings);
        });
      }

      /*
       This method appends javascript to #container element/ component.
       */
      private appendJavaScript(script: string) {
        let node = document.createElement("script");
        node.innerHTML = script;
        document.getElementById('container').appendChild(node);
      }

      private createItemResponseElement(value: string) {
        let node = document.createElement("input");
        node.id = "manualEntry:itemResponses";
        node.value = value;
        node.type = "hidden";
        document.getElementById('container').appendChild(node);
      }

      private createSaveButtonDivElement() {
        let node = document.createElement("div");
        node.style.display = "none";
        node.innerHTML = "<button id ='buttonItemResponseButton' name = 'buttonItemResponseButton' onclick='saveToJson();'> Save To Json </button>"

        document.getElementById('container').appendChild(node);
      }

      private createDisableDivElement() {
        let node = document.createElement("div");
        node.style.display = "none";
        node.innerHTML = "<button id ='buttonDisableButton' name = 'buttonDisableButton' onclick='disableItemEntries(true);'> Disable </button>" + "" +
          "<button id ='buttonEnableButton' name = 'buttonEnableButton' onclick='disableItemEntries(false);'> Disable </button>";

        document.getElementById('container').appendChild(node);


      }
    }

    return TemplateComponent;
  }

  private createModule(componentType: any) {
    @NgModule({
      declarations: [componentType]
    })
    class RuntimeModule {

    }

    return RuntimeModule;
  }

  public fetchManualEntry(productCode: string, formName: string): Observable<Response> {
    return this.http.get(`${this.apiHostName}/bundle/product/manualentry/html/${productCode}/${formName}`);
  }

  public fetchManualEntryJS(productCode: string, formName: string): Observable<Response> {
    return this.http.get(`${this.apiHostName}/bundle/product/manualentry/js/${productCode}/${formName}`);
  }

  public fetchManualEntryCSS(productCode: string, formName: string): Observable<Response> {
    return this.http.get(`${this.apiHostName}/bundle/product/manualentry/css/${productCode}/${formName}`);
  }

  public fetchManualEntryResponse(productCode: string, examineeId: string): Observable<Response> {
    return this.http.get(`${this.apiHostName}/bundle/product/item-responses/${productCode}/${examineeId}`);
  }

  public saveResponses(response: any): Observable<Response> {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.put(`${this.apiHostName}/bundle/product/item-responses/save`,
      JSON.stringify(response), {headers: headers});
  }


}
