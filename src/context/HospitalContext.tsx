import React, { createContext, useContext, useState, useEffect } from 'react';
import { Doctor, Department, Appointment, Testimonial, Facility, ContactDetails, GalleryItem } from '../types';
import { 
  INITIAL_CONTACT_DETAILS, 
  INITIAL_DEPARTMENTS, 
  INITIAL_DOCTORS, 
  INITIAL_FACILITIES, 
  INITIAL_GALLERY_IMAGES, 
  INITIAL_APPOINTMENTS,
  INITIAL_TESTIMONIALS
} from '../data';

interface HospitalContextType {
  doctors: Doctor[];
  departments: Department[];
  appointments: Appointment[];
  testimonials: Testimonial[];
  facilities: Facility[];
  contactDetails: ContactDetails;
  galleryItems: GalleryItem[];
  
  // Appointment Actions
  addAppointment: (appointment: Omit<Appointment, 'id' | 'status' | 'createdAt'>) => Appointment;
  updateAppointmentStatus: (id: string, status: Appointment['status']) => void;
  updateAppointmentNotes: (id: string, notes: string) => void;
  deleteAppointment: (id: string) => void;
  
  // Doctor Actions
  addDoctor: (doctor: Omit<Doctor, 'id'>) => void;
  updateDoctor: (id: string, updatedDoctor: Partial<Doctor>) => void;
  deleteDoctor: (id: string) => void;
  
  // Department Actions
  addDepartment: (department: Omit<Department, 'id'>) => void;
  updateDepartment: (id: string, updatedDept: Partial<Department>) => void;
  deleteDepartment: (id: string) => void;
  
  // Testimonial Actions
  addTestimonial: (testimonial: Omit<Testimonial, 'id' | 'date'>) => void;
  
  // Contact Actions
  updateContactDetails: (details: Partial<ContactDetails>) => void;
  
  // Gallery Actions
  addGalleryItem: (item: Omit<GalleryItem, 'id'>) => void;
  deleteGalleryItem: (id: string) => void;
  
  // System reset (to help evaluate)
  resetToDefault: () => void;
}

const HospitalContext = createContext<HospitalContextType | undefined>(undefined);

