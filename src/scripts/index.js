import '../styles/index.scss';

console.log('webpack starterkit');

const axios = require('axios');

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