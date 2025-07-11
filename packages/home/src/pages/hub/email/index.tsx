import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';

function EmailHub() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const emailCategories = [
    {
      title: "Business Communication",
      description: "Professional email templates for everyday business needs",
      icon: "💼",
      color: "primary",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      templates: [
        { name: "How to Write a Business Email", url: "/hub/email/how-to-write-a-business-email", desc: "Complete guide with 30+ professional business email templates" },
        { name: "Formal Email Templates", url: "/hub/email/formal-email", desc: "30+ formal email templates for executive and official communications" },
        { name: "Approval Email Templates", url: "/hub/email/approval-email", desc: "25+ templates for approving requests, budgets, and proposals" },
        { name: "Confirmation Email Templates", url: "/hub/email/confirmation-email", desc: "Professional confirmation emails for meetings, orders, and appointments" },
        { name: "Reminder Email Templates", url: "/hub/email/reminder-email", desc: "Effective reminder emails that get responses without being pushy" },
        { name: "CC and BCC Email Guide", url: "/hub/email/cc-and-bcc-in-email", desc: "Master the proper use of CC and BCC in professional emails" },
        { name: "Email Requesting Something", url: "/hub/email/how-to-write-an-email-requesting-something", desc: "Templates for making professional requests via email" },
        { name: "Reply to Boss Email", url: "/hub/email/reply-to-email-from-boss", desc: "Professional templates for responding to your manager" }
      ]
    },
    {
      title: "Networking & Outreach",
      description: "Build relationships and expand your professional network",
      icon: "🤝",
      color: "success",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      templates: [
        { name: "Cold Email Templates", url: "/hub/email/how-to-write-a-cold-email", desc: "30+ cold email templates that get responses for sales and networking" },
        { name: "Introduction Email Templates", url: "/hub/email/introduction-email", desc: "30+ professional introduction emails for networking and business" },
        { name: "Follow-Up Email Templates", url: "/hub/email/follow-up-email", desc: "30+ follow-up email templates for meetings, proposals, and networking" },
        { name: "Invitation Email Templates", url: "/hub/email/invitation-email", desc: "30+ professional invitation templates for events and meetings" },
        { name: "Decline Invitation Politely", url: "/hub/email/how-to-politely-decline-an-invitation", desc: "25+ ways to politely decline invitations while maintaining relationships" },
        { name: "Asking for Feedback", url: "/hub/email/asking-for-feedback-email", desc: "30+ templates for requesting feedback on projects and performance" }
      ]
    },
    {
      title: "Job & Career",
      description: "Email templates for job searching and career advancement",
      icon: "📈",
      color: "warning",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      templates: [
        { name: "Resume Email Templates", url: "/hub/email/resume-email", desc: "Professional emails for sending your resume and cover letter" },
        { name: "Interview Follow-Up", url: "/hub/email/follow-up-email-after-interview", desc: "Follow-up emails after job interviews that leave lasting impressions" },
        { name: "Salary Negotiation Emails", url: "/hub/email/salary-negotiation-email", desc: "Professional templates for negotiating salary and compensation" },
        { name: "Ask for a Raise", url: "/hub/email/how-to-ask-for-a-raise-email", desc: "Strategic emails for requesting salary increases and promotions" },
        { name: "Ask for Reference", url: "/hub/email/how-to-ask-for-reference", desc: "Professional templates for requesting job references" },
        { name: "Turn Down Job Offer", url: "/hub/email/how-to-turn-down-a-job-offer", desc: "Graceful ways to decline job offers while maintaining relationships" },
        { name: "Candidate Rejection", url: "/hub/email/candidate-rejection-email", desc: "25+ professional templates for rejecting job candidates respectfully" },
        { name: "Internship Emails", url: "/hub/email/internship-email", desc: "Email templates for internship applications and communications" },
        { name: "Vacation Request", url: "/hub/email/vacation-request-email", desc: "Professional templates for requesting time off and vacation" }
      ]
    },
    {
      title: "Thank You Letters",
      description: "Express gratitude professionally in various situations",
      icon: "🙏",
      color: "info",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      templates: [
        { name: "Business Thank You Letters", url: "/hub/email/business-thank-you-letter", desc: "Professional thank you emails for business relationships" },
        { name: "Interview Thank You", url: "/hub/email/teacher-interview-thank-you-email", desc: "Thank you emails after teacher and professional interviews" },
        { name: "Resume Thank You", url: "/hub/email/resume-thank-you-letter", desc: "Follow-up thank you emails after submitting applications" },
        { name: "Project Completion Thank You", url: "/hub/email/thank-you-letter-for-project-completion", desc: "Thank team members and stakeholders after successful projects" },
        { name: "Salary Increase Thank You", url: "/hub/email/thank-you-for-salary-increase-emails", desc: "Professional responses to salary increases and promotions" },
        { name: "Job Offer Acceptance", url: "/hub/email/thank-you-letter-to-accept-job-offer", desc: "Thank you emails when accepting job offers" },
        { name: "Meeting Thank You", url: "/hub/email/thank-you-letter-for-the-meeting-appointment", desc: "Follow-up thank you emails after important meetings" },
        { name: "Service Thank You", url: "/hub/email/thank-you-letter-for-the-service-provided", desc: "Thank you letters for excellent service and support" },
        { name: "Donation Thank You", url: "/hub/email/thank-you-letter-for-donation", desc: "Professional thank you letters for donations and contributions" },
        { name: "Participation Thank You", url: "/hub/email/thank-you-letter-for-participation", desc: "Thank you emails for event and program participation" },
        { name: "Sponsor Thank You", url: "/hub/email/thank-you-letter-to-the-sponsor", desc: "Professional thank you letters to sponsors and supporters" },
        { name: "Contract End Thank You", url: "/hub/email/end-of-contract-thank-you-letter", desc: "Thank you letters at the end of contracts and partnerships" },
        { name: "Resignation Thank You", url: "/hub/email/thank-you-resignation-letter", desc: "Graceful thank you letters when resigning from positions" },
        { name: "Invitation Thank You", url: "/hub/email/invitation-thank-you-letter", desc: "Thank you responses to invitations and events" }
      ]
    },
    {
      title: "Customer Service",
      description: "Templates for customer communications and responses",
      icon: "💬",
      color: "secondary",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      templates: [
        { name: "Thank You for Inquiry", url: "/hub/email/thank-you-for-inquiry-email-templates", desc: "Professional responses to customer inquiries and questions" },
        { name: "Thank You for Order", url: "/hub/email/thank-you-for-your-order-email-templates", desc: "Order confirmation and thank you email templates" },
        { name: "Thank You for Feedback", url: "/hub/email/thank-you-for-feedback-email-templates", desc: "Professional responses to customer feedback and reviews" },
        { name: "Prompt Response Thanks", url: "/hub/email/thank-you-for-your-prompt-response-email-templates", desc: "Thank customers for quick responses and cooperation" },
        { name: "Confirmation Thanks", url: "/hub/email/thank-you-for-confirming-email-templates", desc: "Thank you emails for confirmations and appointments" },
        { name: "Delay Apology", url: "/hub/email/we-apologize-for-the-delay-email-templates", desc: "Professional apology emails for delays and inconveniences" },
        { name: "Get Back to You", url: "/hub/email/i-will-get-back-to-you-email-templates", desc: "Professional holding emails when you need more time" },
        { name: "Reply to Thank You", url: "/hub/email/reply-to-thank-you-email", desc: "How to respond professionally to thank you emails" }
      ]
    },
    {
      title: "Special Occasions",
      description: "Email templates for holidays and special events",
      icon: "🎉",
      color: "danger",
      gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
      templates: [
        { name: "Women's Day Emails", url: "/hub/email/womens-day-email-to-employees", desc: "Professional Women's Day emails for employees and colleagues" },
        { name: "Holiday Letters from Santa", url: "/hub/email/thank-you-letter-from-santa", desc: "Fun holiday thank you letters from Santa for children" },
        { name: "Thank You Letter to Mom", url: "/hub/email/thank-you-letter-to-mom", desc: "Heartfelt thank you letters for mothers and family" }
      ]
    }
  ];

  // Filter templates based on search and category
  const filteredCategories = emailCategories.map(category => ({
    ...category,
    templates: category.templates.filter(template => 
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.desc.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => 
    selectedCategory === 'all' || 
    category.title.toLowerCase().replace(/\s+/g, '-') === selectedCategory ||
    (searchTerm && category.templates.length > 0)
  );

  const totalTemplates = emailCategories.reduce((total, category) => total + category.templates.length, 0);

  return (
    <Layout
      title="Professional Email Templates Hub - 46+ Free Email Templates | Cuckoo"
      description="Access 46+ professional email templates for business communication, networking, job applications, thank you letters, and more. Free templates with expert writing tips and AI assistance.">
      <Head>
        <meta property="og:title" content="Professional Email Templates Hub - 46+ Free Email Templates | Cuckoo" />
        <meta property="og:description" content="Access 46+ professional email templates for business communication, networking, job applications, thank you letters, and more. Free templates with expert writing tips and AI assistance." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://cuckoo.network/img/og-email-templates.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Email Templates Hub - 46+ Free Email Templates" />
        <meta name="twitter:description" content="Master professional email writing with our comprehensive collection of templates, tips, and AI assistance." />
        <meta name="keywords" content="email templates, business emails, professional email writing, cold emails, thank you letters, job application emails, networking emails, formal emails" />
        <link rel="canonical" href="https://cuckoo.network/hub/email" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Professional Email Templates Hub",
            "description": "Comprehensive collection of 46+ professional email templates for business communication, networking, job applications, and more.",
            "url": "https://cuckoo.network/hub/email",
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": 46,
              "itemListElement": emailCategories.flatMap((category, categoryIndex) => 
                category.templates.map((template, templateIndex) => ({
                  "@type": "ListItem",
                  "position": categoryIndex * 10 + templateIndex + 1,
                  "item": {
                    "@type": "Article",
                    "name": template.name,
                    "description": template.desc,
                    "url": `https://cuckoo.network${template.url}`
                  }
                }))
              )
            },
            "provider": {
              "@type": "Organization",
              "name": "Cuckoo Network",
              "url": "https://cuckoo.network"
            }
          })}
        </script>
        <style>{`
          .email-hub-hero {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 4rem 0 6rem;
            position: relative;
            overflow: hidden;
          }
          
          .email-hub-hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20"><defs><radialGradient id="a" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="rgba(255,255,255,.1)"/><stop offset="100%" stop-color="rgba(255,255,255,0)"/></radialGradient></defs><circle cx="50" cy="10" r="10" fill="url(%23a)"/></svg>') center/80px 16px;
            opacity: 0.1;
          }

          .stats-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 16px;
            padding: 1.5rem;
            text-align: center;
            transition: all 0.3s ease;
          }

          .stats-card:hover {
            transform: translateY(-4px);
            background: rgba(255, 255, 255, 0.15);
          }

          .stats-number {
            font-size: 2.5rem;
            font-weight: bold;
            color: #fff;
            margin-bottom: 0.5rem;
          }

          .stats-label {
            color: rgba(255, 255, 255, 0.9);
            font-size: 0.9rem;
          }

          .feature-card {
            background: white;
            border-radius: 16px;
            padding: 2rem;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            height: 100%;
            border: 1px solid rgba(0, 0, 0, 0.05);
          }

          .feature-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 8px 40px rgba(0, 0, 0, 0.15);
          }

          .category-card {
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            border: none;
          }

          .category-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15);
          }

          .category-header {
            background: var(--gradient);
            color: white;
            padding: 2rem;
            position: relative;
            overflow: hidden;
          }

          .category-header::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -20%;
            width: 100px;
            height: 100px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
          }

          .template-card {
            background: white;
            border-radius: 12px;
            padding: 1.5rem;
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
            transition: all 0.3s ease;
            border: 1px solid rgba(0, 0, 0, 0.05);
            height: 100%;
          }

          .template-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
          }

          .search-container {
            background: white;
            border-radius: 16px;
            padding: 2rem;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            margin-top: -3rem;
            position: relative;
            z-index: 10;
          }

          .search-input {
            border: 2px solid #e0e6ed;
            border-radius: 12px;
            padding: 1rem 1.5rem;
            font-size: 1.1rem;
            width: 100%;
            transition: all 0.3s ease;
          }

          .search-input:focus {
            border-color: #667eea;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
            outline: none;
          }

          .category-filter {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
            margin-top: 1rem;
          }

          .filter-btn {
            padding: 0.5rem 1rem;
            border: 2px solid #e0e6ed;
            border-radius: 8px;
            background: white;
            color: #666;
            font-size: 0.9rem;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .filter-btn:hover, .filter-btn.active {
            border-color: #667eea;
            background: #667eea;
            color: white;
          }

          .fade-in {
            animation: fadeIn 0.6s ease-out;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .gradient-text {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
        `}</style>
      </Head>
      
      <div className="email-hub-hero">
        <div className="container">
          <div className="row">
            <div className="col col--8 col--offset-2 text--center">
              <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                Professional Email Templates Hub
              </h1>
              <p style={{ fontSize: '1.3rem', opacity: 0.9, marginBottom: '2rem', lineHeight: 1.6 }}>
                Master email communication with {totalTemplates}+ professionally crafted templates, expert writing tips, and AI assistance. 
                From cold outreach to thank you letters, we've got every email scenario covered.
              </p>
              
              {/* Stats Section */}
              <div className="row margin-bottom--xl">
                <div className="col col--4">
                  <div className="stats-card">
                    <div className="stats-number">{totalTemplates}+</div>
                    <div className="stats-label">Email Templates</div>
                  </div>
                </div>
                <div className="col col--4">
                  <div className="stats-card">
                    <div className="stats-number">6</div>
                    <div className="stats-label">Categories</div>
                  </div>
                </div>
                <div className="col col--4">
                  <div className="stats-card">
                    <div className="stats-number">100%</div>
                    <div className="stats-label">Free</div>
                  </div>
                </div>
              </div>

              <div className="margin-top--lg">
                <Link
                  className="button button--secondary button--lg margin-right--md"
                  to="#search"
                  style={{ borderRadius: '12px', padding: '1rem 2rem' }}>
                  Browse Templates
                </Link>
                <Link
                  className="button button--outline button--lg"
                  to="https://cuckoo.network/chat/cuckoo-gpt?startingPrompt=help%20me%20write%20a%20professional%20email"
                  style={{ borderRadius: '12px', padding: '1rem 2rem', borderColor: 'white', color: 'white' }}>
                  Get AI Writing Help
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <section id="search" className="margin-vert--lg">
        <div className="container">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <div className="search-container">
                <h3 className="text--center margin-bottom--md">Find the Perfect Email Template</h3>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search templates by name or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="category-filter">
                  <button 
                    className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                    onClick={() => setSelectedCategory('all')}
                  >
                    All Categories
                  </button>
                  {emailCategories.map((category) => (
                    <button
                      key={category.title}
                      className={`filter-btn ${selectedCategory === category.title.toLowerCase().replace(/\s+/g, '-') ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(category.title.toLowerCase().replace(/\s+/g, '-'))}
                    >
                      {category.icon} {category.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container margin-vert--xl">
        <div className="row">
          <div className="col col--12">
            <div className="text--center margin-bottom--xl">
              <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                Why Our Email Templates Work
              </h2>
              <p className="lead" style={{ fontSize: '1.2rem', color: '#666' }}>
                Based on proven communication principles and tested with thousands of professionals
              </p>
            </div>
            
            <div className="row">
              <div className="col col--3 text--center margin-bottom--lg">
                <div className="feature-card">
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯</div>
                  <h3 style={{ marginBottom: '1rem', color: '#333' }}>Purpose-Built</h3>
                  <p style={{ color: '#666', lineHeight: 1.6 }}>
                    Each template is crafted for specific situations with clear objectives and proven structures.
                  </p>
                </div>
              </div>
              
              <div className="col col--3 text--center margin-bottom--lg">
                <div className="feature-card">
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤖</div>
                  <h3 style={{ marginBottom: '1rem', color: '#333' }}>AI-Enhanced</h3>
                  <p style={{ color: '#666', lineHeight: 1.6 }}>
                    Get personalized assistance and real-time suggestions with integrated AI writing support.
                  </p>
                </div>
              </div>
              
              <div className="col col--3 text--center margin-bottom--lg">
                <div className="feature-card">
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📊</div>
                  <h3 style={{ marginBottom: '1rem', color: '#333' }}>Results-Driven</h3>
                  <p style={{ color: '#666', lineHeight: 1.6 }}>
                    Templates optimized for response rates, relationship building, and professional success.
                  </p>
                </div>
              </div>
              
              <div className="col col--3 text--center margin-bottom--lg">
                <div className="feature-card">
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                  <h3 style={{ marginBottom: '1rem', color: '#333' }}>Expert-Approved</h3>
                  <p style={{ color: '#666', lineHeight: 1.6 }}>
                    Reviewed by communication professionals and continuously updated based on best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="templates" className="margin-vert--xl">
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <div className="text--center margin-bottom--xl">
                <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                  Complete Email Template Collection
                </h2>
                <p className="lead" style={{ fontSize: '1.2rem', color: '#666' }}>
                  {totalTemplates}+ professional templates organized by category for every business communication need
                </p>
              </div>

              {filteredCategories.map((category, index) => (
                <div key={index} className="margin-bottom--xl fade-in">
                  <div className="category-card" style={{ '--gradient': category.gradient }}>
                    <div className="category-header" style={{ background: category.gradient }}>
                      <div className="row align-items-center">
                        <div className="col">
                          <h3 style={{ margin: 0, fontSize: '1.8rem', display: 'flex', alignItems: 'center' }}>
                            <span style={{ fontSize: '2rem', marginRight: '1rem' }}>{category.icon}</span>
                            {category.title}
                          </h3>
                          <p style={{ margin: '0.5rem 0 0 0', opacity: 0.9, fontSize: '1.1rem' }}>
                            {category.description}
                          </p>
                        </div>
                        <div className="col col--auto">
                          <div style={{ 
                            background: 'rgba(255, 255, 255, 0.2)', 
                            borderRadius: '12px', 
                            padding: '0.5rem 1rem',
                            fontSize: '0.9rem',
                            fontWeight: 'bold'
                          }}>
                            {category.templates.length} Templates
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style={{ padding: '2rem' }}>
                      <div className="row">
                        {category.templates.map((template, templateIndex) => (
                          <div key={templateIndex} className="col col--6 margin-bottom--md">
                            <div className="template-card">
                              <h4 style={{ marginBottom: '1rem', color: '#333' }}>
                                <Link 
                                  to={template.url} 
                                  style={{ 
                                    textDecoration: 'none', 
                                    color: 'inherit',
                                    transition: 'color 0.3s ease'
                                  }}
                                  onMouseEnter={(e) => e.target.style.color = '#667eea'}
                                  onMouseLeave={(e) => e.target.style.color = '#333'}
                                >
                                  {template.name}
                                </Link>
                              </h4>
                              <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                                {template.desc}
                              </p>
                              <Link 
                                to={template.url}
                                className="button button--primary button--sm"
                                style={{ 
                                  borderRadius: '8px',
                                  background: category.gradient,
                                  border: 'none',
                                  fontSize: '0.9rem',
                                  padding: '0.6rem 1.2rem'
                                }}>
                                View Templates →
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {filteredCategories.length === 0 && (
                <div className="text--center" style={{ padding: '4rem 2rem' }}>
                  <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📧</div>
                  <h3 style={{ color: '#666', marginBottom: '1rem' }}>No templates found</h3>
                  <p style={{ color: '#999' }}>
                    Try adjusting your search terms or selecting a different category.
                  </p>
                  <button 
                    className="button button--primary"
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                    }}
                    style={{ marginTop: '1rem' }}
                  >
                    Show All Templates
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section 
        style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '4rem 0',
          borderRadius: '24px',
          margin: '4rem 0',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-10%',
          width: '300px',
          height: '300px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-30%',
          left: '-5%',
          width: '200px',
          height: '200px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '50%'
        }}></div>
        <div className="container">
          <div className="row">
            <div className="col col--8 col--offset-2 text--center">
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>
                Get Personalized Email Writing Help
              </h2>
              <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '2rem', lineHeight: 1.6 }}>
                Need help crafting the perfect email? Our AI assistant can help you write, edit, and optimize any email for maximum impact.
              </p>
              <div className="margin-top--lg">
                <Link
                  className="button button--secondary button--lg margin-right--md"
                  to="https://cuckoo.network/chat/cuckoo-gpt?startingPrompt=help%20me%20write%20a%20professional%20email"
                  style={{ 
                    borderRadius: '12px', 
                    padding: '1rem 2rem',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    background: 'white',
                    color: '#667eea'
                  }}>
                  🤖 Start Writing with AI
                </Link>
                <Link
                  className="button button--outline button--lg"
                  to="https://cuckoo.network/chat/cuckoo-gpt?startingPrompt=review%20and%20improve%20my%20email%20draft"
                  style={{ 
                    borderRadius: '12px', 
                    padding: '1rem 2rem',
                    fontSize: '1.1rem',
                    borderColor: 'white',
                    color: 'white'
                  }}>
                  ✨ Review My Email
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="margin-vert--xl">
        <div className="container">
          <div className="row">
            <div className="col col--10 col--offset-1">
              <div className="text--center margin-bottom--xl">
                <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                  Email Writing Best Practices
                </h2>
                <p style={{ fontSize: '1.2rem', color: '#666' }}>
                  Master these fundamentals for professional email success
                </p>
              </div>

              <div className="row">
                <div className="col col--6">
                  <div className="feature-card" style={{ height: 'auto' }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✅</div>
                    <h3 style={{ color: '#333', marginBottom: '1.5rem' }}>Essential Elements</h3>
                    <ul style={{ color: '#666', lineHeight: 1.8, fontSize: '1rem' }}>
                      <li style={{ marginBottom: '0.8rem' }}>
                        <strong style={{ color: '#333' }}>Clear Subject Lines:</strong> Make your purpose immediately obvious
                      </li>
                      <li style={{ marginBottom: '0.8rem' }}>
                        <strong style={{ color: '#333' }}>Professional Greeting:</strong> Use appropriate salutations for your audience
                      </li>
                      <li style={{ marginBottom: '0.8rem' }}>
                        <strong style={{ color: '#333' }}>Concise Content:</strong> Respect your reader's time with focused messaging
                      </li>
                      <li style={{ marginBottom: '0.8rem' }}>
                        <strong style={{ color: '#333' }}>Clear Call-to-Action:</strong> Specify exactly what you need from the recipient
                      </li>
                      <li style={{ marginBottom: '0.8rem' }}>
                        <strong style={{ color: '#333' }}>Professional Closing:</strong> End with appropriate sign-offs and contact info
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col col--6">
                  <div className="feature-card" style={{ height: 'auto' }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>❌</div>
                    <h3 style={{ color: '#333', marginBottom: '1.5rem' }}>Common Mistakes to Avoid</h3>
                    <ul style={{ color: '#666', lineHeight: 1.8, fontSize: '1rem' }}>
                      <li style={{ marginBottom: '0.8rem' }}>
                        <strong style={{ color: '#333' }}>Generic Templates:</strong> Always personalize your emails
                      </li>
                      <li style={{ marginBottom: '0.8rem' }}>
                        <strong style={{ color: '#333' }}>Too Much Information:</strong> Keep emails focused and scannable
                      </li>
                      <li style={{ marginBottom: '0.8rem' }}>
                        <strong style={{ color: '#333' }}>Unclear Purpose:</strong> State your objective upfront
                      </li>
                      <li style={{ marginBottom: '0.8rem' }}>
                        <strong style={{ color: '#333' }}>Poor Timing:</strong> Consider when your email will be received
                      </li>
                      <li style={{ marginBottom: '0.8rem' }}>
                        <strong style={{ color: '#333' }}>No Follow-up:</strong> Plan your follow-up strategy in advance
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="margin-top--xl text--center">
                <Link
                  to="/hub/email/how-to-write-a-business-email"
                  className="button button--primary button--lg"
                  style={{ 
                    borderRadius: '12px',
                    padding: '1rem 2.5rem',
                    fontSize: '1.1rem',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    border: 'none'
                  }}>
                  📚 Learn Complete Email Writing Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="margin-vert--xl" style={{ background: '#f8f9fa', padding: '4rem 0', borderRadius: '24px' }}>
        <div className="container">
          <div className="row">
            <div className="col col--10 col--offset-1">
              <div className="text--center margin-bottom--xl">
                <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                  Frequently Asked Questions
                </h2>
                <p style={{ fontSize: '1.2rem', color: '#666' }}>
                  Everything you need to know about our email templates
                </p>
              </div>
              
              <div className="row margin-top--lg">
                <div className="col col--6">
                  <div className="feature-card" style={{ marginBottom: '2rem', height: '220px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    <h4 style={{ color: '#333', marginBottom: '0.8rem', fontSize: '1.2rem', marginTop: 0 }}>
                      💰 Are these email templates really free?
                    </h4>
                    <p style={{ color: '#666', lineHeight: 1.5, flex: 1, margin: 0, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical' }}>
                      Yes! All {totalTemplates}+ email templates are completely free to use. Copy, customize, and use them for personal or business purposes.
                    </p>
                  </div>

                  <div className="feature-card" style={{ marginBottom: '2rem', height: '220px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    <h4 style={{ color: '#333', marginBottom: '0.8rem', fontSize: '1.2rem', marginTop: 0 }}>
                      ✏️ Can I customize these templates?
                    </h4>
                    <p style={{ color: '#666', lineHeight: 1.5, flex: 1, margin: 0, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical' }}>
                      Absolutely! These templates are starting points. Customize them with your specific details, company information, and personal tone.
                    </p>
                  </div>

                  <div className="feature-card" style={{ height: '220px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    <h4 style={{ color: '#333', marginBottom: '0.8rem', fontSize: '1.2rem', marginTop: 0 }}>
                      🤖 Do you offer email writing assistance?
                    </h4>
                    <p style={{ color: '#666', lineHeight: 1.5, flex: 1, margin: 0, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical' }}>
                      Yes! Each template page includes integrated AI assistance to help you personalize and optimize your emails for better results.
                    </p>
                  </div>
                </div>

                <div className="col col--6">
                  <div className="feature-card" style={{ marginBottom: '2rem', height: '220px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    <h4 style={{ color: '#333', marginBottom: '0.8rem', fontSize: '1.2rem', marginTop: 0 }}>
                      🎯 Which email template should I use?
                    </h4>
                    <p style={{ color: '#666', lineHeight: 1.5, flex: 1, margin: 0, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical' }}>
                      Browse our categories above to find templates that match your situation. Each template includes guidance on when and how to use it effectively.
                    </p>
                  </div>

                  <div className="feature-card" style={{ marginBottom: '2rem', height: '220px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    <h4 style={{ color: '#333', marginBottom: '0.8rem', fontSize: '1.2rem', marginTop: 0 }}>
                      🔄 How often are templates updated?
                    </h4>
                    <p style={{ color: '#666', lineHeight: 1.5, flex: 1, margin: 0, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical' }}>
                      We regularly review and update our templates based on best practices, user feedback, and communication trends.
                    </p>
                  </div>

                  <div className="feature-card" style={{ height: '220px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    <h4 style={{ color: '#333', marginBottom: '0.8rem', fontSize: '1.2rem', marginTop: 0 }}>
                      💡 Can I suggest new template ideas?
                    </h4>
                    <p style={{ color: '#666', lineHeight: 1.5, flex: 1, margin: 0, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical' }}>
                      We'd love to hear from you! Contact us with suggestions for new templates or improvements to existing ones.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default EmailHub;