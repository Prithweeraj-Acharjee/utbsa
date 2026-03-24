// ==========================================
// Site-wide data for BSA Website
// ==========================================

export const siteConfig = {
  name: "UT BSA",
  fullName: "Bangladeshi Student Association",
  university: "University of Toledo",
  tagline: "Unity. Culture. Community.",
  description:
    "Bangladeshi Student Association promotes the integration of Bangladeshi and American cultures by organizing and taking part of events on campus.",
  address: "3414 Dorr St, Toledo, OH 43607",
  phone: "419-984-7600",
  socials: {
    instagram: "https://www.instagram.com/utoledo_bsa/",
    facebook: "https://www.facebook.com/UToledoBSA",
    invonet: "https://invonet.utoledo.edu/organization/bangladeshi-student-association",
    email: "bsa@rockets.utoledo.edu",
  },
  primaryContact: {
    name: "Saad Andalib",
    email: "Saad.Andalib@rockets.utoledo.edu",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "E-Board", href: "/eboard" },
  { label: "Alumni", href: "/alumni" },
  { label: "Events", href: "/events" },
  { label: "Join", href: "/join" },
];

// E-Board 2025-26
export const eboardMembers = [
  {
    name: "Saad Andalib",
    title: "President",
    major: "MS Industrial Engineering",
    image: "/images/eboard-saad.jpg",
  },
  {
    name: "Khokon Kanti Bhowmuk",
    title: "Vice President Internal",
    major: "Ph.D. Experimental Therapeutics",
    image: "/images/eboard-khokon.jpg",
  },
  {
    name: "Muhiul Islam Muhit",
    title: "Vice President External",
    major: "MS Mechanical Engineering",
    image: "/images/eboard-muhiul.jpg",
  },
  {
    name: "Saif Ahmed",
    title: "General Secretary",
    major: "Ph.D. Physics",
    image: "/images/eboard-saif.jpg",
  },
  {
    name: "Afifah Hossain Nilima",
    title: "Treasurer",
    major: "Accounting & Finance",
    image: "/images/eboard-afifah.jpg",
  },
  {
    name: "Prithweeraj Acharjee",
    title: "Event Coordinator",
    major: "Computer Science and Engineering",
    image: "/images/eboard-prithweeraj.jpg",
  },
  {
    name: "Lamisa Qumruzzaman",
    title: "Social Media Officer",
    major: "Neuroscience",
    image: "/images/eboard-lamisa.jpg",
  },
  {
    name: "Md. Iqbal Hossain",
    title: "Executive Member",
    major: "MS Cyber Security",
    image: "/images/eboard-iqbal.jpg",
  },
  {
    name: "Tania Akter Jhuma",
    title: "Executive Member",
    major: "Ph.D. Biomedical Science",
    image: "/images/eboard-tania.jpg",
  },
];

// E-Board 2024-25
export const eboardMembers2024 = [
  {
    name: "Gorshed Al Mamun Dony",
    title: "President",
    image: "/images/eboard-24-gorshed.png",
  },
  {
    name: "Muhiul Islam Muhit",
    title: "Vice President",
    image: "/images/eboard-24-muhiul.png",
  },
  {
    name: "Khokon Kanti Bhowmuk",
    title: "General Secretary",
    image: "/images/eboard-24-khokon.png",
  },
  {
    name: "Antardip Himol",
    title: "Treasurer",
    image: "/images/eboard-24-antardip.png",
  },
  {
    name: "Prithweeraj Porag",
    title: "Event Coordinator",
    image: "/images/eboard-24-prithweeraj.png",
  },
  {
    name: "Tasnimul Hasan",
    title: "Media Officer",
    image: "/images/eboard-24-tasnimul.png",
  },
];

// Alumni (placeholder — replace with real data)
export const alumniMembers = [
  {
    name: "Alumni Name",
    graduationYear: 2020,
    company: "Company",
    role: "Role",
    image: "/images/placeholder-person.svg",
  },
  {
    name: "Alumni Name",
    graduationYear: 2019,
    company: "Company",
    role: "Role",
    image: "/images/placeholder-person.svg",
  },
  {
    name: "Alumni Name",
    graduationYear: 2018,
    company: "Company",
    role: "Role",
    image: "/images/placeholder-person.svg",
  },
  {
    name: "Alumni Name",
    graduationYear: 2021,
    company: "Company",
    role: "Role",
    image: "/images/placeholder-person.svg",
  },
];

// Upcoming events (placeholder — replace with real data)
export const upcomingEvents: {
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
}[] = [];

// Past events with photos
export const pastEvents = [
  {
    title: "Bangladeshi Night 2025",
    date: "November 2025",
    category: "Cultural",
    image: "/images/events/bangladeshi-night-2025.jpg",
    description:
      "A grand celebration of Bangladeshi culture featuring traditional attire, music, and community bonding. Over 80 members came together for an unforgettable evening.",
  },
  {
    title: "International Village (iVillage) 2025",
    date: "November 2025",
    category: "Cultural",
    image: "/images/events/ivillage-2025.jpg",
    description:
      "BSA represented Bangladesh at UToledo's International Village, serving authentic Bangladeshi food and showcasing our culture with the Bangladesh flag proudly displayed.",
  },
  {
    title: "Fall 2024 Orientation",
    date: "Fall 2024",
    category: "Welcome",
    image: "/images/events/fall-2024-orientation.jpg",
    description:
      "BSA welcomed new Bangladeshi students to UToledo with a cake-cutting ceremony, introductions, and community building to help them feel at home.",
  },
  {
    title: "Spring 2024 Orientation",
    date: "Spring 2024",
    category: "Welcome",
    image: "/images/events/spring-2024-orientation.jpg",
    description:
      "A warm welcome event for incoming spring semester students, featuring gift exchanges and introductions to the BSA community.",
  },
  {
    title: "In a Frame — BSA",
    date: "2024",
    category: "Cultural",
    image: "/images/events/in-a-frame.jpg",
    description:
      "A vibrant cultural gathering where BSA members dressed in traditional attire came together to celebrate their heritage and create lasting memories.",
  },
];
