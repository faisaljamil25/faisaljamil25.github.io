import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "ChimeraX",
    description: "A web application platform to conduct online quizzing contests.",
    image: "chimerax.png",
    technologies: ["Next.js", "TypeScript", "Express.js", "MongoDB", "Material UI", "Firebase"],
    github: "https://github.com/ISTE-SC-MANIT/chimerax22-ui",
    demo: "https://chimerax22.vercel.app/"
  },
  {
    title: "Cryptonix",
    description: "A NFT marketplace running on Ethereum with Polygon.",
    image: "cryptonix.png",
    technologies: ["Next.js", "TypeScript", "Solidity", "Ethers.js", "Tailwind CSS"],
    github: "https://github.com/faisaljamil25/CryptoNix",
    demo: "https://cryptonix.vercel.app/"
  },
  {
    title: "Megatreopuz",
    description: "Megatreopuz is secure, scalable and powerful cryptic hunt platform.",
    image: "mega.png",
    technologies: ["Next.js", "TypeScript", "Material UI", "Firebase", "Express.js", "MongoDB", "GraphQL", "Go"],
    github: "https://github.com/ISTE-SC-MANIT/megatreopuz-ui",
    demo: "https://github.com/ISTE-SC-MANIT/megatreopuz-ui"
  },
  {
    title: "Memories",
    description: "Image sharing web app built with React and Express.js",
    image: "memories.png",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Material UI"],
    github: "https://github.com/faisaljamil25/memories-client",
    demo: "https://snap-memories.netlify.app/"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I'm passionate about.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full card-hover overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                  <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-secondary transition-colors"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </motion.a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;