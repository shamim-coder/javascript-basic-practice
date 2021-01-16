// Gread System by Condition Stetment

var math = 4, bangla = 4, english = 4, ict = 4;

var totalMark = math+bangla+english+ict;
var totalGPA = totalMark/4;

if (totalGPA > 3 && totalGPA <= 4){
    console.log("Your Gread Point is A & Total CGPA is " + totalGPA);
} else if (totalGPA >= 2.5 && totalGPA <= 3) {
    console.log("Your Gread Point is B & Total CGPA is " + totalGPA);
} else if (totalGPA >= 2 && totalGPA < 2.5) {
    console.log("Your Gread Point is C & Total CGPA is " + totalGPA);
} else if (totalGPA >= 1 && totalGPA < 2) {
    console.log("Your Gread Point is D & Total CGPA is " + totalGPA);
} else if (totalGPA >= 0 && totalGPA < 1) {
    console.log("Your Gread Point is F & Total CGPA is " + totalGPA);
} else {
    console.log("Wrong or Invalid Result");
}


var foodPoint = {
    "Chair"     : 24,
    "Table"     : 4,
    "isOpen"    : true,
}
if (foodPoint.isOpen == true) {
    console.log("Its Running");
} else {
    console.log("its Closed");
}

foodPoint.isOpen = false;

if (foodPoint.isOpen == true) {
    console.log("Its Running");
} else {
    console.log("its Closed");
}

var gender = "Female";
var age = 14;

if (gender == "Male") {
    if (age >= 22) {
        console.log("you are a "+gender+ " and above the age limit");
    } else {
        console.log("sorry dude!");
    }
} else if (gender == "Female") {
    if (age >=18 && age < 65) {
        console.log("you are a " +gender+ " tomar biyer boyos hoye geche");
    } else if (age >=65) {
        console.log("tomar date expaired hoye geche");
    } else {
        console.log("sorry! tumi ekhono kochi khukhi");
    }
        
} else {
    console.log("Sorry! can not recognized your gender");
}
/*
var i = 1;
do {
    if (i === 3) {
        break;
    }
    console.log("Inner List: " + i);
    i++;
    var j = 1;
    do {
        if (j === 6) {
            break;
        }
        console.log("Outer List: " + j);
        j++;
    } while (true)
} while(true) */