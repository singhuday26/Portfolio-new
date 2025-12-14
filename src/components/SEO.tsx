import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
}

const SEO = ({ 
  title = "Uday Singh | UI Engineer - React & JavaScript Specialist",
  description = "Portfolio of Uday Singh, UI Engineer specializing in building scalable, user-centric web applications with React, JavaScript, HTML/CSS.",
  type = "website"
}: SEOProps) => {
  useEffect(() => {
    // Add structured data for Person schema
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Uday Singh",
      "jobTitle": "UI Engineer",
      "description": description,
      "url": window.location.origin,
      "email": "uday.singh240818@gmail.com",
      "telephone": "+91-81268-52998",
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Vellore Institute of Technology - AP"
      },
      "knowsAbout": [
        "React",
        "JavaScript",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Frontend Development",
        "UI Engineering",
        "Component Architecture",
        "Performance Optimization",
        "Responsive Design",
        "Web Development"
      ],
      "sameAs": [
        "https://linkedin.com/in/udaysingh2626",
        "https://github.com/singhuday26",
        "https://leetcode.com/udaysingh2408"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup
    return () => {
      document.head.removeChild(script);
    };
  }, [description]);

  return null;
};

export default SEO;
