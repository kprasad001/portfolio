import hiking from './assets/about-me/hiking.jpg'
import smashbros from './assets/about-me/smashbros.jpeg'
import skiing from './assets/about-me/skiing.jpg'
import ramen from './assets/about-me/ramen.jpg'
import camping from './assets/about-me/camping.jpeg'
import paddleboarding from './assets/about-me/paddleboarding.jpeg'
import './CSS/about_me.css'
import { useState } from 'react';

function AboutMe() {

	const aboutMeData = [
		{
			id: 1,
			img: hiking,
			desc: 'I like to travel across alberta and go on different hikes with my family and friends.'
		},
		{
			id: 2,
			img: smashbros,
			desc: "I'm super nerdy about smash bros and take the game too seriously."
		},
		{
			id: 3,
			img: skiing,
			desc: 'Every year my friends and I go to the mountains and I always leave in pain.'
		},
		{
			id: 4,
			img: ramen,
			desc: 'Ramen is delicious and everyone else who thinks otherwise is wrong.'
		},
		{
			id: 5,
			img: camping,
			desc: 'I spend my summers camping and drinking with my friends.'
		},
		{
			id: 6,
			img: paddleboarding,
			desc: 'In Vancouver, we went paddleboarding and saw seals!'
		},
	];

	const [selectedFact, setSelectedFact] = useState(0);

	function nextFact() {
		setSelectedFact(prevFact => (prevFact + 1) % aboutMeData.length);
	}

	const fact = aboutMeData[selectedFact];

	return (
		<section id="about-section" className='about'>
			<h1>more about me</h1>
			<section 
				className='cards'
				onClick={nextFact}
				role='button'
				tabIndex={0}
				onKeyDown={(event) => {
					if (event.key === 'Enter' || event.key === ' ') {
						event.preventDefault();
						nextFact();
					}
				}}
				>
				<div className='image-wrap'>
				<img src={fact.img} alt={fact.desc} />
				<span className='click-me'>click me</span>
				</div>
				<p>{fact.desc}</p>
			</section>
		</section>
	)
}

export default AboutMe
