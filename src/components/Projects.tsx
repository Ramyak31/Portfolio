const Projects = () => {
  const projects = [
    {
      title: 'Netflix Clone',
      description: 'Full-stack streaming platform replica with user authentication, subscription management, and personalized content recommendations. Features secure payment integration and responsive design.',
    },
    {
      title: "MARC's Blueprint Sync",
      description: 'Collaborative design management platform enabling real-time synchronization between teams. Built with scalable architecture and reusable components, reducing development time by 20%.',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold gradient-text mb-4">{project.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;