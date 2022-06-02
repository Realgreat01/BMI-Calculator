let firstName = document.getElementById("firstname");
let lastName = document.getElementById("lastname");
let age = document.getElementById("age");
let gender = document.getElementById("gender");
let infoNext = document.getElementById("info-next");


// console.log(typeof gender.value);
const infoNextfn =()=>{

        if(
            firstName.value.length !=0 && lastName.value.length !=0 && age.value > 5
        ){  
            infoNext.style.background="#4a4afa";
            infoNext.innerHTML = `<a href="data.html">Continue</a>`;
             localStorage.setItem("firstName", firstName.value);
             localStorage.setItem("lastName", lastName.value);
             localStorage.setItem("age", age.value);
             localStorage.setItem("gender", gender.value);
        }
    
        else{
            alert("Kindly enter the right value")
        }
        

    };

infoNext.addEventListener("click", infoNextfn);

window.addEventListener("mouseover", ()=>{
    if(
        firstName.value.length !=0 && lastName.value.length !=0 && age.value !=0 && gender.value !=""
    ){  
        infoNext.style.background="#4a4afa";
    }
    else{
        infoNext.style.background="red";
    }
});


firstName.value = localStorage.getItem("firstName");
lastName.value =  localStorage.getItem("lastName");
age.value=        localStorage.getItem("age");
gender.value=     localStorage.getItem("gender");



