import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import kishan1 from './assets/kishan1.jpg'
import './App.css'
import { ArrowRight, Github, Linkedin, Mail, Code2, Blocks, Rocket } from 'lucide-react';

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
		<nav>
			<p>Kishan Prasad</p>
			<div className="nav-links">
				<a>Home</a>
				<a>Projects</a>
				<a>Experience</a>
				<a>Skills</a>
				<a>About</a>
				<a>Contact</a>
			</div>
		</nav>
		<body>
			<main>
				<section className='introduction'>
					<p>Developer & Designer</p>
					<h1>Kishan Prasad</h1>
					<div className='line'></div>
					<h2>Computer Science - Software Practice Specialization · University of Alberta</h2>
					<p>AI / Backend / DevOps / Full-Stack — building reliable systems with clean 
						architecture and strong engineering fundamentals.</p>
					<button className='button'>
						<p>Resume</p>
					</button>
					<div className="social-media">
						<a href="https://github.com/kprasad001" className="github">
							<Github/>
						</a>
						<a href="https://www.linkedin.com/in/kkprasad1/" className="linked-in-icon">
							<Linkedin/>
						</a>
						<a href="mailto:kkprasad@ualberta.ca" className="mail-icon">
							<Mail/>
						</a>
					</div>
				</section>
				<section>
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
			</main>
		</body>
		</>
	)
}

export default App
