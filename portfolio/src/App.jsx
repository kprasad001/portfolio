import './App.css'
import Home from './components/home.jsx'
import AboutMe from './components/about_me.jsx'

function App() {
	return (
		<>
		<nav>
			<p>Kishan Prasad</p>
			<div className="nav-links">
				<a>Home</a>
				<a>Projects</a>
				<a>Experience</a>
				<a>Skills</a>
				<a>About</a>
				<a>Contact</a>
			</div>
		</nav>
		<main>
			<Home />
			<AboutMe />
		</main>
		</>
	)
}

export default App
