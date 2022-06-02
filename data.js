const heightIncrease = document.getElementById("height-increase");
const heightDecrease = document.getElementById("height-decrease");
const height         = document.getElementById("height");
const weightIncrease = document.getElementById("weight-increase");
const weightDecrease = document.getElementById("weight-decrease");
const weight         = document.getElementById("weight");
const  avatar = document.getElementById("avatar");
const  next = document.getElementById("next");


let initialHeight = 150;
let increase = 5
height.textContent= `${initialHeight} cm`
heightIncrease.addEventListener("click" ,()=>{
    if(initialHeight <300){
        initialHeight++;
        increase +=5; 
        height.textContent= `${initialHeight} cm`;
        avatar.style.height = initialHeight+increase+"px";
    }

    let newHeight= height.textContent= `${initialHeight} cm`;
    let avatarHeight = initialHeight+increase+"px";

    localStorage.setItem("height", newHeight);
    localStorage.setItem("avatarHeight", avatarHeight);

});

heightDecrease.addEventListener("click" ,()=>{
    if(initialHeight>100){
        initialHeight--;
        increase -=5;
        height.textContent= `${initialHeight} cm`;
        avatar.style.height = initialHeight+increase+"px";
    }

    let newHeight= height.textContent= `${initialHeight} cm`;
    let avatarHeight = initialHeight+increase+"px";

    localStorage.setItem("height", newHeight)
    localStorage.setItem("avatarHeight", avatarHeight);
   
})

let initialWeight = 50;
let wValue = 2;
weight.textContent= `${initialWeight} kg`;

weightIncrease.addEventListener("click" ,()=>{
    if(initialWeight>30){
        initialWeight++;
        wValue +=2;
        weight.textContent= `${initialWeight} kg`;
        avatar.style.width = initialWeight+wValue+150+"px";
    }

    let newWidth =   weight.textContent= `${initialWeight} kg`;
    let avatarWeight = initialWeight+wValue+150+"px";

    localStorage.setItem("weight", newWidth);
    localStorage.setItem("avatarWeight", avatarWeight);
});

weightDecrease.addEventListener("click" ,()=>{
    if(initialWeight < 100 && initialWeight > 20){
        initialWeight--;
        wValue -=2;
        weight.textContent= `${initialWeight} kg`;
        avatar.style.width = initialWeight+wValue+150+"px";
    }

    let newWidth =   weight.textContent= `${initialWeight} kg`;
    let avatarWeight = initialWeight+wValue+150+"px";

    localStorage.setItem("weight", newWidth);
    localStorage.setItem("avatarWeight", avatarWeight);
})


gender = localStorage.getItem("gender");
if (gender=="male"){
    avatar.src= "./images/man.png"
}else if (gender =="female"){
    avatar.src = "./images/woman.png";
}else{
    avatar.src = "./images/"
}

const checkBmi =()=>{
    let finalHeight = ((initialHeight)/100)**2;
    let bmi = initialWeight/finalHeight;
    localStorage.setItem("bmi", bmi.toFixed(2));
    next.innerHTML=`<a href="result.html" >Check BMI</a>`;
    next.style.backgroundColor="blue";
    return bmi;
}
next.addEventListener("click", checkBmi);
height.textContent = localStorage.getItem("height");
weight.textContent = localStorage.getItem("weight");
avatar.style.height = localStorage.getItem("avatarHeight")
avatar.style.weight = localStorage.getItem("avatarWeight")
// setInterval(console.log(checkBmi()), 2000) 