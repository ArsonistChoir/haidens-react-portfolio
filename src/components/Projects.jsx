function Projects() {
    const projects = [
        { title: "Trip Tix", link: "https://chart099.github.io/Bootcamp-Project-1/", imageSrc: "./src/assets/Screenshot 2023-12-17 at 21-02-25 Document.png" },
        { title: "Review a Movie", link: "https://spooky-ghost-09826-e1fe8c97ce3e.herokuapp.com/", imageSrc: "./src/assets/Screenshot 2023-12-17 at 21-10-01 Review a Movie.png" },
        { title: "Big City Jobs", link: "https://cryptic-gorge-45528-e8e049cdd22a.herokuapp.com/", imageSrc: "./src/assets/Screenshot 2023-12-17 at 21-22-01 Big City Jobs.png" },
        { title: "Horiseon SEO", link: "https://arsonistchoir.github.io/Horiseon-SEO/", imageSrc: "./src/assets/Screenshot 2023-12-17 at 21-25-34 Horiseon.png" },
    ];

    return (
        <div>
            {projects.map((project, index) => (
                <div key={index}>
                    <h1>{project.title}</h1>
                    <a href={project.link}>
                        <img src={project.imageSrc} alt={project.title} />
                    </a>
                </div>
            ))}
        </div>
    );
}

export default Projects;