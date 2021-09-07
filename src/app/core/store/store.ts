import {AuthGuardState} from "../auth-guard/auth-guard.state";
import {NgxsModule, NgxsModuleOptions} from "@ngxs/store";
import {environment} from "../../../environments/environment";
import {NgxsStoragePluginModule} from "@ngxs/storage-plugin";
import {NgxsFormPluginModule} from "@ngxs/form-plugin";
import {NgxsRouterPluginModule} from "@ngxs/router-plugin";

const ngxsMainStates = [
  AuthGuardState
];

const ngxsStorageStates = [AuthGuardState];

const ngxsConfig: NgxsModuleOptions = {
  developmentMode: !environment.production,
  selectorOptions: {
    suppressErrors: false,
    injectContainerState: false,
  },
  compatibility: {
    strictContentSecurityPolicy: true,
  },
};

export const ngxsImports = [
  NgxsModule.forRoot(ngxsMainStates, ngxsConfig),
  NgxsStoragePluginModule.forRoot({
    key: ngxsStorageStates,
  }),
  // NgxsLoggerPluginModule.forRoot({ logger: console, collapsed: true, disabled: environment.production }),
  // NgxsReduxDevtoolsPluginModule.forRoot({ disabled: environment.production }),
  NgxsFormPluginModule.forRoot(),
  NgxsRouterPluginModule.forRoot(),
];
