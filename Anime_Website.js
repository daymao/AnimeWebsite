//Changes header area when you go over it with the mouse in the same way that css hover: style can do
let header = document.querySelector('#header-area')
let subHeader = document.querySelector('#subHeader');

header.onmouseenter = function () {
    header.style.backgroundColor = 'mediumslateblue';
    subHeader.style.backgroundColor = 'mediumslateblue';
}
//Changes the header area back to its original way after the mouse leaves that area
header.onmouseleave = function () {
    header.style.backgroundColor = 'cornflowerblue';
    subHeader.style.backgroundColor = 'cornflowerblue';
}
//End of code to change header area

//Tell erick that all I did was change the variable type from var to let and 
//I changed querySelectorAll to getElementsByClassName

//The set of code below rotates the large anime images and displays them rotated
var img = document.getElementsByClassName("main"); //Gets all images with class name "main"

for (let i = 0; i < img.length; i++) { //Runs continuosly 
    img[i].onmouseenter = function () {  //Event listener for when user hover mouse over image
        img[i].style.transform = "rotateY(180deg)"; //Rotates image 
    };
}
for (let i = 0; i < img.length; i++) {
    img[i].onmouseleave = function () { //Event listener for when user's mouse exits image 
        //Rotates it back the the orginal position. This was big brained because in CSS you just rotate 180 not back to 360
        img[i].style.transform = "rotateY(360deg)";
    };
}
//End of code to rotate large anime pictures


//This set of code below rotates the small character images and displays the information below the card
//This code below is similar to the code above so I will not comment much
var characters = document.querySelectorAll(".card"); //Gets all images with class name "card"

for (let j = 0; j < characters.length; j++) {
    characters[j].onmouseenter = function () {
        characters[j].style.transform = "rotateY(180deg)";
    }
}
for (let j = 0; j < characters.length; j++) {
    characters[j].onmouseleave = function () {
        characters[j].style.transform = "rotateY(360deg)"; 
    }
}
//End of code that rotates character cards