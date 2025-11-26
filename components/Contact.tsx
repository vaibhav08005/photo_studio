import React, { useState } from 'react';
import { Phone, MapPin, Mail, Instagram, Facebook, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, RECIPIENT_EMAIL } from '../emailjs.config';

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
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setStatus({ type: null, message: '' });

    try {
      // EmailJS configuration
      const serviceID = EMAILJS_CONFIG.serviceID;
      const templateID = EMAILJS_CONFIG.templateID;
      const publicKey = EMAILJS_CONFIG.publicKey;

      // Prepare email parameters
      const templateParams = {
        to_email: RECIPIENT_EMAIL,
        from_name: formState.name,
        from_email: formState.email,
        phone: formState.phone,
        service: formState.service,
        date: formState.date,
        message: formState.message,
        reply_to: formState.email
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        setStatus({ 
          type: 'success', 
          message: 'Thanks for your inquiry! We will contact you shortly.' 
        });
        setFormState({ name: '', email: '', phone: '', service: 'Wedding', date: '', message: '' });
      }
    } catch (error) {
      console.error('Email send error:', error);
      setStatus({ 
        type: 'error', 
        message: 'Failed to send inquiry. Please try again or contact us directly.' 
      });
    } finally {
      setSubmitted(false);
      // Clear status message after 5 seconds
      setTimeout(() => {
        setStatus({ type: null, message: '' });
      }, 5000);
    }
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
                <p className="text-gray-400">vsontakke100@gmail.com</p>
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
                  <option>Birthday shoot</option>
                  <option>Other</option>
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

            {/* Status Message */}
            {status.type && (
              <div className={`flex items-center gap-3 p-4 rounded ${
                status.type === 'success' 
                  ? 'bg-green-500/10 border border-green-500/30 text-green-400' 
                  : 'bg-red-500/10 border border-red-500/30 text-red-400'
              }`}>
                {status.type === 'success' ? (
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                )}
                <p className="text-sm">{status.message}</p>
              </div>
            )}
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