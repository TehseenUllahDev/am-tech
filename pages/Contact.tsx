import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Info Side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <h1 className="text-6xl font-display font-bold mb-6">Let's <span className="text-gradient">Talk</span></h1>
            <p className="text-text-muted text-xl leading-relaxed">
              Have a project in mind? Want to join our courses? We are just a message away.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { icon: <MapPin size={24} />, title: "Visit Us", desc: "AM Tech Park Avenue, Kashrote, City Gilgit" },
              { icon: <Phone size={24} />, title: "Call Us", desc: "+92 98765 43210" },
              { icon: <Mail size={24} />, title: "Email Us", desc: "contact@amtechhub.com" }
            ].map((item, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-3xl flex items-center gap-6 hover:bg-white/10 transition-colors cursor-default">
                <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center text-accent shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display">{item.title}</h3>
                  <p className="text-text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form Side */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 md:p-12 rounded-[3rem] relative"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-bl-[3rem] rounded-tr-[3rem] flex items-center justify-center">
             <Send size={32} className="text-purple-400 opacity-50" />
          </div>

          <h2 className="text-2xl font-display font-bold mb-8">Send a Message</h2>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-text-muted uppercase tracking-wider pl-2">First Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-text-main focus:border-accent focus:bg-white/10 outline-none transition-all" placeholder="Riaz" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-text-muted uppercase tracking-wider pl-2">Last Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-text-main focus:border-accent focus:bg-white/10 outline-none transition-all" placeholder="Ahmad" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-text-muted uppercase tracking-wider pl-2">Email Address</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-text-main focus:border-accent focus:bg-white/10 outline-none transition-all" placeholder="riazahmad@example.com" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-text-muted uppercase tracking-wider pl-2">Message</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-text-main focus:border-accent focus:bg-white/10 outline-none transition-all resize-none" placeholder="Tell us about your project..."></textarea>
            </div>

            <button type="button" className="w-full py-5 bg-gradient-to-r from-accent to-purple-600 hover:from-accent-hover hover:to-purple-700 text-white font-bold rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-accent/40 transform hover:-translate-y-1">
              Send Message <ArrowRight size={20} />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;