import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ApiUrl } from 'src/app/layout/shared/constant/apiurl.constant';
import { GenericService } from 'src/app/layout/shared/service/generic.service';
import { CreateComponent } from '../dialog/create/create.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  acountList: Array<any> = [];
  errMsg: string = '';
  budgetid: string = this.service.getToLocalStorage();
  constructor(
    private service: GenericService,
    private dialog: MatDialog,
    private apiUrl: ApiUrl
  ) {
  }

  ngOnInit() {
    if(this.budgetid) {
      this.getAcountList();
    }
  }


  getAcountList() {
    this.service.getAcountList(this.budgetid).subscribe(
      res => {
        if (res && res['data'] && res['data']['budget']) {
          this.acountList = res['data']['budget'];
        }
      },
      error => {
        this.errMsg = error['error']['details'];
      }
    )
  }

  createAcount() {
    this.dialog.open(CreateComponent, {
      width: '300px',
      disableClose: true,
      data: { budgetId: this.budgetid }
    }).afterClosed().subscribe(
      res => {
        if (res) {
          this.getAcountList();
        }
      }
    )
  }

}
