const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C++', 'Java', 'Python', 'JavaScript', 'HTML', 'CSS', 'Typescript'],
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['React.js', 'Angular', 'Node.js', 'Next.js', 'Redux Toolkit', 'RESTful APIs','Material UI', 'Angular Material', 'AG Grid', 'React Bootstrap'],
    },
    {
      title: 'Databases/Cloud',
      skills: ['MySQL', 'Oracle', 'MongoDB', 'Firebase', 'AWS (EC2, RDS, S3)'],
    },
    {
      title: 'Development tools & IDEs',
      skills: ['Git', 'GitHub', 'Bitbucket','JUnit', 'Jest', 'Postman', 'Thunderclient'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Skill<span className="gradient-text">s</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold gradient-text mb-6">{category.title}</h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-muted text-muted-foreground rounded-lg font-medium hover:bg-accent/10 hover:text-accent transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;