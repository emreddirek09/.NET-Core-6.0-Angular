import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator'; 
import { DeleteDirective } from 'src/app/directives/admin/DeleteDirective';
import {MatDialogModule} from '@angular/material/dialog';
import { DeleteDialagComponent } from 'src/app/dialogs/delete-dialag/delete-dialag.component'; 
import { FileUploadModule } from 'src/app/services/common/file-upload/file-upload.module';
 


@NgModule({
    declarations: [
        ProductsComponent,
        CreateComponent,
        ListComponent,
        DeleteDirective,
        DeleteDialagComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: "", component: ProductsComponent }
        ]),
        MatSidenavModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
        FileUploadModule
    ]
})
export class ProductsModule { }
