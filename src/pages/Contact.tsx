import React, { useState } from 'react';
import { useHospital } from '../context/HospitalContext';
import { LucideIcon } from '../components/LucideIcon';

export const Contact: React.FC = () => {
  const { contactDetails } = useHospital();

  // Form Fields
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // UI state
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) return;

    setIsSending(true);
    setTimeout(() => {
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
      setIsSending(false);
      setSentSuccess(true);
      setTimeout(() => setSentSuccess(false), 5000);
    }, 800);
  };

  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.6603598717904!2d79.98064041483842!3d14.44673898989945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf2263effffff%3A0xe539fbe54c5e8c14!2sPogathota%2C%20Nellore%2C%20Andhra%20Pradesh%20524001!5e0!3m2!1sen!2sin!4v1655000000000!5m2!1sen!2sin";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* 1. Header Segment */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold text-brand-blue uppercase bg-blue-50 px-3.5 py-1.5 rounded-full">
          Get In Touch
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-800 font-display">
          Contact Our Hospital
        </h1>
        <p className="text-base text-slate-500 leading-relaxed">
          Need patient logs, diagnostic reports assistance, or have generalized health questions? Our physical reception desks are open 24/7.
        </p>
      </section>

      {/* 2. Three splits for core channels */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Telephone */}
        <div className="bg-white border border-slate-100 p-6 rounded-2xl flex items-start gap-4 text-left shadow-xs">
          <div className="p-3 bg-blue-50 text-brand-blue rounded-xl shrink-0">
            <LucideIcon name="Phone" className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h4 className="font-extrabold text-slate-450 uppercase text-[10px] tracking-wider leading-none">Telephone Hotlines</h4>
            <a href={`tel:${contactDetails.phone}`} className="block text-slate-800 font-bold text-base hover:underline pt-1">
              {contactDetails.phone}
            </a>
            {contactDetails.alternatePhone && (
              <a href={`tel:${contactDetails.alternatePhone}`} className="block text-slate-500 text-xs">
                Alt: {contactDetails.alternatePhone}
              </a>
            )}
          </div>
        </div>

        {/* WhatsApp Channel */}
        <div className="bg-white border border-slate-100 p-6 rounded-2xl flex items-start gap-4 text-left shadow-xs">
          <div className="p-3 bg-green-50 text-brand-green rounded-xl shrink-0">
            <LucideIcon name="MessageSquare" className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h4 className="font-extrabold text-slate-450 uppercase text-[10px] tracking-wider leading-none">WhatsApp Patient Chat</h4>
            <a 
              href={`https://wa.me/${contactDetails.whatsapp.replace('+', '')}`} 
              target="_blank" 
              rel="noreferrer"
              className="block text-brand-green font-bold text-base hover:underline pt-1"
            >
              Start Chat Support
            </a>
            <span className="text-slate-400 text-xs block">Replies instantly inside 10 minutes</span>
          </div>
        </div>

        {/* Email Inbox */}
        <div className="bg-white border border-slate-100 p-6 rounded-2xl flex items-start gap-4 text-left shadow-xs">
          <div className="p-3 bg-purple-50 text-purple-600 rounded-xl shrink-0">
            <LucideIcon name="Mail" className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h4 className="font-extrabold text-slate-450 uppercase text-[10px] tracking-wider leading-none">Administrative Mail</h4>
            <a href={`mailto:${contactDetails.email}`} className="block text-slate-800 font-semibold text-xs sm:text-sm hover:underline pt-1.5 break-all">
              {contactDetails.email}
            </a>
            <span className="text-slate-400 text-xs block">Operational response inside 2 hours</span>
          </div>
        </div>
      </section>

      {/* 4. Split Layout - Mapping & Online contact form */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* Left Side: Detail list & Interactive map embed */}
        <div className="lg:col-span-6 bg-white border border-slate-100 p-6 sm:p-8 rounded-3xl flex flex-col justify-between space-y-6 text-left shadow-sm">
          <div className="space-y-4">
            <h3 className="font-extrabold text-slate-800 text-lg font-display">Rainbow Hospital Pogathota Campus</h3>
            <div className="flex gap-3">
              <LucideIcon name="MapPin" className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-800 leading-tight">Physical Address</h4>
                <p className="text-xs text-slate-500 leading-relaxed mt-1">
                  Sankara Agraharam, Near Sai Baba Temple, Pogathota, Nellore, Andhra Pradesh - 524001, India
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <LucideIcon name="Clock" className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-800 leading-tight">Consulting Hours</h4>
                <p className="text-xs text-slate-500 leading-relaxed mt-1">
                  Emergency: Open 24/7, All days. Outpatient Specialist Slots: Mon to Sat, 09:00 AM to 08:00 PM.
                </p>
              </div>
            </div>
          </div>

          {/* Iframe Google maps integrations */}
          <div className="w-full h-80 rounded-2xl overflow-hidden border border-slate-150 relative">
            <iframe
              src={mapEmbedUrl}
              className="w-full h-full border-none shadow-inner"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rainbow Super Speciality Hospital, Pogathota, Nellore map locator"
            />
          </div>

          {/* Call actions block */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a 
              href={`tel:${contactDetails.emergencyPhone}`}
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-extrabold rounded-xl text-xs text-center flex-1"
            >
              24/7 Urgent Emergency Call
            </a>
            <a 
              href={`https://wa.me/${contactDetails.whatsapp.replace('+', '')}`}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-brand-green hover:bg-green-600 text-white font-extrabold rounded-xl text-xs text-center flex flex-center justify-center items-center gap-1.5 flex-1"
            >
              <LucideIcon name="MessageSquare" className="w-4 h-4 text-white" />
              Open WhatsApp Desk
            </a>
          </div>
        </div>

        {/* Right Side: Quick Enquiry Contact Form */}
        <div className="lg:col-span-6 bg-white border border-slate-100 p-6 sm:p-8 rounded-3xl text-left shadow-sm flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="font-extrabold text-slate-800 text-lg font-display pb-4 border-b border-slate-100">Send Administrative Enquiry</h3>
            
            {sentSuccess && (
              <div className="p-4 bg-green-50 border border-green-100 text-brand-green rounded-xl text-xs font-bold flex items-center gap-2">
                <LucideIcon name="Check" className="w-5 h-5 text-brand-green font-bold" />
                <span>Enquiry message dispatched! Our administration desk will respond shortly.</span>
              </div>
            )}

            <form onSubmit={handleMessageSubmit} className="space-y-4" id="contact-enquiry-form">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-450 uppercase tracking-wide">Your Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 text-slate-850 rounded-xl text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-450 uppercase tracking-wide">Your Phone</label>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                    placeholder="Enter phone number"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 text-slate-850 rounded-xl text-sm"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-450 uppercase tracking-wide">Your Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@email.com (Optional)"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 text-slate-850 rounded-xl text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-450 uppercase tracking-wide">Enquiry Message</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can our clinical or financial admin teams in Nellore help you today? Ask about scanning fees, surgical dates, room listings etc..."
                  className="w-full p-4 bg-slate-50 border border-slate-200 text-slate-850 rounded-xl text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full py-4 bg-brand-blue hover:bg-blue-600 text-white font-extrabold rounded-xl text-xs uppercase tracking-wider"
              >
                {isSending ? 'Sending Message...' : 'Send Message'}
              </button>
            </form>
          </div>
          
          <div className="p-4 bg-blue-50/50 rounded-2xl border border-blue-50 flex items-start gap-2 text-left mt-4">
            <LucideIcon name="ShieldAlert" className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
            <p className="text-[10px] text-slate-550 leading-normal">
              <strong>Emergency advisory:</strong> Do not use this web enquiry form for urgent clinical symptoms. If you have active breathing troubles, persistent chest pain, or trauma bleeding, dial our 24/7 urgent lifeline: <strong>+91 93906 59797</strong>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
