import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule, MatCheckboxModule,
         MatProgressSpinnerModule, MatIconModule, MatDatepickerModule, MatNativeDateModule, MatGridListModule,
         MatDividerModule, MatSidenavModule, MatListModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule
  ],
  declarations: []
})
export class MaterialModule { }
