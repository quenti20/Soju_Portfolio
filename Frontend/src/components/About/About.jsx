import { useEffect, useRef, useState } from 'react';
import data from '../../data/data.json';

const About = () => {
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
      id="about"
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 bg-zinc-950 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-violet-900/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10">
                <img
                  src={data.personal.avatar}
                  alt={data.personal.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-violet-500/10 border border-violet-500/20">
              <span className="w-2 h-2 bg-violet-400 rounded-full" />
              <span className="text-sm font-medium text-violet-300">About Me</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              A Passionate{' '}
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Creative
              </span>{' '}
              Eager to Make an Impact
            </h2>

            {/* Bio */}
            <p className="text-base sm:text-lg text-zinc-400 mb-8 leading-relaxed">
              {data.personal.bio}
            </p>

            {/* Skills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {data.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-zinc-900/50 border border-white/5 rounded-xl p-4 hover:border-violet-500/30 hover:bg-zinc-900 transition-all duration-300"
                >
                  <div className="text-2xl mb-2">{skill.icon}</div>
                  <div className="text-sm font-medium text-white mb-2">{skill.name}</div>
                  <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-full transition-all duration-1000"
                      style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Resume Button */}
            <a
              href={data.personal.resumeLink}
              className="inline-flex items-center gap-3 px-6 py-3 border border-zinc-700 text-white font-medium rounded-full hover:border-zinc-500 hover:bg-white/5 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;