
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isHovered) return;
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHovered]);

  const keywords = [
    { text: 'Bestsellers', delay: '0.1s' },
    { text: 'Marketing Strategy', delay: '0.3s' },
    { text: 'Book Launch', delay: '0.5s' }
  ];

  const services = [
    "Amazon SEO",
    "Global PR",
    "Viral Social",
    "Ads Management",
    "Email Funnels"
  ];

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-slate-50 pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-emerald-300 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold uppercase tracking-wider animate-bounce">
            10+ Years of Bestsellers
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-slate-900">
            Transforming Your <span className="text-emerald-600">Book</span> into a <span className="italic underline decoration-emerald-400">Bestseller</span>.
          </h1>
          <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
            From algorithmic optimization to viral PR campaigns, I provide the strategic architecture that launches authors into the spotlight.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#about"
              className="px-8 py-4 bg-emerald-500 text-white rounded-xl font-bold shadow-lg shadow-emerald-200 hover:bg-emerald-600 transition-all transform hover:-translate-y-1"
            >
              Get Started
            </a>
            <a 
              href="#portfolio"
              className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all"
            >
              View Case Studies
            </a>
          </div>

          <div className="flex items-center space-x-6 pt-8 text-sm font-bold overflow-hidden">
            {keywords.map((keyword, index) => (
              <React.Fragment key={keyword.text}>
                <div className="relative overflow-hidden group">
                  <span 
                    className="inline-block text-slate-400 animate-slide-up-fade"
                    style={{ animationDelay: keyword.delay }}
                  >
                    #{keyword.text.replace(/\s+/g, '')}
                  </span>
                  <div 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-400 transform translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300"
                  ></div>
                </div>
                {index < keywords.length - 1 && (
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center items-center h-[500px]">
          {/* 3D Book Animation Wrapper */}
          <div 
            className={`relative w-64 h-96 transition-all duration-700 ease-in-out cursor-pointer ${isHovered ? 'scale-110' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              setMousePosition({ x: 0, y: 0 });
            }}
            style={{ 
              perspective: '1500px',
            }}
          >
            {/* The Book Container */}
            <div 
              className="w-full h-full relative transition-transform duration-700" 
              style={{ 
                transformStyle: 'preserve-3d',
                transform: isHovered 
                  ? 'rotateY(180deg)' 
                  : `rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)`
              }}
            >
              {/* Front Cover */}
              <div className="absolute inset-0 bg-emerald-600 rounded-r-md shadow-2xl flex items-center justify-center p-8 text-white z-20" style={{ backfaceVisibility: 'hidden' }}>
                <div className="border-4 border-white/20 w-full h-full p-4 flex flex-col justify-between">
                  <h3 className="text-3xl font-bold font-serif leading-none uppercase">The Bestseller Formula</h3>
                  <div className="text-xs uppercase tracking-widest opacity-60">By SamBookPro</div>
                </div>
              </div>

              {/* Back Face (Inside/Details) */}
              <div 
                className="absolute inset-0 bg-white border-2 border-slate-100 rounded-l-md shadow-2xl flex flex-col p-8 text-slate-900" 
                style={{ 
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)'
                }}
              >
                <h4 className="text-emerald-600 font-bold uppercase text-xs tracking-widest mb-4">Our Services</h4>
                <ul className="space-y-4 flex-1">
                  {services.map((service, i) => (
                    <li key={i} className="flex items-center text-sm font-medium text-slate-700">
                      <span className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mr-3 text-[10px] font-bold">✓</span>
                      {service}
                    </li>
                  ))}
                </ul>
                <div className="text-[10px] text-slate-400 uppercase tracking-tighter mt-4 border-t pt-4">
                  Full Strategic Architecture
                </div>
              </div>

              {/* Spine */}
              <div className="absolute top-0 left-0 w-12 h-full bg-emerald-800 origin-left" style={{ transform: 'rotateY(-90deg)' }}></div>
              
              {/* Pages side */}
              <div className="absolute inset-y-1 right-1 w-11 bg-slate-50 shadow-inner" style={{ transform: 'rotateY(90deg) translateZ(32px)' }}></div>
            </div>

            {/* Floating Stats */}
            {!isHovered && (
              <>
                <div className="absolute -top-10 -right-10 bg-white p-4 rounded-2xl shadow-xl animate-float z-30 pointer-events-none">
                  <div className="text-emerald-500 font-bold text-xl">100+</div>
                  <div className="text-xs text-slate-500 uppercase tracking-tight">Bestsellers</div>
                </div>
                <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-2xl shadow-xl animate-float z-30 pointer-events-none" style={{ animationDelay: '1.5s' }}>
                  <div className="text-blue-500 font-bold text-xl">1M+</div>
                  <div className="text-xs text-slate-500 uppercase tracking-tight">Copies Sold</div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes slideUpFade {
          0% { transform: translateY(100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-slide-up-fade {
          animation: slideUpFade 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Hero;
