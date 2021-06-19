class EmployeePayroll {
    
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

    get id() {return this._id;}
    set id(id) {
        let idRegex = RegExp('^[1-9][0-9]*$');
        if(idRegex.test(id))
            this._id = id;
        else throw 'Invalid id!';
    }

    get salary() {return this._salary;}
    set salary(salary) {
        let salaryRegex = RegExp('^[0-9]*[1-9][0-9]*(\.[0-9]+)?|[0]+\.[0-9]*[1-9][0-9]*$');
        if(salaryRegex.test(salary))
            this._salary = salary;
        else throw 'Invalid salary!';
    }

    get gender(){return this._gender}
    set gender(gender) {
        let genderRegex = RegExp('^[F M]{1}$')
        if(genderRegex.test(gender))
            this._gender = gender;
        else throw 'Invalid gender'     
    }

    toString() {
        return "id = "+ this.id +", name = "+this.name+", salary = "+this.salary + ", gender = "+ this.gender +", startDate = "+this.startDate;
    }
}
let employeePayrolldata = new EmployeePayrollData(1, "Mark", 60000,"M","2021-05-22");
console.log("Payroll Data: "+employeePayrolldata.toString());

//using try catch block to check name validation for incorrect name
try{
    employeePayrolldata.name = "james";
    console.log(employeePayrolldata.toString())
}catch(e){
    console.error(e);
}

//check for id validation with invalid input
try{
    employeePayrolldata.id = "-1";
    console.log(employeePayrolldata.toString())
}catch(e){
    console.error(e);
}

//check for id validation with valid input
try{
    employeePayrolldata.id = 2;
    console.log(employeePayrolldata.toString())
}catch(e){
    console.error(e);
}

//check for salary validation with invalid input shows error
try{
    employeePayrolldata.salary = "-23454";
    console.log(employeePayrolldata.toString())
}catch(e){
    console.error(e);
}

//check for salary validation with valid input 
try{
    employeePayrolldata.salary = 40000;
    console.log(employeePayrolldata.toString())
}catch(e){
    console.error(e);
}

//check for gender validation with invalid input 
try{
    employeePayrolldata.gender = 'g';
    console.log(employeePayrolldata.toString())
}catch(e){
    console.error(e);
}

//check for gender validation with valid input 
try{
    employeePayrolldata.gender = 'M';
    console.log(employeePayrolldata.toString())
}catch(e){
    console.error(e);
}

let newemployeePayrolldata = new EmployeePayrollData(1, "Atharva", 50000 ,"M", "2020-06-01");
console.log("New Payroll Data: " + newemployeePayrolldata.toString());