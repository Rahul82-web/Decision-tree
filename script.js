var a=0;
document.getElementById("hec1").style.display="none";
document.getElementById("hec2").style.display="none";
document.getElementById("hec3").style.display="none";
document.getElementById("hec4").style.display="none";
document.getElementById("hec5").style.display="none";
document.getElementById("hec6").style.display="none";
document.getElementById("hec7").style.display="none";
document.getElementById("hec8").style.display="none";
document.getElementById("hec9").style.display="none";
document.getElementById("hec10").style.display="none";
document.getElementById("hec11").style.display="none";
document.getElementById("hec12").style.display="none";
document.getElementById("hec13").style.display="none";


function Show_hide(){

    
    if(a==0){
        document.getElementById("hec1").style.display="block";
        document.getElementById("hec2").style.display="block";
        document.getElementById("hec3").style.display="block";
        document.getElementById("hec6").style.display="block";
        document.getElementById("hec11").style.display="block";
        document.getElementById("hec7").style.display="block";
        document.getElementById("hec12").style.display="block";
        return a=1;
    }
    
}
function Show_hide1(){
    if(a==1){
        
        document.getElementById("hec4").style.display="block";
        document.getElementById("hec5").style.display="block";
        return a=1;

    }
    
}
function Show_hide2(){
    if(a==1){
        
        document.getElementById("hec8").style.display="block";
        document.getElementById("hec9").style.display="block";
        document.getElementById("hec10").style.display="block";
        return a=1;

    }
    
}
function Show_hide3(){
    if(a==1){
        
        document.getElementById("hec13").style.display="block";
        
        return a=1;

    }
    
}