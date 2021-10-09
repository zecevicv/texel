/* #Stripped only Main Manu, Demo & Form validation
================================================== */

// Form

document.querySelector('#sendform').addEventListener('click', function (e) {
  document.querySelector('[name="email"]').addEventListener('focus', function () {
    document.querySelector('.demoform-container .error').classList.remove('on')
  })
  var email = document.querySelector('[name="email"]').value;
  if (!ValidateEmail(email)) {
    document.querySelector('.demoform-container .error').classList.add('on')
  } else {
    document.querySelector('[name="email"]').value = '';
    document.querySelector('#thanks').classList.add('on')
    document.querySelector('[name="demoform"]').classList.add('off')
    document.querySelector('.demoform-container .error').classList.remove('on')
  }
  e.preventDefault();
  return false;
})

function ValidateEmail(input) {
  return input.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
}

// Menu & Demo

document.getElementById('show_menu').addEventListener('click', function () {
  document.getElementById('main-menu').classList.add('on')
})

document.querySelectorAll('.requestdemo').forEach(function (e) {
  e.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#thanks').classList.remove('on')
    document.querySelector('[name="demoform"]').classList.remove('off')
    document.getElementById('main-menu').classList.remove('on')
    document.getElementById('demo').classList.add('on');
    return false;
  })
})

document.getElementById('close_manue').addEventListener('click', function () {
  document.getElementById('main-menu').classList.remove('on')
})

document.getElementById('close_demo').addEventListener('click', function () {
  document.getElementById('demo').classList.remove('on')
})

if (window.innerWidth > 1024) {} else {
  document.querySelector('body').classList.add('mobile')
}