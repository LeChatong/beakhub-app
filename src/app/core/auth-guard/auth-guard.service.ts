import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {Store} from "@ngxs/store";
import {NavController} from "@ionic/angular";
import {selectIsAuth} from "./auth-guard.selectors";
import {map} from "rxjs/operators";
import {appConfig} from "../../app.config";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class AuthGuardAfterLoginService implements CanActivate {
  constructor(private store: Store, private navController: NavController){}

  canActivate(): Observable<boolean> {
    return this.store.select(selectIsAuth()).pipe(
      map((isAuth: boolean) => {
        if(isAuth){
          return true;
        }
        this.navController.navigateRoot(appConfig.routes.auth.login);
        return false;
      }),
    );
  }

}

@Injectable({
  providedIn: 'root'
})
export class AuthGuardBeforeLoginService implements CanActivate {
  constructor(private store: Store, private navController: NavController){}

  canActivate(): Observable<boolean> {
    return this.store.select(selectIsAuth()).pipe(
      map((isAuth: boolean) => {
        if(isAuth){
          this.navController.navigateRoot(appConfig.routes.home.home);
          return false;
        }
        return true;
      }),
    );
  }

}
