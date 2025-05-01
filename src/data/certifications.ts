import type { LucideIcon } from 'lucide-react';

type Certification = {
  title: string;
  issuer: string;
  credential?: string;
  color: string;
  logo?: string;
};

export const certificationsData: Certification[] = [
  {
    title: "Red Hat Certified Developer",
    issuer: "Red Hat",
    credential: "#",
    color: "#EE0000",
    logo: "https://www.redhat.com/themes/custom/rhdc/img/red-hat-logo.svg"
  },
  {
    title: "Salesforce AI Associate",
    issuer: "Salesforce",
    credential: "#",
    color: "#00A1E0",
    logo: "https://www.salesforce.com/content/dam/sfdc-docs/www/resources/campaign-assets/live-long-and-propser/images/salesforce-logo.svg"
  },
  {
    title: "Ethical Hacking",
    issuer: "EC-Council",
    credential: "#",
    color: "#A40104",
    logo: "https://www.eccouncil.org/wp-content/uploads/2021/08/EC-Council-Logo-300x54.png"
  }
];