export const HospitalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [doctors, setDoctors] = useState<Doctor[]>(() => {
    const saved = localStorage.getItem('rainbow_doctors');
    return saved ? JSON.parse(saved) : INITIAL_DOCTORS;
  });

  const [departments, setDepartments] = useState<Department[]>(() => {
    const saved = localStorage.getItem('rainbow_departments');
    return saved ? JSON.parse(saved) : INITIAL_DEPARTMENTS;
  });

  const [appointments, setAppointments] = useState<Appointment[]>(() => {
    const saved = localStorage.getItem('rainbow_appointments');
    return saved ? JSON.parse(saved) : INITIAL_APPOINTMENTS;
  });

  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    const saved = localStorage.getItem('rainbow_testimonials');
    return saved ? JSON.parse(saved) : INITIAL_TESTIMONIALS;
  });

  const [facilities] = useState<Facility[]>(INITIAL_FACILITIES);

  const [contactDetails, setContactDetails] = useState<ContactDetails>(() => {
    const saved = localStorage.getItem('rainbow_contacts');
    return saved ? JSON.parse(saved) : INITIAL_CONTACT_DETAILS;
  });

  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(() => {
    const saved = localStorage.getItem('rainbow_gallery_items');
    return saved ? JSON.parse(saved) : INITIAL_GALLERY_IMAGES;
  });

  // Sync to LocalStorage
  useEffect(() => {
    localStorage.setItem('rainbow_doctors', JSON.stringify(doctors));
  }, [doctors]);

  useEffect(() => {
    localStorage.setItem('rainbow_departments', JSON.stringify(departments));
  }, [departments]);

  useEffect(() => {
    localStorage.setItem('rainbow_appointments', JSON.stringify(appointments));
  }, [appointments]);

  useEffect(() => {
    localStorage.setItem('rainbow_testimonials', JSON.stringify(testimonials));
  }, [testimonials]);

  useEffect(() => {
    localStorage.setItem('rainbow_contacts', JSON.stringify(contactDetails));
  }, [contactDetails]);

  useEffect(() => {
    localStorage.setItem('rainbow_gallery_items', JSON.stringify(galleryItems));
  }, [galleryItems]);

  // Actions
  const addAppointment = (aptData: Omit<Appointment, 'id' | 'status' | 'createdAt'>) => {
    const newApt: Appointment = {
      ...aptData,
      id: `apt-${Date.now()}`,
      status: 'Pending',
      createdAt: new Date().toISOString()
    };
    setAppointments(prev => [newApt, ...prev]);
    return newApt;
  };

  const updateAppointmentStatus = (id: string, status: Appointment['status']) => {
    setAppointments(prev => prev.map(apt => apt.id === id ? { ...apt, status } : apt));
  };

  const updateAppointmentNotes = (id: string, notes: string) => {
    setAppointments(prev => prev.map(apt => apt.id === id ? { ...apt, notes } : apt));
  };

  const deleteAppointment = (id: string) => {
    setAppointments(prev => prev.filter(apt => apt.id !== id));
  };

  const addDoctor = (docData: Omit<Doctor, 'id'>) => {
    const newDoc: Doctor = {
      ...docData,
      id: `doc-${Date.now()}`
    };
    setDoctors(prev => [...prev, newDoc]);
  };

  const updateDoctor = (id: string, updatedDoctor: Partial<Doctor>) => {
    setDoctors(prev => prev.map(doc => doc.id === id ? { ...doc, ...updatedDoctor } : doc));
  };

  const deleteDoctor = (id: string) => {
    setDoctors(prev => prev.filter(doc => doc.id !== id));
  };

  const addDepartment = (deptData: Omit<Department, 'id'>) => {
    const newDept: Department = {
      ...deptData,
      id: `dept-${Date.now()}`
    };
    setDepartments(prev => [...prev, newDept]);
  };

  const updateDepartment = (id: string, updatedDept: Partial<Department>) => {
    setDepartments(prev => prev.map(dept => dept.id === id ? { ...dept, ...updatedDept } : dept));
  };

  const deleteDepartment = (id: string) => {
    setDepartments(prev => prev.filter(dept => dept.id !== id));
  };

  const addTestimonial = (testData: Omit<Testimonial, 'id' | 'date'>) => {
    const newTest: Testimonial = {
      ...testData,
      id: `test-${Date.now()}`,
      date: new Date().toISOString().split('T')[0]
    };
    setTestimonials(prev => [newTest, ...prev]);
  };

  const updateContactDetails = (details: Partial<ContactDetails>) => {
    setContactDetails(prev => ({ ...prev, ...details }));
  };

  const addGalleryItem = (itemData: Omit<GalleryItem, 'id'>) => {
    const newItem: GalleryItem = {
      ...itemData,
      id: `gal-${Date.now()}`
    };
    setGalleryItems(prev => [...prev, newItem]);
  };

  const deleteGalleryItem = (id: string) => {
    setGalleryItems(prev => prev.filter(item => item.id !== id));
  };

  const resetToDefault = () => {
    setDoctors(INITIAL_DOCTORS);
    setDepartments(INITIAL_DEPARTMENTS);
    setAppointments(INITIAL_APPOINTMENTS);
    setTestimonials(INITIAL_TESTIMONIALS);
    setContactDetails(INITIAL_CONTACT_DETAILS);
    setGalleryItems(INITIAL_GALLERY_IMAGES);
  };

  return (
    <HospitalContext.Provider value={{
      doctors,
      departments,
      appointments,
      testimonials,
      facilities,
      contactDetails,
      galleryItems,
      addAppointment,
      updateAppointmentStatus,
      updateAppointmentNotes,
      deleteAppointment,
      addDoctor,
      updateDoctor,
      deleteDoctor,
      addDepartment,
      updateDepartment,
      deleteDepartment,
      addTestimonial,
      updateContactDetails,
      addGalleryItem,
      deleteGalleryItem,
      resetToDefault
    }}>
      {children}
    </HospitalContext.Provider>
  );
};

export const useHospital = () => {
  const context = useContext(HospitalContext);
  if (!context) {
    throw new Error('useHospital must be used within a HospitalProvider');
  }
  return context;
};
