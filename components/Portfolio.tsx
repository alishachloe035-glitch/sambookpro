
import React, { useState } from 'react';
import { PROJECTS, REVIEWS } from '../constants';
import { Project } from '../types';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const categories = ['All', 'Full Launch', 'SEO', 'PR', 'Social Media'];
  
  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.service === filter);

  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-6 md:space-y-0">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Case <span className="text-emerald-600">Studies</span></h2>
          <p className="text-slate-600 max-w-lg">
            Real results for real authors. Each project represents a unique strategy tailored to market demands.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                filter === cat 
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-200' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProjects.map((project: Project) => (
          <div 
            key={project.id}
            className="group relative bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Project Image */}
            <div className="relative h-[400px]">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60"></div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                <span className="text-xs font-bold bg-emerald-500 px-2 py-1 rounded mb-2 inline-block">{project.service}</span>
                <h3 className="text-xl font-bold leading-tight">{project.title}</h3>
                <p className="text-sm opacity-80">By {project.author}</p>
              </div>

              {/* Hover Stats Detail */}
              <div className={`absolute inset-0 glass-effect p-8 flex flex-col justify-center transition-all duration-500 ${
                hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
              }`}>
                <h4 className="text-emerald-600 font-bold mb-4 uppercase text-xs tracking-widest">Growth Metrics</h4>
                <div className="space-y-6">
                  <div>
                    <div className="text-slate-400 text-xs mb-1">Impact</div>
                    <div className="text-slate-900 font-bold text-lg">{project.successMetric}</div>
                  </div>
                  <div className="flex justify-between border-t border-slate-200 pt-4">
                    <div>
                      <div className="text-slate-400 text-xs mb-1 uppercase">Before</div>
                      <div className="text-slate-600 line-through text-sm">{project.before}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-emerald-500 text-xs mb-1 font-bold uppercase">After</div>
                      <div className="text-slate-900 font-bold text-sm">{project.after}</div>
                    </div>
                  </div>
                </div>
                <button className="mt-8 py-3 bg-slate-900 text-white rounded-xl font-bold text-sm">Case Study Full Report</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Reviews Section */}
      <div className="mt-24">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-slate-900">What Authors Say</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {REVIEWS.map(review => (
            <div key={review.id} className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100 relative">
              <div className="absolute top-8 right-8 opacity-10">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H17.017C14.8079 14 13.017 12.2091 13.017 10V5H21.017V16C21.017 18.7614 18.7784 21 16.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017V14H6.017C3.80786 14 2.017 12.2091 2.017 10V5H10.017V16C10.017 18.7614 7.77843 21 5.017 21H3.017Z"/></svg>
              </div>
              <div className="flex space-x-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-emerald-500 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-slate-700 italic text-lg mb-6 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center font-bold text-emerald-700">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{review.name}</div>
                  <div className="text-sm text-slate-500">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
