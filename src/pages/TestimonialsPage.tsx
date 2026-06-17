import React, { useState } from 'react';
import { useHospital } from '../context/HospitalContext';
import { LucideIcon } from '../components/LucideIcon';
import { motion, AnimatePresence } from 'motion/react';

export const TestimonialsPage: React.FC = () => {
  const { testimonials, addTestimonial, contactDetails } = useHospital();

  // Form Field state
  const [patientName, setPatientName] = useState('');
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState('');
  const [location, setLocation] = useState('Nellore, AP');
  
  // UI helper state
  const [formOpen, setFormOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim()) return;
    if (!review.trim()) return;

    addTestimonial({
      patientName,
      rating,
      review,
      location: location.trim() || 'Nellore, AP'
    });

    // Reset fields
    setPatientName('');
    setRating(5);
    setReview('');
    setLocation('Nellore, AP');
    setFormOpen(false);
    
    // Toast alert trigger
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 4000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* 1. Header Portion */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold text-brand-blue uppercase bg-blue-50 px-3.5 py-1.5 rounded-full">
          Patient Feedback
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-800 font-display">
          Testimonials & Success Stories
        </h1>
        <p className="text-base text-slate-500 leading-relaxed">
          The ultimate testament to Rainbow Hospital's clinical standards is the health recovery and happiness of our patients. Read verified feedback on operations, diagnostics, and care.
        </p>
      </section>

      {/* 2. Rating Widget Block & Form Open Trigger */}
      <section className="bg-white border border-slate-100 p-6 sm:p-8 rounded-3xl shadow-xs grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
        <div className="md:col-span-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
          {/* Big score */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-5xl sm:text-6xl font-extrabold text-slate-800 tracking-tight font-display">
              {contactDetails.googleRating}
            </span>
            <div>
              <div className="flex text-yellow-400">
                <LucideIcon name="Star" className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <LucideIcon name="Star" className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <LucideIcon name="Star" className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <LucideIcon name="Star" className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <LucideIcon name="Star" className="w-5 h-5 fill-yellow-400 text-slate-200" />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 block">Google Rating Value</span>
            </div>
          </div>
          {/* Divider */}
          <div className="hidden sm:block h-12 w-[1px] bg-slate-100" />
          {/* Sourcing */}
          <div className="space-y-1">
            <h4 className="font-extrabold text-slate-700 text-sm">Verified Patient Community Trust</h4>
            <p className="text-xs text-slate-500">Based on over <span className="font-bold text-slate-800">{contactDetails.totalReviews}+ reviews</span> posted directly across our Google GMB Maps profiles in Nellore, India.</p>
          </div>
        </div>

        {/* Submit Review Button */}
        <div className="md:col-span-4 flex justify-start sm:justify-end">
          <button
            onClick={() => setFormOpen(!formOpen)}
            className="flex items-center gap-1.5 px-6 py-3 bg-brand-blue hover:bg-blue-600 text-white font-extrabold rounded-xl text-xs uppercase shadow-md shadow-blue-500/10 transition-all"
            id="write-review-button"
          >
            <LucideIcon name="MessageSquare" className="w-4 h-4 text-white" />
            Write Patient Review
          </button>
        </div>
      </section>

      {/* 3. Dropdown Add Review Form Panel */}
      <AnimatePresence>
        {formOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-slate-50 rounded-3xl p-6 sm:p-8 overflow-hidden text-left border border-slate-200 max-w-2xl mx-auto space-y-6"
          >
            <div className="flex justify-between items-center pb-4 border-b border-slate-200">
              <h3 className="font-bold text-slate-800 text-lg font-display">Submit Feedback Review</h3>
              <button onClick={() => setFormOpen(false)} className="text-slate-450 hover:text-slate-650" title="Close review form">
                <LucideIcon name="X" className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" id="feedback-submission-form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase">Your Name</label>
                  <input
                    type="text"
                    required
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="E.g. Sreenivasulu Reddy"
                    className="w-full px-3.5 py-2g.5 bg-white border border-slate-250 text-slate-800 rounded-xl text-xs focus:ring-1 focus:ring-brand-blue"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase">Your Location / Town</label>
                  <input
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="E.g. Nellore, AP"
                    className="w-full px-3.5 py-2g.5 bg-white border border-slate-250 text-slate-800 rounded-xl text-xs focus:ring-1 focus:ring-brand-blue"
                  />
                </div>
              </div>

              {/* Star selector */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase block">Rating Score</label>
                <div className="flex gap-1.5 pt-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setRating(s)}
                      className={`p-2 rounded-lg border text-yellow-400 transition-colors ${
                        s <= rating ? 'bg-yellow-50 border-yellow-250' : 'bg-white border-slate-150 text-slate-250'
                      }`}
                      title={`${s} Stars`}
                    >
                      <LucideIcon name="Star" className={`w-5 h-5 ${s <= rating ? 'fill-yellow-400' : ''}`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase block">Detailed Patient Review</label>
                <textarea
                  required
                  rows={4}
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  placeholder="Describe your surgical, diagnostic, clinical, or nursing recovery experiences at Rainbow Nellore..."
                  className="w-full p-3.5 bg-white border border-slate-250 text-slate-800 rounded-xl text-xs focus:ring-1 focus:ring-brand-blue resize-none"
                />
              </div>

              <button 
                type="submit" 
                className="w-full py-3 bg-brand-green hover:bg-green-600 text-white font-extrabold rounded-xl text-xs uppercase"
              >
                Publish Review
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast Alert trigger for review approval */}
      {showNotification && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3.5 rounded-2xl border border-slate-800 shadow-2xl flex items-center gap-3 text-xs font-bold">
          <LucideIcon name="CheckCircle2" className="text-brand-green w-5 h-5 shrink-0" />
          <span>Thank you! Your verified patient review has been published successfully.</span>
        </div>
      )}

      {/* 4. Display Reviews Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((test) => (
          <div 
            key={test.id}
            className="bg-white border border-slate-100 p-6 sm:p-8 rounded-3xl shadow-xs hover:border-slate-200 transition-all text-left flex flex-col justify-between"
            id={`testimonial-post-${test.id}`}
          >
            <div className="space-y-4">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-extrabold text-slate-800 text-base font-display leading-tight">{test.patientName}</h3>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{test.location}</span>
                </div>
                <div className="flex text-yellow-400 bg-yellow-50 px-2.5 py-1 rounded-xl border border-yellow-100 shrink-0">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <LucideIcon 
                      key={i} 
                      name="Star" 
                      className={`w-3.5 h-3.5 ${i < test.rating ? 'fill-yellow-400 text-yellow-405 font-bold' : 'text-slate-200'}`} 
                    />
                  ))}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 italic leading-relaxed font-sans">
                "{test.review}"
              </p>
            </div>

            <div className="text-[10px] text-slate-400 mt-6 pt-4 border-t border-slate-50 font-bold flex justify-between items-center gap-2">
              <div className="flex items-center gap-1">
                <LucideIcon name="CheckCircle2" className="w-3.5 h-3.5 text-brand-green shrink-0" />
                Verified Patient Consultation
              </div>
              <span className="text-[9px] text-slate-350">{test.date}</span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
