import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { DynamicModule } from "./dynamic/dynamic.module";
import { AppComponent } from "./app.component";


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        HttpModule,
        DynamicModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
