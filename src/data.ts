import { Doctor, Department, Testimonial, Facility, ContactDetails, GalleryItem, Appointment } from './types';

export const INITIAL_CONTACT_DETAILS: ContactDetails = {
  hospitalName: "Rainbow Super Speciality Hospital",
  address: "Sankara Agraharam, Near Sai Baba Temple, Pogathota, Nellore, Andhra Pradesh - 524001, India",
  phone: "+91 93906 59797",
  alternatePhone: "+91 861 234 5678",
  whatsapp: "+919390659797",
  emergencyPhone: "+91 93906 59797",
  email: "info@rainbowhospitalnellore.com",
  workingHours: "24 Hours, All Days Open",
  googleRating: 4.1,
  totalReviews: 227
};

export const INITIAL_DEPARTMENTS: Department[] = [
  {
    id: 'dept-gen-med',
    name: 'General Medicine',
    description: 'Comprehensive evaluation and treatment for various adult health issues, chronic conditions, and systemic illnesses.',
    iconName: 'Activity',
    services: [
      'Diabetes Management & Care',
      'Hypertension & Cholesterol Control',
      'Infectious Diseases Diagnostics',
      'Thyroid & Hormonal Disorders',
      'Comprehensive Preventative Health Checkups',
      'Geriatric (Elderly) Healthcare'
    ]
  },
  {
    id: 'dept-gen-surg',
    name: 'General Surgery',
    description: 'Advanced surgical treatments, laparoscopic interventions, and minimally invasive diagnostic and therapeutic surgeries.',
    iconName: 'Scissors',
    services: [
      'Laparoscopic Cholecystectomy (Gallbladder)',
      'Hernia Repair (Open & Laparoscopic)',
      'Appendectomy Procedures',
      'Thyroid and Breast Surgery',
      'Trauma & Emergency Surgeries',
      'Piles, Fissure, and Fistula Laser Surgery'
    ]
  },
  {
    id: 'dept-ortho',
    name: 'Orthopaedics',
    description: 'Expert treatment for bone, joint, and ligament injuries, dynamic arthroscopic procedures, and advanced joint replacements.',
    iconName: 'Activity', // Bone or skeleton like representation
    services: [
      'Total Knee & Hip Replacements',
      'Arthroscopic Ligament Reconstruction (ACL/MCL)',
      'Fracture & Multi-trauma Care Room',
      'Spine & Disc Surgery',
      'Pediatric Orthopaedics',
      'Sports Injury Management'
    ]
  },
  {
    id: 'dept-cardio',
    name: 'Cardiology',
    description: 'Advanced cardiac evaluation, life-saving interventional procedures, and intensive coronary care unit.',
    iconName: 'Heart',
    services: [
      'Angiography & Angioplasty (PCI)',
      'Pacemaker & ICD Implantation',
      'Echocardiography (2D Echo)',
      'TMT (Treadmill Test) & Holter Monitoring',
      'Heart Failure Management',
      'Preventive Cardiac Checkups'
    ]
  },
  {
    id: 'dept-neuro',
    name: 'Neurology & Neurosurgery',
    description: 'Comprehensive neurological medical diagnostics and advanced surgeries for complex brain and spine pathologies.',
    iconName: 'Brain',
    services: [
      'Stroke Management & Thrombolysis',
      'Epilepsy and Seizure Disorder Clinic',
      'Brain Tumor Resection',
      'Microdiscectomy and Keyhole Spinal Surgery',
      'Migraine & Chronic Headache Care',
      'Parkinson\'s & Movement Disorders Treatment'
    ]
  },
  {
    id: 'dept-gastro',
    name: 'Gastroenterology',
    description: 'Specialised medical care for diseases of the digestive system, liver, and biliary tract with modern endoscopic facilities.',
    iconName: 'FileText',
    services: [
      'Diagnostic & Therapeutic Upper GI Endoscopy',
      'Colonoscopy & Polypectomy',
      'ERCP for Bile Duct Stones',
      'Liver Disease and Hepatitis Management',
      'Pancreatitis Care & Management',
      'GERD & Gastric Ulcer Clinics'
    ]
  },
  {
    id: 'dept-paed',
    name: 'Paediatrics & Neonatology',
    description: 'Dedicated children health services, child growth trackers, vaccinations, and specialised neonatal intensive care (NICU).',
    iconName: 'Baby',
    services: [
      'Comprehensive Baby Vaccinations',
      'Neonatal Intensive Care Unit (NICU)',
      'Pediatric Emergency Care',
      'Growth & Milestones Assessment',
      'Childhood Asthma & Allergy Clinic',
      'Pediatric Nutrition Guidance'
    ]
  },
  {
    id: 'dept-gynae',
    name: 'Gynaecology & Obstetrics',
    description: 'Full range of medical services for women\'s health, painless labour setups, laparoscopic gynaec operations, and high-risk pregnancy care.',
    iconName: 'HeartHandshake',
    services: [
      'High-Risk Pregnancy & Delivery Management',
      'Laparoscopic Hysterectomy & Cystectomy',
      'PCOD/PCOS Management Clinic',
      'Infertility Workup & Consultations',
      'Menopausal Health & Support Group',
      'Regular Ultrasound & Antenatal Care'
    ]
  },
  {
    id: 'dept-critical-care',
    name: 'Emergency & Critical Care',
    description: '24/7 hyper-responsive trauma rescue, fully stocked crash carts, ventilator beds, and expert emergency medicine physicians.',
    iconName: 'Clock',
    services: [
      'Trauma & Poly-Trauma Urgent Response',
      'Cardiac & Stroke Emergencies (Golden Hour Care)',
      'Fully Equipped Life Support Ambulance Service',
      'Multidisciplinary Medical ICU (MICU)',
      'Surgical ICU (SICU) with round-the-clock monitoring',
      'Poisoning & Toxicology Emergency Management'
    ]
  },
  {
    id: 'dept-diagnostic',
    name: 'Diagnostic & Imaging',
    description: 'Precision imaging diagnostics with state-of-the-art MRI, CT scanners, digital X-rays, and multi-slice ultrasound.',
    iconName: 'Eye',
    services: [
      'Digital X-Rays (High Definition)',
      'Advanced Ultrasonography (USG)',
      'Color Doppler Studies',
      'Inhouse Dedicated CT Scanning',
      'Mammography Services',
      'EEG & EMG Tests'
    ]
  },
  {
    id: 'dept-lab',
    name: 'Laboratory Services',
    description: 'Comprehensive computerized in-house pathology lab providing accurate, quick blood, biochemistry, and microbiology reports.',
    iconName: 'ShieldAlert',
    services: [
      'Clinical Pathology & Haematology',
      'Biochemistry Profiles (Kidney, Liver, Lipid)',
      'Hormonal Assays & Tumor Markers',
      'Microbiology & Bacterial Cultures',
      'Serology & Immunology Diagnostics',
      '24/7 STAT Lab for Urgent Emergency Reports'
    ]
  }
];

