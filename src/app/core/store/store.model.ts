import {AuthGuardModel} from "../auth-guard/auth-guard.models";
import {RouterStateModel} from "@ngxs/router-plugin";

export interface AppStoreModel {
  auth: AuthGuardModel;
  router: RouterStateModel;
}

export interface AppStoreLoadingSatesModel {
  isLoading: boolean;
  isFailed: boolean;
  isSuccess: boolean;
  error: string;
}
