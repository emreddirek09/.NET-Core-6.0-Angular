import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialagComponent, DeleteState } from 'src/app/dialogs/delete-dialag/delete-dialag.component';
import { ProductService } from 'src/app/services/common/models/product.service';
declare var $: any;


@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor(private element: ElementRef, renderer: Renderer2,
    public dialog: MatDialog,
    private productService: ProductService
  ) {
    const img = renderer.createElement("img");
    img.setAttribute("src", "../../../../../assets/delete.png");
    renderer.appendChild(element.nativeElement, img);
  }

  @Input() id: string;
  @Output() callbackList: EventEmitter<any> = new EventEmitter();
  @HostListener("click")

  async onClick() {
    this.openDialog(async () => {
      const td: HTMLTableCellElement = this.element.nativeElement;
      await this.productService.delete(this.id);
      $(td.parentElement).fadeOut(2000, () => {
        this.callbackList.emit();
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
