type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  features: string[];
  link?: string;
};

export const projectsData: Project[] = [
  {
    title: "Indian Culture & Heritage Web App",
    description: "A comprehensive web application built with Spring Boot that showcases the rich cultural heritage of India through interactive content, virtual tours, and educational resources.",
    image: "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Spring Boot", "Java", "Web Development"],
    features: [
      "Interactive cultural elements map with regional information",
      "Virtual museum tours featuring historical artifacts",
      "Educational resources about traditions and festivals",
      "User authentication and personalized content",
      "Mobile-responsive design for accessibility"
    ]
  },
  {
    title: "Corporate Recruitment System",
    description: "An end-to-end recruitment management system designed to streamline the hiring process for corporate organizations, from job posting to onboarding.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Java", "Spring Boot", "Database"],
    features: [
      "Automated applicant screening and sorting algorithm",
      "Interview scheduling and calendar integration",
      "Applicant tracking with status updates",
      "Custom assessment creation tools",
      "Analytics dashboard for recruitment metrics"
    ]
  },
  {
    title: "Log Monitoring in Multi-Tenancy",
    description: "A cybersecurity project focused on monitoring and analyzing system logs in multi-tenant environments to detect anomalies and potential security threats.",
    image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Cybersecurity", "Java"],
    features: [
      "Real-time log analysis and anomaly detection",
      "Tenant-specific security policy enforcement",
      "Customizable alert thresholds and notifications",
      "Visual dashboard for security metrics",
      "Historical log search and forensics capabilities"
    ]
  },
  {
    title: "Movie Recommendation System",
    description: "A machine learning-based movie recommendation system that analyzes user preferences and viewing history to suggest relevant film and TV content.",
    image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Python", "ML", "Web Development"],
    features: [
      "Collaborative filtering algorithm for personalized recommendations",
      "Content-based analysis of movie attributes",
      "User preference learning from ratings and watch history",
      "Genre and mood-based recommendation options",
      "Integration with popular streaming service catalogs"
    ]
  }
];