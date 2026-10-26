import member1 from '../assets/images/Team/Team1.png'
import member2 from '../assets/images/Team/Team2.png'
import member3 from '../assets/images/Team/Team3.png'
import member4 from '../assets/images/Team/Team4.png'
import member5 from '../assets/images/Team/Team5.png'
import member6 from '../assets/images/Team/Team6.png'


  
export interface TeamMember {
    id: number 
    name: string;
    role: string;
    experience: string;
    avatar: string;
    linkedinUrl: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "John Smith",
    role: "CEO and Founder",
    experience: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    avatar: member1,
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: 2,
    name: "Jane Doe",
    role: "Director of Operations",
    experience: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    avatar: member2,
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Senior SEO Specialist",
    experience: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    avatar: member3,
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: 4,
    name: "Emily Johnson",
    role: "PPC Manager",
    experience: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    avatar: member4,
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: 5,
    name: "Brian Williams",
    role: "Social Media Specialist",
    experience: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    avatar: member5,
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: 6,
    name: "Sarah Kim",
    role: "Content Creator",
    experience: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
    avatar: member6,
    linkedinUrl: "https://linkedin.com",
  },
];