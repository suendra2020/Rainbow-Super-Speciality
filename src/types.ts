export interface Doctor {
  id: string;
  name: string;
  qualification: string;
  specialization: string;
  departmentId: string;
  experience: number; // in years
  timings: string;
  image: string;
  bio: string;
}

export interface Department {
  id: string;
  name: string;
  description: string;
  iconName: string; // lucide-react icon name as string
  services: string[];
}

export interface Appointment {
  id: string;
  patientName: string;
  mobile: string;
  email: string;
  departmentId: string;
  doctorId: string;
  date: string;
  time: string;
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
  notes: string;
  createdAt: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  rating: number; // out of 5
  review: string;
  date: string;
  location: string;
}

export interface Facility {
  id: string;
  name: string;
  description: string;
  details: string[];
  iconName: string;
  imageUrl: string;
}

export interface ContactDetails {
  hospitalName: string;
  address: string;
  phone: string;
  alternatePhone?: string;
  whatsapp: string;
  emergencyPhone: string;
  email: string;
  workingHours: string;
  googleRating: number;
  totalReviews: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}
