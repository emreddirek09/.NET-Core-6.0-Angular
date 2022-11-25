import { Component, OnInit } from '@angular/core';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends BaseComponent implements OnInit{
 
   constructor(private alertify:AlertifyService,spinner: NgxSpinnerService){
    super(spinner);
   }
  ngOnInit(): void {  
 
    this.showSpinner(SpinnerType.BallSpinClockwiseFadeTotating)
    // alertify.success('Success message');
  }
  m(){
    this.alertify.message("Merhaba",{
      messageType:MessageType.Error,
      delay:5,
      position:Position.BottomLeft
    })
  }

  d(){ 
    this. alertify.dismiss();
  }
}
