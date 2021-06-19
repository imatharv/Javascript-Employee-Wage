class EmployeePayrollData {
    id;
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
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(nameRegex.test(name))
        this._name = name;
        else throw 'Invalid Name!';
    }

    toString() {
        return "id = "+ this.id +", name = "+this.name+", salary = "+this.salary + ", gender = "+ this.gender +", startDate = "+this.startDate;
    }
}
    
let employeePayrolldata = new EmployeePayrollData(1, "Mark", 60000,"M","2021-05-22");
console.log("Payroll Data: "+employeePayrolldata.toString());

//using try catch block to check name validation
try{
    employeePayrolldata.name = "james";
    console.log(employeePayrolldata.toString())
}catch(e){
    console.error(e);
}

let newemployeePayrolldata = new EmployeePayrollData(1, "Terisa", 50000 ,"F", "2020-05-31");
console.log("New Payroll Data: " + newemployeePayrolldata.toString());