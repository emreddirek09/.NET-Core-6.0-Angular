import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';



export class BaseComponent {
  constructor(private spinner: NgxSpinnerService) { }
  showSpinner(spinnerNameTyple: SpinnerType) {
    this.spinner.show(spinnerNameTyple);
    setTimeout(() => { 
      this.spinner.hide(spinnerNameTyple);
    }, 5000);
  }

  hideSpinner(spinnerNameTyple: SpinnerType){
    this.spinner.hide(spinnerNameTyple);
  }


}


export enum SpinnerType {
  BallAtom = "s1",
  BallScaleMultiple = "s2",
  BallSpinClockwiseFadeTotating = "s3"

}