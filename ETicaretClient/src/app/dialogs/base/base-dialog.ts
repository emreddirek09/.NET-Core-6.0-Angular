import { MatDialogRef } from "@angular/material/dialog";

export class BaseDialog<DialagComponent>{


    constructor(
        public dialogRef: MatDialogRef<DialagComponent>
    ) { }

    close() {
        this.dialogRef.close();
    }
}

