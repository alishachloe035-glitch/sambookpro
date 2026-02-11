
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Craft Your <span className="text-emerald-400">Success Story</span></h2>
          <p className="text-slate-400 text-lg">
            Ready to take your book from the draft stage to the bestseller lists? Fill out the form or reach out via live chat for an immediate consultation.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-slate-500 uppercase font-bold tracking-widest">Email Me</div>
                <div className="text-xl font-medium">hello@bestsellerarchitect.com</div>
              </div>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-slate-500 uppercase font-bold tracking-widest">Studio Location</div>
                <div className="text-xl font-medium">Hudson Yards, NYC</div>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <div className="text-sm text-slate-500 uppercase font-bold tracking-widest mb-4">Follow My Strategy</div>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'Instagram'].map(social => (
                <a 
                  key={social}
                  href="#" 
                  className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center hover:bg-white hover:text-slate-900 hover:border-white transition-all transform hover:-translate-y-1"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-slate-400 rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl relative">
          {/* Animated Background Element */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-500 rounded-2xl rotate-12 -z-10 animate-pulse"></div>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Book Genre</label>
              <select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all">
                <option>Fiction / Thriller</option>
                <option>Non-Fiction / Business</option>
                <option>Memoir / Biography</option>
                <option>Children's Literature</option>
                <option>Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                placeholder="Tell me about your book..."
              />
            </div>
            <button className="w-full py-5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-emerald-200 transition-all transform active:scale-[0.98]">
              Send Proposal Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
