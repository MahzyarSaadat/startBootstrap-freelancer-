window.onscroll = function() {myfunction()}

function myfunction() {
    if (document.documentElement.scrollTop > 20) {
        document.querySelector('header h2').style.fontSize = '16px';
      } else {
        document.querySelector('header h2').style.fontSize = '32px';
      }
}

const fullName = document.getElementById('fullName__');
const email = document.getElementById('email__');
const phone = document.getElementById('phone__');
const message = document.getElementById('message__');

fullName.addEventListener('click' , () => {
    fullName.querySelector('label').classList.add("formAnimation-font")
})

email.addEventListener('click' , () => {
  email.querySelector('label').classList.add("formAnimation-font")
})

phone.addEventListener('click' , () => {
  phone.querySelector('label').classList.add("formAnimation-font")
})

message.addEventListener('click' , () => {
  message.querySelector('label').classList.add("formAnimation-font")
})

const menuBTN = document.querySelector('#menu-button');
const menuContent = document.getElementById('menu-content');

menuBTN.addEventListener('click' , e => {
  
})





