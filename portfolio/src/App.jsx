import './App.css'
import { useEffect, useState } from 'react';
import Home from './components/home.jsx'
import AboutMe from './components/about_me.jsx';
import Projects from './components/projects.jsx';
import Experience from './components/experience.jsx';
import Contact from './components/contact.jsx';
import Skills from './components/skills.jsx';
import { Routes, Route, Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Newspaper } from 'lucide-react';
import resume from './components/assets/Kishan_Prasad-Resume.pdf';
import kishan from './components/assets/kishan1.jpg';


function App() {
	const [showRightIcons, setShowRightIcons] = useState(false)

	useEffect(() => {
		const homeSection = document.getElementById('home-section')
		if (!homeSection) {
			return undefined
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				setShowRightIcons(!entry.isIntersecting)
			},
			{
				threshold: 0.1,
			},
		)

		observer.observe(homeSection)

		return () => observer.disconnect()
	}, [])

	function jumpToHome() {
		document.getElementById('home-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
	};
	function jumpToSkills() {
		document.getElementById('skills-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
	};
	function jumpToProjects() {
		document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
	};
	function jumpToAbout() {
		document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
	};
	function jumpToContact() {
		document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
	};




	return (
		<>
		<nav className='left'>
			<div className="nav-links">
				<a href="#home-section" onClick={(event) => { event.preventDefault(); jumpToHome() }}>Home</a>
				<a href="#skills-section" onClick={(event) => { event.preventDefault(); jumpToSkills() }}>Skills</a>
				<a href="#projects-section" onClick={(event) => { event.preventDefault(); jumpToProjects() }}>Projects</a>
				<a href="#about-section" onClick={(event) => { event.preventDefault(); jumpToAbout() }}>About</a>
				<a href="#contact-section" onClick={(event) => { event.preventDefault(); jumpToContact() }}>Contact</a>
			</div>
		</nav>
		<nav className={`right${showRightIcons ? ' right-visible' : ''}`}>
			<img className='self' src={kishan} width={200}></img>
			<p>Kishan Prasad</p>
			<a href="https://github.com/kprasad001" className="github">
				<Github/>
			</a>
			<a href="https://www.linkedin.com/in/kkprasad1/" className="linked-in-icon">
				<Linkedin/>
			</a>
			<a href="mailto:kkprasad@ualberta.ca" className="mail-icon">
				<Mail/>
			</a>
			<a href={resume} download="Kishan_Prasad-Resume.pdf" className="newspaper-icon">
				<Newspaper/>
			</a>
		</nav>
		<main>
			<Home/>
			<Experience/>
			<Skills/>
			<Projects/>
			<AboutMe/>
			<Contact/>
			
		</main>
		<div className='line'></div>
		<footer>
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
				<a href={resume} download="Kishan_Prasad-Resume.pdf" className="newspaper-icon">
					<Newspaper/>
				</a>
				<h3>Kishan Prasad</h3>
			</div>
		</footer>
		</>
	)
}

export default App
