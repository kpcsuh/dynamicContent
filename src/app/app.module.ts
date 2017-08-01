import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { DynamicModule } from "./dynamic/dynamic.module";
import { AppComponent } from "./app.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule, Title } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import 'hammerjs';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        HttpModule,
        FormsModule,
        DynamicModule.forRoot(),
        BrowserModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
