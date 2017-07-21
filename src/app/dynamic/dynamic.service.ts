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
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";


export interface IDynamicComponent {
    entity: any;
}


@Injectable()
export class DynamicService {
    constructor(@Inject(Compiler) protected compiler: Compiler, private http: Http) {

    }

    private factoryCache: {[templateKey: string]: ComponentFactory<IDynamicComponent>} = {};

    createComponentModule(template: string, css: string, js: string) {
        let factory = this.factoryCache[template];
        console.log("Factory loaded from cache" + factory);
        if (factory) {
            console.log("Factory loaded from cache");
            return new Promise((resolve) => {
                resolve(factory);
            })
        }

        let component = this.createComponent(template, css, js);
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


    private createComponent(html: string, css: string, js: string) {


        @Component({
            selector: 't1',
            host: {'class': 'tundra', "id": "container"},
            template: html,
            styles: [css],
        })
        class TemplateComponent implements IDynamicComponent {
            @Input() entity: any;

            ngOnInit() {
                this.appendJavaScript(js);
                this.appendJavaScript("dojo.parser.parse('container');onFormLoad();autoAdvance = 'yes';");
            }

            /*
             This method appends javascript to #container element/ component.
             */
            private appendJavaScript(script: string) {
                let node = document.createElement("script");
                node.innerHTML = script;
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

    public fetchManualEntry(): Observable<Response> {
        return this.http.get("http://localhost:9001/bundle/itementry/html/BASC-3");
    }

    public fetchManualEntryJS(): Observable<Response> {
        return this.http.get("http://localhost:9001/bundle/itementry/js/BASC-3");
    }

    public fetchManualEntryCSS(): Observable<Response> {
        return this.http.get("http://localhost:9001/bundle/itementry/css/BASC-3");
    }
}
