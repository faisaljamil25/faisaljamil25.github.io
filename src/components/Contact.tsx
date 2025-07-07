import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:faisaljamilcs@gmail.com",
      label: "faisaljamilcs@gmail.com"
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/faisaljamil25",
      label: "github.com/faisaljamil25"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/faisaljamil25",
      label: "linkedin.com/in/faisaljamil25"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always interested in new opportunities and meaningful conversations. 
            Let's discuss how we can work together to build something amazing.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card className="card-hover">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Whether you have a project in mind, want to collaborate, or just want to say hello, 
                    I'd love to hear from you. Feel free to reach out through any of these channels.
                  </p>
                  
                  <div className="space-y-4">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 10 }}
                        className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors group"
                      >
                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <link.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">{link.name}</div>
                          <div className="text-sm text-muted-foreground">{link.label}</div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center"
                >
                  <div className="text-center space-y-6">
                    <motion.div
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="text-8xl"
                    >
                      👋
                    </motion.div>
                    <p className="text-lg font-medium">
                      Looking forward to hearing from you!
                    </p>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;