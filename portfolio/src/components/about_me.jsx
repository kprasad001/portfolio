import kishan1 from './assets/kishan1.jpg'
import { Code2, Blocks, Rocket } from 'lucide-react';
import './CSS/about_me.css'

function AboutMe() {

	return (
		<section className='about-section'>
			<h1>About</h1>
			<div className='line'></div>
			<div className='about-content'>
				<div className='about-text'>
					<p>
						I'm a passionate full-stack developer with 5+ years of experience building web applications. I specialize in 
						React, TypeScript, and modern web technologies, with a keen eye for design and user experience.
					</p>
					<p>
						When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sharing 
						knowledge with the developer community.
					</p>
				</div>
				<div className='about-photo'>
					<img src={kishan1} alt='Kishan Prasad' />
				</div>
			</div>
			<div className='grid'>
				<div className='border'> 
					<div className='icon'>
						<Code2/>
					</div>
					<p>
						Writing maintainable, scalable, and efficient code that stands the test of time.
					</p>
				</div>
				<div className='border'> 
					<div className='icon'>
						<Blocks/>
					</div>
					<p>
						Writing maintainable, scalable, and efficient code that stands the test of time.
					</p>
				</div>
				<div className='border'> 
					<div className='icon'>
						<Rocket/>
					</div>
					<p>
						Writing maintainable, scalable, and efficient code that stands the test of time.
					</p>
				</div>
			</div>
		</section>
	)
}

export default AboutMe
