import { useState } from 'react'
import './CSS/projects.css'
import { projectsData } from './JS/projects.js'

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [selectedTag, setSelectedTag] = useState('All')

    const getAvailableTags = () => {
        const tagsSet = new Set()

        projectsData.forEach((project) => {
            if (project.visible && project.tags && project.tags.length > 0) {
                project.tags.forEach((tag) => tagsSet.add(tag))
            }
        })

        const tags = Array.from(tagsSet).sort((tagA, tagB) => tagA.localeCompare(tagB))
        return ['All', ...tags]
    }

    const matchesSelectedTag = (project) => {
        if (selectedTag === 'All') {
            return true
        }

        if (!project.tags || project.tags.length === 0) {
            return false
        }

        return project.tags.includes(selectedTag)
    }

    const getFilterButtonClassName = (tag) => {
        if (tag === selectedTag) {
            return 'filter-chip active'
        }

        return 'filter-chip'
    }

    const visibleProjects = projectsData.filter((project) => project.visible)
    const filteredProjects = visibleProjects.filter((project) => matchesSelectedTag(project))

    const getProjectImages = (project) => {
        if (!project) {
            return []
        }

        if (project.images && project.images.length > 0) {
            return project.images
        }

        if (!project.img) {
            return []
        }

        if (Array.isArray(project.img)) {
            return project.img
        }

        return [project.img]
    }

    const openModal = (project) => {
        setSelectedProject(project)
        setCurrentImageIndex(0)
    }

    const closeModal = () => {
        setSelectedProject(null)
        setCurrentImageIndex(0)
    }

    const showPreviousImage = () => {
        if (!selectedProject) {
            return
        }

        const images = getProjectImages(selectedProject)
        if (images.length <= 1) {
            return
        }

        const previousIndex = currentImageIndex - 1
        if (previousIndex < 0) {
            setCurrentImageIndex(images.length - 1)
            return
        }

        setCurrentImageIndex(previousIndex)
    }

    const showNextImage = () => {
        if (!selectedProject) {
            return
        }

        const images = getProjectImages(selectedProject)
        if (images.length <= 1) {
            return
        }

        const nextIndex = currentImageIndex + 1
        if (nextIndex >= images.length) {
            setCurrentImageIndex(0)
            return
        }

        setCurrentImageIndex(nextIndex)
    }

    const getCardImage = (project) => {
        const images = getProjectImages(project)
        if (images.length === 0) {
            return null
        }

        return images[0]
    }

    const getCurrentModalImage = () => {
        if (!selectedProject) {
            return null
        }

        const images = getProjectImages(selectedProject)
        if (images.length === 0) {
            return null
        }

        if (currentImageIndex < 0 || currentImageIndex >= images.length) {
            return images[0]
        }

        return images[currentImageIndex]
    }

    const renderProjectImage = (project, className) => {
        const imageSource = getCardImage(project)
        if (!imageSource) {
            return null
        }

        return <img className={className} src={imageSource} alt={project.title} />
    }

    const renderProjectTags = (project, keyPrefix = '') => {
        if (!project || !project.tags || project.tags.length === 0) {
            return null
        }

        return project.tags.map((tag) => (
            <span className='tag-chip' key={`${keyPrefix}${project.id}-${tag}`}>
                {tag}
            </span>
        ))
    }

	return (
		<section className='projects'>
            <h1>Projects</h1>
            <div className='line'></div>

            <div className='project-filters'>
                {getAvailableTags().map((tag) => (
                    <button
                        key={tag}
                        type='button'
                        className={getFilterButtonClassName(tag)}
                        onClick={() => setSelectedTag(tag)}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            <div className='grid'>
                {filteredProjects.map((project) => (
                    <article
                        className='card'
                        key={project.id}
                        onClick={() => openModal(project)}
                        role='button'
                        tabIndex={0}
                        onKeyDown={(event) => {
                            if (event.key === 'Enter' || event.key === ' ') {
                                event.preventDefault()
                                openModal(project)
                            }
                        }}
                    >
                        {renderProjectImage(project, 'card-image')}
                        <div className='card-content'>
                            <h3 className='card-title'>{project.title}</h3>
                            <div className='card-tags'>
                                {renderProjectTags(project)}
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
                        <img className='modal-image' src={getCurrentModalImage()} alt={selectedProject.title} />
                        {getProjectImages(selectedProject).length > 1 && (
                            <div className='modal-slideshow-controls'>
                                <button type='button' className='slide-button' onClick={showPreviousImage} aria-label='Previous image'>
                                    Previous
                                </button>
                                <span className='slide-indicator'>
                                    {currentImageIndex + 1} / {getProjectImages(selectedProject).length}
                                </span>
                                <button type='button' className='slide-button' onClick={showNextImage} aria-label='Next image'>
                                    Next
                                </button>
                            </div>
                        )}
                        <h3>{selectedProject.title}</h3>
                        <p className='modal-time'>{selectedProject.time}</p>
                        <p className='modal-description'>{selectedProject.desc}</p>
                        <div className='card-tags'>
                            {renderProjectTags(selectedProject, 'modal-')}
                        </div>
                    </div>
                </div>
            )}
			
		</section>
	)
}

export default Projects
