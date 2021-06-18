const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 100;

let empHrs;
let totalEmpHrs = 0;
let totalWorkingDays = 0;

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

while(totalWorkingDays <= NUM_OF_WORKING_DAYS && totalEmpHrs < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;	 
    let empCheck = Math.floor(Math.random()*10)%3;
    totalEmpHrs += getWorkingHours(empCheck);
}

let empWage = empHrs * WAGE_PER_HOUR;

console.log("Total employee wage for "+ totalWorkingDays +" hours is: " + totalEmpHrs);