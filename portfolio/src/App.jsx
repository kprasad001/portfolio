import './App.css'
import Home from './components/home.jsx'
import AboutMe from './components/about_me.jsx'
import Projects from './components/projects.jsx'
import Experience from './components/experience.jsx'
import { Routes, Route, Link } from 'react-router-dom'

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
				<a>Contact</a>
			</div>
		</nav>
		<main>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/experience" element={<Experience />} />
				<Route path="/about" element={<AboutMe />} />
			</Routes>
		</main>
		</>
	)
}

export default App
