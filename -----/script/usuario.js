
//local storage sign up//
let email, contraseña ,c_contraseña


let formulario = document.getElementById('form_sign-up')

formulario.addEventListener('submit',(e) => {
    e.preventDefault()
    leerCrear()
   
})  

function leerCrear() {
 email =document.getElementById('email_sign-up').value
 contraseña =document.getElementById('password_sign-up').value
 c_contraseña =document.getElementById('confirm_password_sign-up').value

 GuardarCrearLocalStorage(email,contraseña,c_contraseña)
}
function GuardarCrearLocalStorage(email,contraseña,c_contraseña) {
    localStorage.setItem('Correo',email)
    localStorage.setItem('Contraseña',contraseña)
    localStorage.setItem('Confirmación de contraseña',c_contraseña)
}