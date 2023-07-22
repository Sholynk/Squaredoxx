//Welcome message command code.

window.onload = function welcome() {
  document.getElementById('welcomeMessage').classList.add('show');
}

const unDisplay = document.querySelector('.message');


window.addEventListener('click', welcome);

let box = document.getElementById('welcomeMessage');

function welcome() {
  if (event.target != box && event.target.parentNode != box) {
    unDisplay.style.display = 'none';
  }


}


//Promotional command code.

let j = 0;
let pics = [];
let clock = 2000;

pics[0] = '/image/Advert-1.png';
pics[1] = '/image/official sq logo .png';
pics[2] = '/image/official sq logo .png';
pics[3] = '/image/programming flyer.png';
pics[4] = '/image/sq 3d logo.png';


function Head() {
  document.slide.src = pics[j];
  if (j < pics.length - 1) {
    j++
  } else {
    j = 0;
  }

  setTimeout('Head()', clock)
}

window.addEventListener('DOMContentLoaded', Head);

const topPage = document.querySelector('.scroll-up');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    topPage.classList.add('active');
  } else {
    topPage.classList.remove('active');
  }
})


document.querySelector('#mobileNav').addEventListener('click', navClick);

const mobileBar = document.querySelector('.Navigation-background');
const navContent = document.querySelector('.Navigation');


//const bar = document.querySelector('#mobileNav');
function navClick() {
  mobileBar.style.display = 'flex';
  navContent.style.right = '0';

}



document.querySelector('.nav-exit').addEventListener('click', () => {
  mobileBar.style.display = 'none';
  navContent.style.right = '-80%';
})



// document.getElementById("myDropdown").classList.toggle("show");
//}

// Close the dropdown if the user clicks outside of it
/*window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
*/



let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("username");
  let password = document.getElementById("password");
  let textArea = document.getElementById("textArea");

  if (username.value == "" || password.value == "") {
    alert("Ensure you input a value in all fields!");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a username of ${username.value} and password of ${password.value}`
    );

    //username.value = "";
    //password.value = "";
  }


  const body = 'name: ' + username.value + '<br/> email: ' + password.value + '<br/> message:' + textArea.value;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: 'sholynk',
    Password: 'but why',
    To: 'seun33154@gmail.com',
    From: "sholabusari66@gmail.com",
    Subject: "Contact message",
    Body: body
  }).then(
    message => alert(message)
  );
});