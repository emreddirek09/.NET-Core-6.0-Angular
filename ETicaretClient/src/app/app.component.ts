import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomeToastrService, ToastrPosition, ToastrServiceMessageTpe } from './services/ui/custome-toastr.service';
declare var $:any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ETicaret';
  constructor(private toastrService: CustomeToastrService){
    toastrService.message("Merhaba Dünya","Ben Emre"
    ,{messageType:ToastrServiceMessageTpe.Info,position:ToastrPosition.BottomLeft});
  }
}

// $(document).ready((alert("dsasds")))