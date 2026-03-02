import './CSS/projects.css'
import { projectsData } from './JS/projects.js'

function Projects() {

	return (
		<section className='projects'>
            <h1>Projects</h1>
            <div className='line'></div>

            <div className='grid'>
                {projectsData.filter((project) => project.visible).map((project) => (
                    <article className='card' key={project.id}>
                        {project.img ? <img className='card-image' src={project.img} alt={project.title} /> : null}
                        <div className='card-content'>
                            <h3 className='card-title'>{project.title}</h3>
                            <div className='card-tags'>
                                {project.tags?.map((tag) => (
                                    <span className='tag-chip' key={`${project.id}-${tag}`}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <time className='footer'>{project.time}</time>
                        </div>
                    </article>
                ))}
            </div>
			
		</section>
	)
}

export default Projects
