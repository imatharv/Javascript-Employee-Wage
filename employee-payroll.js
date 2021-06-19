class EmployeePayrollData {
    id;
    name;
    salary;
    gender;
    startDate;

    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    get name() {return this._name;}
    set name(name) {this._name = name;}

    toString() {
        return "id = "+ this.id +", name = "+this.name+", salary = "+this.salary + ", gender = "+ this.gender +", startDate = "+this.startDate;
    }
}

const employeePayrolldata = new EmployeePayrollData(1, "Mark", 30000,"M","2021-05-22");
console.log("Payroll Data: "+employeePayrolldata.toString());
employeePayrolldata.name = "James";
console.log("After Replacement: "+employeePayrolldata.toString());
const newemployeePayrolldata = new EmployeePayrollData(1, "Terrisa", 60000 ,"F", "2020-05-31");
console.log("New Payroll Data: "+newemployeePayrolldata.toString());