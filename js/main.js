// Selectors
const time = document.getElementById('time'),
   greeting = document.getElementById('greeting'),
   name = document.getElementById('name'),
   focus = document.getElementById('focus');

// Option
const showAmPm = true;

// Show Time
function showTime() {
   // let today = new Date(2019, 06, 10, 18, 33, 30);
   let today = new Date(),
      hour = today.getHours(),
      min = today.getMinutes(),
      sec = today.getSeconds();

   // Set AM or PM
   const amPm = hour >= 12 ? 'PM' : 'AM';

   // 12 Hour Format
   hour = hour % 12 || 12;

   // Output The time
   time.innerHTML = `${hour}<span>:</span>${addZero(
      min
   )}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

   setTimeout(showTime, 1000);
}

// Set Background and Greeting
function setBgGreet() {
   // let today = new Date(2019, 06, 10, 15, 33, 30);
   let today = new Date(),
      hour = today.getHours();

   if (hour < 12) {
      // Morning
      document.body.style.background = 'url(../morning.jpg)';
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundSize = 'cover';
      greeting.textContent = 'Good Morning';
   } else if (hour < 18) {
      // Afternoon
      document.body.style.backgroundImage = "url('../trees.jpg)";
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundSize = 'cover';
      greeting.textContent = 'Good Afternoon';
   } else {
      // Evening
      document.body.style.background = 'url(../14.jpg)';
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundSize = 'cover';
      greeting.textContent = 'Good Evening';
      document.body.style.color = 'white';
   }
}

// Add Zeros
function addZero(n) {
   return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Get Name Function
function getName() {
   if (localStorage.getItem('name') === null) {
      name.textContent = '[Enter Name]';
   } else {
      name.textContent = localStorage.getItem('name');
   }
}

// Set Name
function setName(e) {
   if (e.type === 'keypress') {
      // Make Sure Enter Is Pressed
      if (e.which == 13 || e.keyCode == 13) {
         localStorage.setItem('name', e.target.innerText);
         name.blur();
      }
   } else {
      localStorage.setItem('name', e.target.innerText);
   }
}

// Get Focus Function
function getFocus() {
   if (localStorage.getItem('focus') === null) {
      focus.textContent = '[Enter Focus]';
   } else {
      focus.textContent = localStorage.getItem('focus');
   }
}

// Set Focus
function setFocus(e) {
   if (e.type === 'keypress') {
      // Make Sure Enter Is Pressed
      if (e.which == 13 || e.keyCode == 13) {
         localStorage.setItem('focus', e.target.innerText);
         focus.blur();
      }
   } else {
      localStorage.setItem('focus', e.target.innerText);
   }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
// Run
showTime();
setBgGreet();
getName();
getFocus();
