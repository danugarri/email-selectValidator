
 //DOM elements
 
const form = document.getElementById('selectForm');
const select1 = document.getElementById('select1');    
const select2 = document.getElementById('select2'); 
const defaultCity = document.getElementById('city');
const selectOption1 = document.getElementById('option1');
const selectOption2 = document.getElementById('option2');
const selectOption3 = document.getElementById('option3');
const submit = document.querySelector("input[type='submit']");
//let select2Value = select2.value;
let selectedProvincia="";
let selectedCity = "";
let selectedAtt="";
// selectedIndex handler

const selectedIndexHandler = ()=> {
    switch(select2.selectedIndex){
        case 0:
            null;
            break;
        case 1:
            if(selectedProvincia==="madrid"){
                selectedCity= "Madrid capital";
                console.log(selectedCity)
            }
            if(selectedProvincia==="barcelona"){
                selectedCity= "Barcelona capital";
                console.log(selectedCity)
            }
             if(selectedProvincia==="valencia"){
                selectedCity= "Valencia capital";
                console.log(selectedCity)
            }
            break;
        case 2:
             if(selectedProvincia==="madrid"){
                selectedCity= "Alcalá de Henares";
                console.log(selectedCity)
            }
            if(selectedProvincia==="barcelona"){
                selectedCity= "Badalona";
                console.log(selectedCity)
            }
             if(selectedProvincia==="valencia"){
                selectedCity= "Torrent";
                console.log(selectedCity)
            }
            break;
        case 3:
              if(selectedProvincia==="madrid"){
                selectedCity= "Alcorcón";
                console.log(selectedCity)
            }
            if(selectedProvincia==="barcelona"){
                selectedCity= "Mataró";
                console.log(selectedCity)
            }
             if(selectedProvincia==="valencia"){
                selectedCity= "Mislata";
                console.log(selectedCity)
            }
            break;    
        default:
            null;
            break;
    }
}

// onChange handler to create nodes on the 2nd select
 const handleChange = (e) =>{
     console.log("entra")
     e.preventDefault();
     selectedProvincia = e.target.value;
     console.log(selectedProvincia)
     //remove attribute selected for the third option if previously Mislata is selected
     if(selectedAtt !== ""){
         selectOption3.removeAttribute("selected")
     }
    //Creating dom elemets
    switch(selectedProvincia){
        case 'barcelona':
                selectOption1.innerHTML="Barcelona capital";
                selectOption2.innerHTML="Badalona";
                selectOption3.innerHTML="Mataró";
                break;
          case 'madrid':
                selectOption1.innerHTML="Madrid capital";
                selectOption2.innerHTML="Alcalá de Henares";
                selectOption3.innerHTML="Alcorcón";
                break;
            case 'valencia':
                selectOption1.innerHTML="Valencia capital";
                selectOption2.innerHTML="Torrent";
                selectOption3.innerHTML="Mislata";
                selectedAtt= selectOption3.setAttribute("selected",null);//attribute to appear as  default selected
                break;
            default :
            null;
            break;
    }
 }
 const handleSubmit = (e) =>{
    e.preventDefault();
    const select1Value = e.target.select1.value;
    console.log("la ciudad seleccionada está en el índice : " +select2.selectedIndex)
    if(select1Value==='provincia'){
         alert('Selecciona una provincia' )
    }
    if(selectedCity==='validar'){
         alert('Selecciona una ciudad' )
    }
    else{//good user
        alert(`Provincia: ${select1Value}\nCiudad: ${selectedCity}` )
    }
 }
 const handleClick = (e) =>{
    selectedCity = e.target.value;
    console.log("eeee")
    selectedIndexHandler()
 }

 //events listeners
 submit.addEventListener('click',handleClick);
 select1.addEventListener('change', handleChange);
 form.addEventListener('submit',handleSubmit);