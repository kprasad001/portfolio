import kishan1 from './assets/kishan2.jpg'
import { Code2, Blocks, Rocket } from 'lucide-react';
import './CSS/about_me.css'

function AboutMe() {

	return (
		<section id="about-section" className='about'>
			<h1>more about me</h1>
			<section className='card'>
				<p>I love hiking</p>
				<img src={kishan1}></img>
			</section>
		</section>
	)
}

export default AboutMe
