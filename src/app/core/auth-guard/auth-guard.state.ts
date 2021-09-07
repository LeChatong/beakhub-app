import {AuthGuardModel} from "./auth-guard.models";
import {Injectable} from "@angular/core";
import {AuthGuardAction} from "./auth-guard.actions";
import {Action, State, StateContext} from "@ngxs/store";

export const initialState: AuthGuardModel = {
  isAuth: false,
  accessToken: '',
  refreshToken: ''
};

@State<AuthGuardModel>({
  name: 'auth',
  defaults: initialState,
})
@Injectable()
export class AuthGuardState {
  @Action(AuthGuardAction.Login)
  login(context: StateContext<AuthGuardAction.Login>, action: AuthGuardAction.Login){
    const state = context.getState();
    context.setState({
      ...state,
      ...action,
    });
  }

  @Action(AuthGuardAction.Logout)
  logout(context: StateContext<AuthGuardAction.Logout>) {
    const state = context.getState();
    context.setState({
      ...state,
      isAuth: false,
    });
  }
}
