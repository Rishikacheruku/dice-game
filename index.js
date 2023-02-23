var randomnumber1=Math.floor(Math.random()*6)+1;

var randomdice="dice"+ randomnumber1 + ".png";

var randomimg="images/" +randomdice;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimg);

var randomnumber2=Math.floor(Math.random()*6)+1;

var randomimg2="images/dice" + randomnumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomimg2); 


if(randomnumber1 > randomnumber2){
   document.querySelector("h1").innerHTML="play 1 wins";
}
else if(randomnumber2 > randomnumber1){
document.querySelector("h1").innerHTML="play 2 wins";
}
else
document.querySelector("h1").innerHTML="draw";