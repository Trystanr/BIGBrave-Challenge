import React from 'react';

import "../../../styles/character.css";

import chef from '../../../images/character/chef.png';
import developer from '../../../images/character/developer.png';
import socialMedia from '../../../images/character/social-media.png';
import yoga from '../../../images/character/yoga.png';

import fHead from '../../../images/character/f-head.png';
import mHead from '../../../images/character/m-head.png';

import oldFHhead from '../../../images/character/old-f-head.png';
import oldMHead from '../../../images/character/old-m-head.png';

import pants from '../../../images/character/pants.svg';

import logo from '../../../images/icon.png';

export default function CharacterImage(props) {

	return (
		<React.Fragment>
			<h1>Character here sir {props.values.firstName}</h1>
			<div id="characterCont">
				<img id="legs" src={pants} />
				<img id="torso" src=
				{
				    {
				    	'chef': chef,
				      	'developer': developer,
				      	'socialMedia': socialMedia,
				      	'yoga': yoga
				    }[props.values.occupation]
				}
				 />
				{/*<img id="torso" src={chef} />*/}
				<img id="head" src={fHead} />
			</div>
		</React.Fragment>
	);
}
