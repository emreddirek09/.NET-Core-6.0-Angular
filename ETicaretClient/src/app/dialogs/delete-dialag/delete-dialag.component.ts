import { Component,Inject } from '@angular/core'; 
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialag',
  templateUrl: './delete-dialag.component.html',
  styleUrls: ['./delete-dialag.component.scss']
})
export class DeleteDialagComponent {
  constructor(
  public dialogRef : MatDialogRef<DeleteDialagComponent>,
  @Inject(MAT_DIALOG_DATA) public data: DeleteState,
) {}

close(): void {
  this.dialogRef.close();
}

}

export enum DeleteState
{
  Yes,No
}