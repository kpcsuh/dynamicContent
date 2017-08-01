import { NgModule } from "@angular/core";
import { DynamicComponent } from "./dynamic.component";
import { DynamicService } from "./dynamic.service";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import {SharedModule} from '../shared/shared.module';
import {SettingsComponent} from './settings/settings.component';


@NgModule({
    declarations: [DynamicComponent, SettingsComponent],
    imports: [BrowserModule,
        FormsModule, SharedModule],
    exports: [DynamicComponent, SharedModule, SettingsComponent]
})

export class DynamicModule {

    static forRoot() {
        return {
            ngModule: DynamicModule,
            providers: [DynamicService]
        }
    }

}
