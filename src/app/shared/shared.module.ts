import {NgModule} from '@angular/core';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdSelectModule} from '@angular/material';
import {MdSlideToggleModule} from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MdInputModule, MdSelectModule, MdSlideToggleModule],
  exports: [MdButtonModule, MdCheckboxModule, MdInputModule, MdSelectModule, MdSlideToggleModule],
})
export class SharedModule { }
