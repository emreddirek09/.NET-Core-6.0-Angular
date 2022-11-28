import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateProduct } from 'src/app/constracts/create-product';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService{
  

  constructor(private httpClientService: HttpClientService) { }

  create(product: CreateProduct, successCallBack?: any,  errorCallBack?: (errorMessage: string) => void){

    this.httpClientService.post({
      controller: "Products"
    }, product)
      .subscribe(result => {
        successCallBack();
      }, (errorReponse: HttpErrorResponse) => {
        const _error: Array<{ key: string, value: Array<string> }> = errorReponse.error;
        let message = "";

        _error.forEach((v, index) => {
          v.value.forEach((_v,_index)=>{
            message += `${_v}<br>`;
          });
        });
        errorCallBack(message);
      });
  }
}


 