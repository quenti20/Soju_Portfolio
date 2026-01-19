import { useEffect, useRef, useState } from 'react';
import data from '../../data/data.json';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 bg-zinc-950 overflow-hidden"
    >
      {/* Borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-violet-500/10 border border-violet-500/20">
            <span className="w-2 h-2 bg-violet-400 rounded-full" />
            <span className="text-sm font-medium text-violet-300">What I Do</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Services I{' '}
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-400">
            From concept to completion, I provide comprehensive creative services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {data.services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative p-6 sm:p-8 bg-zinc-900/30 border border-white/5 rounded-2xl hover:border-violet-500/30 hover:bg-zinc-900/50 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center text-2xl sm:text-3xl mb-5 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 group-hover:text-violet-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-zinc-400 mb-5 leading-relaxed">
                {service.description}
              </p>

              {/* Link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-violet-400 font-medium hover:text-violet-300 transition-colors"
              >
                Get Started
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              {/* Number */}
              <div className="absolute top-6 right-6 sm:top-8 sm:right-8 text-5xl sm:text-6xl font-bold text-zinc-800/30 group-hover:text-violet-500/10 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block p-[1px] rounded-2xl bg-gradient-to-r from-violet-500 via-purple-500 to-violet-500">
            <div className="px-6 sm:px-8 py-5 sm:py-6 rounded-2xl bg-zinc-950">
              <p className="text-base sm:text-xl text-white mb-4">
                Have a project in mind? Let's work together!
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
              >
                Start a Conversation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
