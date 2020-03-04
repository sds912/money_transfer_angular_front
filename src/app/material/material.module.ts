import { NgModule } from '@angular/core';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule, } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {  MatCardModule } from '@angular/material/card';
import {  MatToolbarModule } from '@angular/material/toolbar';
import {  MatTabsModule } from '@angular/material/tabs';
import {  MatButtonModule } from '@angular/material/button';
import {  MatGridListModule } from '@angular/material/grid-list';
import {  MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule, MatProgressSpinnerModule, MatSlideToggleModule, MatTreeModule, MatPaginatorModule } from '@angular/material';


@NgModule({
  imports: [
    MatGridListModule,
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatIconModule,
    MatTooltipModule,
    MatTableModule,
    MatDialogModule,
    MatTreeModule,
    MatPaginatorModule
  ],
  exports: [

    MatGridListModule,
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatIconModule,
    MatTooltipModule,
    MatTableModule,
    MatDialogModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatTreeModule,
    MatPaginatorModule

  ],
  providers: [
    MatIconRegistry
  ]
})

export class MaterialModule {}
