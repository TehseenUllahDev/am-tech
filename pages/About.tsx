import React from 'react';
import { motion } from 'framer-motion';
import { FadeInSection, Card3D } from '../components/ThreeD';
import { ABOUT_CONTENT } from '../data';
import { Target, Heart, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="pb-20 pt-32">
      {/* Header */}
      <section className="container mx-auto px-6 mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-6">
             <div className="h-[2px] w-12 bg-accent"></div>
             <span className="text-accent font-bold tracking-widest text-sm uppercase">Our Story</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 text-text-main leading-tight">
            ABOUT <br/> <span className="text-gradient">US</span>
          </h1>
          <p className="text-xl text-text-muted max-w-2xl leading-relaxed border-l-2 border-white/10 pl-6">
            We are builders, educators, and innovators passionate about technology and its potential to change the world.
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <FadeInSection>
        <section className="container mx-auto px-6 mb-24">
          <div className="glass-panel rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center relative overflow-hidden border border-white/5">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none"></div>
            
            <div className="flex-1 relative w-full">
              <Card3D>
                <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative h-[400px]">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                    alt="Team working" 
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent flex items-end p-8">
                     <p className="text-white font-display font-bold text-xl">"Building the future, together."</p>
                  </div>
                </div>
              </Card3D>
            </div>
            
            <div className="flex-1 space-y-8 relative z-10">
              <div>
                <h2 className="text-3xl font-bold font-display text-text-main mb-4">Who We Are</h2>
                <p className="text-text-muted leading-relaxed text-lg">
                  {ABOUT_CONTENT.whoWeAre}
                </p>
              </div>
              <div className="w-full h-px bg-white/10"></div>
              <div>
                <h2 className="text-3xl font-bold font-display text-text-main mb-4">Our History</h2>
                <p className="text-text-muted leading-relaxed text-lg">
                  {ABOUT_CONTENT.history}
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Values Grid */}
      <FadeInSection>
        <section className="container mx-auto px-6 mb-24">
           <h2 className="text-4xl font-display font-bold mb-16">Core Values</h2>
           <div className="grid md:grid-cols-3 gap-8">
             {ABOUT_CONTENT.values.map((val, idx) => {
               const icons = [<Target size={32}/>, <Heart size={32}/>, <Award size={32}/>];
               return (
                 <div key={idx} className="glass-card p-10 rounded-[2.5rem] hover:bg-white/5 transition-colors group">
                   <div className="w-16 h-16 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-all shadow-lg">
                      {icons[idx % 3]}
                   </div>
                   <h3 className="text-2xl font-bold mb-4 font-display text-text-main">{val.title}</h3>
                   <p className="text-text-muted leading-relaxed border-l border-white/10 pl-4">{val.desc}</p>
                 </div>
               );
             })}
           </div>
        </section>
      </FadeInSection>

      {/* Team CTA */}
      <FadeInSection>
         <div className="container mx-auto px-6">
             <div className="bg-accent/10 backdrop-blur-xl py-20 rounded-[3rem] border border-accent/20 relative overflow-hidden text-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px]"></div>
                <div className="relative z-10">
                   <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Meet the Minds</h2>
                   <p className="text-text-muted mb-10 text-lg max-w-2xl mx-auto">Our diverse team of experts is our greatest asset. See who makes the magic happen.</p>
                   <a href="#/employees" className="px-10 py-4 bg-accent text-white rounded-full font-bold hover:bg-accent-hover transition-colors shadow-lg shadow-accent/20">
                     View Team Directory
                   </a>
                </div>
             </div>
         </div>
      </FadeInSection>
    </div>
  );
};

export default About;