import {NgModule} from '@angular/core';
import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdInputModule,
  MdMenuModule,
  MdSelectModule,
  MdSlideToggleModule,
  MdTabsModule,
  MdToolbarModule
} from '@angular/material';


@NgModule({
  imports: [MdCardModule, MdMenuModule, MdTabsModule, MdButtonModule, MdCheckboxModule, MdInputModule, MdSelectModule, MdSlideToggleModule, MdToolbarModule],
  exports: [MdCardModule, MdMenuModule, MdTabsModule, MdButtonModule, MdCheckboxModule, MdInputModule, MdSelectModule, MdSlideToggleModule, MdToolbarModule],
})
export class CoreModule {
}
