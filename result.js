let firstName = localStorage.getItem("firstName");
let lastName = localStorage.getItem("lastName");
let fullName = document.getElementById("fullname");
let greeting = document.getElementById("greeting");
let bmi = document.getElementById("bmi");
let advice = document.getElementById("advice");
let weight = document.getElementById("weight");

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


let bmiValue = parseInt(localStorage.getItem("bmi"));

if(bmiValue<18.5){
    bmi.style.color = "red";
    weight.textContent =`You are Under Weight`;
    advice.textContent = `you are underweight, so you may need to put on some weight. You are recommended to ask your doctor or a dietitian for advice.`
}

else if(bmiValue>=18.5 && bmiValue<=24.9){
    weight.style.color ="limegreen"
    weight.textContent =`You Have a Healthy Weight`;
    advice.textContent = `you are at a healthy weight for your height. By maintaining a healthy weight, you lower your risk of developing serious health problems`
}

else if(bmiValue >24.9 && bmiValue <=29.9){
    bmi.style.color = "yellow";
    weight.style.color ="yellow";
    weight.textContent =`You are Slighly Over Weight`;
    advice.textContent = `You may be advised to lose some weight for health reasons. You are recommended to talk to your doctor or a dietitian for advice`
}

else{
    bmi.style.color = "#ec0808";
    weight.style.color ="#ec0808";
    weight.textContent = `You Are Extremely Obese`
    advice.textContent= `Your health may be at risk if you do not lose weight. You are recommended to talk to your doctor or a dietitian for advice.`
}
