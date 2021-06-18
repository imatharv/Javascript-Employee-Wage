const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 100;

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

function getWorkingHours(empCheck) {
    switch(empCheck) {
        case IS_PART_TIME:
            return 4;
            break;
        case IS_FULL_TIME:
            return 8;
            break;	
        default:
            return 0;
    }
}

function calculateWage(totalEmpHrs){
	return totalEmpHrs * WAGE_PER_HOUR;
}

while(totalWorkingDays <= NUM_OF_WORKING_DAYS && totalEmpHrs < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;	 
    let empCheck = Math.floor(Math.random()*10)%3;
    let empHrs = getWorkingHours(empCheck);
	totalEmpHrs += empHrs;
	empDailyWageArr.push(calculateWage(empHrs));
}

let totalEmpWage = totalEmpHrs * WAGE_PER_HOUR;

console.log("Total days: " + totalWorkingDays);
console.log("Total hours: " + totalEmpHrs );
console.log("Employee wage: " + totalEmpWage);
console.log("Daily wages: " + empDailyWageArr);