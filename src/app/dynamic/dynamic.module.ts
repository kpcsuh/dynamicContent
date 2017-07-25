import { NgModule } from "@angular/core";
import { DynamicComponent } from "./dynamic.component";
import { DynamicService } from "./dynamic.service";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations: [DynamicComponent],
    imports: [BrowserModule,
        FormsModule],
    exports: [DynamicComponent]
})

export class DynamicModule {

    static forRoot() {
        return {
            ngModule: DynamicModule,
            providers: [DynamicService]
        }
    }

}
