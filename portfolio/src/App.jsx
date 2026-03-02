import './App.css'
import Home from './components/home.jsx'
import AboutMe from './components/about_me.jsx'
//import Projects from './components/projects.jsx'
//import Experience from './components/experience.jsx'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
	return (
		<>
		<nav>
			<p>Kishan Prasad</p>
			<div className="nav-links">
				<Link to="/">Home</Link>
				<a href="/projects">Projects</a>
				<a href='/experience'>Experience</a>
				<Link to="/about">About</Link>
				<a>Contact</a>
			</div>
		</nav>
		<main>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<AboutMe />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/experience" element={<Experience />} />
			</Routes>
		</main>
		</>
	)
}

export default App
