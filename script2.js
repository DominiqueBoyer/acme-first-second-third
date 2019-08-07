const slots = ['first', 'second', 'third'];

const users = [
  {id: 1, name: 'moe', slot:'first'},
  {id: 2, name: 'larry', slot:'second'},
  {id: 3, name: 'curly', slot:'third'},
  {id: 4, name: 'lucy', slot:'third', selected: true },
];


const render = (slot)=>{
  const column = document.querySelector(`#${slot}`);
  const html = users.map(person => {
    if(person.slot === `${slot}`){
      return `<button> < </button>
      <button> > </button>
      <h2>${slot}</h2>
      <ul>
      

      `
    }
  })

  column.innerHTML = html;



}
