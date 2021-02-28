import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/app/layout/shared/service/generic.service';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss']
})
export class BudgetListComponent implements OnInit {

  budgetList:Array<any> = [];
  errMsg:string = '';

  constructor(
    private service: GenericService
  ) { }

  ngOnInit() {
    this.getBudgetList();
  }


  getBudgetList() {

    this.service.getBudgetList().subscribe(
      res => {
        if(res && res['data'] && res['data']['budgets']) {
          this.budgetList = res['data']['budgets'];
          this.service.setToLocalStorage(res['data']['budgets'][0]['id']);
        }
      },
      error => {
        this.errMsg = error['error']['details'];
      }
    )
  }
}
