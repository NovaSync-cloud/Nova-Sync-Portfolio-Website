import { motion } from "framer-motion";
import { 
  MessageCircle, 
  Phone, 
  ArrowUpRight,
  Instagram,
  Linkedin,
  Facebook,
  Slack,
  Send,
  Mail,
  MessageSquare
} from "lucide-react";

const socialLinks = [
  { 
    icon: MessageCircle, 
    label: "WhatsApp", 
    href: "https://wa.me/2348027151618",
    color: "hover:bg-green-500/20 hover:border-green-500/50"
  },
  { 
    icon: Send, 
    label: "Telegram", 
    href: "https://t.me/official_nova_sync",
    color: "hover:bg-blue-400/20 hover:border-blue-400/50"
  },
  { 
    icon: Mail, 
    label: "Email", 
    href: "mailto:officialnovasync@gmail.com",
    color: "hover:bg-red-500/20 hover:border-red-500/50"
  },
  { 
    icon: Phone, 
    label: "+234 802 715 1618", 
    href: "tel:+2348027151618",
    color: "hover:bg-accent/20 hover:border-accent/50"
  },
  { 
    icon: Instagram, 
    label: "Instagram", 
    href: "https://www.instagram.com/official_novasync/",
    color: "hover:bg-pink-500/20 hover:border-pink-500/50"
  },
  { 
    icon: Facebook, 
    label: "Facebook", 
    href: "https://web.facebook.com/people/Bosede-Precious/61579871825205/",
    color: "hover:bg-blue-500/20 hover:border-blue-500/50"
  },
  { 
    icon: Linkedin, 
    label: "LinkedIn", 
    href: "https://www.linkedin.com/in/olorunda-bosede-precious-4b76b6307/",
    color: "hover:bg-blue-600/20 hover:border-blue-600/50"
  },
  { 
    icon: MessageSquare, 
    label: "Discord", 
    href: "https://discordapp.com/users/1142075893108457632",
    color: "hover:bg-indigo-500/20 hover:border-indigo-500/50"
  },
  { 
    icon: Slack, 
    label: "Slack", 
    href: "https://join.slack.com/t/nova-sync/shared_invite/zt-3m3lyrsq8-LM52MYzj8X6kklLC4AEL2Q",
    color: "hover:bg-purple-500/20 hover:border-purple-500/50"
  },
];

const freelancePlatforms = [
  { label: "Contra", href: "https://contra.com/bosede_precious_jyuvmazk/work" },
  { label: "Upwork", href: "https://www.upwork.com/freelancers/~014770f3c214c791fd" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium tracking-wider uppercase mb-6">
            Let's Connect
          </span>
          
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Ready to <span className="text-accent">Convert</span> More Visitors?
          </h2>
          
          <p className="text-muted-foreground text-lg mb-4 max-w-2xl mx-auto">
            If your website isn't converting, it's costing you money. Let's fix that.
          </p>
          
          <p className="text-foreground text-xl font-display font-semibold mb-12">
            Work with Nova Sync.
          </p>
          
          {/* Primary CTA */}
          <motion.a
            href="https://wa.me/2348027151618"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary inline-flex items-center justify-center gap-3 text-lg mb-16"
          >
            <MessageCircle className="w-6 h-6" />
            Let's Talk on WhatsApp
          </motion.a>
          
          {/* Social Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border transition-all duration-300 ${link.color}`}
              >
                <link.icon className="w-6 h-6 text-foreground" />
                <span className="text-sm text-muted-foreground">{link.label}</span>
              </motion.a>
            ))}
          </div>
          
          {/* Freelance Platforms */}
          <div className="flex flex-wrap justify-center gap-4">
            <span className="text-muted-foreground text-sm self-center">Hire me on:</span>
            {freelancePlatforms.map((platform) => (
              <motion.a
                key={platform.label}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary border border-border text-foreground text-sm font-medium hover:border-accent/50 transition-colors"
              >
                {platform.label}
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
