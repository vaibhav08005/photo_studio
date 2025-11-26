import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Priya & Rahul',
    role: 'Wedding Clients',
    quote: "The team was absolutely phenomenal. They captured moments we didn't even realize were happening. The wedding album feels like a movie.",
    rating: 5
  },
  {
    id: 2,
    name: 'Amit Deshmukh',
    role: 'Corporate Event',
    quote: "Professional, punctual, and highly creative. They understood our brand vision perfectly for the product launch.",
    rating: 5
  },
  {
    id: 3,
    name: 'Sarah Khan',
    role: 'Fashion Model',
    quote: "I've worked with many photographers in Mumbai and Pune, but Nanded Snaps brings a unique artistic flair that is hard to find.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-brand-gray border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center font-display text-4xl uppercase text-white mb-16">Client Stories</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-brand-dark p-8 border border-white/5 relative hover:border-brand-accent/50 transition-colors">
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-accent text-brand-accent" />
                ))}
              </div>
              <p className="text-gray-400 italic mb-8 leading-relaxed">"{t.quote}"</p>
              <div>
                <h4 className="text-white font-bold uppercase tracking-wide">{t.name}</h4>
                <span className="text-xs text-brand-accent uppercase tracking-widest">{t.role}</span>
              </div>
              <div className="absolute top-0 right-0 p-4 opacity-10">
                 <span className="font-display text-8xl text-white">"</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;