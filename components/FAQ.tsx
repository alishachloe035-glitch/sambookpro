
import React, { useState } from 'react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = FAQS.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-6 max-w-4xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Frequently Asked <span className="text-emerald-600">Questions</span></h2>
        <div className="relative max-w-lg mx-auto">
          <input 
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
          />
          <svg className="w-6 h-6 absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <div className="space-y-4">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <div 
              key={index}
              className={`border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'shadow-lg bg-emerald-50/50' : 'bg-white hover:bg-slate-50'
              }`}
            >
              <button 
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-emerald-700' : 'text-slate-900'}`}>
                  {faq.question}
                </span>
                <svg 
                  className={`w-6 h-6 text-emerald-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-emerald-100/50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 text-slate-500">
            No matching questions found. Try a different search or contact me directly!
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQ;
