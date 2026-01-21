import React from 'react';

const blogPosts = [
  {
    image: "https://raw.githubusercontent.com/JASForm/branding/refs/heads/main/post1.webp",
    title: "Strengthening Patient Safety through Software Resilience",
    author: "Agustin Pereira",
    excerpt: "In the healthcare industry, where the stakes are often life and death, the reliability and safety of software systems are of paramount importance. Defensive programming is an essential approach that emphasizes building robust and resilient software to prevent failures, mitigate...",
    url: "#blog/strengthening-patient-safety"
  },
  {
    image: "https://raw.githubusercontent.com/JASForm/branding/refs/heads/main/post2.webp",
    title: "Cybersecurity Attacks in Healthcare",
    author: "Joaquin Segovia",
    excerpt: "In recent years, the healthcare industry has witnessed an alarming rise in cyber threats, making it a prime target for cybercriminals seeking to exploit vulnerabilities and gain unauthorized access to sensitive patient data. The consequences of cybersecurity attacks in healthcare...",
    url: "#blog/cybersecurity-attacks-healthcare"
  },
  {
    image: "https://raw.githubusercontent.com/JASForm/branding/refs/heads/main/post3.webp",
    title: "Revolutionizing Healthcare: The Impact of Technology in the Medical World",
    author: "Sebastian Insausti",
    excerpt: "In the ever-evolving landscape of healthcare, technology has emerged as a powerful force, revolutionizing the way medical services are delivered, diagnoses are made, and patient care is managed. From cutting-edge medical devices and telemedicine solutions to advanced data analytics and...",
    url: "#blog/revolutionizing-healthcare-impact"
  }
];

const Blog: React.FC = () => {
  const blogArchiveUrl = "#blog-archive";

  return (
    <section id="blog" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Blog Intro */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          {/* Image on the left */}
          <div className="lg:w-1/3 w-full">
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
              <img 
                src="https://raw.githubusercontent.com/JASForm/branding/refs/heads/main/BlogHome.webp" 
                alt="JASForm Blog" 
                className="relative w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Content on the right */}
          <div className="lg:w-2/3 w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Blog</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                We firmly believe that having a blog is not only crucial but also immensely valuable for our business.
                Our blog serves as a dynamic platform where we share invaluable insights, regular updates, and industry knowledge with our readers.
              </p>
              <p>
                By consistently publishing blog posts, we actively engage with our users, address their concerns, and demonstrate our expertise. Through our carefully curated content, we strive to foster continuous improvement in our product and service offerings.
              </p>
              <p>
                Furthermore, our blog acts as a community-building tool, where we encourage our readers to actively participate and provide feedback. By creating an open dialogue, we establish ourselves as thought leaders and collaborators within our industry.
              </p>
              <p>
                One of the key advantages of our platform, <span className="font-semibold text-blue-600">JASForm</span>, is that it is <span className="font-semibold text-blue-600">HIPAA compliant</span> by default, even in our <span className="font-semibold text-blue-600">free plan</span>. We prioritize end-user security without compromising on the seamless user experience we offer.
              </p>
              <p>
                With JASForm, businesses can confidently create awesome forms while ensuring the utmost data protection and compliance with HIPAA regulations.
              </p>
              <p>
                We invite you to explore our blog and experience firsthand the wealth of knowledge and resources we share. Join our community, subscribe to our updates, and engage with us as we continue to bring you the best app for creating remarkable forms.
              </p>
              <p className="font-medium text-slate-900 italic text-blue-600">
                Together, let's shape the future of form creation while prioritizing user security.
              </p>
            </div>
            
            <div className="mt-10">
              <a 
                href={blogArchiveUrl}
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25 active:scale-95"
              >
                Go to Blog!
              </a>
            </div>
          </div>
        </div>

        {/* Blog Preview Section */}
        <div className="pt-12 border-t border-slate-100">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Check our last Blog entries!</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post, idx) => (
              <div key={idx} className="flex flex-col bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video w-full overflow-hidden">
                  <a href={post.url}>
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </a>
                </div>
                <div className="p-6 flex flex-grow flex-col">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight hover:text-blue-600 transition-colors">
                    <a href={post.url}>{post.title}</a>
                  </h3>
                  <p className="text-sm text-blue-600 font-medium mb-4">by {post.author}</p>
                  <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                    {post.excerpt}
                    <a href={post.url} className="text-blue-600 font-bold hover:underline ml-1">Read more</a>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <a 
              href={blogArchiveUrl}
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25 active:scale-95"
            >
              Go to Blog!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;