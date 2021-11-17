// dom elements
export const form = document.getElementById('form');
const email = document.querySelector('input[name="email"]');
export const server= ['gmail.com','hotmail.com','yahoo.es']
// regex expression to check
// texto@servidor.loquesea
export const regularExpressionEmail = /[a-z-0-9]+@([a-z])+\.[a-z]+/;
export let checkedExpression="";
//handle onSubmit
const handleSubmit = (e)=> {
    e.preventDefault();
    const emailValue = e.target.email.value
    console.log(emailValue);
    //checking expression
    checkedExpression = regularExpressionEmail.test(emailValue);
   console.log(checkedExpression);//expected true or false
     let finalEmail='';
   if(checkedExpression){
       for(let i=0;i<server.length;i++){
            const includeCorrectServer= emailValue.includes(server[i]);
            if(includeCorrectServer){
                finalEmail = server[i];
            }
          }
        }
        finalEmail!==''? window.open("selects/select.html","_self"): alert('email incorrecto\ntu email NO se ajusta a nuestros dominios de correo electrónico permitidos:\n'+server);
        //reseting
        form.reset();
        
   } 

form.addEventListener('submit',handleSubmit);