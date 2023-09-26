// ait
var j =1;

function displayangle2(){
    if(j <12 && j>0){
     document.getElementById("angle1").style.display="flex"
     document.getElementById("angle2").style.display="flex"
    }
    else if(j<=0){
        document.getElementById("angle2").style.display="none";
    
    }
    else{
        document.getElementById("angle1").style.display="none"; 
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
// CHANGE BACKGROUND
var backgroundchangeait = document.getElementById("changebackground1");
j=1;
function changeait(){
j++;
if(j>6){
    j=12;

}else{
    backgroundchangeait.style.backgroundImage ="url(\"image2/ait/koora"+ j +".jpg\")";

}
displayangle2();


};
function changeait1(){
j--;
if(j>=6){
    j=5;
}displayangle2();
backgroundchangeait.style.backgroundImage ="url(\"image2/ait/koora"+ j +".jpg\")";
}

// box
box=document.getElementById("box");
for(var box1=0;box1<17;box1++){
    box.innerHTML+="<div class=\"box\" id=\"boxbox"+box1+"\"></div>"
    boxbox=document.getElementById("boxbox"+box1);
    boxbox.innerHTML="<img src=\"image2/ait/i" + box1 + ".jpg\"\\><h3>صورة رقم "+ box1 +" </h3>"
}