export const INITIAL_DOCTORS: Doctor[] = [
  {
    id: 'doc-radhakrishna',
    name: 'Dr. K. Radhakrishna',
    qualification: 'MD, DM (Cardiology)',
    specialization: 'Senior Interventional Cardiologist',
    departmentId: 'dept-cardio',
    experience: 16,
    timings: 'Mon - Sat: 10:00 AM - 04:00 PM',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=300&auto=format&fit=crop',
    bio: 'Dr. K. Radhakrishna is a highly trusted name in Nellore for complex cardiac issues. He specialises in primary coronary angioplasty, radial interventional cardiology, pacemaker implantations, and treating refractory heart failure cases.'
  },
  {
    id: 'doc-anila',
    name: 'Dr. S. Anila',
    qualification: 'MD, DGO (Obstetrics & Gynaecology)',
    specialization: 'Senior Consultant Gynaecologist & Obstetrician',
    departmentId: 'dept-gynae',
    experience: 12,
    timings: 'Mon - Sat: 09:30 AM - 01:00 PM, 05:00 PM - 08:00 PM',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=300&auto=format&fit=crop',
    bio: 'Dr. S. Anila provides caring and patient-centric treatment for women of all age brackets. She has deep expertise in managing high-risk pregnancies, performing laparoscopic hysterectomies, and helping with fertility issues.'
  },
  {
    id: 'doc-subbiah',
    name: 'Dr. M. V. Subbiah',
    qualification: 'MS, MCh (Orthopaedics)',
    specialization: 'Joint Replacement & Spine Specialist',
    departmentId: 'dept-ortho',
    experience: 14,
    timings: 'Mon - Sat: 11:00 AM - 05:00 PM',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=300&auto=format&fit=crop',
    bio: 'Dr. M. V. Subbiah is an expert in orthopedic surgery, famous for his successful total-knee and hip replacement operations. He is actively involved in complex trauma care and sports medicine treatments in Pogathota, Nellore.'
  },
  {
    id: 'doc-prasanna',
    name: 'Dr. P. Prasanna Kumar',
    qualification: 'MD (General Medicine)',
    specialization: 'Consultant Physician & Diabetologist',
    departmentId: 'dept-gen-med',
    experience: 10,
    timings: 'Mon - Sun: 08:00 AM - 09:30 AM, 04:00 PM - 07:30 PM',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=300&auto=format&fit=crop',
    bio: 'Dr. P. Prasanna Kumar is dedicated to internal medicine and diabetes care. He is revered by repeat patients for his detail-oriented approach to controlling chronic hypertension, thyroid levels, and metabolic disorders.'
  },
  {
    id: 'doc-kalyan',
    name: 'Dr. V. Kalyan Chaitanya',
    qualification: 'MS, MCh (Neurosurgery)',
    specialization: 'Consultant Neurosurgeon & Spine Surgeon',
    departmentId: 'dept-neuro',
    experience: 11,
    timings: 'Mon - Sat: 02:00 PM - 06:00 PM',
    image: 'https://images.unsplash.com/photo-1582750433449-6490e28c9f7b?q=80&w=300&auto=format&fit=crop',
    bio: 'Dr. Kalyan Chaitanya focuses on complicated brain surgeries, neuro-trauma recovery, spinal cord tumors, and micro-spine operations. He integrates minimally invasive tactics wherever possible to ensure speedy recoveries.'
  },
  {
    id: 'doc-ramanjaneyulu',
    name: 'Dr. R. Ramanjaneyulu',
    qualification: 'MS (General Surgery)',
    specialization: 'Laparoscopic & General Surgeon',
    departmentId: 'dept-gen-surg',
    experience: 13,
    timings: 'Mon - Sat: 10:00 AM - 01:00 PM, 04:00 PM - 06:30 PM',
    image: 'https://images.unsplash.com/photo-1607990283143-e81e7a2c93ab?q=80&w=300&auto=format&fit=crop',
    bio: 'Dr. R. Ramanjaneyulu is an expert laparoscopic surgeon who handles all varieties of abdominal operations including hernias, kidney appendixes, thyroid tumors, and modern minimal-incision laser treatments.'
  },
  {
    id: 'doc-swapna',
    name: 'Dr. Swapna Priya',
    qualification: 'MD (Paediatrics)',
    specialization: 'Consultant Paediatrician & Neonatologist',
    departmentId: 'dept-paed',
    experience: 8,
    timings: 'Mon - Sat: 10:00 AM - 01:00 PM, 05:00 PM - 07:00 PM',
    image: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?q=80&w=300&auto=format&fit=crop',
    bio: 'Dr. Swapna Priya handles newborn care with friendly warmth. She has dedicated her career to childhood immunization cycles, respiratory allergies in toddlers, and guiding first-time mothers with nutritional strategies.'
  },
  {
    id: 'doc-srikanth',
    name: 'Dr. B. Srikanth',
    qualification: 'MD, DM (Gastroenterology)',
    specialization: 'Medical Gastroenterologist & Hepato-biliary Specialist',
    departmentId: 'dept-gastro',
    experience: 9,
    timings: 'Mon - Sat: 12:00 PM - 04:00 PM',
    image: 'https://images.unsplash.com/photo-1637059824899-a441006a6875?q=80&w=300&auto=format&fit=crop',
    bio: 'Dr. B. Srikanth has trained extensively in evaluating gastric disruptions, irritable bowel conditions, and complex liver issues. He is adept at endoscopic interventions and ERCP maneuvers.'
  }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    patientName: 'Venkata Subbaiah Chowdary',
    rating: 5,
    review: 'Extremely good treatment. We admitted my father here for knee joint pain. Dr. Subbiah did excellent total knee replacement surgery. Now my father is walking comfortably. Dedicated nursing staff and very tidy infrastructure. Rainbow is the best hospital in Nellore Pogathota.',
    date: '2026-05-10',
    location: 'Nellore, AP'
  },
  {
    id: 'test-2',
    patientName: 'Ramya Sree K.',
    rating: 5,
    review: 'Consulted Dr. Anila for my high-risk delivery. She was extremely supportive throughout the journey. The Gynaecology ward staff are very professional, caring 24/7. Fees are very reasonable compared to corporate hospitals in Chennai or Nellore outskirts.',
    date: '2026-06-02',
    location: 'Gudur, AP'
  },
  {
    id: 'test-3',
    patientName: 'Gopal Reddy',
    rating: 4,
    review: 'Rainbow Super Speciality Hospital saved my brother during an acute cardiac emergency. He came in with severe chest pain. Dr. Radhakrishna immediately performed an angiogram and emergency angioplasty within the golden hour. Life-saving response! Great ICU facilities.',
    date: '2026-04-18',
    location: 'Nellore, AP'
  },
  {
    id: 'test-4',
    patientName: 'Sk. Nooruddin',
    rating: 5,
    review: 'The doctors and diagnostic process at Rainbow Nellore are top-class. They have automated 24/7 lab facilities and X-ray services in Pogathota list of hospitals. Dr. Prasanna Kumar explained the treatment options with extreme patience. Highly recommended.',
    date: '2026-05-29',
    location: 'Kavali, AP'
  }
];

