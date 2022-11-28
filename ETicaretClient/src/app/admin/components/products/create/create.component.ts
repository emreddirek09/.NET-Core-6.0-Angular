import { Component,OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { CreateProduct } from 'src/app/constracts/create-product';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent extends BaseComponent implements OnInit {
  constructor(spiner:NgxSpinnerService, private productService:ProductService,private alertify:AlertifyService){
    super(spiner);
  }

  ngOnInit(): void {  }

  create(Name:HTMLInputElement,Stock:HTMLInputElement,Price:HTMLInputElement){
  
    this.showSpinner(SpinnerType.BallSpinClockwiseFadeTotating);
    const create_product:CreateProduct=new CreateProduct();
    create_product.name= Name.value;
    create_product.stock=parseInt(Stock.value);
    create_product.price=parseFloat(Price.value);

    this.productService.create(create_product,()=>{
      this.hideSpinner(SpinnerType.BallSpinClockwiseFadeTotating);
      this.alertify.message("Ürün eklendi.",{
        dismissOthers:true,
        messageType:MessageType.Success,
        position:Position.TopRight
      })
    });
  }
}
