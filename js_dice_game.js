var rN1=Math.floor(Math.random()*6)+1;//1-6
document.querySelectorAll("img")[0].setAttribute("src", "dice_game"+rN1+".png");
var rN2=Math.floor(Math.random()*6)+1;//1-6
document.querySelectorAll("img")[1].setAttribute("src", "dice_game"+rN2+".png");
if(rN1>rN2){
    document.querySelector("h1").innerHTML="🚩 Play 1 Wins!";
}
else if(rN1<rN2){
    document.querySelector("h1").innerHTML="🚩 Play 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}