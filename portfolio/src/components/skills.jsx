import './CSS/skills.css';
import 'animate.css';

function Skills() {
  const categories = [
    {
      id: 'frontend',
      title: 'Frontend',
      items: [
        { name: 'React', icon: 'devicon-react-original colored' },
        { name: 'React Native', icon: 'devicon-react-original colored' },
        { name: 'Next.js', icon: 'devicon-nextjs-plain colored' },
        { name: 'Vite', icon: 'devicon-vitejs-plain colored' },
      ],
    },
    {
      id: 'backend',
      title: 'Backend',
      items: [
        { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
        { name: 'FastAPI', icon: 'devicon-python-plain colored' },
        { name: 'Flask', icon: 'devicon-flask-original colored' },
        { name: 'Django', icon: 'devicon-django-plain colored' },
      ],
    },
    {
      id: 'databases',
      title: 'Database',
      items: [
        { name: 'SQLite', icon: 'devicon-sqlite-plain colored'},
        { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
        { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
        { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
        { name: 'Firebase', icon: 'devicon-firebase-plain colored' },
      ],
    },
    {
      id: 'devops',
      title: 'DevOps',
      items: [
        { name: 'Git', icon: 'devicon-git-plain colored' },
        { name: 'Docker', icon: 'devicon-docker-plain colored' },
        { name: 'AWS', icon: 'devicon-amazonwebservices-plain colored' },
      ],
    },
    {
      id: 'languages',
      title: 'Languages',
      items: [
        { name: 'Python', icon: 'devicon-python-plain colored' },
        { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
        { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
        { name: 'Java', icon: 'devicon-java-plain colored' },
        { name: 'PHP', icon: 'devicon-php-plain colored' },
        { name: 'C', icon: 'devicon-c-plain colored' },
        { name: 'C++', icon: 'devicon-cplusplus-plain colored' },
        { name: 'HTML', icon: 'devicon-html5-plain colored' },
        { name: 'CSS', icon: 'devicon-css3-plain colored' },
      ],
    },
  ];

  return (
    <section id="skills-section" className="introduction">
        <h1>aquired skills</h1>
        <div className="skills-grid">
            {categories.map((cat) => (
            <div className="skills-category" key={cat.id}>
                <div className="category-title">{cat.title}</div>
                <div className="category-grid">
                {cat.items.map((s, i) => (
                    <div className="skill-item" key={s.name + i}>
                    {s.icon ? (
                        <i className={`${s.icon} skill-icon`} aria-hidden="true" />
                    ) : (
                        <div className="skill-icon" />
                    )}
                    <div className="skill-label">{s.name}</div>
                    </div>
                ))}
                </div>
            </div>
            ))}
        </div>
    </section>
  );
}

export default Skills;
