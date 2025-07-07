import { motion } from 'framer-motion';

const techSkills = [
  {
    name: "Kotlin",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg"
  },
  {
    name: "Spring Boot",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
  },
  {
    name: "DynamoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dynamodb/dynamodb-original.svg"
  },
  {
    name: "Elasticsearch",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg"
  },
  {
    name: "AWS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
  },
  {
    name: "GraphQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
  },
  {
    name: "Postman",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
  },
  {
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
  },
  {
    name: "Firebase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
  },
  {
    name: "C++",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and skills I use to bring ideas to life and solve complex problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8">
          {techSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center space-y-3 group cursor-pointer"
            >
              <div className="w-16 h-16 bg-card rounded-xl p-3 group-hover:bg-card-hover transition-all duration-300 group-hover:shadow-lg">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-full h-full object-contain filter dark:invert-0"
                />
              </div>
              <span className="text-sm font-medium text-center group-hover:text-highlight transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;