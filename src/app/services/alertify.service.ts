import { Injectable } from '@angular/core';
declare let alertify:any;

@Injectable({
  providedIn:'root'
})
export class AlertifyService {

  constructor() { }
  sucsess(message:string){
    alertify.success(message)
  }
  error(message:string){
    alertify.error(message)
  }

}
