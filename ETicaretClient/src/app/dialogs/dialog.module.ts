import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteDialagComponent } from './delete-dialag/delete-dialag.component';
import { FileUploadComponent } from '../services/common/file-upload/file-upload.component';



@NgModule({
  declarations: [DeleteDialagComponent,
    FileUploadComponent],
  imports: [
    CommonModule,
    DialogModule
  ]
})
export class DialogModule { }
