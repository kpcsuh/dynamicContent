import { NgModule } from "@angular/core";
import { DynamicComponent } from "./dynamic.component";
import { DynamicService } from "./dynamic.service";


@NgModule({
    declarations: [DynamicComponent],
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
