import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router"
import {SelectivePreloadingStrategy} from "./SelectivePreloadingStrategy";

const routes: Routes = [
  {
    path: "login",
    loadChildren: "app/login/login.module#LoginModule"
  },
  {
    path: "manualentry",
    loadChildren: "app/manual-entry/manual-entry.module#ManualEntryModule"
  },

  {
    path: "home",
    loadChildren: "app/home/home.module#HomeModule"
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      enableTracing: true, // <-- debugging purposes only
      preloadingStrategy: SelectivePreloadingStrategy,

    })],
  exports: [RouterModule],

  providers: [
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule {

}
