'use client';

import { ArrowRight, Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, PawPrint, Sun, Moon, Heart, Github } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import LeoAiLogo1 from '../../imports/LeoAiLogo1';
import { useState, useTransition } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { submitContactForm } from '@/app/actions/contact';

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: 'https://x.com/leoaiagency' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/leoaiagency/' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/LeoAIAgency' },
  { name: 'Email', icon: Mail, href: 'mailto:hello@leoaiplatform.com' },
];

interface PawAnimation {
  id: number;
  x: number;
  y: number;
}

interface CTAFooterLeoProps {
  hideContactForm?: boolean;
}

export default function CTAFooterLeo({ hideContactForm = false }: CTAFooterLeoProps) {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [pawAnimations, setPawAnimations] = useState<PawAnimation[]>([]);
  const [isPending, startTransition] = useTransition();
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      const fd = new FormData();
      fd.append('name', formData.name);
      fd.append('email', formData.email);
      fd.append('phone', formData.phone);
      fd.append('message', formData.message);
      const result = await submitContactForm(fd);
      if (result.success) {
        setFormStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePawClick = () => {
    const newPawId = Date.now();
    
    // Create multiple paws with random positions
    const newPaws = Array.from({ length: 24 }, (_, i) => ({
      id: newPawId + i,
      x: Math.random() * (window.innerWidth - 100) + 50,
      y: window.innerHeight - 150,
    }));
    
    setPawAnimations(prev => [...prev, ...newPaws]);
    
    // Remove paws after animation completes
    setTimeout(() => {
      setPawAnimations(prev => prev.filter(paw => !newPaws.some(newPaw => newPaw.id === paw.id)));
    }, 2500);
  };

  return (
    <>
      {/* Contact CTA Section */}
      {!hideContactForm && (
        <section id="contact" className="relative py-20 bg-[#0F0F0F] dark:bg-[#0F0F0F] light:bg-[#FAFAFA] transition-colors duration-300">
          {/* Top Gradient Fade */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#0F0F0F] dark:from-[#0F0F0F] light:from-[#FAFAFA] to-transparent" />
          
          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            {/* Section Heading */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mb-4">
                Ready to Build Your Own AI Agent?
              </h2>
              <p className="text-lg text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280] max-w-2xl mx-auto">
                Start your 14-day free trial today. No credit card required. 
                Set up in minutes and see results immediately.
              </p>
            </div>

            {/* Contact Form Layout */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left Side - Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-4xl lg:text-5xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mb-2">
                    Let's <span className="bg-gradient-to-r from-[#70BEFA] to-[#70BEFA] bg-clip-text text-transparent">talk!</span>
                  </h3>
                </div>

                <div className="space-y-6">
                  {/* London Office */}
                  <div>
                    <div className="flex items-start gap-3 mb-2">
                      <MapPin className="w-5 h-5 text-[#70BEFA] mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mb-1">London Office:</h4>
                        <p className="text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280] text-sm">
                          C/O 389c, High Road, London, United Kingdom, N22 8JA
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Istanbul Office */}
                  <div>
                    <div className="flex items-start gap-3 mb-2">
                      <MapPin className="w-5 h-5 text-[#70BEFA] mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mb-1">Istanbul Office:</h4>
                        <p className="text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280] text-sm">
                          Acıbadem Mah. Çeçen Sk. No:25 Akasya AVM, No: 428 Üsküdar
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-[#70BEFA] mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280] text-sm mb-1">Email:</h4>
                        <a 
                          href="mailto:hello@leoaiplatform.com" 
                          className="text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] text-lg hover:text-[#70BEFA] transition-colors"
                        >
                          hello@leoaiplatform.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="max-w-md">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] text-sm">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Leo"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-[#0A0A0A] dark:bg-[#0A0A0A] light:bg-white border-[#222222] dark:border-[#222222] light:border-[#E5E7EB] text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] placeholder:text-[#6E7681] dark:placeholder:text-[#6E7681] light:placeholder:text-[#9CA3AF] focus:border-[#70BEFA] focus:ring-[#70BEFA]/20 rounded-lg h-10"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] text-sm">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="leo@leoaiplatform.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-[#0A0A0A] dark:bg-[#0A0A0A] light:bg-white border-[#222222] dark:border-[#222222] light:border-[#E5E7EB] text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] placeholder:text-[#6E7681] dark:placeholder:text-[#6E7681] light:placeholder:text-[#9CA3AF] focus:border-[#70BEFA] focus:ring-[#70BEFA]/20 rounded-lg h-10"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] text-sm">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+44 7XXX XXX XXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-[#0A0A0A] dark:bg-[#0A0A0A] light:bg-white border-[#222222] dark:border-[#222222] light:border-[#E5E7EB] text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] placeholder:text-[#6E7681] dark:placeholder:text-[#6E7681] light:placeholder:text-[#9CA3AF] focus:border-[#70BEFA] focus:ring-[#70BEFA]/20 rounded-lg h-10"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] text-sm">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Hi Leo AI Team! I'm reaching out for..."
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-[#0A0A0A] dark:bg-[#0A0A0A] light:bg-white border-[#222222] dark:border-[#222222] light:border-[#E5E7EB] text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] placeholder:text-[#6E7681] dark:placeholder:text-[#6E7681] light:placeholder:text-[#9CA3AF] focus:border-[#70BEFA] focus:ring-[#70BEFA]/20 rounded-lg resize-none"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isPending}
                    className="bg-[#222222] backdrop-blur-md border border-[#70BEFA]/20 text-[#FFFFFF] hover:bg-[#70BEFA] px-8 py-3 rounded-xl shadow-xl hover:shadow-[#70BEFA]/20 transition-all disabled:opacity-50"
                  >
                    {isPending ? 'Sending...' : 'Submit'}
                  </Button>
                  {formStatus === 'success' && (
                    <p className="text-green-400 text-sm">Message sent successfully!</p>
                  )}
                  {formStatus === 'error' && (
                    <p className="text-red-400 text-sm">Failed to send. Please try again.</p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="relative py-20 bg-[#0F0F0F] dark:bg-[#0F0F0F] light:bg-[#FAFAFA] text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280] transition-colors duration-300">
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          {/* Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10">
                <LeoAiLogo1 />
              </div>
              <span 
                className="text-xl md:text-2xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A]"
                style={{ fontFamily: '"Switzer", "Switzer Placeholder", sans-serif' }}
              >
                Leo AI Platform
              </span>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-3 text-xs">
              {isHomePage ? (
                <a 
                  href="#home" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="hover:text-[#70BEFA] transition-colors"
                >
                  Home
                </a>
              ) : (
                <Link href="/#home" className="hover:text-[#70BEFA] transition-colors">
                  Home
                </Link>
              )}
              <span className="text-[#222222]">|</span>
              {isHomePage ? (
                <a 
                  href="#features" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="hover:text-[#70BEFA] transition-colors"
                >
                  Features
                </a>
              ) : (
                <Link href="/#features" className="hover:text-[#70BEFA] transition-colors">
                  Features
                </Link>
              )}
              <span className="text-[#222222]">|</span>
              {isHomePage ? (
                <a 
                  href="#agents" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#agents')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="hover:text-[#70BEFA] transition-colors"
                >
                  AI Agents
                </a>
              ) : (
                <Link href="/#agents" className="hover:text-[#70BEFA] transition-colors">
                  AI Agents
                </Link>
              )}
              <span className="text-[#222222]">|</span>
              {isHomePage ? (
                <a 
                  href="#integrations" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#integrations')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="hover:text-[#70BEFA] transition-colors"
                >
                  Integrations
                </a>
              ) : (
                <Link href="/#integrations" className="hover:text-[#70BEFA] transition-colors">
                  Integrations
                </Link>
              )}
              <span className="text-[#222222]">|</span>
              {isHomePage ? (
                <a 
                  href="#faq" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#faq')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="hover:text-[#70BEFA] transition-colors"
                >
                  FAQ
                </a>
              ) : (
                <Link href="/#faq" className="hover:text-[#70BEFA] transition-colors">
                  FAQ
                </Link>
              )}
              <span className="text-[#222222]">|</span>
              <Link
                href="/terms-and-conditions"
                className="hover:text-[#70BEFA] transition-colors"
              >
                Terms & Conditions
              </Link>
              <span className="text-[#222222]">|</span>
              <Link
                href="/privacy-policy"
                className="hover:text-[#70BEFA] transition-colors"
              >
                Privacy Policy
              </Link>
            </div>

            {/* Social Links & Theme Toggle */}
            <div className="flex gap-3 items-center">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.name === 'Email' ? undefined : '_blank'}
                    rel={social.name === 'Email' ? undefined : 'noopener noreferrer'}
                    className="w-9 h-9 bg-[#161616] dark:bg-[#161616] light:bg-white backdrop-blur-md border border-[#222222] dark:border-[#222222] light:border-[#E5E7EB] hover:bg-[#222222] dark:hover:bg-[#222222] light:hover:bg-gray-100 hover:border-[#70BEFA] rounded-lg flex items-center justify-center transition-all"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
              
              {/* Theme Toggle - Dual Icon */}
              <div className="flex items-center gap-0 bg-[#161616] dark:bg-[#161616] light:bg-white border border-[#222222] dark:border-[#222222] light:border-[#E5E7EB] rounded-lg p-1">
                <button
                  onClick={() => theme === 'light' && toggleTheme()}
                  className={`p-1.5 rounded transition-all ${
                    theme === 'dark' 
                      ? 'bg-[#70BEFA] text-white' 
                      : 'bg-transparent text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280] hover:text-[#70BEFA]'
                  }`}
                  aria-label="Dark mode"
                >
                  <Moon className="w-4 h-4" />
                </button>
                <button
                  onClick={() => theme === 'dark' && toggleTheme()}
                  className={`p-1.5 rounded transition-all ${
                    theme === 'light' 
                      ? 'bg-[#70BEFA] text-white' 
                      : 'bg-transparent text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280] hover:text-[#70BEFA]'
                  }`}
                  aria-label="Light mode"
                >
                  <Sun className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-[#161616] dark:border-[#161616] light:border-[#E5E7EB] text-center text-sm text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280]">
            <div>© {new Date().getFullYear()} Leo AI Agency. All rights reserved.</div>
            <div className="mt-2 flex items-center justify-center gap-2">
              <span>We love you Leo</span>
              <span className="text-red-500">❤️</span>
              <button 
                onClick={handlePawClick}
                className="cursor-pointer hover:scale-110 transition-transform duration-200 focus:outline-none"
                aria-label="Click for paw animation"
              >
                <PawPrint className="w-4 h-4 text-[#70BEFA]" />
              </button>
            </div>
          </div>
        </div>

        {/* Floating Paw Animations */}
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
          <AnimatePresence>
            {pawAnimations.map((paw) => (
              <motion.div
                key={paw.id}
                initial={{ 
                  opacity: 0,
                  rotate: 0
                }}
                animate={{ 
                  opacity: [0, 1, 1, 1, 0], 
                  y: -500,
                  rotate: [0, 180, 360, 360, 360]
                }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 2.5,
                  ease: "easeOut"
                }}
                className="absolute"
                style={{ left: paw.x, top: paw.y }}
              >
                {/* Paw Icon - visible for first half */}
                <motion.div
                  animate={{
                    opacity: [1, 1, 0],
                    scale: [1, 1, 0]
                  }}
                  transition={{
                    duration: 2.5,
                    times: [0, 0.6, 0.7]
                  }}
                >
                  <PawPrint className="w-4 h-4 text-[#70BEFA] drop-shadow-[0_0_15px_rgba(112,190,250,0.8)]" />
                </motion.div>
                
                {/* Heart Icon - visible for second half */}
                <motion.div
                  className="absolute top-0 left-0"
                  animate={{
                    opacity: [0, 0, 1, 1],
                    scale: [0, 0, 1.2, 1]
                  }}
                  transition={{
                    duration: 2.5,
                    times: [0, 0.6, 0.7, 0.8]
                  }}
                >
                  <Heart className="w-4 h-4 text-red-500 fill-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]" />
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </footer>
    </>
  );
}
