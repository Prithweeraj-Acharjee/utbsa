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
    slug: "bangladeshi-night-2025",
    date: "November 2025",
    category: "Cultural",
    image: "/images/events/bangladeshi-night-2025.jpg",
    description:
      "A grand celebration of Bangladeshi culture featuring traditional attire, music, and community bonding. Over 80 members came together for an unforgettable evening.",
    photos: [
      "/images/events/bangladeshi-night-2025/574241290_1286399673527845_716955943133062735_n.jpg",
      "/images/events/bangladeshi-night-2025/574571412_1286399900194489_3726276554937463958_n.jpg",
      "/images/events/bangladeshi-night-2025/573062865_1286400043527808_4213251998768519223_n.jpg",
      "/images/events/bangladeshi-night-2025/573967595_1286400063527806_8102776395170240019_n.jpg",
      "/images/events/bangladeshi-night-2025/576441776_1286400340194445_6226835897627134317_n.jpg",
      "/images/events/bangladeshi-night-2025/559660878_1270830091751470_371026786840509532_n.jpg",
    ],
  },
  {
    title: "International Village (iVillage) 2025",
    slug: "ivillage-2025",
    date: "November 2025",
    category: "Cultural",
    image: "/images/events/ivillage-2025.jpg",
    description:
      "BSA represented Bangladesh at UToledo's International Village, serving authentic Bangladeshi food and showcasing our culture with the Bangladesh flag proudly displayed.",
    photos: [
      "/images/events/ivillage-2025/587016761_17956369500031640_8229811455753687410_n.jpg",
      "/images/events/ivillage-2025/584568394_17956369452031640_8945912109231505891_n.jpg",
      "/images/events/ivillage-2025/586814374_17956369464031640_5410747466199438109_n.jpg",
      "/images/events/ivillage-2025/587017979_17956369473031640_3515810203176738501_n.jpg",
      "/images/events/ivillage-2025/587945087_17956369509031640_2471875926103742285_n.jpg",
    ],
  },
  {
    title: "Fall 2024 Orientation",
    slug: "fall-2024-orientation",
    date: "Fall 2024",
    category: "Welcome",
    image: "/images/events/fall-2024-orientation.jpg",
    description:
      "BSA welcomed new Bangladeshi students to UToledo with a cake-cutting ceremony, introductions, and community building to help them feel at home.",
    photos: [
      "/images/events/fall-2024-orientation/484846408_1092988289535652_3325266250895010469_n.jpg",
      "/images/events/fall-2024-orientation/484992239_1092988056202342_1102852033684869321_n.jpg",
      "/images/events/fall-2024-orientation/485616433_1092988292868985_2515079672772893931_n.jpg",
      "/images/events/fall-2024-orientation/484842308_1092988286202319_6448965460557903770_n.jpg",
      "/images/events/fall-2024-orientation/484853917_1092988369535644_4445198830367981326_n.jpg",
      "/images/events/fall-2024-orientation/484826761_1092988326202315_8182638761452721453_n.jpg",
      "/images/events/fall-2024-orientation/484714798_1092988282868986_3761726854696812925_n.jpg",
      "/images/events/fall-2024-orientation/484967193_1092988322868982_2290290593151917543_n.jpg",
      "/images/events/fall-2024-orientation/485364609_1092988336202314_6047958495819655650_n.jpg",
      "/images/events/fall-2024-orientation/485629409_1092988296202318_5070609870965952353_n.jpg",
      "/images/events/fall-2024-orientation/485737985_1092988329535648_6444688731681169329_n.jpg",
      "/images/events/fall-2024-orientation/485774411_1092988262868988_8696076381181321660_n.jpg",
      "/images/events/fall-2024-orientation/484853755_1092988302868984_7928835820810865199_n.jpg",
    ],
  },
  {
    title: "Spring 2024 Orientation",
    slug: "spring-2024-orientation",
    date: "Spring 2024",
    category: "Welcome",
    image: "/images/events/spring-2024-orientation.jpg",
    description:
      "A warm welcome event for incoming spring semester students, featuring gift exchanges and introductions to the BSA community.",
    photos: [
      "/images/events/spring-2024-orientation/484826395_1091924829641998_8443399743313611601_n.jpg",
      "/images/events/spring-2024-orientation/484848558_1091924886308659_6957459634983495700_n.jpg",
      "/images/events/spring-2024-orientation/484851317_1091924996308648_3524311413643242257_n.jpg",
      "/images/events/spring-2024-orientation/484473557_1091924816308666_8052133966109329870_n.jpg",
      "/images/events/spring-2024-orientation/484511414_1091924756308672_6045989159559384844_n.jpg",
      "/images/events/spring-2024-orientation/484963044_1091924766308671_3910217422411309733_n.jpg",
    ],
  },
  {
    title: "In a Frame — BSA",
    slug: "in-a-frame",
    date: "2024",
    category: "Cultural",
    image: "/images/events/in-a-frame.jpg",
    description:
      "A vibrant cultural gathering where BSA members dressed in traditional attire came together to celebrate their heritage and create lasting memories.",
    photos: [
      "/images/events/in-a-frame/484830990_1091924599642021_5151541827062346606_n.jpg",
      "/images/events/in-a-frame/484805748_1091924966308651_929552198977590100_n.jpg",
      "/images/events/in-a-frame/484804619_1091924706308677_5068389894298443924_n.jpg",
    ],
  },
];
