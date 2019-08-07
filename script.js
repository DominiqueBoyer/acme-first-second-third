const firstPeople = document.querySelector('#firstPeople');
const secondPeople = document.querySelector('#secondPeople');
const thirdPeople = document.querySelector('#thirdPeople');
const firstArr = document.querySelector('#firstArrows');
const secondArr = document.querySelector('#secondArrows');
const thirdArr = document.querySelector('#thirdArrows');




const slots = ['first', 'second', 'third'];

const users = [
  {id: 1, name: 'moe', slot:'first'},
  {id: 2, name: 'larry', slot:'second'},
  {id: 3, name: 'curly', slot:'third'},
  {id: 4, name: 'lucy', slot:'third', selected: true },
];


const render = ()=> {
  const htmlFirst = users.map((person)=>{
    if(person.slot ==='first'){
      return `<div> ${person.name}</div>`
    }
  }).join('');
  firstPeople.innerHTML = htmlFirst;
  const htmlSecond = users.map((person)=>{
    if(person.slot ==='second'){
      return `<div> ${person.name}</div>`
    }
  }).join('');
  secondPeople.innerHTML = htmlSecond;
  const htmlThird = users.map((person)=>{
    if(person.slot ==='third'){
      return `<div> ${person.name}</div>`
    }
  }).join('');
  thirdPeople.innerHTML = htmlThird;
};

render();

firstPeople.addEventListener('click', ev => {
  console.log(ev.target.innerHTML)
  if(ev.target.getAttribute('selected')=== 'true'){
    ev.target.setAttribute('selected', 'false')
    ev.target.setAttribute('style', 'background-color: white')
  }
  else{
    ev.target.setAttribute('selected', 'true');
    ev.target.setAttribute('style', 'background-color:tomato');
    users
  };

});

secondPeople.addEventListener('click', ev => {

  if(ev.target.getAttribute('selected')=== 'true'){
    ev.target.setAttribute('selected', 'false')
    ev.target.setAttribute('style', 'background-color: white')
  }
  else{
    ev.target.setAttribute('selected', 'true');
    ev.target.setAttribute('style', 'background-color:tomato');
    users
  };

});


thirdPeople.addEventListener('click', ev => {

  if(ev.target.getAttribute('selected')=== 'true'){
    ev.target.setAttribute('selected', 'false')
    ev.target.setAttribute('style', 'background-color: white')
  }
  else{
    ev.target.setAttribute('selected', 'true');
    ev.target.setAttribute('style', 'background-color:tomato');
    users
  };

});

console.log(users)

firstArr.addEventListener('click', (ev)=>{
  console.log(ev.target.parentNode.parentNode.childNodes[5])


})

secondArr.addEventListener('click', (ev)=>{
  console.log(ev.target)

})

thirdArr.addEventListener('click', (ev)=>{
  console.log(ev.target)

})
