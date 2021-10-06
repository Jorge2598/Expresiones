var textarea = document.getElementById('mosresul'),
    btn = document.getElementById('btn-validar');
function validar(){ 
    let valor = document.getElementById('valorexpre').value;
    let expresion = document.getElementById('expre').value;
        console.log(expresion)
        
try {
    let expreg  = new RegExp (expresion);
    if(expreg.test(valor)){
        textarea.value = "Expresión Correcta";
    }else{
        textarea.value = "Expresión Incorrecta";
    }  
} catch (error) {
    textarea.value = "Error de sintaxis en la expresion regular";
}
      
} 

function reiniciarExp(){
    document.getElementById('expre').value= "^[A-Z][\\d]{3}([a-z]{3})([\\W]{3})$";

}