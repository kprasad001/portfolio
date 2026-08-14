import { Github, Linkedin, Mail, Newspaper } from 'lucide-react';
import './CSS/home.css';
import resume from './assets/Kishan_Prasad-Resume.pdf';
import kishan1 from './assets/kishan1.jpg';
import emoji from './assets/emoji.png';
import 'animate.css';

function Home() {

	return (
		<section id="home-section" className='introduction'>
			<section className='intro-flex animate__animated animate__fadeIn'>
				<img className='self' src={kishan1}></img>
				<section className='name-flex'>
					<p className='name'>Kishan Prasad</p>
					<p className='title'>Full-Stack Software Engineer</p>
					<section className='icons'>
						<a href="https://github.com/kprasad001" className="github" target="_blank" rel="noopener noreferrer">
							<Github/>
						</a>
						<a href="https://www.linkedin.com/in/kkprasad1/" className="linked-in-icon" target="_blank" rel="noopener noreferrer">
							<Linkedin/>
						</a>
						<a href="mailto:kkprasad@ualberta.ca" className="mail-icon">
							<Mail/>
						</a>
						<a href={resume} download="Kishan_Prasad-Resume.pdf" className="newspaper-icon">
							<Newspaper/>
						</a>
					</section>
				</section>
			</section>
			<h1>a little bit about me</h1>
			<section className='about-me'>
				<ul>
					<li>studying <b>CS w/ Software Spec. </b> with a minor in <b>Economics</b> @ <a href='https://www.ualberta.ca/en/computing-science/index.html'>UAlberta</a></li>
					<li>currently the <b>Software Lead</b> & <b>Full-Stack Developer</b> @ <a href='https://albertabionix.ca/'>Alberta Bionix</a></li>
					<li>currently a <b>Technology Associate</b> @ <a href='https://www.nat.ltd/'>NAT</a></li>
					<li>currently the <b>Webmaster</b> & <b>Executive</b> @ <a href='https://www.youngmindseye.com/executive-members'>Young Minds Eye</a></li>
					<li>participated in <b>four hackathons,</b> <b>winning two</b> of them </li>
				</ul>
			</section>
		</section>
	)
}

export default Home
