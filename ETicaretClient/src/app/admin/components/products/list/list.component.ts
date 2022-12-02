import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { List_Product } from 'src/app/constracts/List_Product';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';
declare var $: any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends BaseComponent implements OnInit {
  constructor(spinner: NgxSpinnerService, private productService: ProductService, private alertyService: AlertifyService) {
    super(spinner)
  }

  displayedColumns: string[] = ['Name', 'Stock', 'Price', 'CreateDate', 'UpdateDate', 'Edit', 'Delete'];
  dataSource: MatTableDataSource<List_Product> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  async getProducts() {
    this.showSpinner(SpinnerType.BallScaleMultiple);
    const allProduct: {totalCount: number, products: List_Product[]} = await this.productService.read(this.paginator ? this.paginator.pageIndex : 0,
      this.paginator ? this.paginator.pageSize : 5, (() => this.hideSpinner(SpinnerType.BallScaleMultiple)), errorMessage => this.alertyService.message(errorMessage, {
        dismissOthers: true,
        messageType: MessageType.Error,
        position: Position.Topceter
      }))

 
    console.log(  allProduct)
    this.dataSource = new MatTableDataSource<List_Product>(allProduct.products); 
   
    this.paginator.length = allProduct.totalCount;
   

  }

  async ngOnInit() {
    await this.getProducts();
  }

  async pageChanged() {
    await this.getProducts();
  }
  
}

