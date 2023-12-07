function Projects() {
    const projects = [
        { title: "Project 1", link: "https://example.com/project1", imageSrc: "https://www.example.com/image1.jpg" },
        { title: "Project 2", link: "https://example.com/project2", imageSrc: "https://www.example.com/image2.jpg" },
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