import '../styles/index.scss';

console.log('webpack starterkit');

const axios = require('axios');

//[ARJ 1]

var list_pokemons = document.getElementById('pokemons');

const getPokemons = async () =>
 	await axios.get('https://pokeapi.co/api/v2/generation/1/')
    	.then(response => {
    		const { data: { pokemon_species }, status } = response;
        if (status === 200) {
          const generation = pokemon_species.filter((value, key)=> key <= 149);
          generation.map((value, key) => {
            var content = key +' - ' + value['name'];
            var li = document.createElement("li");
            var p = document.createElement("p");
            p.appendChild(document.createTextNode(content));
            list_pokemons.appendChild(li).appendChild(p);
          });
        }
    	})
      .catch(error => error);

const pokemons = getPokemons();

// [ARJ 2]

var pokemons_arj_2_p1 = document.getElementById('pokemons_arj_2_p1');
var pokemons_arj_2_p2 = document.getElementById('pokemons_arj_2_p2');

const fetchPokemonsGenerationOne = () => {
  const p1 = axios.get('https://pokeapi.co/api/v2/generation/1/')
    .then(response => { 
      const {
        data: {
          pokemon_species
        }
      } = response;
      return pokemon_species;
    })
    .catch(error => { return error; });

  return p1;
}

const fetchPokemonsGenerationTwo = () => {
  const p2 = axios.get('https://pokeapi.co/api/v2/generation/2/')
  .then(response => {
    const {
        data: {
          pokemon_species
        }
      } = response;
      return pokemon_species;
  })
  .catch(error => { return error; })
  return p2;
}

Promise.all([fetchPokemonsGenerationOne(),fetchPokemonsGenerationTwo()])
  .then(response => {
    response.map((value, key) => {
      let k = key;
      value.map((value, key) => {
            var content = key +' - ' + value['name'];
            var li = document.createElement("li");
            var p = document.createElement("p");
            p.appendChild(document.createTextNode(content));
            if (k === 0) {
              pokemons_arj_2_p1.appendChild(li).appendChild(p);
            } else {
              pokemons_arj_2_p2.appendChild(li).appendChild(p);
            }
          });
    });
  })
  .catch(error => console.log(error));