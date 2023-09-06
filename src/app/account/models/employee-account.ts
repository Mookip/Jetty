export interface Employee {
    firstName: string;
    lastName: string;
    age: number;
}

export interface EmployeeAddress {
    streetAddress: string,
    city: string,
}

export type EmployeeAccount = Employee & EmployeeAddress;