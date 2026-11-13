let studentname = ( prompt("enter your name"));
let coursename = (prompt("enter coursename"));
let mark1 = Number(prompt("enter mark 1:"));
let mark2 = Number(prompt("enter mark 2:"));
let mark3 = Number(prompt("enter mark 3:"));

function calculateaverage(mark1, mark2, mark3){
    return(mark1 + mark2 + mark3)/3
}
let average = calculateaverage(mark1, mark2, mark3);
console.log("average marks:",average);

function calculateGrade(average) {

    if (average >= 80) {
        return "A";
    } 
    else if (average >= 70) {
        return "B";
    } 
    else if (average >= 60) {
        return "C";
    } 
    else if (average >= 50) {
        return "D";
    } 
    else {
        return "E";
    }

}
    let grade = calculateGrade(average)


console.log("STUDENT RESULTS");
console.log("Student Name: " + studentname);
console.log("Course: " + coursename);
console.log("Average Marks: " + average);
console.log("Grade: " + grade);

