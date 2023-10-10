var barsValue= false;
function tryDo(){

if(!barsValue){
   
barsValue=true;
document.getElementById("open").style.top='0%';
 }else{
    barsValue=false;
 document.getElementById("open").style.top='-1200px';


}
}