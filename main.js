console.log("SALOM");
const main = document.querySelector(".main");
const main_flex = document.querySelector(".main-flex");
const inputName = document.querySelector(".input-name");
const inputTel = document.querySelector(".input-tel");
const inputAge = document.querySelector(".input-age");
const inputText = document.querySelector(".input-text");
const btn = document.querySelector(".btn");
const pElements = document.querySelectorAll("p") ;
const button = document.querySelector(".img");


// console.log(pElements[0]);

btn.addEventListener("click", e =>{
    const olElement = document.createElement("ol");
    const liElemet1= document.createElement('li');
    const liElemet2= document.createElement('li');
    const liElemet3= document.createElement('li');
    const liElemet4= document.createElement('li');
    const deletebtn = document.createElement("button");
    deletebtn.textContent = "delete";
    main_flex.appendChild(olElement);
    olElement.classList.add("box-list");
    olElement.appendChild(liElemet1);
    olElement.appendChild(liElemet2);
    olElement.appendChild(liElemet3);
    olElement.appendChild(liElemet4);
    olElement.appendChild(deletebtn);
    deletebtn.classList.add("delete-btn");
    olElement.classList.add("list");
    liElemet1.textContent = inputName.value;    
    inputName.value = "";
    liElemet2.textContent = inputTel.value;
    inputTel.value = "";
    liElemet3.textContent = inputAge.value;
    inputAge.value = "";
    liElemet4.textContent = inputText.value;
    inputText.value = "";

  
deletebtn.addEventListener("click", e =>{
    liElemet1.textContent ="";
    liElemet2.textContent ="";
    liElemet3.textContent ="";
    liElemet4.textContent ="";
    deletebtn.textContent ="";
    deletebtn.classList.remove("delete-btn");
    olElement.classList.remove("box-list");
    olElement.classList.remove("list");
})
})

deletebtn.addEventListener("click", e =>{
    liElemet1.textContent ="";
    liElemet2.textContent ="";
    liElemet3.textContent ="";
    liElemet4.textContent ="";
   
})