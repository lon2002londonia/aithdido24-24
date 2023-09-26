var j =1;

function displayangle2(){
    if(j <2 && j>0){
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
backgroundchange3=document.getElementById("changebackground3");
function changeamr(){
    j++;
    backgroundchange3.style.backgroundImage ="url(\"image/amr/koora"+ j +".jpg\")";
    displayangle2();
}
function changeamr1(){
    j--;
    backgroundchange3.style.backgroundImage ="url(\"image/amr/koora"+ j +".jpg\")";
    displayangle2();
}
// box
box=document.getElementById("box2");
for(var box1=1;box1<8;box1++){
    box.innerHTML+="<div class=\"box\" id=\"boxbox"+box1+"\"></div>"
    boxbox=document.getElementById("boxbox"+box1);
    boxbox.innerHTML="<img src=\"image/amr/i" + box1 + ".jpg\"\\><h3>صورة رقم "+ box1 +" </h3>"
}