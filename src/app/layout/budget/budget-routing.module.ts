import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  BudgetDetailComponent,
  BudgetListComponent
} from './components';




const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: BudgetListComponent },
      { path: 'detail', component: BudgetDetailComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetRoutingModule { }
