const heightIncrease = document.getElementById("height-increase");
const heightDecrease = document.getElementById("height-decrease");
const height         = document.getElementById("height");
const weightIncrease = document.getElementById("weight-increase");
const weightDecrease = document.getElementById("weight-decrease");
const weight         = document.getElementById("weight");
const  avatar = document.getElementById("avatar");
const  next = document.getElementById("next");

const localHeight = parseInt(localStorage.getItem("localHeight"))
const localWeight = parseInt(localStorage.getItem("localWeight"))

// const solutions =()=>{
//     if(localHeight !== null && localWeight !== null){
//         let initialHeight = localHeight ;
//         let initialWeight = localWeight;
//     }else {
//         let initialHeight = 150;
//         let initialWeight = 50;
//     }

    let initialHeight = localHeight;
    let addition = 40;
    let increase = 5
    height.textContent= `${initialHeight} cm`;

    heightIncrease.addEventListener("click" ,()=>{
        // let initialHeight = 150;
        // if(localHeight !=null){
        //     initialHeight = localHeight;
        // }
        if(initialHeight <300){
            initialHeight++;
            increase +=5; 
            height.textContent= `${initialHeight} cm`;
            avatar.style.height = initialHeight+addition+increase+"px";
        }

        let newHeight= `${initialHeight} cm`;
        let avatarHeight = initialHeight+addition+increase+"px";

        localStorage.setItem("height", newHeight);
        localStorage.setItem("avatarHeight", avatarHeight);
        localStorage.setItem("localHeight", initialHeight)

    });

    heightDecrease.addEventListener("click" ,()=>{
        if(initialHeight>100){
            initialHeight--;
            increase -=5;
            height.textContent= `${initialHeight} cm`;
            avatar.style.height = initialHeight+addition+increase+"px";
        }

        let newHeight= `${initialHeight} cm`;
        let avatarHeight = initialHeight+addition+increase+"px";

        localStorage.setItem("height", newHeight)
        localStorage.setItem("avatarHeight", avatarHeight);
        localStorage.setItem("localHeight", initialHeight)
        
    
    })

    let initialWeight = localWeight;
    let wValue = 2;
    weight.textContent= `${initialWeight} kg`;

    weightIncrease.addEventListener("click" ,()=>{
        if(initialWeight>30){
            initialWeight++;
            wValue +=2;
            weight.textContent= `${initialWeight} kg`;
            avatar.style.width = initialWeight+wValue+100+"px";
        }

        let newWidth =   `${initialWeight} kg`;
        let avatarWeight = initialWeight+wValue+100+"px";
        console.log(avatarWeight)

        localStorage.setItem("weight", newWidth);
        localStorage.setItem("avatarWeight", avatarWeight);
        localStorage.setItem("localWeight", initialWeight)
    });

weightDecrease.addEventListener("click" ,()=>{
    if(initialWeight < 100 && initialWeight > 20){
        initialWeight--;
        wValue -=2;
        weight.textContent= `${initialWeight} kg`;
        avatar.style.width = initialWeight+wValue+100+"px";
    }

    let newWidth =   weight.textContent= `${initialWeight} kg`;
    let avatarWeight = initialWeight+wValue+100+"px";

    localStorage.setItem("weight", newWidth);
    localStorage.setItem("avatarWeight", avatarWeight);
    localStorage.setItem("localWeight", initialWeight)
})





gender = localStorage.getItem("gender");
if (gender=="male"){
    avatar.src= "./images/man.png"
}else if (gender =="female"){
    avatar.src = "./images/woman.png";
}else{
    avatar.src = "./images/doctor.svg"
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
avatar.style.height = localStorage.getItem("avatarHeight");
avatar.style.weight = localStorage.getItem("avatarWeight");
// setInterval(console.log(checkBmi()), 2000) 