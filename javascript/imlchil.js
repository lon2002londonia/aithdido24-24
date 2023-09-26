var j =1;

function displayangle2(){
    if(j <5 && j>0){
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
backgroundchange3=document.getElementById("changebackground5");
function changeimlchil(){
    j++;
    backgroundchange3.style.backgroundImage ="url(\"image2/imlchil/koora"+ j +".jpg\")";
    displayangle2();
}
function changeimlchil1(){
    j--;
    backgroundchange3.style.backgroundImage ="url(\"image2/imlchil/koora"+ j +".jpg\")";
    displayangle2();
}
// box
box=document.getElementById("box");
for(var box1=1;box1<32;box1++){
    box.innerHTML+="<div class=\"box\" id=\"boxbox"+box1+"\"></div>"
    boxbox=document.getElementById("boxbox"+box1);
    boxbox.innerHTML="<img src=\"image2/imlchil/i" + box1 + ".jpg\"\\><h3>صورة رقم "+ box1 +" </h3>"
}