import React from 'react';

const allBlogPosts = [
  {
    image: "https://raw.githubusercontent.com/JASForm/branding/refs/heads/main/post1.webp",
    title: "Strengthening Patient Safety through Software Resilience",
    author: "Agustin Pereira",
    date: "May 12, 2024",
    excerpt: "In the healthcare industry, where the stakes are often life and death, the reliability and safety of software systems are of paramount importance...",
    url: "#blog/strengthening-patient-safety"
  },
  {
    image: "https://raw.githubusercontent.com/JASForm/branding/refs/heads/main/post2.webp",
    title: "Cybersecurity Attacks in Healthcare",
    author: "Joaquin Segovia",
    date: "April 28, 2024",
    excerpt: "In recent years, the healthcare industry has witnessed an alarming rise in cyber threats, making it a prime target for cybercriminals...",
    url: "#blog/cybersecurity-attacks-healthcare"
  },
  {
    image: "https://raw.githubusercontent.com/JASForm/branding/refs/heads/main/post3.webp",
    title: "Revolutionizing Healthcare: Impact of Tech",
    author: "Sebastian Insausti",
    date: "March 15, 2024",
    excerpt: "In the ever-evolving landscape of healthcare, technology has emerged as a powerful force, revolutionizing the way medical services are delivered...",
    url: "#blog/revolutionizing-healthcare-impact"
  }
];

const BlogArchive: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">JASForm Blog</h1>
          <p className="text-xl text-slate-600">Insights into HIPAA compliance, form security, and healthcare technology.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allBlogPosts.map((post, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-200">
              <img src={post.image} alt={post.title} className="w-full aspect-video object-cover" />
              <div className="p-8">
                <div className="flex items-center gap-2 text-sm text-blue-600 font-semibold mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.author}</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">{post.title}</h2>
                <p className="text-slate-600 mb-6">{post.excerpt}</p>
                <a href={post.url} className="inline-flex items-center font-bold text-blue-600 hover:text-blue-700">
                  Read Article
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogArchive;