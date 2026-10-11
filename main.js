const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "D:\\我的文档\\Pictures\\Screenshots\\p2.png") {
    myImage.setAttribute("src", "D:\\我的文档\\Pictures\\Screenshots\\p1.png");
  } else {
    myImage.setAttribute("src", "D:\\我的文档\\Pictures\\Screenshots\\p2.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
};

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}!`;
};

myButton.onclick = function () {
  setUserName();
};