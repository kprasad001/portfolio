import './App.css'
import { useEffect, useState } from 'react';
import Home from './components/home.jsx'
import AboutMe from './components/about_me.jsx';
import Projects from './components/projects.jsx';
import Experience from './components/experience.jsx';
import Contact from './components/contact.jsx';
import Skills from './components/skills.jsx';
import { Routes, Route, Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Newspaper, Moon, Sun } from 'lucide-react';
import resume from './components/assets/Kishan_Prasad-Resume.pdf';
import kishan from './components/assets/kishan1.jpg';


function App() {
	const [showRightIcons, setShowRightIcons] = useState(false)
	const [theme, setTheme] = useState(() => {
		try {
			const stored = localStorage.getItem('theme')
			if (stored) return stored
			if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
		} catch (e) {
			// ignore
		}
		return 'light'
	})

	useEffect(() => {
		try {
			document.documentElement.setAttribute('data-theme', theme)
			localStorage.setItem('theme', theme)
		} catch (e) {
			// ignore
		}
	}, [theme])

	function toggleTheme() {
		setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
	}

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

	// Open non-navigation links in a new tab (adds target and rel), and handle dynamic nodes
	useEffect(() => {
		const setExternalTarget = (el) => {
			if (!el || !el.href) return
			// don't modify navigation links (left nav) or hash/internal anchors
			if (el.closest('.nav-links')) return
			const href = el.getAttribute('href') || ''
			if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return
			try {
				el.setAttribute('target', '_blank')
				el.setAttribute('rel', 'noopener noreferrer')
			} catch (e) {
				// ignore
			}
		}

		document.querySelectorAll('a').forEach(setExternalTarget)

		const mo = new MutationObserver((mutations) => {
			for (const m of mutations) {
				for (const node of m.addedNodes) {
					if (node.nodeType !== 1) continue
					if (node.tagName === 'A') setExternalTarget(node)
					if (node.querySelectorAll) node.querySelectorAll('a').forEach(setExternalTarget)
				}
			}
		})

		mo.observe(document.body, { childList: true, subtree: true })
		return () => mo.disconnect()
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
			<input type='checkbox' className="theme-checkbox" onClick={toggleTheme} aria-label="Toggle theme"/>
				
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
			</div>
			<h3>Kishan Prasad</h3>
		</footer>
		</>
	)
}

export default App
