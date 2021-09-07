import {Injectable} from "@angular/core";
import {Actions, ofActionDispatched} from "@ngxs/store";
import {NavController} from "@ionic/angular";
import {AuthGuardAction} from "./auth-guard.actions";
import {AuthGuardModel} from "./auth-guard.models";
import {appConfig} from "../../app.config";

@Injectable({ providedIn: 'root' })
export class AuthGuardHandler {
  constructor(private action$: Actions, private navController: NavController){
    this.action$.pipe(ofActionDispatched(AuthGuardAction.Login, AuthGuardAction.Logout)).subscribe((auth: AuthGuardModel) => {
      if(auth.isAuth){
        this.navController.navigateRoot(appConfig.routes.home.home);
        return;
      }
      this.navController.navigateRoot(appConfig.routes.auth.login);
    });
  }
}
