let display=document.getElementById("display");

function addDisplay(inputval){
    display.value=display.value+inputval;
}
function calculate(){
    try{
        display.value=eval(display.value);
    }catch(error){
        display.value="error";
    }
  

}
function cleardata(){
    display.value="";
}