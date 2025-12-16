import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, CheckCircle } from 'lucide-react';
import { Card3D, FadeInSection, FloatingElement } from '../components/ThreeD';

const Privacy = () => {
  return (
    <div className="container mx-auto px-4 py-32 relative">
      {/* Background Ambience */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent/20 rounded-full blur-[100px] -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent-secondary/20 rounded-full blur-[100px] -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-4xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-20 relative z-10">
             <FloatingElement>
               <div className="inline-flex items-center justify-center p-4 rounded-3xl bg-ui-panel text-accent mb-8 border border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.3)]">
                 <Shield size={40} />
               </div>
             </FloatingElement>
             
             <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-text-main">
               Privacy <span className="text-gradient">Protocol</span>
             </h1>
             <p className="text-text-muted text-xl max-w-2xl mx-auto leading-relaxed">
               Transparency is the core of our digital infrastructure. Here is how we secure and manage your data.
             </p>
          </div>
        </FadeInSection>

        <Card3D className="mb-20">
          <div className="glass-card rounded-[3rem] p-8 md:p-16 border border-white/10 relative overflow-hidden shadow-2xl bg-primary-light/40 backdrop-blur-xl">
             {/* Decorative Lines */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
             
             <div className="space-y-16 relative z-10">
               <FadeInSection delay={0.2}>
                 <section className="relative group">
                   <div className="absolute -left-4 md:-left-8 top-0 bottom-0 w-1 bg-accent/20 rounded-full group-hover:bg-accent/50 transition-colors"></div>
                   <h2 className="text-2xl font-bold font-display text-text-main mb-6 flex items-center gap-4">
                     <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                        <Eye size={20} />
                     </div>
                     Data Collection
                   </h2>
                   <p className="text-text-muted leading-relaxed mb-6 text-lg">
                     We collect minimal data necessary to provide our services. This includes standard log data and information you voluntarily provide.
                   </p>
                   <div className="grid md:grid-cols-2 gap-4">
                      {['IP Address & Browser Type', 'Device Specifications', 'Usage Analytics', 'Voluntary Form Data'].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                           <CheckCircle size={16} className="text-accent-tertiary" />
                           <span className="text-sm text-text-muted">{item}</span>
                        </div>
                      ))}
                   </div>
                 </section>
               </FadeInSection>

               <div className="w-full h-px bg-white/5"></div>

               <FadeInSection delay={0.3}>
                 <section className="relative group">
                   <div className="absolute -left-4 md:-left-8 top-0 bottom-0 w-1 bg-accent-secondary/20 rounded-full group-hover:bg-accent-secondary/50 transition-colors"></div>
                   <h2 className="text-2xl font-bold font-display text-text-main mb-6 flex items-center gap-4">
                     <div className="w-10 h-10 rounded-xl bg-accent-secondary/10 flex items-center justify-center text-accent-secondary">
                        <Lock size={20} />
                     </div>
                     Security Infrastructure
                   </h2>
                   <p className="text-text-muted leading-relaxed text-lg">
                     We employ military-grade encryption and strict access controls. Your data is stored in secure, redundant cloud environments designed to prevent unauthorized access, disclosure, or modification.
                   </p>
                 </section>
               </FadeInSection>

               <div className="w-full h-px bg-white/5"></div>

               <FadeInSection delay={0.4}>
                 <section className="relative group">
                    <div className="absolute -left-4 md:-left-8 top-0 bottom-0 w-1 bg-purple-500/20 rounded-full group-hover:bg-purple-500/50 transition-colors"></div>
                   <h2 className="text-2xl font-bold font-display text-text-main mb-6 flex items-center gap-4">
                     <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                        <FileText size={20} />
                     </div>
                     User Rights
                   </h2>
                   <p className="text-text-muted leading-relaxed mb-4 text-lg">
                     You retain full ownership of your personal data. You have the right to:
                   </p>
                   <ul className="grid gap-3 text-text-muted ml-2">
                     <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Request a copy of your data</li>
                     <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Request deletion of your records</li>
                     <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Opt-out of non-essential communications</li>
                   </ul>
                 </section>
               </FadeInSection>
             </div>
             
             <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center text-sm text-text-muted">
                <span>Last Updated: {new Date().toLocaleDateString()}</span>
                <span className="flex items-center gap-2"><Shield size={14} className="text-emerald-500"/> SSL Secured</span>
             </div>
          </div>
        </Card3D>
      </div>
    </div>
  );
};

export default Privacy;