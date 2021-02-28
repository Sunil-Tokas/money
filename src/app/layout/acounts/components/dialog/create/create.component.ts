import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GenericService } from 'src/app/layout/shared/service/generic.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;
  errMsg: string = '';
  accountTypes = [
    'checking', 'savings', 'creditCard', 'cash', 'lineOfCredit', 'otherAsset', 'otherLiability', 'mortgage', 'carLoan', 'studentLoan', 'personalLoan', 'consumerLoan', 'medicalDebt', 'otherDebt'
  ]
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: GenericService
  ) { }

  ngOnInit() {

    this.initForm();
  }

  initForm() {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      balance: ['', Validators.required]
    })
  }

  onSubmit() {


    const payload = { account : this.createForm.value };
    payload['bid'] = this.data['budgetId'];
    this.service.createAcount(payload).subscribe(
      res => {
        if (res && res['data']) {
          this.dialogRef.close(true);
        }
      },
      error => {
        this.errMsg = error && error['error']['details'] ? error['error']['details'] : '';
      }
    )

  }



}
