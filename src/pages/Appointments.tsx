import React, { useState, useEffect } from 'react';
import { useHospital } from '../context/HospitalContext';
import { LucideIcon } from '../components/LucideIcon';
import { motion, AnimatePresence } from 'motion/react';

interface AppointmentsProps {
  preselectedDoctorId: string | null;
  preselectedDepartmentId: string | null;
  clearPreselections: () => void;
}

export const Appointments: React.FC<AppointmentsProps> = ({
  preselectedDoctorId,
  preselectedDepartmentId,
  clearPreselections
}) => {
  const { departments, doctors, addAppointment } = useHospital();

  // Form Fields
  const [patientName, setPatientName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [departmentId, setDepartmentId] = useState('');
  const [doctorId, setDoctorId] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successInfo, setSuccessInfo] = useState<{ id: string; name: string; doctor: string; date: string; time: string } | null>(null);
  const [errorText, setErrorText] = useState('');

  // Handle pre-selections from other page triggers (e.g. Doctor Card click)
  useEffect(() => {
    if (preselectedDepartmentId) {
      setDepartmentId(preselectedDepartmentId);
    }
    if (preselectedDoctorId) {
      setDoctorId(preselectedDoctorId);
    }
  }, [preselectedDoctorId, preselectedDepartmentId]);

  // Dynamically filter doctors based on selected department
  const availableDoctors = doctors.filter(doc => !departmentId || doc.departmentId === departmentId);

  // If department changes and the current doctor has a different department, reset doctor field
  useEffect(() => {
    if (departmentId && doctorId) {
      const selectedDocObj = doctors.find(d => d.id === doctorId);
      if (selectedDocObj && selectedDocObj.departmentId !== departmentId) {
        setDoctorId('');
      }
    }
  }, [departmentId, doctorId, doctors]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorText('');

    // Basic Validations
    if (!patientName.trim()) return setErrorText('Please enter the patient\'s full name.');
    if (!mobile.trim() || mobile.length < 10) return setErrorText('Please enter a valid 10-digit mobile number.');
    if (!departmentId) return setErrorText('Please select the health speciality department.');
    if (!doctorId) return setErrorText('Please choose an expert consulting doctor.');
    if (!date) return setErrorText('Please specify your preferred date for the appointment.');
    if (!time) return setErrorText('Please select your preferred time slot.');

    setIsSubmitting(true);

    try {
      // Mock API latency
      setTimeout(() => {
        const added = addAppointment({
          patientName,
          mobile,
          email: email.trim() || 'No Email Provided',
          departmentId,
          doctorId,
          date,
          time,
          notes: notes.trim()
        });

        const docObj = doctors.find(d => d.id === doctorId);
        
        setSuccessInfo({
          id: added.id,
          name: patientName,
          doctor: docObj ? docObj.name : 'Medical Specialist',
          date,
          time
        });

        // Reset fields
        setPatientName('');
        setMobile('');
        setEmail('');
        setDepartmentId('');
        setDoctorId('');
        setDate('');
        setTime('');
        setNotes('');
        clearPreselections(); // wipe previous temporary redirects
        setIsSubmitting(false);
      }, 800);
    } catch {
      setErrorText('Error saving appointment. Please verify details and try again.');
      setIsSubmitting(false);
    }
  };

  const getTomorrowDateString = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const tomorrowStr = getTomorrowDateString();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* 1. Header Segment */}
      <section className="text-center space-y-2">
        <span className="text-xs font-bold text-brand-blue uppercase bg-blue-50 px-3 py-1 rounded-full">
          Outpatient Scheduling
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-800 font-display uppercase">
          Book Your Appointment
        </h1>
        <p className="text-sm text-slate-500 max-w-xl mx-auto">
          Secure private, direct consultation slots with elite experts at Pogathota. All details are kept strictly medical.
        </p>
      </section>

      <AnimatePresence mode="wait">
        {/* SUCCESS ALERT SCREEN */}
        {successInfo ? (
          <motion.div
            key="success-form"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white border-2 border-brand-green/30 p-8 rounded-3xl shadow-lg relative text-center space-y-6"
          >
            <div className="w-16 h-16 rounded-full bg-brand-green-light text-brand-green flex items-center justify-center mx-auto text-3xl shadow">
              <LucideIcon name="Check" className="w-8 h-8 stroke-[3]" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-extrabold text-slate-800 font-display">Appointment Pre-Registered!</h2>
              <p className="text-sm text-slate-500 max-w-md mx-auto">
                Thank you, <span className="font-extrabold text-slate-800">{successInfo.name}</span>. Your slot request has been generated with reference code: <span className="font-mono text-xs font-bold bg-slate-100 text-brand-blue px-2 py-0.5 rounded-md">{successInfo.id}</span>
              </p>
            </div>

            {/* Recipt block */}
            <div className="max-w-md mx-auto bg-slate-50 border border-slate-100 p-6 rounded-2xl text-left divide-y divide-slate-100 text-xs sm:text-sm">
              <div className="py-2.5 flex justify-between">
                <span className="text-slate-400 font-semibold font-sans">Consultant:</span>
                <span className="font-bold text-slate-800">{successInfo.doctor}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-slate-400 font-semibold font-sans">Preferred Date:</span>
                <span className="font-bold text-slate-800">{successInfo.date}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-slate-400 font-semibold font-sans">Preferred Time:</span>
                <span className="font-bold text-slate-800">{successInfo.time}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-slate-400 font-semibold font-sans">Status:</span>
                <span className="px-2.5 py-0.5 bg-yellow-100 text-yellow-800 font-bold rounded-full text-[10px]">Pending Confirmation</span>
              </div>
            </div>

            <p className="text-xs text-slate-450 leading-relaxed max-w-xs mx-auto">
              Our frontdesk team in Nellore will contact your mobile within 15 minutes to confirm the final booking.
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => setSuccessInfo(null)}
                className="px-6 py-2.5 bg-brand-blue hover:bg-blue-600 text-white font-extrabold rounded-xl text-xs uppercase"
              >
                Book Another Slot
              </button>
            </div>
          </motion.div>
        ) : (
          /* CORE BOOKING FORM */
          <motion.form
            key="booking-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="bg-white border border-slate-100 p-6 sm:p-10 rounded-3xl shadow-sm text-left space-y-6"
            id="hospital-booking-form"
          >
            {/* Header snippet */}
            <div className="pb-4 border-b border-slate-100 flex items-center gap-3">
              <div className="p-2.5 bg-brand-blue-light text-brand-blue rounded-xl">
                <LucideIcon name="Calendar" className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-800 text-lg font-display leading-tight">Patient Intake Sheet</h3>
                <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Fill details honestly</span>
              </div>
            </div>

            {/* Error alerts */}
            {errorText && (
              <div className="p-4 bg-red-50 border border-red-100 text-red-700 rounded-xl text-xs font-bold flex items-center gap-2">
                <LucideIcon name="AlertCircle" className="w-5 h-5" />
                <span>{errorText}</span>
              </div>
            )}

            {/* Split row - Name & Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1.5 focus-within:text-brand-blue">
                <label className="block text-xs font-bold text-slate-450 uppercase tracking-wider font-sans">
                  Patient Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <LucideIcon name="Users" className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="Enter full legal name"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 text-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-sm"
                    id="patient-name-input"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-450 uppercase tracking-wider font-sans">
                  Contact Mobile Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <LucideIcon name="Phone" className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
                    placeholder="9XXXXXXXXX"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 text-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-sm"
                    id="patient-mobile-input"
                  />
                </div>
              </div>
            </div>

            {/* Email (Optional but useful) */}
            <div className="space-y-1.5 col-span-2">
              <label className="block text-xs font-bold text-slate-450 uppercase tracking-wider font-sans">
                Patient Email Address <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <LucideIcon name="Mail" className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@patientportal.com"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 text-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-sm"
                  id="patient-email-input"
                />
              </div>
            </div>

            {/* Split row - Department & Doctor selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1.5 col-span-2 sm:col-span-1">
                <label className="block text-xs font-bold text-slate-450 uppercase tracking-wider font-sans">
                  Select Speciality <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={departmentId}
                  onChange={(e) => setDepartmentId(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 text-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-sm"
                  id="department-select"
                >
                  <option value="">-- Choose Speciality --</option>
                  {departments.map(dept => (
                    <option key={dept.id} value={dept.id}>{dept.name}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5 col-span-2 sm:col-span-1">
                <label className="block text-xs font-bold text-slate-450 uppercase tracking-wider font-sans">
                  Select Expert Doctor <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={doctorId}
                  disabled={!departmentId}
                  onChange={(e) => setDoctorId(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 text-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-sm disabled:opacity-60"
                  id="doctor-select"
                >
                  <option value="">
                    {!departmentId ? 'Select Department First' : '-- Choose Doctor --'}
                  </option>
                  {availableDoctors.map(doc => (
                    <option key={doc.id} value={doc.id}>{doc.name} - {doc.qualification}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Split row - Date & Time slots */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1.5 col-span-2 sm:col-span-1">
                <label className="block text-xs font-bold text-slate-450 uppercase tracking-wider font-sans">
                  Preferred Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  required
                  min={tomorrowStr}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 text-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-sm"
                  id="appointment-date"
                />
              </div>

              <div className="space-y-1.5 col-span-2 sm:col-span-1">
                <label className="block text-xs font-bold text-slate-450 uppercase tracking-wider font-sans">
                  Preferred Time Slot <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 text-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-sm"
                  id="appointment-time"
                >
                  <option value="">-- Choose Time Slot --</option>
                  <option value="09:00 AM">09:00 AM - 10:00 AM</option>
                  <option value="10:00 AM">10:00 AM - 11:00 AM</option>
                  <option value="11:00 AM">11:00 AM - 12:00 PM</option>
                  <option value="12:00 PM">12:00 PM - 01:00 PM</option>
                  <option value="02:00 PM">02:00 PM - 03:00 PM</option>
                  <option value="03:00 PM">03:00 PM - 04:00 PM</option>
                  <option value="04:00 PM">04:00 PM - 05:00 PM</option>
                  <option value="05:00 PM">05:00 PM - 06:00 PM</option>
                  <option value="06:00 PM">06:00 PM - 07:00 PM</option>
                </select>
              </div>
            </div>

            {/* Brief Medical notes */}
            <div className="space-y-1.5 col-span-2">
              <label className="block text-xs font-bold text-slate-450 uppercase tracking-wider font-sans">
                Symptoms / Additional Medical Notes <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                placeholder="List key pain areas, historical surgeries, or questions for the consulting doctor..."
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 text-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-sm resize-none"
                id="patient-symptoms-notes"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-brand-blue hover:bg-blue-600 text-white font-extrabold rounded-xl text-sm shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 transition-all text-center flex items-center justify-center gap-2 uppercase tracking-wider"
                id="booking-submit-button"
              >
                {isSubmitting ? (
                  <>
                    <LucideIcon name="Loader" className="w-4 h-4 animate-spin text-white" />
                    <span>Processing intake Sheet...</span>
                  </>
                ) : (
                  <>
                    <LucideIcon name="CheckSquare" className="w-4 h-4 text-white" />
                    <span>Submit Appointment Request</span>
                  </>
                )}
              </button>
            </div>

            {/* Disclaimer statement */}
            <p className="text-[10px] text-slate-400 text-center leading-normal max-w-lg mx-auto">
              *By submitting this medical form, you authorize Rainbow Hospital's administration desk to call your mobile cell or query your mail to clarify check-up times.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};
