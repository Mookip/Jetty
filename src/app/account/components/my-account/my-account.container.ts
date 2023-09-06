import { Component, OnDestroy } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { EmployeeAccount } from '../../models/employee-account';
import { Subject, combineLatest, takeUntil } from 'rxjs';

@Component({
  selector: 'app-my-account-container',
  templateUrl: './my-account.container.html'
})
export class MyAccountContainer implements OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();

  employeeAccount: EmployeeAccount;
  errors: boolean = false;

  constructor(
    private accountService: AccountService
  ) { }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  getEmployeeAccount(id: number) {
    combineLatest(this.accountService.getEmployee(id), this.accountService.getAddressByEmployeeId(id))
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        ([employee, address]) => {
          this.employeeAccount = { firstName: employee.firstName, lastName: employee.lastName, age: employee.age, streetAddress: address[0].streetAddress, city: address[0].city }
          this.errors = false;
        },
        () => {
          this.errors = true;
        }
      );
  }

}
