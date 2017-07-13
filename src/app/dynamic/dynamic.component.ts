import { Component, OnInit, ViewChild, ViewContainerRef, ComponentRef} from '@angular/core';
import {AfterViewInit, OnChanges, OnDestroy, SimpleChange, ComponentFactory} from '@angular/core';
import {DynamicService, IDynamicComponent} from './dynamic.service';

@Component({
  selector: 'dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements AfterViewInit, OnChanges, OnDestroy, OnInit {

  @ViewChild("itemEntry", { read: ViewContainerRef })
  private vcr:ViewContainerRef;

  protected componentRef: ComponentRef<any>;

  protected entityObj = {
    name: "Prasad",
    car : "Toyota"
  }

  private jsUrls:string[] = [
    "http://localhost:9001/bundle/itementry/lib/js/dojo"
  ]

  private cssUrls:string[] = [
    "http://localhost:9001/bundle/itementry/lib/css/dojo",
    "http://localhost:9001/bundle/itementry/lib/css/tundra"
  ]

  private manualEntry:string = null;

  // until ngAfterViewInit, we cannot start (firstly) to process dynamic stuff
    protected wasViewInitialized = false;
  constructor(private dynamicService:DynamicService) {

  }

  applyDynamic(html:string) {

    // let template = this.createTemplate(html);
    // console.log("Template :" + template);
    let componet = this.dynamicService.createComponentModule(html).
    then((factory:ComponentFactory<IDynamicComponent>) => {
      console.log("Factory :" + factory);
      let componentRef = this.vcr.createComponent(factory);
      let comp = componentRef.instance;
      comp.entity = this.entityObj;
    })
  }

createTemplate(entity:any) {
  let str = "<ul>"
  str += `<li>${entity.name}</li>`;
  str += `<li>${entity.car}</li>`;
  str += `</ul>`;
  return str;
}
  ngOnInit() {
    //this.applyDynamic();

  }


ngAfterViewInit() {
  this.wasViewInitialized = true;


    // for (let url in this.jsUrls) {
    //     console.log(this.jsUrls[url])
    //
    //     this.includeJSScript(this.jsUrls[url]);
    // }
    //
    // for (let url in this.cssUrls) {
    //   console.log(this.cssUrls[url])
    //     this.includeCSSScript(this.cssUrls[url]);
    // }

//this.includepackJS();
this.dynamicService.fetchManualEntryJS().subscribe(resp => {
  this.includeJS(resp.text());
})

  this.dynamicService.fetchManualEntry().subscribe(resp => {
    console.log(resp);
      this.manualEntry = resp.text();
      this.applyDynamic(this.manualEntry);

      this.includeCSS();
  });

}

private includepackJS() {
  let node = document.createElement("script");
 node.src = "/assets/static/js/a4j/framework.pack.js";
  node.async = true;
  node.type = 'text/javascript';
  node.charset = 'utf-8';
  //node.innerHTML = jsScript;
  document.getElementsByTagName('head')[0].appendChild(node);
console.log(document.getElementsByTagName('head')[0]);
}

private includeJS(jsScript:string) {
  let node = document.createElement("script");
 //node.src = "http://localhost:9001/bundle/itementry/js/BASC-3";
  node.async = true;
  node.type = 'text/javascript';
  node.charset = 'utf-8';
  node.innerHTML = jsScript;
  document.getElementsByTagName('head')[0].appendChild(node);
console.log(document.getElementsByTagName('head')[0]);
}

private includeCSS() {
  let node = document.createElement("link");
  node.href = "http://localhost:9001/bundle/itementry/css/BASC-3";
  node.type = 'text/css';
  node.rel = 'stylesheet';
  document.getElementsByTagName('head')[0].appendChild(node);

}

private includeJSScript(scriptUrl:string) {
  let node = document.createElement("script");
  node.src = scriptUrl;
  node.async = true;
  node.type = 'text/javascript';
  node.charset = 'utf-8';
  document.getElementsByTagName('head')[0].appendChild(node);
}

private includeCSSScript(cssUrl:string) {
  let node = document.createElement("link");
  node.href = cssUrl;
  node.type = 'text/css';
  node.rel = 'stylesheet';
  document.getElementsByTagName('head')[0].appendChild(node);
}

public ngOnChanges(changes: {[key: string]: SimpleChange}): void
{
    if (this.wasViewInitialized) {
        return;
    }
    this.applyDynamic(this.manualEntry);
}

ngOnDestroy() {
  if (this.componentRef) {
    this.componentRef.destroy();
  }
  this.componentRef = null;
}
}
