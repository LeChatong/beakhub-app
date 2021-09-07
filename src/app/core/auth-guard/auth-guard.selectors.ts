import { createSelector } from '@ngxs/store';
import {AuthGuardState} from "./auth-guard.state";
import {AuthGuardModel} from "./auth-guard.models";

export const selectIsAuth = () => createSelector([AuthGuardState], (state: AuthGuardModel) => state.isAuth);
export const selectAuthToken = () => createSelector([AuthGuardState], (state: AuthGuardModel) => state.accessToken);
