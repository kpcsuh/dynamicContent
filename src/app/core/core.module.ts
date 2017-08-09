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
import {MdChipsModule} from '@angular/material';

@NgModule({
  imports: [MdChipsModule, MdCardModule, MdMenuModule, MdTabsModule, MdButtonModule, MdCheckboxModule, MdInputModule, MdSelectModule, MdSlideToggleModule, MdToolbarModule],
  exports: [MdChipsModule, MdCardModule, MdMenuModule, MdTabsModule, MdButtonModule, MdCheckboxModule, MdInputModule, MdSelectModule, MdSlideToggleModule, MdToolbarModule],
})
export class CoreModule {
}
