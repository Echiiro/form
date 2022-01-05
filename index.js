const form = document.querySelector("form");
const passwordc = document.getElementById("password-confirmation");
const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const pass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

let v1 = 0
let v2 = 0
let v3 = 0


pseudo.addEventListener("input", () => {
  if (pseudo.value.length < 3 || pseudo.value.length > 16){
    pseudoError.textContent = "Le nom doit faire entre 3 et 16 caractères";
    v1=0
  } else {
    pseudoError.textContent = "Pseudo valide";
    v1 = 1
  }
});

password.addEventListener("input", () => {
  if (password.value.length < 8) {
    passwordError.textContent = "Votre mot de passe doit fait au moin 8 caractères";
  
  }else if (password.value.match(pass) === null){
    passwordError.textContent = "Le mot de pass doit contenir une majuscule, une minuscule, un nombre et un caractère spécial "
  } else {
    passwordError.textContent = "";
    v2 = 1
  }
});

passwordc.addEventListener("input", () => {
  if (passwordc.value != password.value) {
    passwordcError.textContent = "Le mot de passe et la confirmation ne corespondent pas";
    v3 = 0
  } else {
    passwordcError.textContent = "";
    v3 = 1
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (v1 === 1 && v2 === 1 && v3 === 1 && cgv.checked) {
    console.log("formulair valide");
    pseudo.value = "";
    password.value = "";
    passwordc.value = "";
    cgv.checked = false;
    alert("Bravo champions tu l'as fait !");
  } else if (cgv.checked === false){
    alert("Veuillez cocher les Conditions générales d'utilisations");
  }
});
