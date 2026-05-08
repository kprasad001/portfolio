import kishan1 from './assets/kishan2.jpg'
import { Code2, Blocks, Rocket } from 'lucide-react';
import './CSS/about_me.css'

function AboutMe() {

	const [selectedFact, setSelectedFact] = useState(0);

	const aboutMeData = [
		{
			id: 1,
			img: kishan1,
			desc: "I love hiking"
		},
		{
			id: 2,
			img: kishan1,
			desc: "I love pooping"
		},
	];

	return (
		<section id="about-section" className='about'>
			<h1>more about me</h1>
			{aboutMeData.map((fact) => (
			<section className='card'>
				<img src={fact.img}></img>
				<p>{fact.desc}</p>
			</section>
			))}
		</section>
	)
}

export default AboutMe
