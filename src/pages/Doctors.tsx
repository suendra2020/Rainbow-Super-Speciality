import React, { useState, useMemo } from 'react';
import { useHospital } from '../context/HospitalContext';
import { LucideIcon } from '../components/LucideIcon';

interface DoctorsProps {
  setActiveTab: (tab: string) => void;
  setPreselectedDoctorId: (id: string | null) => void;
  setPreselectedDepartmentId: (id: string | null) => void;
}

export const Doctors: React.FC<DoctorsProps> = ({ 
  setActiveTab, 
  setPreselectedDoctorId,
  setPreselectedDepartmentId
}) => {
  const { doctors, departments } = useHospital();
  const [selectedDeptId, setSelectedDeptId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Search & Filter Doctors
  const filteredDoctors = useMemo(() => {
    return doctors.filter(doc => {
      const matchesDept = selectedDeptId === 'all' || doc.departmentId === selectedDeptId;
      const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            doc.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            doc.qualification.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesDept && matchesSearch;
    });
  }, [doctors, selectedDeptId, searchQuery]);

  const handleBookingTrigger = (doctorId: string, deptId: string) => {
    setPreselectedDoctorId(doctorId);
    setPreselectedDepartmentId(deptId);
    setActiveTab('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* 1. Header Portion */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold text-brand-blue uppercase bg-blue-50 px-3.5 py-1.5 rounded-full">
          Medical Experts
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-800 font-display">
          Our Speciality Doctors
        </h1>
        <p className="text-base text-slate-500 leading-relaxed">
          Rainbow Hospital brings seasoned clinical veterans and specialized surgeons to Pogathota, Nellore. All consultants are backed by skilled clinical supervisors.
        </p>
      </section>

      {/* 2. Controls (Search & Department Filter Switches) */}
      <section className="bg-white border border-slate-100 p-6 rounded-2xl shadow-xs space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Quick Search */}
          <div className="md:col-span-5 relative">
            <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-slate-400">
              <LucideIcon name="Search" className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by doctor name or speciality..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all text-sm"
              id="doctor-search-input"
            />
          </div>

          {/* Department Selection Picker */}
          <div className="md:col-span-7 flex flex-wrap gap-2 justify-start sm:justify-end">
            <button
              onClick={() => setSelectedDeptId('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
                selectedDeptId === 'all'
                  ? 'bg-brand-blue text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Specialties
            </button>
            {departments.slice(0, 8).map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDeptId(dept.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
                  selectedDeptId === dept.id
                    ? 'bg-brand-blue text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {dept.name.split(' & ')[0]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Doctors List Display Grid */}
      {filteredDoctors.length === 0 ? (
        <div className="text-center py-12 bg-slate-50 rounded-2xl max-w-md mx-auto border border-dashed">
          <LucideIcon name="Users" className="w-12 h-12 text-slate-300 mx-auto mb-2" />
          <h4 className="font-bold text-slate-700">No Doctor Found</h4>
          <p className="text-slate-500 text-xs mt-1">Try resetting search labels or choose another speciality department above.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDoctors.map((doc) => {
            const docDept = departments.find(d => d.id === doc.departmentId);
            return (
              <div 
                key={doc.id}
                className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-blue-100 transition-all flex flex-col justify-between text-left group"
                id={`doctor-card-${doc.id}`}
              >
                {/* Image panel */}
                <div className="relative aspect-square overflow-hidden bg-slate-50">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[10px] font-bold text-slate-700 border border-slate-100 flex items-center gap-1 shadow-sm">
                    <LucideIcon name="Briefcase" className="w-3.5 h-3.5 text-brand-blue" />
                    <span>{doc.experience} Years Experience</span>
                  </div>
                </div>

                {/* Info block */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {docDept && (
                      <span className="text-[10px] font-bold uppercase text-brand-blue bg-blue-50 px-2 py-0.5 rounded-md">
                        {docDept.name}
                      </span>
                    )}
                    <div>
                      <h3 className="font-extrabold text-slate-800 text-base font-display tracking-tight group-hover:text-brand-blue transition-colors">
                        {doc.name}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500">{doc.qualification}</p>
                    </div>
                    <div className="text-xs font-bold text-slate-700 leading-tight">
                      {doc.specialization}
                    </div>
                    <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                      {doc.bio}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-slate-50">
                    {/* Schedule block */}
                    <div className="flex items-start gap-1.5 bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-slate-600">
                      <LucideIcon name="Clock" className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase leading-none">Schedules</div>
                        <div className="text-[11px] font-bold text-slate-700 mt-1 leading-snug">{doc.timings}</div>
                      </div>
                    </div>

                    {/* Book trigger */}
                    <button
                      onClick={() => handleBookingTrigger(doc.id, doc.departmentId)}
                      className="w-full py-2.5 bg-brand-blue hover:bg-blue-600 text-white font-extrabold rounded-xl text-xs shadow-md shadow-blue-500/10 hover:shadow-blue-500/25 transition-all text-center block uppercase tracking-wide"
                      id={`book-doc-${doc.id}`}
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
