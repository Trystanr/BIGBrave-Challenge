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

// import pants from '../../../images/character/pants.svg';

import Logo from '../../../images/character/PantsItem';


import logo from '../../../images/icon.png';

export default function CharacterImage(props) {

	function calcAge(dob) {
		let birthDate = new Date(dob);
		let age = new Date(Date.now() - birthDate.getTime());

		return Math.abs(age.getUTCFullYear() - 1970);
	}

	function getHead() {
		let hGender = props.values.gender;

		// Toss the coin
		if (props.values.gender == "other") {
			console.log(Math.round(Math.random() * 1));
			if (Math.round(Math.random() * 1) == 0) {
				hGender = "female";
			} else {
				hGender = "male";
			}
		}

		if (hGender == "female") {
			if (calcAge(props.values.dob) < 60) {
				return fHead;
			} else {
				return oldFHhead;
			}
		} else if (hGender == "male") {
			if (calcAge(props.values.dob) < 60) {
				return mHead;
			} else {
				return oldMHead;
			}
		}
	}

	return (
		<React.Fragment>
			
			<div id="characterCont">
				{/*{<img id="legs" src= {pants} />}*/}
				{<Logo fill={props.values.favouriteColour} className="legs"/>}
				<img id="torso" src=
				{
				    {
				    	'chef': chef,
				      	'developer': developer,
				      	'social media influencer': socialMedia,
				      	'yoga instructor': yoga
				    }[props.values.occupation]
				}
				/>
				<img id="head" src={getHead()} />
				
			</div>
			<p className="char-blurb">{`What's up, I'm ${props.values.firstName} ${props.values.lastName}, age ${calcAge(props.values.dob)} and I'm a world class ${props.values.occupation}`} </p>
		</React.Fragment>
	);
}
