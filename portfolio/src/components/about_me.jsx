import kishan1 from './assets/kishan1.jpg'
import { Code2, Blocks, Rocket } from 'lucide-react';
import './CSS/about_me.css'

function AboutMe() {

	return (
		<section className='about-section'>
			<h1>Little Bit About Me</h1>
			<div className='line'></div>
			<div className='about-content'>
				<div className='about-text'>
					<p>
						I'm a passionate full-stack developer with 3+ years of experience building web applications. I specialize in 
						React, TypeScript, and modern web technologies, with a keen eye for design and user experience.
					</p>
					<p>
						When I'm not working, you'll find me playing soccer, volleyball, or playing Smash Bros with my friends.
					</p>
				</div>
				<div className='about-photo'>
					<img src={kishan1} alt='Kishan Prasad' />
				</div>
			</div>
			<div className='grid-about'>
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
						Thriving in collaborative environments and contributes to shared team success.
					</p>
				</div>
				<div className='border'> 
					<div className='icon'>
						<Rocket/>
					</div>
					<p>
						Delivering end-to-end solutions from concept to deployment..
					</p>
				</div>
			</div>
		</section>
	)
}

export default AboutMe
