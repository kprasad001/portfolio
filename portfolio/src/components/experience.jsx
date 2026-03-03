import './CSS/experience.css'

function Experience() {
	const experienceData = [
		{
			id: 1,
			role: 'Software Developer & Researcher',
			company: 'Alberta Bionix - Student Led Engineering Club',
			location: 'Edmonton, AB',
			time: 'September 2025 - Present',
			highlights: [
				'Contributed to the development of responsive prosthetic control by enabling accurate detection of muscle activation for movement intent.',
				'Secured funding for the club by pitching technical projects and research goals to external sponsors.',
				"Developed and deployed a custom program to support experiments with 50+ able-bodied and amputee participants, evaluating muscle activation patterns."
			]
		},
		{
			id: 2,
			role: 'Webmaster & Administration',
			company: 'Help Young Minds Initiative - Student Led Tutoring Club',
			location: 'Edmonton, AB',
			time: 'April 2025 - Present',
			highlights: [
				'Supported preventive maintenance of the site by updating content, blogs, and features to reduce future issues.',
				'Boosted blog engagement by making educational content more accessible to students and parents.',
				'Collaborated with executive team members to align website content with organizational goals.'
			]
		},
		{
			id: 3,
			role: 'Assistant Electrician',
			company: 'Laser Electrical Ltd.',
			location: 'Edmonton, AB',
			time: 'June 2023 - August 2025',
			highlights: [
				'Collaborated with electricians to solve technical problems, contributing to installations and repairs.',
				'Operated electrical testing and measurement tools to assess system performance and verify functionality.',
				'Reviewed and interpreted electrical schematics and technical drawings under master electrician supervision.'
			]
		},
		{
			id: 4,
			role: 'Field Maintenance',
			company: 'Lewis Estates Golf Course',
			location: 'Edmonton, AB',
			time: 'June 2022 - September 2022',
			highlights: [
				'Collaborated with grounds crew members to complete projects efficiently, demonstrating teamwork.',
				'Monitored field conditions to detect risks and implement timely solutions for sustained performance.',
				'Maintained accurate records of maintenance activities for accountability and continuous improvement.'
			]
		},
		{
			id: 5,
			role: 'Crew Member',
			company: "Wendy's",
			location: 'Edmonton, AB',
			time: 'June 2021 - April 2022',
			highlights: [
				'Maintained cleanliness and organization to meet health and safety regulations.',
				'Demonstrated strong time management and multitasking to balance multiple responsibilities.',
				'Adapted quickly to changing priorities during high-volume periods while maintaining efficiency.'
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