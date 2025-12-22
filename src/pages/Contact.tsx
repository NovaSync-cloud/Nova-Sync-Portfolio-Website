import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { 
  MessageCircle, Mail, Phone, MapPin, Clock, ArrowRight,
  Instagram, Facebook, Linkedin, Send
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Chat with me directly for quick responses",
    action: "Start Chat",
    url: "https://wa.me/message/62PWVK7X73BMD1",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Send,
    title: "Telegram",
    description: "Message me on Telegram anytime",
    action: "Open Telegram",
    url: "https://t.me/official_nova_sync",
    color: "from-blue-400 to-blue-500",
  },
  {
    icon: Phone,
    title: "Phone",
    description: "Call me for urgent inquiries",
    action: "+234 802 715 1618",
    url: "tel:+2348027151618",
    color: "from-accent to-orange-600",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Send detailed project requirements",
    action: "Send Email",
    url: "mailto:hello@novasync.com",
    color: "from-purple-500 to-pink-500",
  },
];

const socialLinks = [
  { icon: Instagram, name: "Instagram", url: "https://www.instagram.com/official_novasync/", handle: "@official_novasync" },
  { icon: Facebook, name: "Facebook", url: "https://web.facebook.com/people/Bosede-Precious/61579871825205/", handle: "Bosede Precious" },
  { icon: Linkedin, name: "LinkedIn", url: "https://www.linkedin.com/in/olorunda-bosede-precious-4b76b6307/", handle: "Olorunda Bosede" },
];

const hireLinks = [
  { name: "Upwork", url: "https://www.upwork.com/freelancers/~014770f3c214c791fd", description: "View my Upwork profile" },
  { name: "Contra", url: "https://contra.com/bosede_precious_jyuvmazk/work", description: "Hire me on Contra" },
  { name: "Slack", url: "https://join.slack.com/t/nova-sync/shared_invite/zt-3m3lyrsq8-LM52MYzj8X6kklLC4AEL2Q", description: "Join our Slack workspace" },
];

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Nova Sync | Get in Touch - Let's Build Something Amazing</title>
        <meta name="description" content="Ready to start your project? Contact Nova Sync via WhatsApp, Telegram, phone, or email. Let's discuss how we can transform your digital presence." />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/15 rounded-full blur-[200px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[150px]" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block px-5 py-2.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium tracking-wider uppercase mb-8">
                Get In Touch
              </span>
              
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-8">
                Let's <span className="text-accent">Connect</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ready to transform your online presence? I'm here to help. 
                Choose your preferred way to get in touch.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Contact Methods */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Quick <span className="text-accent">Contact</span>
              </h2>
              <p className="text-muted-foreground text-lg">Choose your preferred method of communication</p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative p-8 rounded-3xl bg-background border border-border hover:border-accent/50 transition-all duration-300 h-full text-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                      <method.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">{method.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{method.description}</p>
                    <span className="text-accent font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      {method.action}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
        
        {/* Social & Hire */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl font-bold text-foreground mb-8">
                  Follow <span className="text-accent">Me</span>
                </h2>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <social.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-foreground group-hover:text-accent transition-colors">
                          {social.name}
                        </h3>
                        <p className="text-muted-foreground text-sm">{social.handle}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground ml-auto group-hover:text-accent transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
              
              {/* Hire Me */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl font-bold text-foreground mb-8">
                  Hire <span className="text-accent">Me</span>
                </h2>
                <div className="space-y-4">
                  {hireLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all group"
                    >
                      <div>
                        <h3 className="font-display text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                          {link.name}
                        </h3>
                        <p className="text-muted-foreground text-sm">{link.description}</p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Location & Hours */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-background border border-border"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  <MapPin className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">Location</h3>
                <p className="text-muted-foreground mb-2">Based in Nigeria</p>
                <p className="text-foreground font-medium">Serving clients worldwide</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 rounded-3xl bg-background border border-border"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  <Clock className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">Working Hours</h3>
                <p className="text-muted-foreground mb-2">Monday - Friday: 9am - 6pm (WAT)</p>
                <p className="text-foreground font-medium">Weekend availability for urgent projects</p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Ready to Get <span className="text-accent">Started</span>?
              </h2>
              <p className="text-muted-foreground text-lg mb-10">
                Don't let another day pass with a website that doesn't convert. Let's build something amazing together.
              </p>
              <a 
                href="https://wa.me/message/62PWVK7X73BMD1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Start a Conversation
              </a>
            </motion.div>
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  );
};

export default Contact;
