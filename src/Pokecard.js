import React from 'react';
import './Pokecard.css';

const Pokecard = ({ name, img, base_exp, type }) => (
	<div className="Pokecard">
		<h4 className="Pokecard-name">{name}</h4>
		<img className="Pokecard-img" src={img} />
		<h6 className="Pokecard-type">Type: {type}</h6>
		<h6 className="Pokecard-exp">EXP: {base_exp}</h6>
	</div>
);

export default Pokecard;
