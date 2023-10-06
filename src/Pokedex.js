import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

const Pokedex = (props) => {
	const pokemon = Object.keys(props);
	return (
		<div className="Pokedex">
			<h1 className="Pokedex-header">Pokedex</h1>
			<div className="Pokedex-container">
				{pokemon.map((idx) => (
					<Pokecard
						name={props[idx].name}
						type={props[idx].type}
						base_exp={props[idx].base_exp}
						img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props[idx].id}.png`}
					/>
				))}
			</div>
		</div>
	);
};

Pokedex.defaultProps = [
	{ id: 4, name: 'Charmander', type: 'fire', base_exp: 62 },
	{ id: 7, name: 'Squirtle', type: 'water', base_exp: 63 },
	{ id: 11, name: 'Metapod', type: 'bug', base_exp: 72 },
	{ id: 12, name: 'Butterfree', type: 'flying', base_exp: 178 },
	{ id: 25, name: 'Pikachu', type: 'electric', base_exp: 112 },
	{ id: 39, name: 'Jigglypuff', type: 'normal', base_exp: 95 },
	{ id: 94, name: 'Gengar', type: 'poison', base_exp: 225 },
	{ id: 133, name: 'Eevee', type: 'normal', base_exp: 65 },
];

export default Pokedex;
