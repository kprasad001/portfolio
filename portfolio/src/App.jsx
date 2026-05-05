import './App.css'
import Home from './components/home.jsx'
import AboutMe from './components/about_me.jsx'
import Projects from './components/projects.jsx'
import Experience from './components/experience.jsx'
import Contact from './components/contact.jsx'
import { Routes, Route, Link } from 'react-router-dom'
import { Github, Linkedin, Mail } from 'lucide-react';


function App() {
	return (
		<>
		<nav>
			<div className="nav-links">
				<a href="#home-section">Home</a>
				<a href="#projects-section">Projects</a>
				<a href='#experience-section'>Experience</a>
				<a href="#about-section">About</a>
				<a href="#contact-section">Contact</a>
			</div>
		</nav>
		<main>
			<Home/>
			<Projects/>
			<Experience/>
			<AboutMe/>
			<Contact/>
		</main>
		<footer>
			<h3>Full Stack Developer</h3>
			<p>Kishan Prasad</p>
			<h3>kkprasad@ualberta.ca</h3>
			<div className='line2'></div>
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
		</footer>
		</>
	)
}

export default App
