const forms = document.querySelector(".forms"),
pwShowHide = document.querySelectorAll(".eye-icon"),
links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
eyeIcon.addEventListener("click", () => {
  let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
  
  pwFields.forEach(password => {
      if(password.type === "password"){
          password.type = "text";
          eyeIcon.classList.replace("bx-hide", "bx-show");
          return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
  })
  
})
})      

links.forEach(link => {
link.addEventListener("click", e => {
 e.preventDefault(); //preventing form submit
 forms.classList.toggle("show-signup");
})
})

const email =document.getElementById('email')
const password =document.getElementById('password')
const form =document.getElementById('form')
const parrafo =document.getElementById('warnings')

form.addEventListener('submit',e=>{
  e.preventDefault()
  let warnings=""
  let entrar = false
  let regexEmail = /^w+ ([.-]?w+)*@w+ ([.-]?w+)* (.w {2,4})+$/
  parrafo.innerHTML = ""
  if(regexEmail.test(email.value)){
    warnings += 'el email no es valido <br>'
    entrar= true
  }
  if(password.value.length <8){
    warnings += 'la contraseña no es valido <br>'
    entrar= true
  }

  if(entrar){
    parrafo.innerHTML = warnings
  }
})
