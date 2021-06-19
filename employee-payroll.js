//UC11 Employee payroll class
class employeePayroll {
    id;
    name;
    salary;
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    get name() {return this._name;}
    set name(name) {this._name = name;}
    toString() {
        return "id = "+ this.id +", name = "+this.name+", salary = "+this.salary;
    }
}
const employeePayrolldata = new EmployeePayrollData(1, "Mark", 30000);
console.log("Payroll Data: "+ employeePayrolldata.toString());
employeePayrolldata.name = "James";
console.log("After Replacement: "+ employeePayrolldata.toString());
