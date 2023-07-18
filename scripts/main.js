let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/slam dunk.jpg') {
      myImage.setAttribute('src', 'images/yingmujuntuan.jpeg');
    } else {
      myImage.setAttribute('src', 'images/slam dunk.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = '这个网站酷毙了，' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = '这个网站酷毙了，' + storedName;
}

myButton.onclick = function() {
   setUserName();
}