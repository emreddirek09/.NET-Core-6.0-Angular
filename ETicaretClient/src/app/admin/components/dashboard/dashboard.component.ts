import { Component, OnInit } from '@angular/core';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
 
   constructor(private alertify:AlertifyService){}
  ngOnInit(): void {  
 
 
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
