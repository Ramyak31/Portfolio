const Education = () => {
  return <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Educa<span className="gradient-text">tion</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="flex items-start gap-6">
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold gradient-text mb-2">
                  Northeastern University
                </h3>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  Master's in Information Systems
                </h4>
                <p className="text-lg text-muted-foreground mb-1">2024 - 2026</p>
                <p className="text-lg text-muted-foreground mb-2">Boston, MA, USA</p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <div className="flex items-start gap-6">
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold gradient-text mb-2">
                  Sri Venkateswara College of Engineering
                </h3>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  B.E in Computer Science & Engineering
                </h4>
                <p className="text-lg text-muted-foreground mb-1">2017 - 2021</p>
                <p className="text-lg text-muted-foreground mb-2">Chennai, India</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Education;