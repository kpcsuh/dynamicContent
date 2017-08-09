import {
  Component, AfterViewInit, AfterViewChecked, OnChanges, OnDestroy, OnInit, ViewChild, ViewContainerRef,
  SimpleChanges, ComponentFactory
} from '@angular/core';
import {OptionsViewService} from './options-view.service';
import {IDynamicComponent} from '../../manual-entry/manual-entry.service';

@Component({
  selector: 'options-view',
  templateUrl: './options-view.component.html',
  styleUrls: ['./options-view.component.css']
})
export class OptionsViewComponent implements AfterViewInit, AfterViewChecked, OnChanges, OnDestroy, OnInit{


  @ViewChild('ov', {read: ViewContainerRef})
  private viewContainerRef: ViewContainerRef;

  protected wasViewInitialized = false;



  ngOnDestroy(): void {
    this.destroyComponent();
  }




  constructor(private optionsViewService : OptionsViewService) {

  }

  public createOptions(html: string, js: string, css: string, response: string) {
    this.destroyComponent();
   this.optionsViewService.compileOptionsModule(html, js, css, response).then((factory: ComponentFactory<IDynamicComponent>) => {
     const componentRef = this.viewContainerRef.createComponent(factory);
     const component = componentRef.instance;
    });
  }



  ngOnInit() {

  }

  ngAfterViewInit() {
    this.wasViewInitialized = true;
  }

  ngAfterViewChecked() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.wasViewInitialized) {
      return;
    }
    this.destroyComponent();
  }



  public destroyComponent() {
    if (this.viewContainerRef) {
      this.viewContainerRef.clear();
    }
  }
}