export const INITIAL_FACILITIES: Facility[] = [
  {
    id: 'fac-emergency',
    name: '24/7 Emergency & Trauma Rescuscitation',
    description: 'Fully equipped critical resuscitation bays managed by specialized emergency doctors, trauma surgeons, and advanced paramedics.',
    details: [
      'Immediate triaging for strokes and chest pain',
      'Advanced Cardiac Life Support (ACLS) setups',
      'Direct link to imaging and operating theatres',
      'Continuous central patient telemetry monitoring'
    ],
    iconName: 'AlertCircle',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'fac-icu',
    name: 'Multi-Disciplinary ICU & Critical Care Units',
    description: 'State-of-the-art Intensive Care Units equipped with high-end mechanical ventilators, invasive haemodynamic monitors, and one-to-one nursing care.',
    details: [
      'High-frequency transport ventilators',
      'Ultrafiltration and hemodialysis support',
      'Intensivist led surveillance 24/7',
      'Strict infection barrier protocols and air exchange'
    ],
    iconName: 'Activity',
    imageUrl: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'fac-pharmacy',
    name: '24/7 In-House Pharmacy',
    description: 'Fully stocked, climate-controlled, accessible pharmacy holding genuine medicines, medical consumables, and high-risk surgical assets.',
    details: [
      '100% genuine medical supplies sourcing',
      'Cold-chain vaccine storing and critical insulin controls',
      'Fast service desk inside hospital foyer',
      'All major medical insurance pre-approved stock'
    ],
    iconName: 'ShoppingBag',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'fac-diagnostics',
    name: 'Advanced Diagnostics & CT Scans',
    description: 'Premium radiodiagnosis tools giving multi-slice crisp imaging and dynamic vascular ultrasound mapping on-demand.',
    details: [
      'Inhouse Computed Tomography (CTScan)',
      'Digital Radiography (Low Radiation Dose)',
      'Acoustic 2D/3D Ultrasonography and color Doppler',
      'Bedside portable X-Ray machines for critical ICU patients'
    ],
    iconName: 'Eye',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'fac-ambulance',
    name: 'Fully Equipped Advanced Ambulance Fleet',
    description: 'ICU-on-wheels ambulance service designed for the safest and fastest transfer of critical cardiac and trauma patients.',
    details: [
      'Oxygen delivery setups and portable transport ventilators',
      'Syringe pumps and patient monitors on-board',
      'Direct radio connection to emergency department',
      'Trained critical care rescuers backing every run'
    ],
    iconName: 'Truck',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'fac-rooms',
    name: 'Patient Rooms & General Wards',
    description: 'Hygienic, comfortable, and well-ventilated stay alternatives ranging from general wards to super deluxe AC suites.',
    details: [
      'Individual nurse call buttons next to beds',
      'Nutritious medical diet catering customized per doctor advice',
      'Sofa beds for patient attendants',
      'Private deluxe rooms with attached bathrooms, TV, and Wi-Fi'
    ],
    iconName: 'Home',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop'
  }
];

