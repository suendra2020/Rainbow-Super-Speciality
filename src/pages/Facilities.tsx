import React from 'react';
import { useHospital } from '../context/HospitalContext';
import { LucideIcon } from '../components/LucideIcon';

export const Facilities: React.FC = () => {
  const { facilities } = useHospital();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* 1. Page Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold text-brand-blue uppercase bg-blue-50 px-3.5 py-1.5 rounded-full">
          Hospital Infrastructure
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-800 font-display">
          Modern Medical Facilities
        </h1>
        <p className="text-base text-slate-500 leading-relaxed">
          Rainbow Super Speciality Hospital invests heavily in state-of-the-art medical devices, backup power networks, and safety systems to provide seamless critical care to patients in Nellore.
        </p>
      </section>

      {/* 2. Facilities Details Layout Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facilities.map((fac) => (
          <div 
            key={fac.id}
            className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg hover:border-blue-100 transition-all flex flex-col text-left group"
            id={`facility-card-${fac.id}`}
          >
            {/* Visual Header Image */}
            <div className="h-48 overflow-hidden relative bg-slate-100">
              <img 
                src={fac.imageUrl} 
                alt={fac.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <div className="p-2 bg-brand-blue text-white rounded-xl shadow">
                  <LucideIcon name={fac.iconName} className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-white text-sm font-display tracking-wide">{fac.name.split(' & ')[0]}</h3>
              </div>
            </div>

            {/* Informational Core */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <h4 className="text-base font-extrabold text-slate-800 font-display leading-tight">{fac.name}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{fac.description}</p>
              </div>

              {/* Bullet details checkmark list */}
              <div className="space-y-2 pt-4 border-t border-slate-50">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Key Capacities</div>
                {fac.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-600 font-semibold leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0 mt-2" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 3. Operational safety highlights */}
      <section className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-100 text-left grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase">
            <LucideIcon name="ShieldAlert" className="w-4 h-4 text-brand-green" />
            Accreditations & Biosafety
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-800 font-display">Ensurer of Sterility and Continuous Power</h3>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Our hospital carries 100% load-supporting silent diesel generator configurations that actuate within 3 seconds of grid disruptions. Water filtration wings supply sterile fluids across clinical scrubbing sinks, and surgical waste is categorized and safely processed daily in compliance with state biological directives.
          </p>
        </div>
        <div className="md:col-span-4 flex justify-start sm:justify-end">
          <div className="p-4 bg-white border border-slate-200 rounded-2xl flex items-center gap-3 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-green-50 text-brand-green flex items-center justify-center font-bold">
              <LucideIcon name="CheckCircle2" className="w-6 h-6" />
            </div>
            <div>
              <div className="font-extrabold text-slate-800 text-sm leading-none">100% Reliable</div>
              <span className="text-[10px] font-bold text-slate-400 uppercase mt-0.5 block">State Certified</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
