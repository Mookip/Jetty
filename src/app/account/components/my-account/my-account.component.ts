import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmployeeAccount } from '../../models/employee-account';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.sass']
})
export class MyAccountComponent {

  @Input() employeeAccount: EmployeeAccount;
  @Input() errors: boolean;
  @Output() getAccountEvent = new EventEmitter<number>();

  constructor(private formBuilder: FormBuilder) { }

  form = this.formBuilder.group({
    id: null
  });

  getEmployeeAccount() {
    if (this.form.get('id').value) {
      this.getAccountEvent.emit(this.form.get('id').value as number);
    }
  }

}
