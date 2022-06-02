let firstName = localStorage.getItem("firstName");
let lastName = localStorage.getItem("lastName");
let fullName = document.getElementById("fullname");
let greeting = document.getElementById("greeting");
let bmi = document.getElementById("bmi");

fullName.textContent = `${firstName} ${lastName}`;

let date = new Date;

let hours = date.getHours();

if(hours>0 && hours <12){
    greeting.textContent = "Morning"
}else if(hours >= 12 && hours <= 16){
    greeting.textContent = "Afternoon"
}else{
        greeting.textContent = "Evening"
}

bmi.textContent= localStorage.getItem("bmi")
