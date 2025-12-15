import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const educationData = [
    {
      institution: "Vellore Institute of Technology (VIT-AP)",
      degree: "B.Tech in Computer Science & Engineering (Data Analytics)",
      duration: "2023-2027",
      cgpa: "9.07 CGPA"
    },
    {
      institution: "Saharanpur Public School",
      degree: "ISC Board - Class XII Science",
      duration: "2022",
      cgpa: "84.8%"
    },
    {
      institution: "Saharanpur Public School",
      degree: "ICSE Board - Class X",
      duration: "2020",
      cgpa: "97% (District Rank 1)"
    }
  ];

  return (
    <section id="education" className="section-alt">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title text-center">Education</h2>
          
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <div 
                key={index} 
                className="flex gap-4 p-4 rounded-lg border border-border hover:border-foreground/20 transition-colors"
              >
                <div className="p-2 h-fit rounded-lg bg-muted">
                  <GraduationCap className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="font-semibold">{edu.institution}</h3>
                    <span className="text-sm text-muted-foreground">{edu.duration}</span>
                  </div>
                  <p className="text-muted-foreground">{edu.degree}</p>
                  <p className="text-sm font-medium text-primary mt-1">{edu.cgpa}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;