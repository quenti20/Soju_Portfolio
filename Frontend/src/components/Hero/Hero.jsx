import { useEffect, useRef, useState, lazy, Suspense } from 'react';
import data from '../../data/data.json';

const FloatingShape = lazy(() => import('./FloatingShape'));

const Hero = () => {
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showCanvas, setShowCanvas] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Delay 3D canvas load — show on all viewports
    const timer = setTimeout(() => {
      setShowCanvas(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current || window.innerWidth < 768) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 10;
      const y = (clientY / innerHeight - 0.5) * 10;
      
      const bgElement = heroRef.current.querySelector('.parallax-bg');
      if (bgElement) {
        bgElement.style.transform = `translate(${x}px, ${y}px) scale(1.02)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="parallax-bg absolute inset-0 transition-transform duration-200 ease-out">
          <img
            src={data.personal.avatar}
            alt="Hero Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/80 to-zinc-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-zinc-950" />
      </div>

      {/* Animated gradient mesh */}
      <div className="absolute inset-0 z-0 opacity-30 animate-gradient-shift bg-gradient-to-br from-violet-900/20 via-transparent to-purple-900/20" style={{ backgroundSize: '200% 200%' }} />

      {/* Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />

      {/* 3D Floating Shape — lazy loaded, renders on all viewports */}
      {showCanvas && (
        <Suspense fallback={null}>
          <FloatingShape />
        </Suspense>
      )}

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        {/* Badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-violet-500/10 border border-violet-500/20 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-violet-300">Seeking Internship Opportunities</span>
        </div>

        {/* Main Heading */}
        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 ${isVisible ? 'animate-fade-up delay-100' : 'opacity-0'}`}>
          <span className="text-white block sm:inline">Hi, I'm </span>
          <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
            {data.personal.name.split(' ')[0]}
          </span>
        </h1>

        {/* Title */}
        <p className={`text-xl sm:text-2xl md:text-3xl text-zinc-300 font-medium mb-4 ${isVisible ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
          {data.personal.title}
        </p>

        {/* Tagline */}
        <p className={`max-w-2xl mx-auto text-base sm:text-lg text-zinc-500 mb-10 leading-relaxed px-4 ${isVisible ? 'animate-fade-up delay-300' : 'opacity-0'}`}>
          {data.personal.tagline}
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 px-4 ${isVisible ? 'animate-fade-up delay-400' : 'opacity-0'}`}>
          <a
            href="#works"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-full shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span>View My Work</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-zinc-700 text-white font-semibold rounded-full hover:border-violet-500/50 hover:bg-white/5 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300"
          >
            <span>Get In Touch</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block">
        <div className="w-6 h-10 rounded-full border-2 border-zinc-600 flex justify-center pt-2 animate-bounce">
          <div className="w-1 h-2.5 bg-zinc-500 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;