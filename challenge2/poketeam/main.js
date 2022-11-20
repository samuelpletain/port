import ls from "./modules/ls.js";

const fetchPokemons = async function() {
  let res = []
  for(let i = 0; i<151; i++) {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${i+1}`)
      .then(response => response.json())
      .then(data => {
        const pokemon = {
          name: data.name,
          sprites: data.sprites,
          types: data.types,
          order: data.order
        }
        res.push(pokemon)
      })
  }
  return res
}
let data
if (ls.getData('pokemons')) {
  data = ls.getData('pokemons')
} else {
  data = await fetchPokemons()
  console.log(data)
  ls.setData('pokemons', data)
}


console.log(data)

// const data = ls.getData('pokemons') ?? await fetchPokemons('https://pokeapi.co/api/v2/pokemon/', []);


function renderPokemon(pokemon, parent) {
  console.log(pokemon)
  const div = document.createElement('div')
  div.id = pokemon.order
  div.draggable = true
  div.classList.add('pokemon')
  const img = document.createElement('img')
  img.src = (pokemon.sprites.other['official-artwork'].front_default)
  /* const h1 = document.createElement('h1')
  h1.textContent = pokemon.name
  const p = document.createElement('p')*/
  let types = ''
  for (let type of pokemon.types) {
    types = types.concat(type.type.name + ' ')
  }
  div.dataset.types = types.trim()
  div.append(img)  
  parent.append(div)
}
const app = document.getElementById('app')

for (let pokemon of data) {
  renderPokemon(pokemon, app)
}