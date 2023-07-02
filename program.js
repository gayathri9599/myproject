
//string

var user_age=249;
console.log(user_age);
var user_name= "gayathrii";
console.log(user_name);

// boolean

var result=true;
console.log(result);

//object
 
var employee_information ={
    domain :"developer",
    employee_name:"gayathri",
    ep_id : 2638241
}
console.log(employee_information);

//to read particular value

employee_information.employee_name
console.log(employee_information.employee_name);
console.log(employee_information.ep_id);

//to edit a existing value

employee_information.domain = "frontend developer"
console.log(employee_information);

//to insert a new value

employee_information.location = "chennai"
employee_information.attendance = "thriceaweek"
console.log(employee_information);

//to delete a existing value

delete employee_information.attendance;
console.log(employee_information);

//to delete entire object

/* employee_information = undefined;
console.log(employee_information); */

//Array

var baby_name = ["krithick", "vihaan", "sahasra", "arush"];
console.log(baby_name);

var babies_deet = [
    {
        baby_name : "Krithickvihaan",
        age : 1.5,
        hobbies : "playing",
    
},
    {
        baby_name : "sahasra",
        age : 1.5,
        hobbies : "playing",
    
},
    {
        baby_name : "papa",
        age : 1.5,
        hobbies : "playing",
    
},
    {
        baby_name : "arush",
        age : 1.5,
        hobbies : "playing",
    
}
];
console.log(babies_deet);

//function

function display_belowObject(){
    try{
   var employee = {
    name : "Sasirekha",
    account : "bfsi",
    experiance : "4.5"
   } 
   console.log(employee);
}
catch(error){
    console.error(error);
    alert("Something went wrong, Try again!");
}}
 
//operations in array

//Insert a new value

var baby_name = ["krithick", "vihaan", "sahasra", "arush"];
console.log(baby_name);

baby_name.push("shrishti")
baby_name.push("sammy")
baby_name.unshift("sammy")

console.log(baby_name);

//read a value

console.log(baby_name[1]);
console.log(baby_name[4]);

//edit a value

baby_name[3] = "krithickvihaan"
console.log(baby_name);

//delete a value

baby_name.splice(6 ,1)
console.log(baby_name);

//Iterations

//If else 

function check_VotingEligibility(){
    var enter = prompt("Enter your age");
    var age = parseInt(enter);
    if (age>=18){
        console.log("person is eligible for voting");
    }
    else{
        console.log("Sorry, your not eligible");
    }}


//multiple if-else

function check_age(){
    var value = prompt("Enter your age");
    var age = parseInt(value);
    if (age<18){
        console.log("your minor");
    }
    else if (age >=18 && age <60){
        console.log("your major");
    }
    else{
        console.log("your supercitizen");
    
    }
}

//for loop

function print_even_number(){
    var value = prompt("Enter the number");
    var number = parseInt(value);
    for(var count=1; count <=number; count++)
    if(count %2 ==0){
        console.log("Even number is", count);

    }

}

//switch

function find_weekday(){

    var value = prompt("Enter a number from 0-6");
    var day = parseInt(value);

    switch(day){
        case 0:
            console.log("sunday");
            break;
            case 1:
            console.log("Monday");
            break;
            case 2:
            console.log("tuesday");
            break;
            case 3:
            console.log("wednesday");
            break;
            case 4:
            console.log("thursday");
            break;
            case 5:
            console.log("friday");
            break;
            case 6:
            console.log("saturday");
            break;
            default:
                console.log("nothing");
            
                
    }}
   
    

