import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GenericService } from 'src/app/layout/shared/service/generic.service';

@Component({
  selector: 'app-budget-detail',
  templateUrl: './budget-detail.component.html',
  styleUrls: ['./budget-detail.component.scss']
})
export class BudgetDetailComponent implements OnInit {

  budgetDetail: Array<any> = [];
  errMsg: string = '';

  constructor(
    private service: GenericService,
    private activatedRoute: ActivatedRoute
  ) { 
    this.activatedRoute.queryParams.subscribe((param: Params) => {
      if(param['bid']){
        this.getBudgetDetails(param['bid']);
      }
    })
  }

  ngOnInit() {
   
  }


  getBudgetDetails(bid) {

    this.service.getBudgetDetail(bid).subscribe(
      res => {
        if (res && res['data'] && res['data']['budget']) {
          this.budgetDetail = res['data']['budget'];
        }
      },
      error => {
        this.errMsg = error['error']['details'];
      }
    )
  }
}
