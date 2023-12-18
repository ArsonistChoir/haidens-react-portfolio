import '../App.css'

function Projects() {
    const projects = [
        { title: "Trip Tix", link: "https://chart099.github.io/Bootcamp-Project-1/", githubLink: "https://github.com/chart099/Bootcamp-Project-1", imageSrc: "./src/assets/Screenshot 2023-12-17 at 21-02-25 Document.png" },
        { title: "Review a Movie", link: "https://spooky-ghost-09826-e1fe8c97ce3e.herokuapp.com/", githubLink: "https://github.com/yourusername/your-repo", imageSrc: "./src/assets/Screenshot 2023-12-17 at 21-10-01 Review a Movie.png" },
        { title: "Big City Jobs", link: "https://cryptic-gorge-45528-e8e049cdd22a.herokuapp.com/", githubLink: "https://github.com/yourusername/your-repo", imageSrc: "./src/assets/Screenshot 2023-12-17 at 21-22-01 Big City Jobs.png" },
        { title: "Horiseon SEO", link: "https://arsonistchoir.github.io/Horiseon-SEO/", githubLink: "https://github.com/arsonistchoir/Horiseon-SEO", imageSrc: "./src/assets/Screenshot 2023-12-17 at 21-25-34 Horiseon.png" },
    ];

    return (
        <div id="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h1>{project.title}</h1>
            <p id="github-link-name">
              Github: <a href={project.githubLink} target="_blank" rel="noopener noreferrer" id="github-link">{project.title}</a>
            </p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.imageSrc} alt={project.title} />
            </a>
          </div>
        ))}
      </div>
    );
  }

export default Projects;