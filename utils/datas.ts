export const barChatData: {
  name: string;
  sales: number;
}[] = [
  {
    name: "Apr",
    sales: 330,
  },
  {
    name: "May",
    sales: 250,
  },
  {
    name: "Jun",
    sales: 110,
  },
  {
    name: "Jul",
    sales: 300,
  },
  {
    name: "Aug",
    sales: 490,
  },
  {
    name: "Sep",
    sales: 350,
  },
  {
    name: "Oct",
    sales: 270,
  },
  {
    name: "Nov",
    sales: 130,
  },
  {
    name: "Dec",
    sales: 425,
  },
];

export const areaChartData = [
  { name: "Jan", "mobile apps": 50, website: 30 },
  { name: "Feb", "mobile apps": 40, website: 90 },
  { name: "Mar", "mobile apps": 300, website: 40 },
  { name: "Apr", "mobile apps": 70, website: 500 },
  { name: "May", "mobile apps": 80, website: 200 },
  { name: "Jun", "mobile apps": 240, website: 379 },
  { name: "Jul", "mobile apps": 140, website: 190 },
  { name: "Aug", "mobile apps": 10, website: 420 },
  { name: "Sep", "mobile apps": 440, website: 290 },
  { name: "Oct", "mobile apps": 40, website: 120 },
  { name: "Nov", "mobile apps": 240, website: 90 },
  { name: "Dec", "mobile apps": 300, website: 250 },
];

import { FaFile, FaRocket, FaShoppingCart } from "react-icons/fa";
import { FiCreditCard } from "react-icons/fi";
import { IoStatsChart } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";

export const activeUsersData = [
  { icon: FiCreditCard, title: "Users", value: "32,984" },
  { icon: FaRocket, title: "Clicks", value: "2.42m" },
  { icon: FaShoppingCart, title: "Sales", value: "2,400$" },
  { icon: IoStatsChart, title: "Items", value: "320" },
];

export const dashHead = [
  {
    title: "Today's Moneys",
    value: "$53,000",
    percentage: "+55%",
    icon: FiCreditCard,
  },
  {
    title: "Today's Users",
    value: "2,300",
    percentage: "+5%",
    icon: CiGlobe,
  },
  {
    title: "New Clients",
    value: "+3,020",
    percentage: "-14%",
    icon: FaFile,
  },
  {
    title: "Total Sales",
    value: "$173,000",
    percentage: "+8%",
    icon: FaShoppingCart,
  },
];



interface Person {
  name: string;
  age: number;
  sex: 'Male' | 'Female' | 'Other';
  members: string;
  school: string;
  address: string;
  mail: string;
  phone: string;
  totalImg:number
}

const people: Person[] = [
  {
    name: 'Emma Johnson',
    age: 22,
    sex: 'Female',
    school: 'University of California',
    members:"",
    address: '123 Main St, Los Angeles, CA',
    mail: 'emma.johnson@example.com',
    phone: '(213) 555-1234',
    totalImg:5,
  },
  {
    name: 'Michael Chen',
    age: 19,
    sex: 'Male',
    school: 'New York University',
    members:"",
    address: '456 Broadway, New York, NY',
    mail: 'michael.chen@example.com',
    phone: '(212) 555-5678',
    totalImg:3,
  },
  {
    name: 'Sarah Williams',
    age: 21,
    sex: 'Female',
    school: 'University of Texas',
    members:"",
    address: '789 Oak Ave, Austin, TX',
    mail: 'sarah.williams@example.com',
    phone: '(512) 555-9012',
    totalImg:3,
  },
  {
    name: 'David Kim',
    age: 20,
    sex: 'Male',
    school: 'Harvard University',
    members:"",
    address: '101 Cambridge St, Cambridge, MA',
    mail: 'david.kim@example.com',
    phone: '(617) 555-3456',
    totalImg:5,
  },
  {
    name: 'Jessica Martinez',
    age: 23,
    sex: 'Female',
    school: 'Stanford University',
    members:"",
    address: '202 Palm Dr, Stanford, CA',
    mail: 'jessica.martinez@example.com',
    phone: '(650) 555-7890',
    totalImg:2,
  },
  {
    name: 'Ryan Taylor',
    age: 18,
    sex: 'Male',
    school: 'University of Michigan',
    members:"",
    address: '303 State St, Ann Arbor, MI',
    mail: 'ryan.taylor@example.com',
    phone: '(734) 555-2345',
    totalImg:3,
  },
  {
    name: 'Olivia Brown',
    age: 22,
    sex: 'Female',
    school: 'Columbia University',
    members:"",
    address: '404 Riverside Dr, New York, NY',
    mail: 'olivia.brown@example.com',
    phone: '(212) 555-6789',
    totalImg:2,
  },
  {
    name: 'Daniel Wilson',
    age: 19,
    sex: 'Male',
    school: 'University of Florida',
    members:"",
    address: '505 Sunshine Blvd, Gainesville, FL',
    mail: 'daniel.wilson@example.com',
    phone: '(352) 555-0123',
    totalImg:5,
  },
];

