/*var boton= document.getElementById("boton");
var divisor= document.getElementById("boton-caja");
var check= false;
boton.onclick=function(){
    if(check === false){
    divisor.style.transition="all 0.3s"    
    divisor.style.display="block";
    check= true;
    }
    else{
        divisor.style.display = "none";
        check = false;
    }
}*/

$("#boton").click(()=>{
   $(".nav-bar").toggle(300); 
});