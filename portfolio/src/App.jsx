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
			<p>Kishan Prasad</p>
			<div className="nav-links">
				<Link to="/">Home</Link>
				<Link to="/projects">Projects</Link>
				<Link to='/experience'>Experience</Link>
				<Link to="/about">About</Link>
				<Link to="/contact">Contact</Link>
			</div>
		</nav>
		<main>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/experience" element={<Experience />} />
				<Route path="/about" element={<AboutMe />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</main>
		<footer>
			<h3>Full Stack Developer</h3>
			<p>Kishan Prasad</p>
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
