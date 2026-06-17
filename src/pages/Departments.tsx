import React, { useState, useMemo } from 'react';
import { useHospital } from '../context/HospitalContext';
import { LucideIcon } from '../components/LucideIcon';
import { motion, AnimatePresence } from 'motion/react';

export const Departments: React.FC = () => {
  const { departments } = useHospital();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDeptId, setSelectedDeptId] = useState<string | null>(null);

  // Set the first department active on load by default
  const activeDeptId = selectedDeptId || (departments[0]?.id || '');

  // Search filter across names, descriptions, and list of services
  const filteredDepartments = useMemo(() => {
    if (!searchQuery.trim()) return departments;
    const q = searchQuery.toLowerCase();
    return departments.filter(dept => 
      dept.name.toLowerCase().includes(q) ||
      dept.description.toLowerCase().includes(q) ||
      dept.services.some(srv => srv.toLowerCase().includes(q))
    );
  }, [departments, searchQuery]);

  const activeDept = departments.find(d => d.id === activeDeptId) || departments[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* 1. Header & Search Area */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold text-brand-blue uppercase bg-blue-50 px-3.5 py-1.5 rounded-full">
          Specialised Care
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-800 font-display">
          Departments & Medical Services
        </h1>
        <p className="text-base text-slate-500 leading-relaxed">
          Rainbow Super Speciality Hospital houses premium, high-resolution diagnostic suites, highly clean operations wings, and world-class specialists in Pogathota, Nellore.
        </p>

        {/* Dynamic Search Input */}
        <div className="max-w-xl mx-auto pt-4 relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-brand-blue transition-colors">
            <LucideIcon name="Search" className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search departments, symptoms or services (e.g. Diabetes, Surgery, Cardiology)..."
            className="w-full pl-12 pr-10 py-3.5 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all shadow-xs text-sm"
            id="department-search-input"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-4 flex items-center text-slate-400 hover:text-slate-600"
              title="Clear search"
            >
              <LucideIcon name="X" className="w-4 h-4" />
            </button>
          )}
        </div>
      </section>

      {/* 2. Zero search states */}
      {filteredDepartments.length === 0 && (
        <div className="text-center py-12 bg-slate-50 rounded-2xl max-w-lg mx-auto border border-dashed border-slate-200">
          <LucideIcon name="ShieldAlert" className="w-12 h-12 text-slate-400 mx-auto mb-3" />
          <h3 className="font-bold text-slate-800 text-lg leading-tight">No Match Found</h3>
          <p className="text-slate-500 text-sm mt-1">We couldn't find any departments or clinical services matching your search descriptor. Please check Spelling or search for a general symptom.</p>
          <button 
            onClick={() => setSearchQuery('')} 
            className="mt-4 px-4 py-2 bg-brand-blue text-white font-bold text-xs rounded-xl"
          >
            Reset Search Filter
          </button>
        </div>
      )}

      {/* 3. Main Multi-grid / Interactive tabs segment */}
      {filteredDepartments.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Navigation Rails for desktop / Cards scroll for mobile */}
          <div className="lg:col-span-4 space-y-2.5 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">
              Select Department ({filteredDepartments.length})
            </div>
            {filteredDepartments.map((dept) => {
              const worksAsActive = dept.id === activeDeptId;
              return (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDeptId(dept.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all text-sm flex items-start gap-3.5 ${
                    worksAsActive
                      ? 'bg-gradient-to-br from-brand-blue to-blue-600 text-white border-brand-blue shadow-lg shadow-blue-500/10'
                      : 'bg-white text-slate-700 border-slate-100 hover:border-blue-200 hover:bg-slate-50/50'
                  }`}
                  id={`dept-tab-${dept.id}`}
                >
                  <div className={`p-2.5 rounded-xl shrink-0 ${worksAsActive ? 'bg-white/15 text-white' : 'bg-blue-50 text-brand-blue'}`}>
                    <LucideIcon name={dept.iconName} className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="font-bold">{dept.name}</div>
                    <p className={`text-[11px] line-clamp-1 leading-normal ${worksAsActive ? 'text-blue-100' : 'text-slate-400'}`}>
                      {dept.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Main Detail Screen */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {activeDept && (
                <motion.div
                  key={activeDept.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white border border-slate-100 p-8 rounded-3xl shadow-xs space-y-8 text-left"
                >
                  {/* Title Header with Icon */}
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-6 border-b border-slate-100">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
                        <LucideIcon name={activeDept.iconName} className="w-7 h-7" />
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 font-display">
                          {activeDept.name}
                        </h2>
                        <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Rainbow Super Speciality Hospital</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary Overview paragraph */}
                  <div className="space-y-2">
                    <h3 className="font-bold text-slate-800 text-base font-display uppercase tracking-wide">Overview</h3>
                    <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                      {activeDept.description}
                    </p>
                  </div>

                  {/* Specific Diagnostic Services Checklist bullet points */}
                  <div className="space-y-4">
                    <h3 className="font-bold text-slate-800 text-base font-display uppercase tracking-wide">In-House Clinical Services</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {activeDept.services.map((service, sIdx) => (
                        <div 
                          key={sIdx}
                          className="bg-slate-50 hover:bg-brand-blue-light/30 border border-slate-100 hover:border-blue-100 px-4 py-3.5 rounded-xl flex items-start gap-3 transition-all group"
                        >
                          <div className="w-5 h-5 rounded-full bg-brand-green-light text-brand-green flex items-center justify-center shrink-0 mt-0.5 font-bold">
                            <LucideIcon name="Check" className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                          <span className="text-xs sm:text-sm text-slate-700 font-semibold leading-snug group-hover:text-slate-850">
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Trust warning & guidance */}
                  <div className="p-4 rounded-xl bg-orange-50 border border-orange-100 flex gap-3 text-left">
                    <LucideIcon name="AlertCircle" className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-xs text-orange-800">24/7 Specialist Availability</h4>
                      <p className="text-[11px] text-orange-700 mt-1 leading-normal">
                        Certain emergency surgical and cardiology treatments do not require strict prior reservation. General doctors are accessible 24/7. To reserve structured consulting slots, please call the number or fill the booking sheet inside.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
};
