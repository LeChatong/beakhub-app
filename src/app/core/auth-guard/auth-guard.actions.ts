export namespace AuthGuardAction {
  export class Login {
    static readonly type = '[Login] User login';
    constructor(public userId: string, public isAuth: boolean = true){}
  }

  export class Logout {
    static readonly type = '[Logout] User logout';
    constructor(public isAuth: boolean = false){}
  }
}
