import {APP_INITIALIZER, ErrorHandler, NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {AuthGuardHandler} from "./auth-guard/auth-guard.handler";
import {RouterStateSerializer} from "@ngxs/router-plugin";
import {CustomRouterStateSerializer} from "./router/router-serializer";
import {ErrorHandlerService} from "./error-handler/error-handler.service";
import { ngxsImports } from './store';

@NgModule({
  imports:[
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ...ngxsImports,
  ],
  declarations: [],
  providers: [
    { provide: ErrorHandler, useClass: ErrorHandlerService },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {},
      deps: [AuthGuardHandler],
      multi: true,
    },
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
  ],
  exports: [FormsModule]
})
export class CoreModule{
  constructor(){}
}
