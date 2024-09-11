const fs = require('fs').promises;
const axios = require('axios');

let arregloPokemones =  [];


const consultarListaPokemones = async (nombrePokemon) => {
    const urlBase = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;

    const response = await axios.get(urlBase);
    
        try {
            let pokemonActual = response.data;

            console.log("-----------------------------------------");
            console.log(`Nombre       : ${pokemonActual.name}`);
            console.log(`Experiencia  : ${pokemonActual.base_experience}`);
            //decímetros a metros
            console.log(`Altura (Mtrs): ${pokemonActual.height / 10}`);
            //hectogramos a kilogramos
            console.log(`Peso (Kg)    : ${pokemonActual.weight / 10}`);
        }
        catch(err){
            console.log(err)
        }
}


const leerArchivo = async() =>{

    try{
        const resp = await fs.readFile("pokemones.txt");

        arregloPokemones = JSON.parse(resp);

        for (const pokemon of arregloPokemones) {
            await consultarListaPokemones(pokemon);
        }

        }
        catch (error) {
            console.log("Error cargando archivo" + error.message)
        }
}

leerArchivo();






