import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES } from '../data';
import * as Icons from 'lucide-react';
import { Card3D } from '../components/ThreeD';
import { Link } from 'react-router-dom';
import { X, CheckCircle, Zap } from 'lucide-react';
import { ServiceItem } from '../types';

const Services = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Helper to generate some mock features based on service type
  const getFeatures = (serviceId: string) => {
    return [
      "Industry Standard Best Practices",
      "24/7 Support & Maintenance",
      "Scalable Architecture Design",
      "Customized for your Business",
      "Performance Optimization"
    ];
  };

  return (
    <div className="container mx-auto px-6 py-32">
      <div className="mb-20 max-w-4xl">
        <div className="flex items-center gap-3 mb-6">
             <div className="h-[2px] w-12 bg-accent"></div>
             <span className="text-accent font-bold tracking-widest text-sm uppercase">Capabilities</span>
        </div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-display font-bold mb-8 text-text-main"
        >
          OUR <span className="text-gradient">SERVICES</span>
        </motion.h1>
        <p className="text-text-muted text-xl border-l-2 border-white/10 pl-6 leading-relaxed max-w-2xl">
          Comprehensive digital solutions and educational programs designed to elevate your business and career in the digital age.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => {
          // @ts-ignore
          const IconComponent = Icons[service.icon.charAt(0).toUpperCase() + service.icon.slice(1)] || Icons.Box;
          
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card3D className="h-full">
                <div 
                  className="glass-card p-10 rounded-[2.5rem] h-full flex flex-col hover:border-accent/40 transition-all group relative overflow-hidden border border-white/5 cursor-pointer"
                  onClick={() => setSelectedService(service)}
                >
                  {/* Decorative Gradient Blob */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-[50px] group-hover:bg-accent/20 transition-all"></div>

                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 shadow-inner border border-white/5 text-accent group-hover:scale-110 transition-transform relative z-10">
                    {/* @ts-ignore */}
                    <IconComponent size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 font-display relative z-10 text-text-main">{service.title}</h3>
                  <p className="text-text-muted leading-relaxed flex-grow relative z-10 border-l border-white/10 pl-4 mb-4 line-clamp-3">{service.description}</p>
                  
                  <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center relative z-10">
                    <span className="text-xs font-bold text-text-muted uppercase tracking-wider group-hover:text-accent transition-colors">Explore</span>
                    <button className="w-10 h-10 rounded-full bg-white/5 text-text-muted flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                       <Icons.ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </Card3D>
            </motion.div>
          );
        })}
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
              onClick={() => setSelectedService(null)}
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glass-panel w-full max-w-3xl rounded-[2rem] border border-white/10 relative z-10 overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="p-8 border-b border-white/5 bg-primary-light/50 flex justify-between items-start relative">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] pointer-events-none"></div>
                 <div className="flex items-center gap-6 relative z-10">
                    <div className="w-20 h-20 rounded-2xl bg-accent/20 flex items-center justify-center text-accent shadow-lg shadow-accent/10 border border-accent/20">
                       {(() => {
                          // @ts-ignore
                          const IconComp = Icons[selectedService.icon.charAt(0).toUpperCase() + selectedService.icon.slice(1)] || Icons.Box;
                          return <IconComp size={40} />;
                       })()}
                    </div>
                    <div>
                      <h2 className="text-3xl font-display font-bold text-text-main mb-2">{selectedService.title}</h2>
                      <div className="text-xs font-bold bg-white/5 text-text-muted px-3 py-1 rounded-full border border-white/5 inline-block">Professional Service</div>
                    </div>
                 </div>
                 <button 
                   onClick={() => setSelectedService(null)} 
                   className="p-2 rounded-full hover:bg-white/10 text-text-muted hover:text-white transition-colors relative z-10"
                 >
                   <X size={24} />
                 </button>
              </div>

              {/* Body */}
              <div className="p-8 overflow-y-auto custom-scrollbar bg-primary/20">
                 <div className="mb-8">
                   <h3 className="text-lg font-bold text-text-main mb-3">Overview</h3>
                   <p className="text-text-muted leading-relaxed text-lg">{selectedService.description} At AM Tech Hub, we ensure this service helps you stay ahead of the curve.</p>
                 </div>

                 <div className="mb-8">
                   <h3 className="text-lg font-bold text-text-main mb-4">What's Included</h3>
                   <div className="grid md:grid-cols-2 gap-4">
                     {getFeatures(selectedService.id).map((feature, i) => (
                       <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5">
                          <CheckCircle size={18} className="text-accent shrink-0" />
                          <span className="text-sm text-text-muted">{feature}</span>
                       </div>
                     ))}
                   </div>
                 </div>

                 <div className="bg-accent/10 p-6 rounded-2xl border border-accent/20 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">Ready to start?</h4>
                      <p className="text-accent-secondary text-sm">Get a custom quote for your project.</p>
                    </div>
                    <Link to="/contact" className="px-8 py-3 bg-accent text-white font-bold rounded-xl shadow-lg shadow-accent/20 hover:scale-105 transition-transform flex items-center gap-2">
                       Contact Us <Zap size={18} fill="currentColor" />
                    </Link>
                 </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;