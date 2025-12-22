import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Phone, Send, Instagram, Linkedin, Facebook, Slack, ArrowUpRight } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const contactOptions = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    description: "Quick response, let's chat!",
    href: "https://wa.me/message/62PWVK7X73BMD1",
    color: "bg-green-500/20 border-green-500/50 hover:bg-green-500/30",
    iconColor: "text-green-500",
  },
  {
    icon: Send,
    label: "Telegram",
    description: "Message me directly",
    href: "https://t.me/official_nova_sync",
    color: "bg-blue-400/20 border-blue-400/50 hover:bg-blue-400/30",
    iconColor: "text-blue-400",
  },
  {
    icon: Phone,
    label: "Phone Call",
    description: "+234 802 715 1618",
    href: "tel:+2348027151618",
    color: "bg-accent/20 border-accent/50 hover:bg-accent/30",
    iconColor: "text-accent",
  },
  {
    icon: Instagram,
    label: "Instagram",
    description: "@official_novasync",
    href: "https://www.instagram.com/official_novasync/",
    color: "bg-pink-500/20 border-pink-500/50 hover:bg-pink-500/30",
    iconColor: "text-pink-500",
  },
  {
    icon: Facebook,
    label: "Facebook",
    description: "Follow for updates",
    href: "https://web.facebook.com/people/Bosede-Precious/61579871825205/",
    color: "bg-blue-600/20 border-blue-600/50 hover:bg-blue-600/30",
    iconColor: "text-blue-600",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    description: "Let's connect professionally",
    href: "https://www.linkedin.com/in/olorunda-bosede-precious-4b76b6307/",
    color: "bg-blue-500/20 border-blue-500/50 hover:bg-blue-500/30",
    iconColor: "text-blue-500",
  },
  {
    icon: Slack,
    label: "Slack",
    description: "Join the community",
    href: "https://join.slack.com/t/nova-sync/shared_invite/zt-3m3lyrsq8-LM52MYzj8X6kklLC4AEL2Q",
    color: "bg-purple-500/20 border-purple-500/50 hover:bg-purple-500/30",
    iconColor: "text-purple-500",
  },
];

const freelancePlatforms = [
  {
    label: "Contra",
    href: "https://contra.com/bosede_precious_jyuvmazk/work",
  },
  {
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~014770f3c214c791fd",
  },
];

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-background/90 backdrop-blur-xl" />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-card border border-border rounded-3xl p-8 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-secondary hover:bg-accent/20 transition-colors"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>
            
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                Let's <span className="text-accent">Connect</span>
              </h2>
              <p className="text-muted-foreground">
                Choose your preferred way to discuss your project
              </p>
            </div>
            
            {/* Contact Options */}
            <div className="grid grid-cols-1 gap-3 mb-6">
              {contactOptions.map((option, index) => (
                <motion.a
                  key={option.label}
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${option.color}`}
                >
                  <div className={`w-10 h-10 rounded-full bg-background/50 flex items-center justify-center`}>
                    <option.icon className={`w-5 h-5 ${option.iconColor}`} />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-medium text-foreground">{option.label}</h4>
                    <p className="text-muted-foreground text-sm">{option.description}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                </motion.a>
              ))}
            </div>
            
            {/* Freelance Platforms */}
            <div className="pt-6 border-t border-border">
              <p className="text-muted-foreground text-sm text-center mb-4">
                Hire me on freelance platforms
              </p>
              <div className="flex justify-center gap-4">
                {freelancePlatforms.map((platform) => (
                  <a
                    key={platform.label}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary border border-border text-foreground text-sm font-medium hover:border-accent/50 transition-colors"
                  >
                    {platform.label}
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
