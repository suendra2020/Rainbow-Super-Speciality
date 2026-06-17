import React from 'react';
import { useHospital } from '../context/HospitalContext';
import { LucideIcon } from '../components/LucideIcon';
import { motion } from 'motion/react';

export const About: React.FC = () => {
  const { contactDetails } = useHospital();

  const values = [
    {
      title: 'Our Mission',
      description: 'To deliver responsive, ethical, and high-quality healthcare interventions at affordable structures to the residents of Nellore and surrounding rural populations.',
      icon: 'ShieldAlert',
      color: 'bg-brand-blue-light text-brand-blue border-blue-100'
    },
    {
      title: 'Our Vision',
      description: 'To build a robust and modern multi-speciality ecosystem where human empathy, advanced diagnostics, and surgical competence are bound together in clinical harmony.',
      icon: 'Eye',
      color: 'bg-green-50 text-brand-green border-green-100'
    },
    {
      title: 'Quality Mandate',
      description: 'Implementing strict infection control barriers, periodic audit systems, and continuing surgical education to protect patient safety during all inpatient admissions.',
      icon: 'CheckCircle2',
      color: 'bg-purple-50 text-purple-600 border-purple-100'
    }
  ];

  return (
    <div className="space-y-16 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 1. Page Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold text-brand-blue uppercase bg-blue-50 px-3.5 py-1.5 rounded-full">
          About Our Institution
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-800 font-display">
          Trusted Healthcare Leader in Nellore
        </h1>
        <p className="text-base text-slate-500 leading-relaxed">
          Rainbow Super Speciality Hospital is a state-of-the-art clinical center founded on the values of transparency, affordable rates, and elite treatment delivery.
        </p>
      </section>

      {/* 2. Hero Split Bio */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-xl aspect-video sm:aspect-auto sm:h-[400px]">
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop" 
            alt="Interior foyer, Rainbow Speciality Nellore" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white p-4 bg-slate-900/65 backdrop-blur-sm rounded-xl">
            <h4 className="font-bold text-sm">State-of-the-Art Operations</h4>
            <p className="text-xs text-slate-300 mt-0.5">Equipped with central HEPA filters and clean-air laminar flow operating theatres.</p>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6 text-left">
          <span className="text-xs font-bold text-brand-green uppercase">Clinical Overview</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 font-display">
            Commitment to Quality & Compassionate Care
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            Rainbow Super Speciality Hospital, located in Sankara Agraharam near Sai Baba Temple, Pogathota, Nellore, has developed a reputation for clinical expertise and modern nursing care. By hosting highly trained consulting surgeons, senior interventional cardiologists, and pediatricians under one roof, we eliminate the need for families to seek treatments in remote metropolitan centers.
          </p>
          <p className="text-sm text-slate-500 leading-relaxed">
            Every patient pathway inside our hospital is planned to optimize convenience. From our automated computerized pathology laboratory and digital scan modules to our quick-service 24/7 in-house pharmacy, we integrate everything dynamically, reducing waiting periods.
          </p>
          
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 text-xs font-bold text-slate-700">
            <div className="flex items-center gap-2">
              <LucideIcon name="Award" className="w-4 h-4 text-brand-blue" />
              <span>Experienced Consultants</span>
            </div>
            <div className="flex items-center gap-2">
              <LucideIcon name="Clock" className="w-4 h-4 text-brand-blue" />
              <span>Open 24 Hours, All Days</span>
            </div>
            <div className="flex items-center gap-2">
              <LucideIcon name="ShieldAlert" className="w-4 h-4 text-brand-blue" />
              <span>Accident & Trauma Bed Setup</span>
            </div>
            <div className="flex items-center gap-2">
              <LucideIcon name="Heart" className="w-4 h-4 text-brand-blue" />
              <span>Affordable Patient Tariffs</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission, Vision, Quality Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((val, idx) => (
          <div 
            key={idx} 
            className="border border-slate-100 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm bg-white hover:border-blue-100 hover:shadow-md transition-all text-left"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${val.color}`}>
              <LucideIcon name={val.icon} className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-850 font-display">{val.title}</h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              {val.description}
            </p>
          </div>
        ))}
      </section>

      {/* 4. Infrastructure Highlights */}
      <section className="bg-slate-50 rounded-3xl p-8 sm:p-12 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">Advanced Infrastructure</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 font-display">
            Hospital Facilities & Equipment
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Our multi-speciality medical campus in Pogathota, Nellore has been architected to handle complex medical requirements smoothly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Operating Rooms',
              desc: 'Dual ultra-clean surgical complexes with standard anesthesia workstations, patient monitors, and specialized laparoscopic instruments.',
              icon: 'Scissors'
            },
            {
              title: 'Cardio Monitoring Devs',
              desc: 'Real-time telemetry feeds direct to nurses, 2D echo scans, automated ECG diagnostic machines, and continuous blood saturation screens.',
              icon: 'Activity'
            },
            {
              title: 'STAT Laboratory',
              desc: 'Our clinical lab is fully automated, performing prompt blood cell counts, biochemistry diagnostics, and culture analyses 24/7.',
              icon: 'ShieldAlert'
            },
            {
              title: 'Sterile Wards & HEPA Air',
              desc: 'Dedicated ventilation sweeps, hygienic anti-microbial floor textures, and daily deep sanitation procedures to eliminate contaminants.',
              icon: 'Home'
            },
            {
              title: 'Intensive Coronary Care Room',
              desc: 'A state-of-the-art CCU set up exclusively for heart attacks, cardiac rhythm monitoring, and acute failures directly overseen by cardiologists.',
              icon: 'Heart'
            },
            {
              title: 'Ambulance & Trauma Vans',
              desc: 'Life-saving resuscitation gear, defibrillators, oxygen pipelines, and rescue paramedics backing all emergency alerts.',
              icon: 'Truck'
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 flex items-start gap-4 text-left shadow-xs">
              <div className="p-2.5 rounded-xl bg-blue-50 text-brand-blue shrink-0">
                <LucideIcon name={item.icon} className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-800 text-sm leading-tight">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Patient Centric Approach section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-left order-2 lg:order-1">
          <span className="text-xs font-bold text-brand-green uppercase bg-green-50 px-3 py-1 rounded-full">
            Our Philosophy
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 font-display">
            Compassionate & Patient-Centric Environment
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            At Rainbow Super Speciality Hospital, the healing mechanism starts the moment you interact with us. Our staff is trained to listen deeply, show patience, and respect your family constraints. 
          </p>
          
          <div className="space-y-3">
            {[
              {
                title: 'No Hidden Charges',
                desc: 'Every fee parameter, room tariff, diagnostic rate, and laboratory test is printed transparently in our bill sheets.'
              },
              {
                title: 'Constant Support Desk',
                desc: 'Our receptionists help file medical insurance claims, coordinate doctor schedules, and issue fast-pass discharge documents.'
              },
              {
                title: 'Comfortable Long Stay Rooms',
                desc: 'Our rooms are designed to give peace of mind to patient attendants, offering comfortable bedding, hygiene services, and power grids.'
              }
            ].map((p, idx) => (
              <div key={idx} className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-green-150 text-brand-green flex items-center justify-center shrink-0 mt-0.5">
                  <LucideIcon name="Check" className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 leading-tight">{p.title}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl aspect-video sm:aspect-auto sm:h-[380px] order-1 lg:order-2">
          <img 
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop" 
            alt="Compassionate patient care at Rainbow Speciality Hospital" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>
    </div>
  );
};
