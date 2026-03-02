import { useState } from 'react'
import './CSS/projects.css'
import { projectsData } from './JS/projects.js'

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)

    const closeModal = () => setSelectedProject(null)

	return (
		<section className='projects'>
            <h1>Projects</h1>
            <div className='line'></div>

            <div className='grid'>
                {projectsData.filter((project) => project.visible).map((project) => (
                    <article
                        className='card'
                        key={project.id}
                        onClick={() => setSelectedProject(project)}
                        role='button'
                        tabIndex={0}
                        onKeyDown={(event) => {
                            if (event.key === 'Enter' || event.key === ' ') {
                                event.preventDefault()
                                setSelectedProject(project)
                            }
                        }}
                    >
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

            {selectedProject && (
                <div className='project-modal-overlay' onClick={closeModal}>
                    <div className='project-modal' onClick={(event) => event.stopPropagation()}>
                        <button className='modal-close' onClick={closeModal} type='button' aria-label='Close'>
                            ×
                        </button>
                        {selectedProject.img ? <img className='modal-image' src={selectedProject.img} alt={selectedProject.title} /> : null}
                        <h3>{selectedProject.title}</h3>
                        <p className='modal-time'>{selectedProject.time}</p>
                        <p className='modal-description'>{selectedProject.desc}</p>
                        <div className='card-tags'>
                            {selectedProject.tags?.map((tag) => (
                                <span className='tag-chip' key={`modal-${selectedProject.id}-${tag}`}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            )}
			
		</section>
	)
}

export default Projects
