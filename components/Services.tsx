import React from 'react';
import { Camera, Heart, Briefcase, Video } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    title: 'Wedding Stories',
    description: 'Cinematic documentation of your special day. Traditional & Candid styles.',
    price: 'Starts ₹25,000',
    icon: <Heart className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Portraiture',
    description: 'Studio and outdoor portraits that capture your true personality.',
    price: 'Starts ₹5,000',
    icon: <Camera className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Product & Brand',
    description: 'High-end product photography to elevate your e-commerce business.',
    price: 'Starts ₹8,000',
    icon: <Briefcase className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Cinematography',
    description: '4K video production for events, music videos, and commercials.',
    price: 'Starts ₹15,000',
    icon: <Video className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1579632652768-6cb9dcf85912?q=80&w=1976&auto=format&fit=crop'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="font-display text-5xl md:text-8xl uppercase text-white mb-6">Our Services</h2>
          <div className="h-1 w-24 bg-brand-accent"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative h-[400px] overflow-hidden border border-white/10 bg-brand-gray transition-all hover:-translate-y-2"
            >
              {/* Image Background */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-20"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-4 text-brand-accent transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-display text-2xl uppercase text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                  {service.description}
                </p>
                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                   <span className="text-brand-accent font-bold text-sm">{service.price}</span>
                   <span className="text-white text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">Read More</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;