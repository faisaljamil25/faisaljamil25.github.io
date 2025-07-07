import { motion } from 'framer-motion';
import { Code, CodeXml, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 hero-gradient pt-20 sm:pt-0">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              Hi, I'm <span className="text-highlight">Faisal Jamil</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl font-medium text-muted-foreground"
            >
              Software Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-lg"
            >
              I'm a passionate software engineer who loves building products that solve real-world problems.
              I enjoy solving complex problems and continuously learning new technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-6"
            >
              <motion.a
                href="https://github.com/faisaljamil25"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-card hover:bg-card-hover rounded-lg transition-colors"
              >
                <Github className="w-6 h-6 text-foreground hover:text-highlight transition-colors" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/faisaljamil25/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-card hover:bg-card-hover rounded-lg transition-colors"
              >
                <Linkedin className="w-6 h-6 text-foreground hover:text-highlight transition-colors" />
              </motion.a>
              <motion.a
                href="https://leetcode.com/u/faisaljamil25/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-card hover:bg-card-hover rounded-lg transition-colors"
              >
                <CodeXml className="w-6 h-6 text-foreground hover:text-highlight transition-colors" />
              </motion.a>
              <motion.a
                href="mailto:faisaljamilcs@gmail.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-card hover:bg-card-hover rounded-lg transition-colors"
              >
                <Mail className="w-6 h-6 text-foreground hover:text-highlight transition-colors" />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-lg"
              />
              <img
                src="/profile-photo.jpg"
                alt="Alex Johnson - Professional Headshot"
                className="relative w-80 h-80 rounded-full object-cover border-4 border-primary/20"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;