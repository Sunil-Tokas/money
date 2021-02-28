import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetRoutingModule } from './budget-routing.module';
import {
  BudgetDetailComponent,
  BudgetListComponent
} from './components';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    BudgetListComponent,
    BudgetDetailComponent
  ],
  imports: [
    CommonModule,
    BudgetRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  providers:[
  ]
})
export class BudgetModule { }
