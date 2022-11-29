import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateProduct } from 'src/app/constracts/create-product';
import { List_Product } from 'src/app/constracts/List_Product';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private httpClientService: HttpClientService) { }

  create(product: CreateProduct, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) {

    this.httpClientService.post({
      controller: "Products"
    }, product)
      .subscribe(result => {
        successCallBack();
      }, (errorReponse: HttpErrorResponse) => {
        const _error: Array<{ key: string, value: Array<string> }> = errorReponse.error;
        let message = "";

        _error.forEach((v, index) => {
          v.value.forEach((_v, _index) => {
            message += `${_v}<br>`;
          });
        });
        errorCallBack(message);
      });





  }

  async read(page:number=0,size:number=5, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void): 
  Promise<{totalCount:number,products:List_Product[]}> {
    const promisData: Promise<{
      totalCount:number,products:List_Product[]}> = this.httpClientService.get<{totalCount:number,products:List_Product[]}>({
      controller: "Products",
      // queryString:`page=${page}&size=${size}`

    }).toPromise();

    promisData.then(d => successCallBack()).catch((errorResponse: HttpErrorResponse) => errorCallBack(errorResponse.message))

    return await promisData;
  }


}


