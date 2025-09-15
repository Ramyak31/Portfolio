import { Button } from './ui/button';
import profilePhoto from '../assets/profile-photo.png';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Photo */}
        <div className="mb-8">
          <img
            src={profilePhoto}
            alt="Ramya Karuthappandian"
            className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-accent/20"
          />
        </div>

        {/* Name with gradient */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          I'm <span className="gradient-text">Ramya Karuthappandian</span>
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-light text-foreground mb-8">
          Software Developer based in Boston - USA
        </h2>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            className="gradient-button text-white font-medium px-8 py-3 text-lg"
            onClick={() => window.open('https://www.linkedin.com/in/ramya-karuthappandian/', '_blank')}
          >
            Connect with Me
          </Button>
          
          <Button 
            variant="outline" 
            className="border-2 border-foreground/30 text-foreground hover:bg-foreground/10 px-8 py-3 text-lg"
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            My Resume
          </Button>
        </div>

        {/* Brief tagline */}
        <p className="text-muted-foreground text-lg mt-8 max-w-2xl mx-auto">
          Curious by nature, I go deep into behind-the-screen concepts to ship smarter, impactful experiences.
        </p>
      </div>
    </section>
  );
};

export default Hero;