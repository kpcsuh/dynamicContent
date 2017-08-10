import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser'
import 'hammerjs';
import {ManualEntryModule} from './manual-entry/manual-entry.module'
import {ReportOptionsModule} from './report-options/report-options.module'




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    ManualEntryModule,
    ReportOptionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
