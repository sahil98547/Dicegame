// generate the random no. from 1 to 6 for player 1
var player1 = Math.random();
player1 = 6 * player1;              //1-6
player1 = Math.floor(player1) + 1;  //dice1.png-dice2.png

// generate the random no. from 1 to 6 for player 2
var player2 = Math.random();
player2 = 6 * player2;                //1-6
player2 = Math.floor(player2) + 1;   //dice1.png-dice2.png

// path of the images of two players
var dice1 = "./images/dice" + player1 + ".png";
var dice2 = "./images/dice" + player2 + ".png";

// Select the elements with class "img1" and "img2"
var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");

// Set the "src" attribute of the selected elements to the dice image paths
image1.setAttribute("src", dice1);
image2.setAttribute("src", dice2);

if (player1 == player2) {
    document.querySelector("h1").innerHTML = "Match Draw";
}
else if (player1 > player2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Won";
}
else {
    document.querySelector("h1").innerHTML = "Player 2 Won 🚩";
}



