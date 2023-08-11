var randomnumber1=Math.floor(Math.random() *6)+1;
var randomdice = "dice" + randomnumber1 + ".png";
var randomdicesource="images/" + randomdice;
document.querySelectorAll("img")[0].setAttribute("src",randomdicesource);
var randomnumber2=Math.floor(Math.random() * 6)+1;
var randomdicesource2="images/dice" + randomnumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomdicesource2);
if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML="Player1 wins!🚩";
}
else if(randomnumber2 > randomnumber1){
    document.querySelector("h1").innerHTML="Player2 wins!🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}