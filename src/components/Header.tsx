import React, { useState } from 'react';
import { useHospital } from '../context/HospitalContext';
import { LucideIcon } from './LucideIcon';
import { motion, AnimatePresence } from 'motion/react';
import logoImage from '../assets/images/rainbow.png';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const { contactDetails } = useHospital();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'departments', label: 'Departments' },
    { id: 'doctors', label: 'Our Doctors' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      {/* Top Bar - Emergency Announcements & Quick Actions */}
      <div className="hidden md:flex bg-brand-blue text-white py-2 px-8 justify-between items-center text-sm font-medium">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg> Pogathota, Nellore</span>
          <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> {contactDetails.workingHours}</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1 font-bold">Emergency: {contactDetails.emergencyPhone}</span>
          <span className="bg-white/20 px-2 py-1 rounded">Google Rating: {contactDetails.googleRating} ★</span>

        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center text-left group"
          id="hospital-logo-button"
        >
          <img 
            src={logoImage} 
            alt="Rainbow Super Speciality Hospital" 
            className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02] logo-rainbow"
            referrerPolicy="no-referrer"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
          {menuItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`py-2 transition-all duration-200 relative ${
                  isActive 
                    ? 'text-brand-blue font-bold' 
                    : 'text-slate-600 hover:text-brand-blue'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-brand-blue rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop CTA & Actions */}
        <div className="hidden lg:flex items-center gap-4 text-sm font-semibold">
          <a
            href={`tel:${contactDetails.phone}`}
            className="flex items-center gap-1.5 text-slate-700 hover:text-brand-blue transition-colors px-1"
            id="header-call-now"
          >
            <LucideIcon name="Phone" className="w-4 h-4 text-brand-blue" />
            Call Now
          </a>
          <button
            onClick={() => handleNavClick('booking')}
            className="bg-brand-green text-white px-5 py-2.5 rounded-full hover:bg-brand-green-hover transition-all shadow-lg shadow-green-200/50 text-sm font-semibold"
            id="header-book-appointment"
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile controls (Burger & Emergency Buttons) */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href={`tel:${contactDetails.emergencyPhone}`}
            className="p-2 rounded-xl bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
            title="Emergency Call"
            aria-label="Call emergency room"
          >
            <LucideIcon name="Phone" className="w-5 h-5 animate-pulse" />
          </a>
          <button
            onClick={() => handleNavClick('booking')}
            className="px-3 py-2 text-xs font-bold bg-brand-blue text-white rounded-xl"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl hover:bg-slate-100 text-slate-600"
            aria-label="Toggle navigation menu"
          >
            <LucideIcon name={mobileMenuOpen ? 'X' : 'Menu'} className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-slate-100 bg-white overflow-hidden shadow-inner"
          >
            <div className="px-4 py-3 space-y-1.5">
              {menuItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold flex justify-between items-center transition-colors ${
                      isActive 
                        ? 'bg-blue-50 text-brand-blue' 
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    <LucideIcon name="ChevronRight" className={`w-4 h-4 ${isActive ? 'text-brand-blue' : 'text-slate-300'}`} />
                  </button>
                );
              })}
              
              <div className="h-[1px] bg-slate-100 my-2" />



              <div className="pt-2 grid grid-cols-2 gap-2 pb-2">
                <a
                  href={`tel:${contactDetails.phone}`}
                  className="flex items-center justify-center gap-1 px-4 py-3 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs"
                >
                  <LucideIcon name="Phone" className="w-4 h-4 text-brand-blue" />
                  General Call
                </a>
                <a
                  href={`https://wa.me/${contactDetails.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1 px-4 py-3 rounded-xl bg-brand-green-light text-brand-green font-bold text-xs"
                >
                  <LucideIcon name="MessageSquare" className="w-4 h-4 text-brand-green" />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
