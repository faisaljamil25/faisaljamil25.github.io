import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const experiences = [
  {
    title: "Founding Engineer",
    company: "Biryani By Flame",
    period: "Jan 2024 - Present",
    description: "Building something exciting in the food tech space. Leading the development of a platform that connects food enthusiasts with local culinary experiences.",
    technologies: ["Flutter", "Dart", "Supabase", "Firebase Cloud Messaging"]
  },
  {
    title: "Software Engineer",
    company: "Atlassian",
    period: "July 2023 - Dec 2024",
    description: "Led the migration of over 100 feature flags from LaunchDarkly to Statsig, ensuring zero regression throughout the process. Contributed to the development of a large scale key-value store that supports Atlassian Intelligence features. Developed GraphQL and REST APIs backed by Elasticsearch and DynamoDB to enhance data access and improve query performance.",
    technologies: ["Kotlin", "Spring Boot", "DynamoDB", "AWS", "Elasticsearch", "GraphQL"]
  },
  {
    title: "Software Engineer Intern",
    company: "Atlassian",
    period: "Jan 2023 - June 2023",
    description: "Developed frontend and backend support for seamless archived issue migration. Automated performance benchmarking using Python, ensuring continuous release improvements.",
    technologies: ["React", "JavaScript", "Kotlin", "Docker", "Splunk", "Python"]
  },
  {
    title: "Head Web Developer",
    company: "ISTE MANIT",
    period: "Jun 2021 - Jun 2022",
    description:"Built a powerful online quizzing application that supported 1000+ participants, delivering a real-time, interactive, and scalable platform.",
    technologies: ["Next.js", "Node.js", "Express", "TypeScript", "MongoDB", "Firebase"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey building amazing products and working with talented teams.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="card-hover">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                        <div className="text-lg font-medium text-highlight">{exp.company}</div>
                      </div>
                      <div className="text-sm font-medium text-primary mt-2 md:mt-0">{exp.period}</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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

export default Experience;