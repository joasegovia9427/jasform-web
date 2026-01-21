import React, { useState } from 'react';

const Documentation: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState<'index' | string>('index');

  const sidebarItems = [
    { id: 'intro', name: 'Introduction', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { id: 'requirements', name: 'Requirements', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-7.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
    { id: 'quickstart', name: 'Quickstart guide', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { id: 'features', name: 'Features', icon: 'M4 6h16M4 10h16M4 14h16M4 18h16' },
    { id: 'forms', name: 'Forms', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
    { id: 'users', name: 'Users', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197' },
    { id: 'security', name: 'Security', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
    { id: 'faq', name: 'FAQ', icon: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { id: 'glossary', name: 'Glossary', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
    { id: 'contact-docs', name: 'Contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  ];

  const renderActiveContent = () => {
    switch (activeSection) {
      case 'intro':
        return (
          <article className="max-w-none prose prose-slate">
            <h1 className="text-4xl font-bold text-slate-900 mb-8">Introduction</h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Welcome to the user manual for the JASForm Dynamic Forms System, an advanced platform designed to simplify the creation and management of dynamic forms.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              This manual aims to provide a comprehensive guide for the effective use of the JASForm Dynamic Forms System, ensuring that users can maximize the benefits offered by the platform.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              It is intended for system administrators, end users, and IT personnel who seek to efficiently integrate and manage dynamic forms for a variety of applications.
            </p>
          </article>
        );
      case 'requirements':
        return (
          <article className="max-w-none prose prose-slate">
            <h1 className="text-4xl font-bold text-slate-900 mb-8">Minimum Requirements</h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              While JASForm is an online platform for managing dynamic forms and does not have the same specific requirements as a local system, for a proper user experience, it is recommended to use the system with the following minimum specifications:
            </p>
            <ul className="space-y-4 text-slate-600 list-none pl-0">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">●</span>
                <span><strong>Operating System:</strong> Windows 10, Linux Ubuntu 20.04 LTS, or macOS 11 Big Sur.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">●</span>
                <span><strong>Processor:</strong> Intel Core i3 or equivalent.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">●</span>
                <span><strong>RAM:</strong> 4 GB.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">●</span>
                <span><strong>Connectivity:</strong> Internet access.</span>
              </li>
            </ul>
            <p className="mt-8 text-slate-500 italic border-l-4 border-blue-100 pl-4">
              The reason for these specifications is that the system was tested with these requirements, and the JASForm team cannot guarantee proper functioning of the platform if used with fewer resources.
            </p>
          </article>
        );
      case 'quickstart':
        return (
          <article className="max-w-none prose prose-slate">
            <h1 className="text-4xl font-bold text-slate-900 mb-8">Quick Start</h1>
            <p className="text-lg text-slate-600 mb-6">For a quick start, you can follow these steps:</p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">1</span>
                <p className="text-slate-700 font-medium">Log in to your account.</p>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 space-y-4">
                <h4 className="font-bold text-slate-800">User & Profile</h4>
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                  <li>Go to the <strong>“View Profile”</strong> section to see logged-in user information.</li>
                  <li>Visit the <strong>“My Dashboard”</strong> section (automatic upon login) to view statistics.</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 space-y-4">
                <h4 className="font-bold text-slate-800">Form Management</h4>
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                  <li>Go to <strong>“My Forms”</strong> to view existing forms.</li>
                  <li>Select <strong>“Create Form”</strong> in the same section to design a new one.</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 space-y-4">
                <h4 className="font-bold text-slate-800">Administration (Admins only)</h4>
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                  <li>Navigate to <strong>“System’s Users”</strong> to view the user directory.</li>
                  <li>Select <strong>“Create User”</strong> to add new members to the system.</li>
                </ul>
              </div>
            </div>
            <p className="mt-8 text-blue-600 font-medium">
              For more detailed information on these tasks, see the “Features” section below.
            </p>
          </article>
        );
      case 'features':
        return (
          <article className="max-w-none prose prose-slate">
            <h1 className="text-4xl font-bold text-slate-900 mb-8">Functionalities</h1>
            <p className="text-lg text-slate-600 mb-8">The core system functionalities are described below.</p>
            
            <div className="space-y-12">
              <section>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">1. Login</h3>
                <p>When accessing the JASForm application website, you are asked for your system login credentials: <strong>"Email"</strong> and <strong>"Password."</strong></p>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 my-4">
                  <p className="text-sm text-blue-800 font-medium">Security Note:</p>
                  <p className="text-sm text-blue-700">Characters in the password field are hidden by default. Use the eye icon to toggle visibility. For security, generic error messages are used (e.g., "Invalid email or password") to prevent account enumeration.</p>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">2. Sidebar</h3>
                <p>Once logged in, the user panel and a sidebar with system options will be visible.</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                  <li><strong>My Dashboard:</strong> Statistical information and recent activities.</li>
                  <li><strong>My Forms:</strong> Manage your personal form collection.</li>
                  <li><strong>System’s Users (Admin only):</strong> Manage system-wide user accounts.</li>
                  <li><strong>System’s Forms (Admin only):</strong> View every form in the environment.</li>
                  <li><strong>View Profile:</strong> Personal information management.</li>
                  <li><strong>Log out:</strong> Ends the current session after confirmation.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">3. User Panel (Dashboard)</h3>
                <p>This is the default section upon logging in. Here you can find high-level information including:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                  <li>Total number of forms created.</li>
                  <li>Number of form instances and submissions.</li>
                  <li>User demographic and completion statistics.</li>
                  <li>Recently active forms and quick profile summary.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">4. Interoperability</h3>
                <p>When creating a form, you can configure an <strong>API URL</strong> parameter. When a respondent completes the form, JASForm will send the collected data to this endpoint in real-time for external processing.</p>
              </section>
            </div>
          </article>
        );
      case 'forms':
        return (
          <article className="max-w-none prose prose-slate">
            <h1 className="text-4xl font-bold text-slate-900 mb-8">Forms Management</h1>
            <p className="text-lg text-slate-600 mb-10">This section describes the tasks related to system forms.</p>

            <div className="space-y-16">
              <section>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">1. Listing User-Created Forms</h3>
                <p>Go to the <strong>“My Forms”</strong> section in the sidebar to access the list of forms. Here you can find information about the form title, last modification date, number of questions, instances, and status.</p>
                <p className="mt-4">You can filter by form title, public access code, and display only active forms. The public access code is the code generated when the form is created, which identifies it and is used to access and complete it.</p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">2. Creating a New Form</h3>
                <p>Click the <strong>“Create Form”</strong> button in the <strong>“My Forms”</strong> section. You will be prompted to provide the following required and optional information:</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-4 uppercase text-xs tracking-widest">Required Fields</h4>
                    <ul className="space-y-3 text-slate-600 text-sm">
                      <li>● <strong>Name:</strong> The internal title for your form.</li>
                      <li>● <strong>Welcome Text:</strong> The message shown to users at the start.</li>
                      <li>● <strong>Description:</strong> A brief overview of the form's purpose.</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-4 uppercase text-xs tracking-widest">Branding & Logic</h4>
                    <ul className="space-y-3 text-slate-600 text-sm">
                      <li>● <strong>Logo URL:</strong> Custom branding for the form header.</li>
                      <li>● <strong>Primary/Secondary Colors:</strong> Custom theme settings.</li>
                      <li>● <strong>Border Radius:</strong> UI styling for input fields and containers.</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <p><strong>Advanced Configuration:</strong></p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-600">
                    <li><strong>Form’s Publish State:</strong> Toggle between active and inactive.</li>
                    <li><strong>Link Responses with user:</strong> Store the identity of the respondent.</li>
                    <li><strong>Initial data required:</strong> Force users to enter profile data before starting.</li>
                    <li><strong>API URL (callback):</strong> Endpoint for real-time data integration.</li>
                    <li><strong>HTML Head/Body:</strong> Optional custom code injection.</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">3. Managing an Existing Form</h3>
                <p>
                  In the form list, click the <strong>details icon ( <span className="inline-flex items-center justify-center w-5 h-5 bg-blue-100 text-blue-700 rounded-md font-bold text-xs mx-0.5 border border-blue-200">{">"}</span> )</strong> 
                  located next to the form row in your list to access its management options:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-slate-600 mt-4">
                  <li><strong>Edit Questions:</strong> Add, remove, or reorder form fields and logic.</li>
                  <li><strong>View form's instances:</strong> Access the database of completed submissions.</li>
                  <li><strong>View Preview:</strong> Test the user journey from the beginning.</li>
                  <li><strong>Public Link:</strong> Get the shareable URL for your audience.</li>
                  <li><strong>iFrame Code:</strong> Get the embeddable snippet for your website.</li>
                  <li><strong>Delete:</strong> Permanently remove the form and its data.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">4. Viewing Form Instances (Submissions)</h3>
                <p>Click <strong>“View form's instances”</strong> to see every completion. The dashboard provides:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                  <li>Respondent details (Name, Email, optional User Code).</li>
                  <li>Completion date and number of answered questions.</li>
                  <li><strong>API Response:</strong> Click the icon below the "API RESPONSE" column to view the raw JSON data sent to your callback URL.</li>
                </ul>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 my-4 text-sm text-blue-800 italic">
                  The user code refers to an optional code that can be used by an external system to associate a completing user with that system.
                </div>
              </section>
            </div>
          </article>
        );
      case 'users':
        return (
          <article className="max-w-none prose prose-slate">
            <h1 className="text-4xl font-bold text-slate-900 mb-8">Profile Management</h1>
            <p className="text-lg text-slate-600 mb-6">By accessing the “View Profile” option, you can view or modify the data of the currently logged-in user.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div>
                <h4 className="font-bold text-slate-800 mb-4 border-b pb-2">Personal Data</h4>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li><strong>First Name:</strong> Required.</li>
                  <li><strong>Last Name:</strong> Required.</li>
                  <li><strong>Email Address:</strong> Required.</li>
                  <li><strong>Photo URL:</strong> Profile picture link.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-4 border-b pb-2">Organizational Data</h4>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li><strong>Organization:</strong> Current workplace (Required).</li>
                  <li><strong>Position:</strong> Your current role.</li>
                  <li><strong>Change Password:</strong> Security management.</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-slate-50 p-6 rounded-xl">
              <h4 className="font-bold text-slate-800 mb-4">Summary Statistics</h4>
              <p className="text-slate-600 mb-4">The profile also displays your personal activity summary:</p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white px-4 py-2 rounded-lg border border-slate-200">Active Forms</div>
                <div className="bg-white px-4 py-2 rounded-lg border border-slate-200">Inactive Forms</div>
                <div className="bg-white px-4 py-2 rounded-lg border border-slate-200">Total Forms</div>
              </div>
            </div>
          </article>
        );
      default:
        return (
          <article className="max-w-none">
            <h1 className="text-5xl font-bold text-slate-900 mb-12">JASForm Documentation</h1>
            <h2 className="text-3xl font-bold text-slate-800 mb-8 border-b border-slate-100 pb-4">Articles</h2>
            <ul className="space-y-4">
              {sidebarItems.map((item) => (
                <li key={item.id} className="flex items-center gap-2 group">
                  <span className="text-slate-400">•</span>
                  <button 
                    onClick={() => setActiveSection(item.id)} 
                    className="text-lg text-blue-600 hover:text-blue-800 hover:underline transition-colors text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </article>
        );
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="md:w-72 shrink-0">
          <div className="sticky top-24">
            <button 
              onClick={() => setActiveSection('index')}
              className="text-2xl font-bold text-slate-800 mb-6 px-2 hover:text-blue-600 transition-colors w-full text-left"
            >
              JASForm
            </button>
            
            {/* Quick Search */}
            <div className="relative mb-8 group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Quick search..."
                className="block w-full pl-10 pr-12 py-2.5 border border-slate-200 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Nav Menu */}
            <nav className="space-y-1">
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-lg transition-all group ${
                    activeSection === item.id 
                      ? 'bg-blue-50 text-blue-700 shadow-sm' 
                      : 'text-slate-600 hover:text-blue-600 hover:bg-white'
                  }`}
                >
                  <svg className={`w-5 h-5 ${activeSection === item.id ? 'text-blue-600' : 'text-slate-400 group-hover:text-blue-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                  <span className="text-sm font-medium">{item.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-grow">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
            <button 
              onClick={() => { window.location.hash = ''; }}
              className="hover:text-blue-600 flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
              Home
            </button>
            <span>&gt;</span>
            <button onClick={() => setActiveSection('index')} className="hover:text-blue-600">Docs</button>
            {activeSection !== 'index' && (
              <>
                <span>&gt;</span>
                <span className="text-slate-800 font-medium">
                  {sidebarItems.find(i => i.id === activeSection)?.name}
                </span>
              </>
            )}
          </nav>

          {/* Article Container */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 min-h-[800px] p-8 md:p-16 relative">
            <button className="absolute top-8 right-8 text-slate-400 hover:text-slate-600" title="Print article">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
            </button>

            {renderActiveContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;