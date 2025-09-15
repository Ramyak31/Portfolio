import { Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">Ramya Karuthappandian</h3>
            <p className="text-muted-foreground mb-4">Software Developer</p>
            <div className="space-y-2">
              <a 
                href="mailto:ramyasumathi31@gmail.com" 
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                ramyasumathi31@gmail.com
              </a>
              <a 
                href="https://www.linkedin.com/in/ramya-karuthappandian/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('#home')}
                className="block text-muted-foreground hover:text-accent transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('#education')}
                className="block text-muted-foreground hover:text-accent transition-colors"
              >
                Education
              </button>
              <button 
                onClick={() => scrollToSection('#projects')}
                className="block text-muted-foreground hover:text-accent transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('#contact')}
                className="block text-muted-foreground hover:text-accent transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Resume */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Resume</h4>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block gradient-button text-white font-medium px-6 py-2 rounded-md hover:opacity-90 transition-opacity"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Ramya Karuthappandian. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;