export default people;


export const authorsData = [
  {
    image: '/images/esthera.png', 
    name: 'Esthera Jackson',
    email: 'alexa@simmmple.com',
    organization: 'Organization',
    role: 'Manager',
    status: 'Online',
    date: '14/06/21',
  },
  {
    image: '/images/alexa.png',
    name: 'Alexa Liras',
    email: 'laurent@simmmple.com',
    organization: 'Developer',
    role: 'Programmer',
    status: 'Offline',
    date: '12/05/21',
  },
  {
    image: '/images/laurent.png',
    name: 'Laurent Michael',
    email: 'laurent@simmmple.com',
    organization: 'Projects',
    role: 'Executive',
    status: 'Online',
    date: '07/06/21',
  },
  {
    image: '/images/freduardo.png',
    name: 'Freduardo Hill',
    email: 'freduardo@simmmple.com',
    organization: 'Organization',
    role: 'Manager',
    status: 'Online',
    date: '14/11/21',
  },
  {
    image: '/images/daniel.png',
    name: 'Daniel Thomas',
    email: 'daniel@simmmple.com',
    organization: 'Developer',
    role: 'Programmer',
    status: 'Offline',
    date: '21/01/21',
  },
];

import {
  SiAdobexd ,
  SiAtlassian,
  SiSlack,
  SiSpotify,
  SiDatabricks, // used as a placeholder diamond icon
} from 'react-icons/si';
import { user1, user2, user4, user5 } from "@/public/img";

export const projects:{
    icon: any;
    title: string;
    color: string;
    budget: string;
    status: string;
    completion: string;
}[] = [
  {
    icon: SiAdobexd ,
    title: 'Purity UI Version',
    color:"text-pink-500",
    budget: '$14,000',
    status: 'In Progress',
    completion: "40%",
  },
  {
    icon: SiAtlassian,
    title: 'Add Progress Track',
    color:"text-blue-500",
    budget: '$3,000',
    status: 'Pending',
    completion: "60%",
  },
  {
    icon: SiSlack,
    title: 'Fix Platform Errors',
    color:"text-[#4A154B]",
    budget: 'Not set',
    status: 'Done',
    completion: "100%",
  },
  {
    icon: SiSpotify,
    title: 'Launch our Mobile App',
    color:"text-green-500",
    budget: '$32,000',
    status: 'Done',
    completion: "50%",
  },
  {
    icon: SiDatabricks,
    title: 'Add the New Pricing Page',
    color:"text-blue-400",
    budget: '$400',
    status: 'In Progress',
    completion: "25%",
  },
];




  export const convoInfo = [
    {
      name: "Sophie B.",
      message: "Hi! I need more information...",
      avatar: user1, 
    },
    {
      name: "Sophie B.",
      message: "Awesome work, can you change...",
      avatar: user4,
    },
    {
      name: "Sophie B.",
      message: "Have a great afternoon...",
      avatar: user5,
    },
    {
      name: "Sophie B.",
      message: "About files I can...",
      avatar: user4,
    },
    {
      name: "Sophie B.",
      message: "About files I can...",
      avatar: user1,
    },
  ];