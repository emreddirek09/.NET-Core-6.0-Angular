import { HttpErrorResponse } from '@angular/common/http';
import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialagComponent, DeleteState } from 'src/app/dialogs/delete-dialag/delete-dialag.component';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { ProductService } from 'src/app/services/common/models/product.service';
declare var $: any;


@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor(private element: ElementRef, renderer: Renderer2,
    public dialog: MatDialog,
    private AlertifyService: AlertifyService,
    private httpClientService: HttpClientService
  ) {
    const img = renderer.createElement("img");
    img.setAttribute("src", "../../../../../assets/delete.png");
    renderer.appendChild(element.nativeElement, img);
  }

  @Input() id: string;
  @Input() controllerInput: string;
  @Output() callbackList: EventEmitter<any> = new EventEmitter();
  @HostListener("click")

  async onClick() {
    this.openDialog(async () => {
      const td: HTMLTableCellElement = this.element.nativeElement;
      this.httpClientService.delete({
        controller: this.controllerInput
      }, this.id).subscribe(data => {
        $(td.parentElement).fadeOut(2000, () => {
          this.callbackList.emit();
          this.AlertifyService.message("Ürün Başarıyla Silinmiştir.",{
            dismissOthers:true,
            messageType:MessageType.Success,
            position:Position.Bottomceter
          });
        },(errorResponse:HttpErrorResponse)=>{
          this.AlertifyService.message("Ürün Silinemedi. Teknik destek ile iletişime geçebilirsiniz.",{
            dismissOthers:true,
            messageType:MessageType.Error,
            position:Position.Bottomceter
          });
        });
      });
    });

  }

  openDialog(afterClosed: any): void {
    const dialogRef = this.dialog.open(DeleteDialagComponent, {
      width: '250px',
      data: DeleteState.Yes,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == DeleteState.Yes) {
        afterClosed();
      }
    });
  }
}
