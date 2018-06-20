import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule, MatCheckboxModule,
         MatProgressSpinnerModule, MatIconModule, MatDatepickerModule, MatNativeDateModule, MatGridListModule,
         MatDividerModule } from '@angular/material';

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
    MatDividerModule
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
    MatDividerModule
  ],
  declarations: []
})
export class MaterialModule { }
