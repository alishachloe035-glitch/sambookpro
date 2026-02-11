
import React, { useState } from 'react';
import { MILESTONES } from '../constants';

const AboutMe: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">A Decade of <span className="text-emerald-600">Influence</span></h2>
        <p className="text-lg text-slate-600">
          From the early days of traditional publishing to the digital-first era, my journey has been about one thing: connecting great stories with the readers who need them most.
        </p>
      </div>

      <div className="relative">
        {/* Center Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-100 hidden md:block"></div>

        <div className="space-y-12">
          {MILESTONES.map((item, index) => (
            <div 
              key={item.id}
              className={`flex flex-col md:flex-row items-center justify-center w-full group ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content Card */}
              <div 
                className={`w-full md:w-[45%] p-8 bg-white border border-slate-100 rounded-3xl transition-all duration-500 cursor-default
                  ${activeId === item.id ? 'shadow-2xl ring-2 ring-emerald-500/20 translate-y-[-8px]' : 'shadow-lg hover:shadow-xl'}
                `}
                onMouseEnter={() => setActiveId(item.id)}
                onMouseLeave={() => setActiveId(null)}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-emerald-600 font-bold text-xl">{item.year}</span>
                  <div className={`p-2 rounded-full bg-emerald-50 transition-colors ${activeId === item.id ? 'bg-emerald-500 text-white' : 'text-emerald-500'}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 mb-4">{item.description}</p>
                
                <div className={`overflow-hidden transition-all duration-300 ${activeId === item.id ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Key Achievements</h4>
                  <ul className="space-y-2">
                    {item.achievements.map((ach, i) => (
                      <li key={i} className="flex items-center text-sm text-slate-700">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></span>
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Center Dot */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center z-10">
                <div className={`w-4 h-4 rounded-full border-4 border-white transition-all duration-300 ${
                  activeId === item.id ? 'bg-emerald-500 scale-150 shadow-[0_0_15px_rgba(16,185,129,0.5)]' : 'bg-slate-300'
                }`}></div>
              </div>

              {/* Spacing for Reverse Layout */}
              <div className="hidden md:block w-[45%]"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
