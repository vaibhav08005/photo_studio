import React, { useState } from 'react';
import { Phone, MapPin, Mail, Instagram, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Wedding',
    date: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => {
      alert('Thanks for your inquiry! We will contact you shortly.');
      setSubmitted(false);
      setFormState({ name: '', email: '', phone: '', service: 'Wedding', date: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-32 bg-brand-dark relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="font-display text-5xl md:text-7xl uppercase text-white mb-8">
            Let's Create <br /> <span className="text-brand-accent">History</span>
          </h2>
          <p className="text-gray-400 mb-12 max-w-md">
            Ready to book your session or have a question? Fill out the form or visit our studio in Shivaji Nagar.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-none">
                <MapPin className="text-brand-accent" />
              </div>
              <div>
                <h4 className="text-white font-bold uppercase mb-1">Visit Us</h4>
                <p className="text-gray-400">Shivaji Nagar, Nanded,<br />Maharashtra 431602, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-none">
                <Phone className="text-brand-accent" />
              </div>
              <div>
                <h4 className="text-white font-bold uppercase mb-1">Call Us</h4>
                <p className="text-gray-400">+91 93737 68026</p>
                <p className="text-gray-500 text-sm">Mon - Sat: 10AM - 7PM</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-none">
                <Mail className="text-brand-accent" />
              </div>
              <div>
                <h4 className="text-white font-bold uppercase mb-1">Email</h4>
                <p className="text-gray-400">book@nandedsnaps.com</p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex gap-4">
            <a href="#" className="p-3 border border-white/20 rounded-full hover:bg-brand-accent hover:border-brand-accent hover:text-black transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-3 border border-white/20 rounded-full hover:bg-brand-accent hover:border-brand-accent hover:text-black transition-all">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <div className="bg-brand-gray p-8 border border-white/5">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500">Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-black/30 border border-white/10 p-3 text-white focus:outline-none focus:border-brand-accent transition-colors"
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500">Phone</label>
                <input
                  type="tel"
                  required
                  className="w-full bg-black/30 border border-white/10 p-3 text-white focus:outline-none focus:border-brand-accent transition-colors"
                  value={formState.phone}
                  onChange={e => setFormState({...formState, phone: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500">Email</label>
              <input
                type="email"
                required
                className="w-full bg-black/30 border border-white/10 p-3 text-white focus:outline-none focus:border-brand-accent transition-colors"
                value={formState.email}
                onChange={e => setFormState({...formState, email: e.target.value})}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500">Service Type</label>
                <select
                  className="w-full bg-black/30 border border-white/10 p-3 text-white focus:outline-none focus:border-brand-accent transition-colors"
                  value={formState.service}
                  onChange={e => setFormState({...formState, service: e.target.value})}
                >
                  <option>Wedding Photography</option>
                  <option>Portrait Shoot</option>
                  <option>Event Coverage</option>
                  <option>Product Shoot</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500">Preferred Date</label>
                <input
                  type="date"
                  className="w-full bg-black/30 border border-white/10 p-3 text-white focus:outline-none focus:border-brand-accent transition-colors"
                  value={formState.date}
                  onChange={e => setFormState({...formState, date: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500">Message</label>
              <textarea
                rows={4}
                className="w-full bg-black/30 border border-white/10 p-3 text-white focus:outline-none focus:border-brand-accent transition-colors"
                value={formState.message}
                onChange={e => setFormState({...formState, message: e.target.value})}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={submitted}
              className="w-full bg-brand-accent text-black font-bold uppercase tracking-widest py-4 hover:bg-white transition-colors duration-300 disabled:opacity-50"
            >
              {submitted ? 'Sending...' : 'Send Inquiry'}
            </button>
          </form>
        </div>
      </div>

      {/* Embedded Map */}
      <div className="mt-20 h-[400px] w-full grayscale opacity-70 hover:opacity-100 transition-opacity duration-500">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.665673103444!2d77.3037!3d19.1663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d66bb9d31317%3A0x493439c0545237f4!2sShivaji%20Nagar%2C%20Nanded%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Nanded Snaps Studio Location"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;