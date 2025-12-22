import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Code, Shield, Users, Zap, Award, Target, BookOpen, ChevronLeft, ChevronRight, Linkedin, Twitter, Star, Globe, Cpu, Briefcase, Smartphone, Cloud } from 'lucide-react';
import { Card3D, FadeInSection } from '../components/ThreeD';
import { TESTIMONIALS, LEADERSHIP, getDriveUrl, SERVICES } from '../data';

const HERO_IMAGES = [
  getDriveUrl('1U14pJuKurLCrhp0bmyQcjdo5_I-px-UW'),
  getDriveUrl('1I0BNH2nWvsYkuKvvXmEeeRckUdUOtKKt'),
  getDriveUrl('1i2A-SGOIwC8cZXy-nz01kqHudSAretNh'),
  getDriveUrl('12BWRGGhvQO4oeHwxpLgV9pTNVmx45Rl5'),
  getDriveUrl('1ku2WxgNsUYDNhOelqFWw2qXk4th87_PF'),
  getDriveUrl('15oy39OOPu1VNXi_Nkq_vUmsmotIpgB9c')
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentLeaderIndex, setCurrentLeaderIndex] = useState(0);
  const [leadersPerView, setLeadersPerView] = useState(2);

  // Calculate responsive leaders per view
  useEffect(() => {
    const updateLeadersPerView = () => {
      if (window.innerWidth >= 768) {
        setLeadersPerView(2); // Desktop: 2 leaders
      } else {
        setLeadersPerView(1); // Mobile: 1 leader
      }
    };

    updateLeadersPerView();
    window.addEventListener('resize', updateLeadersPerView);
    
    return () => window.removeEventListener('resize', updateLeadersPerView);
  }, []);

  // Hero carousel timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Leadership carousel auto-rotate
  useEffect(() => {
    const leaderTimer = setInterval(() => {
      nextLeaderSlide();
    }, 6000);
    return () => clearInterval(leaderTimer);
  }, [leadersPerView]);

  const nextSlide = () => setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
  const prevSlide = () => setCurrentImage((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);

  // Total slides for leadership carousel
  const totalLeaderSlides = Math.ceil(LEADERSHIP.length / leadersPerView);

  // Next slide for leadership carousel
  const nextLeaderSlide = () => {
    setCurrentLeaderIndex((prev) => {
      const nextIndex = prev + 1;
      return nextIndex >= totalLeaderSlides ? 0 : nextIndex;
    });
  };

  // Previous slide for leadership carousel
  const prevLeaderSlide = () => {
    setCurrentLeaderIndex((prev) => {
      const prevIndex = prev - 1;
      return prevIndex < 0 ? totalLeaderSlides - 1 : prevIndex;
    });
  };

  // Get current leaders to display
  const getCurrentLeaders = () => {
    const start = currentLeaderIndex * leadersPerView;
    return LEADERSHIP.slice(start, start + leadersPerView);
  };

  // Icon mapping for services
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'globe': return <Globe size={24} />;
      case 'smartphone': return <Smartphone size={24} />;
      case 'cloud': return <Cloud size={24} />;
      case 'cpu': return <Cpu size={24} />;
      case 'shield': return <Shield size={24} />;
      case 'briefcase': return <Briefcase size={24} />;
      default: return <Code size={24} />;
    }
  };

  return (
    <div className="flex flex-col gap-24 pb-20">
      
      {/* 1. Hero Section with Carousel */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
        {/* Carousel Background */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.5, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${HERO_IMAGES[currentImage]})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/80 to-primary"></div>
        </div>
        
        {/* Carousel Controls */}
        <button 
          onClick={prevSlide} 
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-ui-panel/80 hover:bg-accent/40 text-text-muted hover:text-text-main transition-all hidden md:block border border-ui-border backdrop-blur-md shadow-lg"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide} 
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-ui-panel/80 hover:bg-accent/40 text-text-muted hover:text-text-main transition-all hidden md:block border border-ui-border backdrop-blur-md shadow-lg"
        >
          <ChevronRight size={24} />
        </button>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6 px-5 py-1.5 rounded-full border border-accent/50 bg-accent/10 text-accent font-display text-sm tracking-widest uppercase"
          >
            Innovate • Learn • Connect
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-8xl font-display font-black mb-6 leading-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-text-main to-text-muted drop-shadow-[0_0_15px_var(--shadow-color)]">FUTURE</span> 
            <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-accent via-accent-glow to-accent-secondary drop-shadow-[0_0_25px_var(--color-accent)]">IS NOW</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-2xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
          >
            AK Tech Hub empowers the next generation by bridging the gap between youth and cutting-edge technology.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <Link 
              to="/contact" 
              className="px-10 py-4 bg-accent hover:bg-blue-600 text-white rounded-full font-bold text-lg transition-all shadow-[0_0_20px_var(--color-accent)] hover:shadow-[0_0_40px_var(--color-accent)] flex items-center gap-2 justify-center group"
            >
              Start Innovation <Zap size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/employees" 
              className="px-10 py-4 bg-ui-panel/40 hover:bg-ui-panel/80 backdrop-blur-md border border-ui-border text-text-main rounded-full font-bold text-lg transition-all flex items-center gap-2 justify-center hover:border-accent/50"
            >
              Meet Our Team <Users size={20} />
            </Link>
          </motion.div>
        </div>
        
        {/* Carousel Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {HERO_IMAGES.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentImage(idx)}
              className={`w-12 h-1.5 rounded-full transition-all ${currentImage === idx ? 'bg-accent shadow-[0_0_15px_var(--color-accent)]' : 'bg-ui-border/50'}`}
            />
          ))}
        </div>
      </section>

      {/* 2. Leadership Section (Carousel) */}
      <FadeInSection>
        <section className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-text-main">Visionary Leadership</h2>
            <p className="text-center text-text-muted mb-6 max-w-2xl mx-auto text-lg">
              Guided by industry veterans committed to excellence and innovation.
            </p>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mb-8">
              {Array.from({ length: totalLeaderSlides }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentLeaderIndex(idx)}
                  className={`w-12 h-1.5 rounded-full transition-all ${currentLeaderIndex === idx ? 'bg-accent shadow-[0_0_10px_var(--color-accent)]' : 'bg-ui-border'}`}
                />
              ))}
            </div>
          </div>
          
          {/* Carousel Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Navigation Buttons */}
            <button
              onClick={prevLeaderSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-20 p-3 rounded-full bg-ui-panel hover:bg-accent/40 text-text-muted hover:text-text-main transition-all border border-ui-border shadow-lg backdrop-blur-sm"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextLeaderSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-20 p-3 rounded-full bg-ui-panel hover:bg-accent/40 text-text-muted hover:text-text-main transition-all border border-ui-border shadow-lg backdrop-blur-sm"
            >
              <ChevronRight size={24} />
            </button>
            
            {/* Leaders Grid with Carousel Effect */}
            <div className="overflow-hidden px-4 md:px-0">
              <motion.div
                key={currentLeaderIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {getCurrentLeaders().map((leader) => (
                  <Card3D key={leader.id}>
                    <div className="bg-primary-light/60 p-8 rounded-3xl border border-ui-border hover:border-accent/50 transition-all group backdrop-blur-sm relative overflow-hidden h-full">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      
                      <div className="flex flex-col md:flex-row gap-6 items-center h-full">
                        <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-br from-accent to-purple-600 shadow-xl shrink-0">
                          <img 
                            src={leader.imageUrl} 
                            alt={leader.name} 
                            className="w-full h-full rounded-full object-cover border-4 border-primary" 
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(leader.name)}&background=random&size=200`;
                            }}
                          />
                        </div>
                        
                        <div className="text-center md:text-left flex-1">
                          <h3 className="text-2xl font-display font-bold text-text-main mb-1">{leader.name}</h3>
                          <div className="text-accent font-bold text-sm tracking-wider uppercase mb-3">
                            {leader.role}
                          </div>
                          <p className="text-text-muted text-sm leading-relaxed mb-4">
                            {leader.bio}
                          </p>
                          <div className="flex justify-center md:justify-start gap-4">
                            {leader.socials?.linkedin && (
                              <a 
                                href={leader.socials.linkedin} 
                                className="text-text-muted hover:text-accent transition-colors hover:scale-110 transform"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Linkedin size={20} />
                              </a>
                            )}
                            {leader.socials?.twitter && (
                              <a 
                                href={leader.socials.twitter} 
                                className="text-text-muted hover:text-accent transition-colors hover:scale-110 transform"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Twitter size={20} />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card3D>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* 3. Vision Section */}
      <FadeInSection>
        <section className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-2">
              <h3 className="text-accent font-bold tracking-widest mb-3 uppercase text-sm">The Dream</h3>
              <h2 className="text-4xl font-display font-bold mb-6 text-text-main">Shaping Tomorrow's Tech Leaders</h2>
              <p className="text-text-muted mb-6 text-lg leading-relaxed">
                We believe in a future where technology is accessible, ethical, and a force for good. Our vision drives every project we undertake and every student we mentor.
              </p>
            </div>
            
            <div className="order-1 md:order-1">
              <Card3D>
                <div className="bg-primary-light/80 backdrop-blur-sm p-10 rounded-3xl border border-ui-border shadow-[0_0_30px_var(--shadow-color)] hover:shadow-[0_0_50px_var(--color-accent-glow)_inset] transition-all relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
                  <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mb-6 text-accent">
                    <Target size={32} />
                  </div>
                  <h2 className="text-3xl font-display font-bold mb-4 text-text-main">Our Vision</h2>
                  <p className="text-text-muted text-lg leading-relaxed italic">
                    "To empower the next generation by bridging the gap between youth and cutting-edge technology, fostering a culture of innovation and ethical tech practices."
                  </p>
                </div>
              </Card3D>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* 4. Mission Section */}
      <FadeInSection>
        <section className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="text-left md:text-right">
              <h3 className="text-accent font-bold tracking-widest mb-3 uppercase text-sm">The Path</h3>
              <h2 className="text-4xl font-display font-bold mb-6 text-text-main">Guiding Excellence</h2>
              <p className="text-text-muted mb-6 text-lg leading-relaxed">
                We don't just teach technology; we instill the mindset required to thrive in a digital-first world. From coding best practices to ethical AI usage.
              </p>
            </div>
            <div>
              <Card3D>
                <div className="bg-gradient-to-bl from-primary-light to-primary p-10 rounded-3xl border border-ui-border shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity text-accent">
                    <BookOpen size={100} />
                  </div>
                  <h2 className="text-3xl font-display font-bold mb-4 relative z-10 text-text-main">Our Mission</h2>
                  <p className="text-text-muted text-lg leading-relaxed relative z-10">
                    "To guide and inspire students towards meaningful and positive technological advancements, ensuring they are equipped with the right knowledge and skills to thrive in a rapidly evolving digital world."
                  </p>
                </div>
              </Card3D>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* 5. Services Section */}
      <FadeInSection>
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-accent/5 -skew-y-3 transform origin-bottom-right"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-text-main">Our Services</h2>
              <p className="text-text-muted text-lg">
                Comprehensive technology solutions tailored to modern business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.slice(0, 6).map((service) => (
                <motion.div
                  key={service.id}
                  whileHover={{ y: -10 }}
                  className="bg-primary-light/40 p-8 rounded-2xl border border-ui-border hover:border-accent/50 transition-all group backdrop-blur-sm shadow-lg hover:shadow-xl"
                >
                  <div className="w-14 h-14 bg-ui-panel rounded-xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all">
                    {getServiceIcon(service.icon)}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-text-main group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-text-muted text-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link 
                to="/services" 
                className="inline-flex items-center gap-3 text-accent hover:text-text-main transition-all font-bold tracking-wide group"
              >
                View All Services <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* 6. Stats Section */}
      <FadeInSection>
        <section className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: "50+", label: "Employees" },
              { val: "120+", label: "Projects Done" },
              { val: "500+", label: "Students Trained" },
              { val: "10+", label: "Global Partners" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-8 bg-ui-panel/40 rounded-2xl border border-ui-border backdrop-blur-sm hover:bg-primary-light/60 transition-all group">
                <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-3 group-hover:scale-110 transition-transform">
                  {stat.val}
                </div>
                <div className="text-text-muted text-sm uppercase tracking-widest font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* 7. Why Choose Us */}
      <FadeInSection>
        <section className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary-light to-primary border border-ui-border rounded-3xl p-12 md:p-20 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-text-main">
                  Why Choose AK Tech Hub?
                </h2>
                <ul className="space-y-6">
                  {[
                    { text: "Industry-Standard Curriculum", icon: <BookOpen size={20} /> },
                    { text: "Real-world Project Experience", icon: <Code size={20} /> },
                    { text: "Mentorship from Experts", icon: <Users size={20} /> },
                    { text: "Focus on Innovation & Ethics", icon: <Shield size={20} /> }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-lg text-text-muted">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                        {item.icon}
                      </div>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="bg-black/20 p-8 rounded-2xl backdrop-blur-md border border-white/10 transform rotate-3 hover:rotate-0 transition-transform duration-500 max-w-md">
                  <div className="flex items-center gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={20} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-xl italic font-serif text-white mb-4">
                    "AK Tech Hub transformed our approach to digital transformation. Their team's expertise and dedication are unmatched in the industry."
                  </p>
                  <div className="text-right text-white/70">
                    — Tech Innovation Magazine
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* 8. Testimonials */}
      <FadeInSection>
        <section className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-text-main">Client Testimonials</h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              What industry leaders say about working with us
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-primary-light/30 p-8 rounded-2xl border border-ui-border hover:border-accent/30 transition-all relative group"
              >
                <div className="text-5xl text-accent/10 font-serif absolute top-6 right-6">"</div>
                <p className="text-text-muted mb-8 italic relative z-10 min-h-[120px]">
                  {testimonial.content}
                </p>
                <div className="border-t border-ui-border pt-6">
                  <div className="font-bold text-lg text-text-main">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-accent">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* 9. Final CTA */}
      <FadeInSection>
        <section className="container mx-auto px-4">
          <div className="py-20 text-center relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-light to-primary border border-ui-border">
            <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-full transform scale-75 opacity-20"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 text-text-main">
                Ready to Transform Your Future?
              </h2>
              
              <p className="text-xl text-text-muted mb-12 max-w-3xl mx-auto leading-relaxed">
                Join us at AK Tech Hub either as a student, a partner, or a team member. Let's build the digital future together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  to="/contact" 
                  className="px-12 py-4 bg-accent text-white font-bold rounded-full hover:scale-105 transition-all shadow-[0_0_30px_var(--color-accent)] hover:shadow-[0_0_50px_var(--color-accent)]"
                >
                  Start Your Journey
                </Link>
                
                <Link 
                  to="/about" 
                  className="px-12 py-4 bg-transparent border-2 border-ui-border text-text-main font-bold rounded-full hover:bg-ui-panel/50 transition-all"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
};

export default Home;