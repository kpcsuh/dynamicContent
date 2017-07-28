import {
    Inject,
    Compiler,
    Injectable,
    Component,
    NgModule,
    Input,
    ModuleWithComponentFactories,
    ComponentFactory
} from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";


export interface IDynamicComponent {
    entity: any;
}


@Injectable()
export class DynamicService {
    constructor(@Inject(Compiler) protected compiler: Compiler, private http: Http) {

    }

    private factoryCache: {[templateKey: string]: ComponentFactory<IDynamicComponent>} = {};

    createComponentModule(template: string, css: string, js: string, responses: string, settings:string) {
        let factory = this.factoryCache[template];
        console.log("Factory loaded from cache" + factory);
        if (factory) {
            console.log("Factory loaded from cache");
            return new Promise((resolve) => {
                resolve(factory);
            })
        }

        let component = this.createComponent(template, css, js, responses, settings);
        let module = this.createModule(component);

        return new Promise((resolve) => {
            this.compiler.compileModuleAndAllComponentsAsync(module)
                .then((moduleWithFactories: ModuleWithComponentFactories<any>) => {
                    console.log("Module with Components");
                    let factory = moduleWithFactories.componentFactories.find((x: any) => x.selector === 't1');
                    this.factoryCache[template] = factory;
                    resolve(factory);

                });
        });
    }


    private createComponent(html: string, css: string, js: string, responses: string, settings:string) {


        @Component({
            selector: 't1',
            host: {'class': 'tundra', "id": "container"},
            template: html,
            styles: [css]
        })
        class TemplateComponent implements IDynamicComponent {
            @Input() entity: any;

            constructor(private http: Http) {
            }
            ngOnInit() {

                this.appendJavaScript(js);
                this.createItemResponseElement(responses);
                this.createSaveButtonDivElement();
                this.createDiableDivElement();
                /*Reads javascript from file  innerComponetJs.js abd appends it*/
                this.http.get("assets/local/innerComponetJs.js").subscribe(map => {
                    this.appendJavaScript(map.text());
                    this.appendJavaScript(settings);
                });


            }


            private appendJavaScriptToDiv(script: string) {
                let node = document.createElement("div");
                node.innerHTML = script;
                document.getElementById('container').appendChild(node);
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

            private createDiableDivElement() {
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

    // public fetchManualEntry(productCode: string): Observable<Response> {
    //     return this.http.get(`http://localhost:9001/bundle/itementry/html/${productCode}`);
    // }
    //
    // public fetchManualEntryJS(productCode: string): Observable<Response> {
    //     return this.http.get(`http://localhost:9001/bundle/itementry/js/${productCode}`);
    // }
    //
    // public fetchManualEntryCSS(productCode: string): Observable<Response> {
    //     return this.http.get(`http://localhost:9001/bundle/itementry/css/${productCode}`);
    // }


    public fetchManualEntry(productCode: string, formName:string): Observable<Response> {
        return this.http.get(`http://localhost:9001/bundle/product/manualentry/html/${productCode}/${formName}`);
    }

    public fetchManualEntryJS(productCode: string, formName:string): Observable<Response> {
        return this.http.get(`http://localhost:9001/bundle/product/manualentry/js/${productCode}/${formName}`);
    }

    public fetchManualEntryCSS(productCode: string, formName:string): Observable<Response> {
        return this.http.get(`http://localhost:9001/bundle/product/manualentry/css/${productCode}/${formName}`);
    }

    public fetchManualEntryResponse(productCode: string, examineeId: string): Observable<Response> {
        return this.http.get(`http://localhost:9001/bundle/product/item-responses/${productCode}/${examineeId}`);
    }

    public saveResponses(response: any): Observable<Response> {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        return this.http.put("http://localhost:9001/bundle/product/item-responses/save",
            JSON.stringify(response), {headers: headers});
    }


    public listProducts(): Observable<Response> {
        return this.http.get(`http://localhost:9001/bundle/product/all`);
    }

    public listForms(productId: string): Observable<Response> {
        return this.http.get(`http://localhost:9001/bundle/product/forms/${productId}`);
    }

    public getPlatformValues(formId:string, examineeId:string) : Observable<Response> {
        return this.http.get(`http://localhost:9001/bundle/assessment/data/values/{formId}/{examineeId}`)
    }


}
