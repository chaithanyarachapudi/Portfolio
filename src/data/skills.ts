import { 
  Globe, 
  Database, 
  Shield, 
  Code, 
  Terminal,
  type LucideIcon
} from 'lucide-react';

type Skill = {
  name: string;
  level: number;
  color?: string;
};

type SkillCategory = {
  name: string;
  icon: LucideIcon;
  skills: Skill[];
};

export const skillsData: SkillCategory[] = [
  {
    name: 'Web Technologies',
    icon: Globe,
    skills: [
      { name: 'HTML', level: 95, color: '#e34c26' },
      { name: 'CSS', level: 90, color: '#264de4' },
      { name: 'JavaScript', level: 85, color: '#f0db4f' },
      { name: 'Bootstrap', level: 90, color: '#7952b3' },
      { name: 'Tailwind', level: 85, color: '#38bdf8' }
    ]
  },
  {
    name: 'Backend',
    icon: Database,
    skills: [
      { name: 'Java', level: 90, color: '#f89820' },
      { name: 'Spring Boot', level: 85, color: '#6db33f' },
      { name: 'Hibernate', level: 80, color: '#bcae79' },
      { name: 'MySQL', level: 85, color: '#4479a1' }
    ]
  },
  {
    name: 'Security Tools',
    icon: Shield,
    skills: [
      { name: 'FTK Imager', level: 80, color: '#ff4757' },
      { name: 'Wireshark', level: 85, color: '#1a73e8' },
      { name: 'Autopsy', level: 75, color: '#7158e2' },
      { name: 'Security Analysis', level: 80, color: '#ff6b6b' }
    ]
  },
  {
    name: 'Programming',
    icon: Code,
    skills: [
      { name: 'Java', level: 95, color: '#f89820' },
      { name: 'C', level: 85, color: '#a8b9cc' },
      { name: 'Python', level: 80, color: '#306998' }
    ]
  },
  {
    name: 'Tools',
    icon: Terminal,
    skills: [
      { name: 'Git', level: 90, color: '#f34f29' },
      { name: 'VS Code', level: 95, color: '#007acc' },
      { name: 'Eclipse', level: 85, color: '#2c2255' }
    ]
  }
];