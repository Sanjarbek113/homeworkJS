console.log("SALOM");
const main = document.querySelector(".main")
const inputName = document.querySelector(".input-name");
const inputTel = document.querySelector(".input-tel");
const inputAge = document.querySelector(".input-age");
const inputText = document.querySelector(".input-text");
const btn = document.querySelector(".btn");
const pElements = document.querySelectorAll("p") ;
const button = document.querySelector(".img");

// console.log(pElements[0]);

btn.addEventListener("click", e =>{
    let name = inputName.value;    
    inputName.value = "";
    pElements[0].textContent = "Ismi :" + name;
    let tel = inputTel.value;
    inputTel.value = "";
    pElements[1].textContent = "Tel raqami: " + tel;
    let age = inputAge.value;
    inputAge.value = "";
    pElements[2].textContent = "Age :" + age;
    let text = inputText.value;
    inputText.value = "";
    pElements[3].textContent = "Interests " + text;


})

button.addEventListener("click", e =>{
    for(let key of pElements){
        key.textContent =" Kiritilmagan";
    }
})