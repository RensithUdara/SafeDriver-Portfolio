import React, { useState, useRef } from 'react';
import NextImage from 'next/image';
import { ArrowRight, MapPin, Phone, Mail, ShieldCheck, Send, Sparkles } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Footer = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

  const isEmailJsConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

  const getEmailJsErrorMessage = (error: unknown) => {
    if (error && typeof error === 'object') {
      const errorDetails = error as { status?: number; text?: string; message?: string };
      if (errorDetails.text) return errorDetails.text;
      if (errorDetails.message) return errorDetails.message;
      if (errorDetails.status) return `EmailJS request failed with status ${errorDetails.status}`;
    }

    return 'EmailJS request failed. Check your service, template, public key, and template variables.';
  };

  const validateField = (name: string, value: string) => {
    let error = '';
    if (!value.trim()) {
      error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    } else if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        error = 'Please enter a valid email address';
      }
    }
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message)
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some(error => error !== '')) {
      toast.error('Please fix the errors before submitting.');
      return;
    }

    if (!isEmailJsConfigured) {
      toast.error('EmailJS is not configured. Please check your .env file and restart the dev server.');
      return;
    }

    setIsSubmitting(true);
    const loadingToast = toast.loading('Sending your message...');

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          time: new Date().toLocaleString('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })
        },
        PUBLIC_KEY
      );
      toast.success('Message sent successfully!', { id: loadingToast });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      const errorMessage = getEmailJsErrorMessage(error);
      console.error('EmailJS Error:', errorMessage, error);
      toast.error(errorMessage, { id: loadingToast });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="relative overflow-hidden bg-[#07111F] text-white">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="absolute inset-x-0 top-0 h-1 bg-[#0B63CE]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(11,99,206,0.28),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.16),transparent_30%)]"></div>
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/5 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#38BDF8]">
            <ShieldCheck size={16} />
            SafeDriver support
            </div>
            <h2 className="text-4xl font-extrabold uppercase tracking-wide text-white sm:text-5xl">Contact Us</h2>
            <p className="mt-5 max-w-2xl leading-7 text-slate-300">
              Reach the SafeDriver research team for project updates, collaboration, technical questions, or platform demonstrations.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0B63CE] text-white">
                <Sparkles size={22} />
              </div>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#38BDF8]">Project focus</p>
                <h3 className="mt-2 text-2xl font-extrabold leading-tight">Safer public transport, powered by AI driver monitoring.</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4 content-start">
            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-xl shadow-black/10 backdrop-blur-md transition-colors hover:border-[#38BDF8]/40">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#0B63CE]">
                  <MapPin className="text-white" size={22} />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-lg">Address</h4>
                  <p className="leading-6 text-white/70">The Open University of Sri Lanka, Nawala, Nugegoda.</p>
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-xl shadow-black/10 backdrop-blur-md transition-colors hover:border-[#38BDF8]/40">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10"><Phone className="text-[#38BDF8]" size={20} /></div>
                  <div className="min-w-0">
                    <h4 className="font-bold mb-1 text-lg">Phone</h4>
                    <a href="tel:+94761155638" className="block truncate text-white/70 transition-colors hover:text-white">+94 76 115 5638</a>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-xl shadow-black/10 backdrop-blur-md transition-colors hover:border-[#38BDF8]/40">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10"><Mail className="text-[#38BDF8]" size={20} /></div>
                  <div className="min-w-0">
                    <h4 className="font-bold mb-1 text-lg">Email</h4>
                    <a href="mailto:safedriversystem@gmail.com" className="block truncate text-white/70 transition-colors hover:text-white">safedriversystem@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-[#38BDF8]/20 bg-[#0B63CE] p-5 shadow-xl shadow-[#0B63CE]/20">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#BAE6FD]">Response window</p>
              <p className="mt-2 text-base font-bold leading-7">We usually respond within 24 to 48 hours.</p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white p-6 shadow-2xl shadow-black/30 sm:p-8">
            <div className="mb-7 flex items-start justify-between gap-4">
              <div>
                <h4 className="text-2xl font-extrabold text-[#0B1220] mb-2">Send Us a Message</h4>
                <p className="text-sm leading-6 text-slate-500">Tell us what you need and the team will respond with the right project information.</p>
              </div>
              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EFF6FF] text-[#0B63CE] sm:flex">
                <Send size={22} />
              </div>
            </div>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-extrabold uppercase tracking-widest text-slate-400">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-[#F8FAFC] border ${errors.name ? 'border-red-500' : 'border-gray-200'} text-[#0B1220] rounded-2xl p-4 focus:outline-none focus:border-[#0B63CE] focus:ring-4 focus:ring-[#0B63CE]/10 transition-colors`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-extrabold uppercase tracking-widest text-slate-400">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-[#F8FAFC] border ${errors.email ? 'border-red-500' : 'border-gray-200'} text-[#0B1220] rounded-2xl p-4 focus:outline-none focus:border-[#0B63CE] focus:ring-4 focus:ring-[#0B63CE]/10 transition-colors`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-xs font-extrabold uppercase tracking-widest text-slate-400">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-[#F8FAFC] border ${errors.message ? 'border-red-500' : 'border-gray-200'} text-[#0B1220] rounded-2xl p-4 focus:outline-none focus:border-[#0B63CE] focus:ring-4 focus:ring-[#0B63CE]/10 transition-colors`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1 ml-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-[#0B63CE] text-white px-10 py-5 cursor-pointer rounded-full font-bold text-lg hover:bg-[#084A99] transition-all shadow-xl hover:shadow-[#0B63CE]/30 hover:-translate-y-1 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed hover:translate-y-0' : ''}`}
              >
                {isSubmitting ? 'Sending...' : <>Submit Inquiry <ArrowRight size={20} /></>}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 grid gap-8 border-t border-white/10 pt-10 text-sm text-white/70 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <NextImage src="/safedriver-logo.png" alt="SafeDriver logo" width={48} height={48} unoptimized className="h-12 w-12 rounded-xl object-cover bg-white" />
              <div className="font-extrabold text-3xl text-white tracking-tight">SafeDriver</div>
            </div>
            <p className="max-w-md text-base leading-relaxed">AI-based driver monitoring and accident prevention for safer public transport operations.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase text-white tracking-wide">Quick Links</h4>
            <ul className="space-y-3 font-medium">
              <li><a href="#home" className="hover:text-white transition cursor-pointer">Home</a></li>
              <li><a href="#domain" className="hover:text-white transition cursor-pointer">Domain</a></li>
              <li><a href="#technologies" className="hover:text-white transition cursor-pointer">Technologies</a></li>
              <li><a href="#documents" className="hover:text-white transition cursor-pointer">Documents</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase text-white tracking-wide">Contact</h4>
            <ul className="space-y-3 font-medium">
              <li><a href="mailto:safedriversystem@gmail.com" className="hover:text-white transition cursor-pointer">safedriversystem@gmail.com</a></li>
              <li><a href="tel:+94761155638" className="hover:text-white transition cursor-pointer">+94 76 115 5638</a></li>
              <li>The Open University of Sri Lanka</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm font-medium text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>(c) 2026 SafeDriver - All Rights Reserved</p>
          <p>AI Driver Monitoring and Accident Prevention Platform</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
