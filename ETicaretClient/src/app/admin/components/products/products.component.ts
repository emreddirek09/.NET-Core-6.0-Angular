import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { HttpClientService } from 'src/app/services/common/http-client.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {
  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner);
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom);
    this.httpClientService.get({
      controller: "Products"
    }).subscribe(data => console.log(data));

    // this.httpClientService.post({
    //   controller: "products"
    // },
    //   {
    //     name: "Kalem",
    //     stock: 100,
    //     price: 15
    //   }).subscribe();

    // this.httpClientService.put({
    //   controller: "Products",
    // }, {
    //   id: "443f80fd-a655-401e-851a-baf64b01bdf1",
    //   name: "Kokulu silgi",
    //   stock: 1,
    //   price: 5.5
    // }).subscribe();

    // this.httpClientService.delete({
    //   controller:"Products",
    // },"d389584e-985f-48be-a78d-2ff2b785af7d").subscribe();

  }
}
