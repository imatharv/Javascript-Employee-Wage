console.log("The solution to employee wage problame in JavaScript");

const IS_ABSENT = 0;

let empCheck = Math.floor(Math.random()*10)%2;

if(empCheck == IS_ABSENT) {
    console.log("Employee Absent");
} else {
    console.log("Employee Present");
}