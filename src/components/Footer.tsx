import React from 'react';
import { useHospital } from '../context/HospitalContext';
import { LucideIcon } from './LucideIcon';
import logoImage from '../assets/images/rainbow_hospital_logo_1781697864483.jpg';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const { contactDetails, departments } = useHospital();

  const handleQuickLink = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Hospital Bio */}
        <div className="space-y-4">
          <button 
            onClick={() => handleQuickLink('home')}
            className="flex items-center text-left group bg-white p-2.5 rounded-xl border border-slate-100 shadow-sm hover:scale-[1.02] transition-transform duration-200"
            id="footer-logo-button"
          >
            <img 
              src={logoImage} 
              alt="Rainbow Super Speciality Hospital" 
              className="h-10 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </button>
          
          <p className="text-sm text-slate-400 leading-relaxed pt-2">
            Rainbow Super Speciality Hospital, Nellore has been a trusted beacon of hope and advanced healthcare for families across Andhra Pradesh. Under elite leadership, we provide world-class clinical excellence around the clock.
          </p>

          {/* Social icons or Trust Badges */}
          <div className="flex items-center gap-3 pt-2">
            <div className="flex items-center gap-1 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 text-yellow-400 font-bold text-xs">
              <LucideIcon name="Star" className="w-4 h-4 fill-yellow-400" />
              <span>{contactDetails.googleRating} / 5</span>
              <span className="text-slate-400 text-[10px] font-normal">({contactDetails.totalReviews}+ reviews)</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold text-base tracking-wide border-b border-slate-800 pb-3 mb-4 font-display">
            Quick Navigation
          </h3>
          <ul className="space-y-2.5 text-sm">
            {[
              { id: 'home', label: 'Home Page' },
              { id: 'about', label: 'About Hospital' },
              { id: 'departments', label: 'Clinics & Specials' },
              { id: 'doctors', label: 'Consultant Doctors' },
              { id: 'facilities', label: 'Infrastructure & ICUs' },
              { id: 'testimonials', label: 'Patient Reviews' },
              { id: 'contact', label: 'Contact Details' }
            ].map(link => (
              <li key={link.id}>
                <button
                  onClick={() => handleQuickLink(link.id)}
                  className="flex items-center gap-1.5 hover:text-white hover:translate-x-1 transition-all text-slate-400"
                >
                  <LucideIcon name="ChevronRight" className="w-3.5 h-3.5 text-brand-blue" />
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Selected Departments */}
        <div>
          <h3 className="text-white font-bold text-base tracking-wide border-b border-slate-800 pb-3 mb-4 font-display">
            Key Specialities
          </h3>
          <ul className="space-y-2.5 text-sm col-span-2">
            {departments.slice(0, 7).map(dept => (
              <li key={dept.id}>
                <button
                  onClick={() => handleQuickLink('departments')}
                  className="flex items-center gap-1.5 hover:text-white hover:translate-x-1 transition-all text-slate-400 text-left"
                >
                  <div className="w-1 h-1 bg-brand-green rounded-full" />
                  {dept.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Support */}
        <div>
          <h3 className="text-white font-bold text-base tracking-wide border-b border-slate-800 pb-3 mb-4 font-display">
            24/7 Center Hospital
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-2.5">
              <LucideIcon name="MapPin" className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
              <span className="text-slate-400 leading-relaxed text-xs">
                {contactDetails.address}
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <LucideIcon name="Phone" className="w-4 h-4 text-brand-green shrink-0" />
              <a href={`tel:${contactDetails.phone}`} className="hover:text-white font-semibold">
                {contactDetails.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <LucideIcon name="Mail" className="w-4 h-4 text-slate-400 shrink-0" />
              <a href={`mailto:${contactDetails.email}`} className="text-slate-400 hover:text-white text-xs break-all">
                {contactDetails.email}
              </a>
            </li>
            <li className="p-3 bg-red-950/40 border border-red-900/40 rounded-xl">
              <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase tracking-wide">
                <LucideIcon name="AlertCircle" className="w-4 h-4 text-red-500 animate-pulse" />
                Emergency Lifeline
              </div>
              <a 
                href={`tel:${contactDetails.emergencyPhone}`} 
                className="block text-white font-extrabold text-base mt-1 hover:underline"
              >
                {contactDetails.emergencyPhone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* SEO keywords and terms */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800">
        <div className="text-center md:text-left text-xs text-slate-500 font-medium tracking-wide flex flex-wrap justify-center md:justify-between items-center gap-4">
          <div className="flex flex-wrap gap-x-3 gap-y-1 justify-center md:justify-start">
            <span className="text-slate-600 font-bold uppercase mr-1">SEO tags:</span>
            <span>Super Speciality Hospital in Nellore</span>•
            <span>Best Doctors in Nellore</span>•
            <span>24 Hours Hospital in Nellore</span>•
            <span>Emergency Hospital in Nellore</span>•
            <span>Multi Speciality Hospital in Nellore</span>
          </div>
        </div>
      </div>

      {/* Copyrights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pt-4 border-t border-slate-800/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© 2026 Rainbow Super Speciality Hospital, Nellore. All Rights Reserved.</p>
        <div className="flex gap-4">
          <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
          <span>•</span>
          <span className="hover:text-slate-300 cursor-pointer">Terms & Conditions</span>
          <span>•</span>
          <button 
            onClick={() => handleQuickLink('admin')} 
            className="hover:text-brand-blue font-bold flex items-center gap-1"
          >
            <LucideIcon name="Lock" className="w-3 h-3 text-brand-blue" />
            Admin Access
          </button>
        </div>
      </div>
    </footer>
  );
};
