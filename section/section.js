import { server,form,regularExpressionEmail,checkedExpression } from "../main.js";
const section = document.querySelector('section');
const serversList = server.map(elem => '<li>'+elem)

//handle submit
const errorForm = ()=> {
    console.log(checkedExpression)
   if(checkedExpression===false){
        section.innerHTML= 'Sólo admitimos los siguientes servidores de correo electrónico :'+serversList;
        section.style.display="block";
   }  
}
form.addEventListener('submit',errorForm)