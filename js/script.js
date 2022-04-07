// var landingPageButton = document.getElementById("landing-page-button");
var landingPageButton = document.getElementById("rectangle-81");
var openDoorImg = document.getElementById("open-door");
var closedDoorImg = document.getElementById("closed-door");

function openDoor(){
    console.log("openDoor() called");
    //@TODO: logic to change one displayed image (door_close.png) into another (door_open.png) when this button is pressed 
    closedDoorImg.style.display = "none";
    openDoorImg.style.display = "inline";



}

landingPageButton.addEventListener("click", openDoor);