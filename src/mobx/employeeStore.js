import { makeAutoObservable } from "mobx";

class EmployeeStore {
  employees = [];

  constructor() {
    makeAutoObservable(this);
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  updateEmployee(employeeId, updatedData) {
    this.employees = this.employees.map((emp) =>
      emp.employeeid === employeeId ? { ...emp, ...updatedData } : emp
    );
  }

  deleteEmployee(employeeId) {
    this.employees = this.employees.filter(
      (emp) => emp.employeeid !== employeeId
    );
  }

  setEmployees(employees) {
    this.employees = employees;
  }
}

const employeeStore = new EmployeeStore();
export default employeeStore;
