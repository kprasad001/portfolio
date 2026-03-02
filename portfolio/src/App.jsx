import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
		<body>
			<nav class="top-bar fixed">
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
				<section className='introduction'>
					<p>Developer & Designer</p>
					<h1>Kishan Prasad</h1>
					<div className='line'></div>
					<h2>Computer Science - Software Practice Specialization · University of Alberta</h2>
					<p>AI / Backend / DevOps / Full-Stack — building reliable systems with clean 
						architecture and strong engineering fundamentals.</p>
				</section>
			</main>
		</body>
		</>
	)
}

export default App
