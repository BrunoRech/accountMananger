import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ContaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContaProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ContaProvider Provider');
  }

  public getContas(){
    return this.http.get("");
  }

}
