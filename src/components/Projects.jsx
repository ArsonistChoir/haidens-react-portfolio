function Projects() {
    const projects = [
        { title: "Trip Tix", link: "https://chart099.github.io/Bootcamp-Project-1/", imageSrc: "./src/assets/Screenshot 2023-12-17 at 21-02-25 Document.png" },
        { title: "Review a Movie", link: "https://spooky-ghost-09826-e1fe8c97ce3e.herokuapp.com/", imageSrc: "./src/assets/Screenshot 2023-12-17 at 21-10-01 Review a Movie.png" },
        { title: "Project 3", link: "https://example.com/project3", imageSrc: "https://www.example.com/image3.jpg" },
        { title: "Project 4", link: "https://example.com/project4", imageSrc: "https://www.example.com/image4.jpg" },
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