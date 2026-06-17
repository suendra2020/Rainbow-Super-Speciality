import React from 'react';
import { useHospital } from '../context/HospitalContext';
import { LucideIcon } from '../components/LucideIcon';
import { motion } from 'motion/react';

interface HomeProps {
  setActiveTab: (tab: string) => void;
}

export const Home: React.FC<HomeProps> = ({ setActiveTab }) => {
  const { contactDetails, departments, testimonials, doctors } = useHospital();

  const stats = [
    { value: '50,000+', label: 'Patients Treated', icon: 'Users', color: 'text-brand-blue bg-blue-50' },
    { value: `${doctors.length}+`, label: 'Expert Doctors', icon: 'Award', color: 'text-brand-green bg-green-50' },
    { value: `${departments.length}+`, label: 'Departments', icon: 'Building', color: 'text-purple-600 bg-purple-50' },
    { value: '10+', label: 'Years of Service', icon: 'Clock', color: 'text-amber-600 bg-amber-50' },
  ];

  const features = [
    {
      title: 'Emergency Lifeline',
      description: 'Rapid-response trauma teams, critical ICU care, and 24/7 standby ambulance setups.',
      icon: 'AlertCircle',
      color: 'bg-red-500 text-white'
    },
    {
      title: 'Elite Consultants',
      description: 'Highly experienced surgeons, physicians, and sub-specialists residing locally in Nellore.',
      icon: 'Award',
      color: 'bg-brand-blue text-white'
    },
    {
      title: 'Advanced Diagnostics',
      description: 'In-house high-slice CT scans, state-of-the-art pathology labs, and precision ultrasound.',
      icon: 'Eye',
      color: 'bg-brand-green text-white'
    },
    {
      title: 'Patient-Centric Facility',
      description: 'Affordable tier pricing, multi-comfort stay rooms, and compassionate nursery staff.',
      icon: 'Heart',
      color: 'bg-indigo-500 text-white'
    }
  ];

  return (
    <div className="space-y-20 pb-16">
      {/* 1. Hero Banner (Clean Minimalism Theme) */}
      <section className="bg-white py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
          {/* Left Column - Copy and Actions */}
          <div className="lg:col-span-7">
            <span className="inline-block px-3 py-1 bg-blue-50 text-brand-blue text-xs font-bold rounded-md mb-4 uppercase tracking-wider">
              Leading Healthcare in Andhra Pradesh
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
              Comprehensive Excellence in <br/>
              <span className="text-brand-blue">Advanced Medical Care</span>
            </h2>
            <p className="text-slate-500 text-base sm:text-lg max-w-xl mb-6">
              Your health is our priority. Experience world-class healthcare with state-of-the-art infrastructure, advanced surgeries, and compassionate specialists at Nellore's trusted super speciality center.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setActiveTab('booking')}
                className="bg-brand-blue text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-xl shadow-blue-200/50 hover:bg-blue-600 transition-all cursor-pointer"
                id="hero-book-now"
              >
                Consult a Doctor
              </button>
              <a
                href={`tel:${contactDetails.emergencyPhone}`}
                className="border-2 border-slate-200 text-slate-700 px-6 py-3.5 rounded-xl font-bold text-sm hover:bg-slate-50 transition-colors flex items-center gap-1.5"
                id="hero-emergency-call"
              >
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                24/7 Emergency
              </a>
              <button
                onClick={() => setActiveTab('contact')}
                className="text-slate-500 hover:text-brand-blue py-3.5 px-2 font-bold text-sm transition-colors"
                id="hero-get-directions"
              >
                Get Directions
              </button>
            </div>
          </div>

          {/* Right Column - Infrastructure & Floating Real-time Stats */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="w-full h-80 bg-slate-100 rounded-[2rem] overflow-hidden shadow-2xl flex items-center justify-center border-4 border-white ring-1 ring-slate-150">
              <img 
                src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=600&auto=format&fit=crop" 
                alt="Rainbow Super Speciality Hospital Infrastructure" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Stat Card */}
            <div className="absolute -bottom-4 -left-4 sm:-left-8 bg-white p-5 rounded-2xl shadow-xl border border-slate-50 flex gap-4">
              <div className="text-center">
                <p className="text-2xl font-extrabold text-brand-blue">50K+</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Recoveries</p>
              </div>
              <div className="w-[1px] bg-slate-100" />
              <div className="text-center">
                <p className="text-2xl font-extrabold text-brand-green">{doctors.length}+</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Specialists</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 24/7 Emergency Care Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 grid grid-cols-1 lg:grid-cols-3">
          <div className="p-8 bg-red-600 text-white space-y-4">
            <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
              <LucideIcon name="AlertCircle" className="w-6 h-6 text-white animate-bounce" />
            </div>
            <h3 className="text-xl font-bold font-display uppercase tracking-tight">24/7 Emergency Room</h3>
            <p className="text-sm text-red-50 text-slate-200 leading-relaxed">
              Our trauma stabilization bays are staffed by emergency physicians and surgical specialists day and night. We handle heart strokes, fractures, pediatric crises, and major poly-traumas instantly.
            </p>
            <a 
              href={`tel:${contactDetails.emergencyPhone}`} 
              className="inline-flex items-center gap-1.5 font-extrabold text-sm text-white hover:underline pt-2"
              id="emergency-panel-call"
            >
              <LucideIcon name="Phone" className="w-4 h-4" />
              Call Emergency: {contactDetails.emergencyPhone}
            </a>
          </div>

          <div className="p-8 lg:col-span-2 flex flex-col justify-between bg-white text-slate-800 space-y-6 lg:space-y-0">
            <div>
              <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">Golden Hour Commitment</span>
              <h3 className="text-2xl font-bold text-slate-800 mt-1 font-display">Fastest Stroke & Cardiac Rescue</h3>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                We understand that every fraction of a second is precious. Critical infrastructure sits closely aligned on our ground level for immediate triaging, medical scans, computerized diagnostics, and rapid catheterisation, delivering life-saving support during critical medical emergencies.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded bg-green-50 text-brand-green flex items-center justify-center">
                  <LucideIcon name="Check" className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs font-bold text-slate-700">ICU-on-wheels ambulance fleet</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded bg-green-50 text-brand-green flex items-center justify-center">
                  <LucideIcon name="Check" className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs font-bold text-slate-700">Dedicated cardiologist resident 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-slate-100 px-6 py-8 rounded-2xl shadow-sm text-center flex flex-col items-center justify-center space-y-2 group hover:border-blue-200 transition-colors"
            >
              <div className={`p-3 rounded-xl ${stat.color} mb-1 group-hover:scale-105 transition-transform`}>
                <LucideIcon name={stat.icon} className="w-6 h-6" />
              </div>
              <div className="text-3xl font-extrabold font-display text-slate-800 tracking-tight">{stat.value}</div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Why Choose Rainbow Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">Patient First Approach</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-800 font-display"> Why Choose Rainbow Super Speciality Hospital?</h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              We stand apart in Nellore through our uncompromised clinical quality standards, state-of-the-art diagnostics, and deeply kind, ethical, and transparent medical practices.
            </p>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-3.5">
              <LucideIcon name="Building" className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-800">Centrally Located in Pogathota</h4>
                <p className="text-xs text-slate-500 leading-relaxed mt-0.5">Quietly accessible in the healthcare heart of Nellore, near the iconic Sai Baba Temple with ample patient parking space.</p>
              </div>
            </div>
            <button 
              onClick={() => setActiveTab('about')}
              className="inline-flex items-center gap-1 text-xs font-bold text-brand-blue hover:underline"
            >
              Learn more about our mission
              <LucideIcon name="ChevronRight" className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-100 p-6 rounded-2xl hover:shadow-lg transition-all space-y-3 hover:-translate-y-1 transform duration-300"
              >
                <div className={`w-10 h-10 rounded-xl ${feature.color} flex items-center justify-center font-bold`}>
                  <LucideIcon name={feature.icon} className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-800 font-display">{feature.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Featured Services */}
      <section className="bg-gradient-to-b from-blue-50/40 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-brand-blue bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">Expert Specialities</span>
            <h2 className="text-3xl font-extrabold text-slate-800 font-display uppercase tracking-tight">Our Primary Medical Departments</h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Providing skilled consulting, automated diagnostics, and comprehensive emergency care inside our modern Nellore health campus. 
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.slice(0, 4).map((dept) => (
              <div 
                key={dept.id}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col justify-between space-y-6 hover:shadow-md hover:border-blue-200 transition-all text-left"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center">
                    <LucideIcon name={dept.iconName} className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-850 font-display">{dept.name}</h3>
                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">{dept.description}</p>
                </div>
                <button
                  onClick={() => setActiveTab('departments')}
                  className="w-full py-2.5 bg-slate-50 hover:bg-brand-blue-light text-slate-700 hover:text-brand-blue font-bold rounded-lg text-xs transition-colors text-center block"
                >
                  Explore Services
                </button>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => setActiveTab('departments')}
              className="inline-flex items-center gap-1.5 px-6 py-3 bg-brand-blue hover:bg-blue-600 text-white font-extrabold rounded-xl text-xs shadow-md transition-all"
            >
              <span>View All Departments</span>
              <LucideIcon name="ChevronRight" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. Professional Patient Reviews Slider / Bento Grid snippet */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-slate-100 pb-5">
          <div className="space-y-1">
            <span className="text-xs font-bold text-brand-green uppercase tracking-wider bg-green-50 px-3 py-1 rounded-full">Testimonials</span>
            <h2 className="text-3xl font-extrabold text-slate-800 font-display">What Our Patients Say</h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              <LucideIcon name="Star" className="w-4 h-4 fill-yellow-400 text-yellow-450" />
              <LucideIcon name="Star" className="w-4 h-4 fill-yellow-400 text-yellow-450" />
              <LucideIcon name="Star" className="w-4 h-4 fill-yellow-400 text-yellow-450" />
              <LucideIcon name="Star" className="w-4 h-4 fill-yellow-400 text-yellow-450" />
              <LucideIcon name="Star" className="w-4 h-4 fill-yellow-400 text-slate-200" />
            </div>
            <span className="text-sm font-extrabold text-slate-800">{contactDetails.googleRating}/5 Rating</span>
            <span className="text-xs text-slate-400">({contactDetails.totalReviews}+ reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.slice(0, 2).map((test) => (
            <div 
              key={test.id} 
              className="bg-white border border-slate-100 p-6 sm:p-8 rounded-2xl shadow-sm relative flex flex-col justify-between text-left"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm sm:text-base">{test.patientName}</h4>
                    <span className="text-[10px] text-slate-400 font-semibold uppercase">{test.location}</span>
                  </div>
                  <div className="flex text-yellow-400">
                    {Array.from({ length: test.rating }).map((_, i) => (
                      <LucideIcon key={i} name="Star" className="w-3.5 h-3.5 fill-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 italic leading-relaxed">
                  "{test.review}"
                </p>
              </div>
              <div className="text-[10px] text-slate-400 mt-4 pt-4 border-t border-slate-50 font-bold flex items-center gap-1">
                <LucideIcon name="CheckCircle2" className="w-3.5 h-3.5 text-brand-green" />
                Verified Patient on Google Reviews
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => setActiveTab('testimonials')}
            className="text-xs font-bold text-brand-blue hover:underline hover:translate-x-1 transition-transform inline-flex items-center gap-1"
          >
            Read more verified success stories
            <LucideIcon name="ChevronRight" className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 7. Call-to-action bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 via-brand-blue to-cyan-600 rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-xl shadow-blue-500/10">
          <div className="absolute inset-0 z-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,0 L100,50 L100,100 L0,100 Z" fill="white" />
            </svg>
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase font-display leading-tight">Prepare your health consultation online</h2>
            <p className="text-sm text-blue-50/90 leading-relaxed">
              Book a guaranteed slot with Nellore's finest specialists at Rainbow Super Speciality Hospital. Fill out our simple online intake sheet, and our desk team will contact you back immediately to confirm timings.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                onClick={() => setActiveTab('booking')}
                className="px-8 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-extrabold rounded-xl text-xs shadow-md uppercase tracking-wider transform transition hover:scale-105"
                id="cta-book-appointment"
              >
                Secure Slot Now
              </button>
              <a
                href={`tel:${contactDetails.phone}`}
                className="px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-extrabold rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transform transition hover:scale-105"
                id="cta-call-desk"
              >
                <LucideIcon name="Phone" className="w-4 h-4 text-brand-green" />
                Contact Frontdesk
              </a>
            </div>
            <div className="text-[10px] text-blue-200 font-medium">
              *Appointments booked online are processed within 15 minutes during general working hours.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
