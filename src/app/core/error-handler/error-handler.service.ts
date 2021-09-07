import {ErrorHandler, Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class ErrorHandlerService extends ErrorHandler {
  constructor(){
    super();
  }

  handleError(error: Error | HttpErrorResponse) {
    let displayMessage = 'An error occurred.';

    if(!environment.production){
      displayMessage += ' See console for details.';
      console.log(displayMessage);
    }

    super.handleError(error);
  }
}
