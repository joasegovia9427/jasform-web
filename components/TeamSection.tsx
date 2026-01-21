import React from 'react';

const teamMembers = [
  {
    name: "Agustin Pereira",
    image: "https://raw.githubusercontent.com/JASForm/branding/refs/heads/main/Profile%20Agus%20Round228.webp",
    linkedin: "https://www.linkedin.com/in/agustin-pereira25/",
    github: "https://github.com/AgustinPereira25",
    role: "Co-Creator; Software Architect, BackEnd-Dev, Quality Assurance Specialist",
    description: "I thrive on collaborative work, sharing knowledge to create efficient web applications. I'm an optimistic team player, motivating others when faced with challenges. Proficient in Fullstack/Backend frameworks, TypeScript, React, Docker, MongoDB, and SQL. My soft skills include leadership, active listening, teamwork, productivity, flexibility, and negotiation abilities."
  },
  {
    name: "Joaquin Segovia",
    image: "https://raw.githubusercontent.com/JASForm/branding/refs/heads/main/Profile%20Joaco%20Round228.webp",
    linkedin: "https://www.linkedin.com/in/joaquinsegovia/",
    github: "https://github.com/joasegovia9427",
    role: "Co-Creator; PM, Product Owner, Business Analyst, FrontEnd Dev, UX and Growth",
    description: "I specialize in professional-grade software development, combining technical expertise with strong soft skills. I take ownership of projects, ensuring a holistic view of the product, end-users, functionality, and business aspects. Additionally, I'm passionate about Ul/UX, multimedia, graphics, marketing, design, product development, and design thinking, constantly seeking self-improvement."
  },
  {
    name: "Sebastian Insausti",
    image: "https://raw.githubusercontent.com/JASForm/branding/refs/heads/main/Profile%20Seba%20Round228.webp",
    linkedin: "https://www.linkedin.com/in/sebastian-insausti/",
    github: "https://github.com/sinsausti",
    role: "Co-Creator; SRE, DevOps, DevSecOps Specialist, DBA, SysAdmin and NetAdmin",
    description: "With more than 18 years of IT experience, I excel as a Sysadmin, SRE, DevOps, DBA and Data Specialist, Information Security and Network Administrator. Proficient in networking, security, databases, OS, and automation. My expertise in MySQL, PostgreSQL, Galera, Percona, MariaDB, and SQL Server enables me to design and configure high-availability environments for optimal performance."
  }
];

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-gradient-to-b from-slate-100 to-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800">Team</h2>
          <div className="mt-4 w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              {/* Rounded Image */}
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-blue-600/10 rounded-full scale-110 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-48 h-48 rounded-full object-cover shadow-xl border-4 border-white transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Name */}
              <h3 className="text-2xl font-bold text-blue-800 mb-4">{member.name}</h3>

              {/* Social Icons */}
              <div className="flex gap-4 mb-6">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-slate-800 hover:text-slate-600 transition-colors">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>

              {/* Role */}
              <p className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-6 min-h-[3rem]">
                {member.role}
              </p>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed text-sm lg:text-base border-t border-slate-300 pt-6">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;