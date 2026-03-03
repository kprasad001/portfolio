import { Github, Linkedin, Mail } from 'lucide-react';
import './CSS/home.css'
import resume from './assets/Kishan_Prasad-Resume.pdf'

function Home() {

	return (
		<section className='introduction'>
			<p className='role-badge'>Developer & Designer</p>
			<h1>Kishan Prasad</h1>
			<div className='line'></div>
			<h2>Computer Science, Software Practice Specialization</h2>
			<h2>Minor in Economics</h2>
			<p className='intro-summary'>AI / Backend / DevOps / Full-Stack — building reliable systems with clean 
				architecture and strong engineering fundamentals.</p>
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
	)
}

export default Home
