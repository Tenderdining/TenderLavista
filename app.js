



let items = document.querySelectorAll('.item') ;
let categorys = document.querySelectorAll('.category') ;






function openItem (items) {


    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function() {
    
        window.scrollTo(0, items[i].offsetTop - 40 - 50) ;
    })
    }
}

openItem(items) ;



let form;
let action;

function findElements() {
  form = document.querySelector('form');
  ({ action } = form);
}

function showMessage(data) {
  alert('Thank you for your cooperation');
}

function onSuccess(response) {
  return response.json().then(showMessage);
}

function onError(data) {
  console.error(data);
}

function collectData(currentForm) {
  const data = new FormData(currentForm);
  return data;
}

function setOptions(currentForm) {
  return {
    method: 'post',
    body: collectData(currentForm),
  };
}

function sendForm(currentForm) {
  return fetch(action, setOptions(currentForm));
}

function onSubmit(event) {
  event.preventDefault();
  const { currentTarget } = event;
  sendForm(currentTarget)
    .then(response => onSuccess(response, currentTarget))
    .catch(onError);
}

function subscribe() {
  form.addEventListener('submit', onSubmit);
}

function init() {
  findElements();
  subscribe();
}

init(); 




let getTime = document.getElementById('getTime') ;


getTime.value = Date() ;



window.onscroll = function () {
    if (window.pageYOffset >= 30) {
        document.querySelector('header').classList.add('scroll') ;
    } else {
        document.querySelector('header').classList.remove('scroll') ;
    }
}