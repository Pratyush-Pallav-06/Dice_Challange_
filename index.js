var random_num1 =   Math.floor(Math.random()*6) + 1 ;

var image_random = "./images/" + "dice" + random_num1 + ".png" ;

var image = document.querySelectorAll("img")[0];
image.setAttribute("src" , image_random) ;


var random_num2 =   Math.floor(Math.random()*6) + 1 ;

var image_random2 = "./images/" + "dice" + random_num2 + ".png" ;

var image = document.querySelectorAll("img")[1];
image.setAttribute("src" , image_random2) ;

if(random_num1 > random_num2)
{
    document.querySelector("h1").textContent = "Player 1 wins !!!"
}

else if(random_num1 < random_num2)
{
    document.querySelector("h1").textContent = "Player 2 wins !!!"
}
else
{
    document.querySelector("h1").textContent = "DRAWW !!!"
}