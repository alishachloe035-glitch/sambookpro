
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2 space-y-6">
            <div className="text-white text-2xl font-bold flex items-center">
              <span className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white mr-2">S</span>
              SamBookPro
            </div>
            <p className="max-w-sm text-slate-400">
              The premier agency for high-impact book marketing campaigns. We turn authors into icons through data-driven strategies and relentless PR.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">About</a></li>
              <li><a href="#portfolio" className="hover:text-emerald-400 transition-colors">Case Studies</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Join the Bestseller Club</h4>
            <p className="text-xs text-slate-500 mb-4 uppercase tracking-widest font-bold">Marketing Insights Monthly</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-slate-800 border-none rounded-l-lg px-4 py-2 w-full focus:ring-1 focus:ring-emerald-500 outline-none"
              />
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-r-lg transition-colors font-bold">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-slate-500 uppercase tracking-widest font-bold">
          <div>© 2024 SamBookPro. All Rights Reserved.</div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
