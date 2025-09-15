const Experience = () => {
  return <section id="experience" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Experi<span className="gradient-text">ence</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-2xl font-bold gradient-text mb-2">Teaching Assistant</h3>
            <h4 className="text-lg font-semibold text-foreground mb-1">Northeastern University</h4>
            <p className="text-muted-foreground mb-1 italic">Sep 2025 – Present</p>
            <p className="text-muted-foreground mb-6 italic">Boston, MA</p>

            <ul className="space-y-4 text-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <span>Assisted in teaching core programming and algorithmic techniques, reinforcing lecture material through real-world coding examples</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <span>Mentored and supported a class of 50 students by holding regular office hours, providing coding guidance, and promptly addressing doubts via email and discussion forums</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <span>Reviewed and provided feedback on student code submissions, improving code quality, readability, and adherence to programming best practices</span>
              </li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-2xl font-bold gradient-text mb-2">Software Engineer</h3>
            <h4 className="text-lg font-semibold text-foreground mb-1">Cognizant</h4>
            <p className="text-muted-foreground mb-1 italic">Sep 2021 – Jun 2024</p>
            <p className="text-muted-foreground mb-6 italic">Chennai, India</p>

            <ul className="space-y-4 text-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <span>Built and scaled a global B2B e-commerce platform using React.js, Next.js Router, Redux Toolkit, Sass, and Angular 12, delivering reusable UI components and accelerating feature delivery for 10+ global teams</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <span>Designed and implemented backend Spring Boot, JPA, MySQL APIs with secure role-based login and CRUD workflows, eliminating manual issue tracking and streamlining admin operations</span>
              </li>
              
              
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <span>Improved quality and compliance by fixing production bugs, implementing WCAG 2.1 AA accessibility, enabling i18n, and writing Jest tests (85% coverage) — maintaining 99.9% uptime and boosting performance by 15%.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <span>Enhanced delivery pipeline with Thunder Client API validation, Jira Agile tracking, Bitbucket/GitHub PR reviews, and CI/CD automation, reducing release turnaround and improving collaboration</span>
              </li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-2">Software Engineer Intern</h3>
            <h4 className="text-lg font-semibold text-foreground mb-1">Cognizant</h4>
            <p className="text-muted-foreground mb-1 italic">Feb 2021 – Jun 2021</p>
            <p className="text-muted-foreground mb-6 italic">Chennai, India</p>

            <ul className="space-y-4 text-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <span>Built Issue Tracking System with multi-role authentication (User/Category Representative/Admin) using React class components with routing and axios for seamless navigation and API communication</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <span>Developed backend APIs using Spring Boot with JDBC and MySQL integration, implementing secure role-based access control and comprehensive CRUD operations for efficient issue management</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <span>Created admin portal with advanced issue filtering, assignment workflows, and real-time status updates, significantly improving team productivity and issue resolution time</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>;
};
export default Experience;