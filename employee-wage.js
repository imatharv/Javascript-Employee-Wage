const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;

let empHrs = 0;

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

for(let day=1; day<=NUM_OF_WORKING_DAYS; day++) {
    let empCheck=Math.floor(Math.random()*10)%3;
    empHrs += getWorkingHours(empCheck);
}

let empWage = empHrs * WAGE_PER_HOUR;

console.log("Total employee wage for "+ empHrs +" hours is: " + empWage);