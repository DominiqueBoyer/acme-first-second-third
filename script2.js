const slots = ['first', 'second', 'third'];

const users = [
  {id: 1, name: 'moe', slot:'first'},
  {id: 2, name: 'larry', slot:'second'},
  {id: 3, name: 'curly', slot:'third'},
  {id: 4, name: 'lucy', slot:'third', selected: true },
];


const render = (slot)=>{
  const column = document.querySelector(`#${slot}`);
  const people = users.map(person => {
    if(person.slot === `${slot}`){
      return `<li data-idx='${person.id}'> ${person.name}</li>`
    }
  }).join('');
  const html  =
    `<button> < </button>
    <button> > </button>
    <h2>${slot.toUpperCase()}</h2>
    <div>${people}</div>`
  column.innerHTML = html;
}

slots.forEach(slot =>{render(slot)});


first.addEventListener('click', ev => {
  if(ev.target.getAttribute('selected')=== 'true'){
    ev.target.setAttribute('selected', 'false')
    ev.target.setAttribute('id', ' ')
  }
  else{
    ev.target.setAttribute('selected', 'true');
    ev.target.setAttribute('id', 'Selected');
    users
  };
  console.log(ev.target)
})

second.addEventListener('click', ev => {
  console.log(ev.target)
  if(ev.target.getAttribute('selected')=== 'true'){
    ev.target.setAttribute('selected', 'false')
    ev.target.setAttribute('id', ' ')
  }
  else{
    ev.target.setAttribute('selected', 'true');
    ev.target.setAttribute('id', 'Selected');
    users
  };
})
third.addEventListener('click', ev => {
  console.log(ev.target)
  if(ev.target.getAttribute('selected')=== 'true'){
    ev.target.setAttribute('selected', 'false')
    ev.target.setAttribute('id', ' ')
  }
  else{
    ev.target.setAttribute('selected', 'true');
    ev.target.setAttribute('id', 'Selected');
    users
  };
})
