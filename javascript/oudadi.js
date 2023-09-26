// oudadi
var i=1;
function displayangle(){
if(i < 15 && i> 0 ){
    document.getElementById("angle1").style.display="flex";
    document.getElementById("angle2").style.display="flex";

}
else if(i<=0){
    document.getElementById("angle2").style.display="none";
}
else{
    document.getElementById("angle1").style.display="none";
}
}
var backgroundchange = document.getElementById("changebackground1");
function change(){
i++;
backgroundchange.style.backgroundImage ="url(\"image/koora"+ i +".jpg\")";
displayangle();
};
function change1(){
i--;
backgroundchange.style.backgroundImage ="url(\"image/koora"+ i +".jpg\")";
displayangle();

}
// fir9a
var j=1;
function displayangle2(){
    if(j <12 && j>0){
     document.getElementById("angle3").style.display="flex"
     document.getElementById("angle4").style.display="flex"
    }
    else if(j<=0){
        document.getElementById("angle4").style.display="none";
    
    }
    else{
        document.getElementById("angle3").style.display="none"; 
    }
    }
backgroundchange2=document.getElementById("changebackground2");
function change3(){
    j++;
    backgroundchange2.style.backgroundImage ="url(\"image/p"+ j +".jpg\")";
    displayangle2();
}
function change4(){
    j--;
    backgroundchange2.style.backgroundImage ="url(\"image/p"+ j +".jpg\")";
    displayangle2();
}
// box
box1=document.getElementById("box1");
for(var box11=1;box11<16;box11++){
    box1.innerHTML+="<div class=\"box\" id=\"boxbox1"+box11+"\"></div>"
    boxbox1=document.getElementById("boxbox1"+box11);
    boxbox1.innerHTML="<img src=\"image/oudadi/i"+box11+".jpg\"><h3>صورة رقم "+box11+"</h3>"
}
