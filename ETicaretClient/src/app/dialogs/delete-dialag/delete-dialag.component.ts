import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BaseDialog } from '../base/base-dialog';

@Component({
  selector: 'app-delete-dialag',
  templateUrl: './delete-dialag.component.html',
  styleUrls: ['./delete-dialag.component.scss']
})
export class DeleteDialagComponent extends BaseDialog<DeleteDialagComponent> {
  constructor(
    dialogRef: MatDialogRef<DeleteDialagComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeleteState,
  ) {
    super(dialogRef);
  }

}

export enum DeleteState {
  Yes, No
}