import React, { useState, useEffect } from 'react';
import { HospitalProvider, useHospital } from './context/HospitalContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LucideIcon } from './components/LucideIcon';
import { motion, AnimatePresence } from 'motion/react';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Departments } from './pages/Departments';
import { Doctors } from './pages/Doctors';
import { Facilities } from './pages/Facilities';
import { Appointments } from './pages/Appointments';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { Contact } from './pages/Contact';


function MainAppContent() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const { contactDetails } = useHospital();

  // Pre-selection states when navigating from other triggers
  const [preselectedDoctorId, setPreselectedDoctorId] = useState<string | null>(null);
  const [preselectedDepartmentId, setPreselectedDepartmentId] = useState<string | null>(null);

  const clearPreselections = () => {
    setPreselectedDoctorId(null);
    setPreselectedDepartmentId(null);
  };

  // WhatsApp Widget overlay state
  const [showWhatsAppBubble, setShowWhatsAppBubble] = useState(false);

  // Dynamic SEO Injection on mount
  useEffect(() => {
    // Write Meta Title
    document.title = "Rainbow Super Speciality Hospital, Nellore | Best Multi Speciality Hospital in Nellore";

    // Write Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Rainbow Super Speciality Hospital, Nellore provides 24/7 emergency care, experienced doctors, advanced medical facilities, diagnostics, and quality healthcare services in Nellore, Andhra Pradesh.');

    // Write Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'Best Hospital in Nellore, Super Speciality Hospital in Nellore, Rainbow Super Speciality Hospital Nellore, 24 Hours Hospital in Nellore, Emergency Hospital in Nellore, Multi Speciality Hospital in Nellore, Best Doctors in Nellore, Healthcare Services in Nellore');
  }, []);

  // Trigger floating assistant welcome message after 4s
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWhatsAppBubble(true);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  const renderActiveTabContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} />;
      case 'about':
        return <About />;
      case 'departments':
        return <Departments />;
      case 'doctors':
        return (
          <Doctors 
            setActiveTab={setActiveTab} 
            setPreselectedDoctorId={setPreselectedDoctorId} 
            setPreselectedDepartmentId={setPreselectedDepartmentId} 
          />
        );
      case 'facilities':
        return <Facilities />;
      case 'booking':
        return (
          <Appointments 
            preselectedDoctorId={preselectedDoctorId} 
            preselectedDepartmentId={preselectedDepartmentId} 
            clearPreselections={clearPreselections} 
          />
        );
      case 'testimonials':
        return <TestimonialsPage />;
      case 'contact':
        return <Contact />;

      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  const whatsappLink = `https://wa.me/${contactDetails.whatsapp.replace('+', '')}?text=Hi!%20I%20want%2520to%20enquire%20about%20specialist%20appointments%20at%20Rainbow%20Hospital%20Nellore.`;

  return (
    <div className="min-h-screen flex flex-col justify-between relative bg-slate-50/20 font-sans">
      {/* Top sticky Navigation Header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main viewport Container */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
          >
            {renderActiveTabContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Modern footer with location context */}
      <Footer setActiveTab={setActiveTab} />

      {/* Bottom Sticky action drawer bar exclusively for Mobile screens */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-100 py-2.5 px-4 flex items-center justify-between shadow-2xl">
        <div className="text-left">
          <div className="text-[9px] font-bold text-red-500 uppercase flex items-center gap-1 animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
            24/7 Lifeline standby
          </div>
          <a href={`tel:${contactDetails.emergencyPhone}`} className="text-xs font-extrabold text-slate-800 tracking-tight">
            {contactDetails.emergencyPhone}
          </a>
        </div>
        <div className="flex gap-2">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 bg-green-500 text-white rounded-xl shadow"
          >
            <LucideIcon name="MessageSquare" className="w-4 h-4 text-white" />
          </a>
          <button
            onClick={() => { setActiveTab('booking'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="px-4 py-2.5 bg-brand-blue hover:bg-blue-600 text-white text-xs font-extrabold rounded-xl shadow"
          >
            Book Slots
          </button>
        </div>
      </div>

      {/* WhatsApp Floating Chat Bubbles Widget */}
      <div className="fixed bottom-16 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-2 text-left">
        {/* Assistance notification badge */}
        <AnimatePresence>
          {showWhatsAppBubble && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 5 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 5 }}
              className="bg-white border rounded-2xl p-3.5 shadow-2xl max-w-xs relative border-slate-100"
            >
              <button 
                onClick={() => setShowWhatsAppBubble(false)}
                className="absolute top-2 right-2 text-slate-300 hover:text-slate-500"
                title="Dismiss assistance message"
              >
                <LucideIcon name="X" className="w-3.5 h-3.5" />
              </button>
              <div className="flex gap-2.5">
                <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green font-bold text-xs shrink-0 mt-0.5">
                  R
                </div>
                <div>
                  <div className="font-extrabold text-slate-805 text-[11px] leading-tight">Rainbow Frontdesk Help</div>
                  <p className="text-[10px] text-slate-500 mt-1 leading-normal">
                    Hi! Need immediate consulting info, room costs, or surgery dates? Chat with our team now.
                  </p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 mt-2 text-[10px] bg-brand-green hover:bg-green-600 text-white font-extrabold px-3 py-1.5 rounded-lg mr-1 shadow-sm leading-none"
                    id="whatsapp-chat-bubble-click"
                  >
                    <LucideIcon name="MessageSquare" className="w-3 h-3 text-white" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Master WhatsApp Bubble Button Grid */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          title="Chat with support on WhatsApp"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-green-500 to-green-400 hover:scale-[1.05] shadow-xl hover:shadow-green-500/20 active:scale-95 transition-all flex items-center justify-center relative border border-white/10"
        >
          <LucideIcon name="MessageSquare" className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-green-500" />
          <span className="absolute -top-1 -right-0.5 w-3 h-3 rounded-full bg-brand-blue border-2 border-white animate-pulse" />
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HospitalProvider>
      <MainAppContent />
    </HospitalProvider>
  );
}
