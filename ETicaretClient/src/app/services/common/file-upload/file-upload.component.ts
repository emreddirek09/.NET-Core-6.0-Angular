import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry } from 'ngx-file-drop';
import { AlertifyService, MessageType, Position } from '../../admin/alertify.service';
import { CustomeToastrService, ToastrPosition, ToastrServiceMessageTpe } from '../../ui/custome-toastr.service';
import { HttpClientService } from '../http-client.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {

  constructor(
    private httpClientService: HttpClientService,
    private alertifService: AlertifyService,
    private customToastService: CustomeToastrService
  ) { }

  public files: NgxFileDropEntry[];

  @Input() optionsFile: Partial<FileUploadOptions>;

  public selectedFiles(files: NgxFileDropEntry[]) {
    this.files = files;
    const messageSucces: string = "Dosyalar başarıyla yüklenmiştir.";
    const messageError: string = "Dosya yüklemede hata.";
    const fileData: FormData = new FormData();
    for (const file of files) {
      const fileEntry = file.fileEntry as FileSystemFileEntry;
      fileEntry.file((_file: File) => {

        fileData.append(_file.name, _file, file.relativePath);


      });
    }
    this.httpClientService.post({

      controller: this.optionsFile.controller,
      action: this.optionsFile.action,
      queryString: this.optionsFile.queryString,
      headers: new HttpHeaders({"responseType": 'blob'})

    }, fileData).subscribe(data => {

      if (this.optionsFile.isAdminPage) {
        this.alertifService.message(messageSucces,
          {
            dismissOthers: true,
            messageType: MessageType.Success,
            position: Position.TopRight

          })
      }
      else {
        this.customToastService.message(messageSucces, "Başarılı", {
          messageType: ToastrServiceMessageTpe.Success,
          position: ToastrPosition.TopCenter
        });
      }
    }, (errorResponse: HttpErrorResponse) => {

      console.log(errorResponse);
      if (this.optionsFile.isAdminPage) {
        this.alertifService.message(messageError,
          {
            dismissOthers: true,
            messageType: MessageType.Error,
            position: Position.TopRight

          })
      }
      else {
        this.customToastService.message(messageError, "Başarısız", {
          messageType: ToastrServiceMessageTpe.Error,
          position: ToastrPosition.TopCenter
        });
      }
    });

  }
}

export class FileUploadOptions {
  controller?: string;
  action?: string;
  queryString?: string;
  explanation?: string;
  accept?: string;
  isAdminPage?: boolean = false;

}