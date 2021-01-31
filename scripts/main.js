let myImage = document.querySelector("img");
myImage.onclick = () => {
    let mySrc = myImage.getAttribute("src");
    if (mySrc == "images/Firefox-Logo.png") {
        myImage.setAttribute("src", "images/Firefox-Dev-Logo.png");
    } else {
        myImage.setAttribute("src","images/Firefox-Logo.png");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");

function setUserName() {
    let myName = prompt("Please enter your name:");
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.innerHTML = myName + " Welcome to the page!"
    }
    
}
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = storedName + " Welcome to the page!"
}
myButton.onclick = () => {
    setUserName();
};