export const INITIAL_GALLERY_IMAGES: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Rainbow Super Speciality Hospital Foyer',
    category: 'Exterior',
    imageUrl: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'gal-2',
    title: 'Contemporary Consulting Suites',
    category: 'Consulting',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'gal-3',
    title: 'Super-speciality Cardiology ICU',
    category: 'ICU',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'gal-4',
    title: 'Laparoscopic Surgery Theatre',
    category: 'OT',
    imageUrl: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'gal-5',
    title: 'Computerized Pathology Laboratory',
    category: 'Diagnostic',
    imageUrl: 'https://images.unsplash.com/photo-1579165466511-71e5d6d90029?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'gal-6',
    title: 'High-Comfort Patient Recovery Room',
    category: 'Rooms',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop'
  }
];

export const INITIAL_APPOINTMENTS: Appointment[] = [
  {
    id: 'apt-1',
    patientName: 'Ranganayakulu M.',
    mobile: '9848022334',
    email: 'ranga.m@gmail.com',
    departmentId: 'dept-ortho',
    doctorId: 'doc-subbiah',
    date: '2026-06-18',
    time: '11:30 AM',
    status: 'Confirmed',
    notes: 'Severe chronic back stiffness and knee strain. First evaluation.',
    createdAt: '2026-06-16T10:15:00Z'
  },
  {
    id: 'apt-2',
    patientName: 'Sujatha Reddy',
    mobile: '9959144355',
    email: 'sujatha.s@yahoo.com',
    departmentId: 'dept-gynae',
    doctorId: 'doc-anila',
    date: '2026-06-19',
    time: '10:00 AM',
    status: 'Pending',
    notes: 'Regular check-up for high-risk pregnancy. Third trimester scans ready.',
    createdAt: '2026-06-17T03:20:00Z'
  },
  {
    id: 'apt-3',
    patientName: 'Nageswara Rao',
    mobile: '8897044882',
    email: 'nagesh.nellore@gmail.com',
    departmentId: 'dept-cardio',
    doctorId: 'doc-radhakrishna',
    date: '2026-06-17',
    time: '03:15 PM',
    status: 'Completed',
    notes: 'Post-angioplasty review. BP is perfect. Checked ECG.',
    createdAt: '2026-06-12T09:00:00Z'
  }
];
