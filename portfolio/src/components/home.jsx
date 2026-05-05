import { Github, Linkedin, Mail } from 'lucide-react';
import './CSS/home.css';
import resume from './assets/Kishan_Prasad-Resume.pdf';
import kishan2 from './assets/kishan2.jpg';

function Home() {

	return (
		<section id="home-section" className='introduction'>
			<section className="info"> 
				<p className='role-badge'>Full-Stack Developer</p>
				<h1>Kishan Prasad</h1>
				<div className='line'></div>
				<h2>Computing Science, Software Practice Specialization</h2>
				<h2>Minor in Economics</h2>
				<p className='intro-summary'>Hello! I am a CS student trying my hardest. I've been developing projects from scratch using agile 
					development, DevOps, and AI. I like working across the stack and learning from every project 
					I build.</p>
				<a className='button' href={resume} download='Kishan_Prasad_Resume.pdf'>
					<span>Resume</span>
				</a>
				<div className="social-media">
					<a href="https://github.com/kprasad001" className="github" target='_blank' rel='noreferrer'>
						<Github/>
					</a>
					<a href="https://www.linkedin.com/in/kkprasad1/" className="linked-in-icon" target='_blank' rel='noreferrer'>
						<Linkedin/>
					</a>
					<a href="mailto:kkprasad@ualberta.ca" className="mail-icon">
						<Mail/>
					</a>
				</div>
			</section>
			<section classname="picture">
				<img src={kishan2} width="600"/>
			</section>
		</section>
	)
}

export default Home
