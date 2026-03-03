import './CSS/experience.css'

function Experience() {
	const experienceData = [
		{
			id: 1,
			role: 'Software Developer',
			company: 'Alberta Bionix',
			location: 'Edmonton, AB',
			time: '2025 - Present',
			highlights: [
				'Created an EMG acquisition interface for collecting and visualizing real-time sensor data.',
				'Improved signal processing workflows to help evaluate electrode placement quality.',
				'Worked closely with hardware-focused teammates to validate low-latency control behavior.'
			]
		},
		{
			id: 2,
			role: 'Full-Stack Developer',
			company: 'Hackathon Projects',
			location: 'Edmonton, AB',
			time: '2025 - 2026',
			highlights: [
				'Built dashboard-style web apps to track workflows and reduce user friction.',
				'Implemented backend APIs and database models for reliable data handling.',
				'Delivered polished demos with clear UX in short iteration cycles.'
			]
		},
		{
			id: 3,
			role: 'ML + Systems Contributor',
			company: 'NeuroMotion Team',
			location: 'Edmonton, AB',
			time: '2025',
			highlights: [
				'Pre-processed EEG streams and extracted features for model training.',
				'Integrated model predictions into a real-time interface for movement intent display.',
				'Collaborated across software and research roles to validate results.'
			]
		}
	]

	return (
		<section className='experience'>
			<h1>Experience</h1>
			<div className='line'></div>

			<div className='experience-grid'>
				{experienceData.map((experience) => (
					<article className='experience-card' key={experience.id}>
						<div className='experience-item-head'>
							<h3 className='experience-role'>{experience.role}</h3>
							<time className='experience-time'>{experience.time}</time>
						</div>
						<div className='experience-item-subhead'>
							<p className='experience-company'>{experience.company}</p>
							<p className='experience-location'>{experience.location}</p>
						</div>
						<ul className='experience-highlights'>
							{experience.highlights.map((highlight) => (
								<li key={`${experience.id}-${highlight}`}>{highlight}</li>
							))}
						</ul>
					</article>
				))}
			</div>
			
		</section>
	)
}

export default Experience