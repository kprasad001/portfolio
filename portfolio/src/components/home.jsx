import { Github, Linkedin, Mail } from 'lucide-react';
import './CSS/home.css'

function Home() {

	return (
		<section className='introduction'>
			<p>Developer & Designer</p>
			<h1>Kishan Prasad</h1>
			<div className='line'></div>
			<h2>Computer Science - Software Practice Specialization · University of Alberta</h2>
			<p>AI / Backend / DevOps / Full-Stack — building reliable systems with clean 
				architecture and strong engineering fundamentals.</p>
			<button className='button'>
				<span>Resume</span>
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
	)
}

export default Home
