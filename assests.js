// Dummy blog data (replace with API or DB later)
export const blogsData = [
  {
    id: 1,
    metaTitle: "How AI is Transforming Digital Marketing",
    metaDescription:
      "Artificial Intelligence (AI) has revolutionized digital marketing by introducing smarter ways to analyze data, personalize content, and optimize ad campaigns.",
    title: "How AI is Transforming Digital Marketing",
    category: "AI",
    read: "3 min read",
    date: "March 5, 2025",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "AI in Digital Marketing",
    isFeatured: true,
    tldr: [
      "AI enables smarter data analysis for businesses.",
      "Personalization improves customer engagement.",
      "Chatbots & predictive analytics boost ROI.",
      "AI-driven SEO strategies are the future.",
      "Brands must embrace AI innovation to stay ahead.",
    ],
    toc: [
      { id: "intro", text: "Introduction" },
      { id: "ai-marketing", text: "AI in Digital Marketing" },
      { id: "future", text: "The Future of AI Marketing" },
      { id: "trends", text: "The trend of AI Marketing" },
    ],
    content: `
      <h2 id="intro">Introduction</h2>
      <p>Artificial Intelligence (AI) has revolutionized digital marketing by introducing smarter 
      ways to analyze data, personalize content, and optimize ad campaigns.</p>

      <h2 id="ai-marketing">AI in Digital Marketing</h2>
      <p>Businesses can now <a rel="nofollow" target="_blank" href="/ai/how-ai-is-transforming-digital-marketing" class="internal-link">leverage AI-powered</a> chatbots, predictive analytics, and 
      recommendation engines to enhance customer engagement and boost ROI.</p>

      <h2 id="future">The Future of AI Marketing</h2>
      <p>In the coming years, AI will play a crucial role in hyper-personalized 
      campaigns, automated SEO strategies, and real-time customer behavior tracking. 
      The future of digital marketing belongs to those who embrace AI-driven innovation.</p>

      <h2 id="trends">The trend of AI Marketing</h2>
      <p>In the coming years, AI will play a crucial role in hyper-personalized 
      campaigns, automated SEO strategies, and real-time customer behavior tracking. 
      The future of digital marketing belongs to those who embrace AI-driven innovation.</p>
    `,

    faq: [
      {
        question: "What is AI in Digital Marketing?",
        answer:
          "AI in digital marketing refers to the use of artificial intelligence to analyze data, personalize content, and optimize ad campaigns.",
      },
      {
        question: "How can AI help in Digital Marketing?",
        answer:
          "AI can help in digital marketing by enabling smarter data analysis, personalized content, and optimized ad campaigns.",
      },
    ],
    slug: "how-ai-is-transforming-digital-marketing",
  },

  {
    id: 2,
    title: "Top 5 Strategies for Web Performance Optimization",
    slug: "web-performance-optimization-strategies",
    metaTitle: "Top 5 Strategies for Web Performance Optimization",
    metaDescription:
      "Boosting your website’s speed improves UX and SEO. Discover top web performance strategies including lazy loading, CDN usage, and code minification.",
    category: "AI",
    read: "3 min read",
    date: "April 10, 2025",
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Website speed dashboard",
    isFeatured: false,
    tldr: [
      "Optimize images for faster load times.",
      "Use a Content Delivery Network (CDN).",
      "Minify CSS, JavaScript, and HTML.",
      "Implement lazy loading for assets.",
      "Audit performance with Lighthouse.",
    ],
    toc: [
      { id: "intro", text: "Introduction" },
      { id: "importance", text: "Why Performance Matters" },
      { id: "strategies", text: "Top Optimization Strategies" },
      { id: "tools", text: "Tools You Should Use" },
    ],
    content: `
    <h2 id="intro">Introduction</h2>
    <p>A fast website is essential for providing a good user experience and ranking well in search engines.</p>

    <h2 id="importance">Why Performance Matters</h2>
    <p>Slow websites lose visitors and conversions. Every second of delay can reduce user satisfaction and increase bounce rates.</p>

    <h2 id="strategies">Top Optimization Strategies</h2>
    <p>Use image compression tools, minify code, implement caching, and use CDNs to deliver content faster across regions.</p>

    <h2 id="tools">Tools You Should Use</h2>
    <p>Google Lighthouse, PageSpeed Insights, and WebPageTest help identify performance bottlenecks and give actionable insights.</p>
  `,
    faq: [
      {
        question: "What tools help measure web performance?",
        answer: `<a rel="nofollow" target="_blank" href="https://developers.google.com/web/tools/lighthouse/overview" class="internal-link">Google Lighthouse</a>, GTmetrix, and PageSpeed Insights are great tools to analyze and optimize site performance.`,
      },
      {
        question: "Does performance affect SEO?",
        answer:
          "Yes, Google uses page speed as a ranking factor, especially for mobile-first indexing.",
      },
    ],
  },

  {
    id: 3,
    metaTitle: "Cybersecurity Basics Every Business Should Know",
    metaDescription:
      "Protect your data and infrastructure with these cybersecurity fundamentals including firewalls, strong passwords, and employee training.",
    title: "Cybersecurity Basics Every Business Should Know",
    category: "Tech",
    read: "4 min read",
    date: "May 22, 2025",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Cybersecurity lock and code",
    isFeatured: true,
    tldr: [
      "Use strong, unique passwords and MFA.",
      "Keep software and OS updated.",
      "Train employees on phishing risks.",
      "Implement robust firewalls and antivirus tools.",
      "Back up data regularly and securely.",
    ],
    toc: [
      { id: "intro", text: "Introduction" },
      { id: "threats", text: "Common Threats" },
      { id: "best-practices", text: "Best Practices" },
      { id: "conclusion", text: "Final Thoughts" },
    ],
    content: `
    <h2 id="intro">Introduction</h2>
    <p>Cybersecurity is essential in protecting both personal and business data from digital threats.</p>

    <h2 id="threats">Common Threats</h2>
    <p>Phishing, malware, ransomware, and DDoS attacks are among the most prevalent cyber threats today.</p>

    <h2 id="best-practices">Best Practices</h2>
    <p>Secure systems with regular updates, use strong authentication, and ensure regular employee training to recognize threats.</p>

    <h2 id="conclusion">Final Thoughts</h2>
    <p>Cybersecurity should be an ongoing effort. Being proactive and aware can save your business from catastrophic losses.</p>
  `,
    faq: [
      {
        question: "What is the first step in improving cybersecurity?",
        answer:
          "Start with a risk assessment to identify weak spots in your infrastructure.",
      },
      {
        question: "How important is employee training?",
        answer:
          "Very important — human error is one of the leading causes of security breaches.",
      },
    ],
    slug: "cybersecurity-basics-for-business",
  },

  {
    id: 4,
    metaTitle: "UI/UX Design Trends to Watch in 2025",
    metaDescription:
      "Stay ahead of the curve with these UI/UX design trends, including immersive storytelling, neobrutalism, and advanced microinteractions.",
    title: "UI/UX Design Trends to Watch in 2025",
    category: "Digital Marketing",
    read: "5 min read",
    date: "June 14, 2025",
    image:
      "https://plus.unsplash.com/premium_photo-1683121716061-3faddf4dc504?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Modern UI mockups",
    isFeatured: false,
    tldr: [
      "Minimalism continues to dominate.",
      "Dark mode and accessibility-first design are essential.",
      "Microinteractions improve user engagement.",
      "AI-driven personalization is rising.",
      "Immersive storytelling enhances UX.",
    ],
    toc: [
      { id: "intro", text: "Introduction" },
      { id: "visual-trends", text: "Visual Trends" },
      { id: "ux-trends", text: "UX Focus Areas" },
      { id: "future", text: "Looking Ahead" },
    ],
    content: `
    <h2 id="intro">Introduction</h2>
    <p>UI/UX design continues to evolve with changing technology and user expectations. In 2025, we're seeing major shifts in both form and function.</p>

    <h2 id="visual-trends">Visual Trends</h2>
    <p>Neobrutalism, asymmetrical layouts, and rich animations are gaining popularity alongside timeless minimalism.</p>

    <h2 id="ux-trends">UX Focus Areas</h2>
    <p>Designs are now more personalized and inclusive. Accessibility is no longer optional, and storytelling is used to connect with users on a deeper level.</p>

    <h2 id="future">Looking Ahead</h2>
    <p>As AI and machine learning tools grow, expect even more tailored UI experiences driven by behavioral insights.</p>
  `,
    faq: [
      {
        question: "What is Neobrutalism in UI design?",
        answer:
          "It's a bold design style that embraces raw, unpolished elements — often with high contrast and minimal decoration.",
      },
      {
        question: "Why is accessibility important in UX?",
        answer:
          "Accessible design ensures all users, including those with disabilities, can interact with your product effectively.",
      },
    ],
    slug: "ui-ux-design-trends-2025",
  },

  {
    id: 5,
    metaTitle: "The Role of Generative AI in Content Creation",
    metaDescription:
      "Explore how generative AI tools like ChatGPT and DALL·E are changing the landscape of content creation for marketers and creators.",
    title: "The Role of Generative AI in Content Creation",
    category: "AI",
    read: "6 min read",
    date: "July 2, 2025",
    image:
      "https://images.unsplash.com/photo-1581092917151-19d63436f01c?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "AI generated art concept",
    isFeatured: true,
    tldr: [
      "Generative AI helps scale content production.",
      "Tools like ChatGPT reduce creative blocks.",
      "AI art tools improve design efficiency.",
      "Ethics and originality remain hot topics.",
      "Writers must adapt to hybrid workflows.",
    ],
    toc: [
      { id: "intro", text: "Introduction" },
      { id: "tools", text: "Popular Generative AI Tools" },
      { id: "impact", text: "Impact on Creators & Marketers" },
      { id: "challenges", text: "Challenges and Concerns" },
    ],
    content: `
    <h2 id="intro">Introduction</h2>
    <p>Generative AI is reshaping how content is created, enabling faster output with less manual effort.</p>

    <h2 id="tools">Popular Generative AI Tools</h2>
    <p>From ChatGPT to DALL·E and Midjourney, creators are using AI tools to generate text, images, and even videos.</p>

    <h2 id="impact">Impact on Creators & Marketers</h2>
    <p>AI reduces time-to-market and enhances creativity through ideation support, but it also raises questions about authenticity.</p>

    <h2 id="challenges">Challenges and Concerns</h2>
    <p>Issues such as plagiarism, misinformation, and bias in AI-generated content must be addressed.</p>
  `,
    faq: [
      {
        question: "What is generative AI?",
        answer:
          "Generative AI refers to AI systems that can create new content such as text, images, or music from learned data.",
      },
      {
        question: "Can AI fully replace human content creators?",
        answer:
          "Not entirely. It enhances efficiency but still requires human oversight for quality, creativity, and ethics.",
      },
    ],
    slug: "generative-ai-in-content-creation",
  },

  {
    id: 6,
    metaTitle: "The Rise of Edge Computing in 2025",
    metaDescription:
      "Edge computing is decentralizing data processing for faster, more secure tech applications in IoT and real-time systems.",
    title: "The Rise of Edge Computing in 2025",
    category: "Tech",
    read: "5 min read",
    date: "July 28, 2025",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e8b949c39e4?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Edge computing infrastructure",
    isFeatured: false,
    tldr: [
      "Edge computing processes data closer to source.",
      "It reduces latency for real-time applications.",
      "Crucial for autonomous vehicles and IoT.",
      "Improves privacy and local data handling.",
      "Cloud and edge will coexist in future systems.",
    ],
    toc: [
      { id: "intro", text: "Introduction" },
      { id: "benefits", text: "Why Edge Computing Matters" },
      { id: "use-cases", text: "Key Applications" },
      { id: "future", text: "What’s Next for Edge?" },
    ],
    content: `
    <h2 id="intro">Introduction</h2>
    <p>Edge computing is transforming how data is processed by pushing it closer to the devices and sensors that collect it.</p>

    <h2 id="benefits">Why Edge Computing Matters</h2>
    <p>It significantly reduces latency and bandwidth usage, especially useful in time-sensitive applications.</p>

    <h2 id="use-cases">Key Applications</h2>
    <p>Autonomous vehicles, smart cities, and industrial IoT rely heavily on edge processing for quick decision-making.</p>

    <h2 id="future">What’s Next for Edge?</h2>
    <p>We’ll see more hybrid architectures with edge nodes complementing centralized cloud systems.</p>
  `,
    faq: [
      {
        question: "How is edge computing different from cloud computing?",
        answer:
          "Edge computing processes data near the source, while cloud computing relies on centralized data centers.",
      },
      {
        question: "Is edge computing secure?",
        answer:
          "Yes, it can improve security by keeping sensitive data local and reducing exposure to the internet.",
      },
    ],
    slug: "edge-computing-trends-2025",
  },

  {
    id: 7,
    metaTitle: "Mastering Email Marketing Automation in 2025",
    metaDescription:
      "Discover how modern tools and AI enhance email automation, improve targeting, and drive better open and conversion rates.",
    title: "Mastering Email Marketing Automation in 2025",
    category: "Digital Marketing",
    read: "6 min read",
    date: "August 5, 2025",
    image:
      "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Email marketing concept",
    isFeatured: false,
    tldr: [
      "AI enhances segmentation and targeting.",
      "Drip campaigns improve engagement.",
      "Personalized emails drive higher ROI.",
      "A/B testing helps optimize performance.",
      "Compliance (GDPR, CAN-SPAM) is critical.",
    ],
    toc: [
      { id: "intro", text: "Introduction" },
      { id: "automation", text: "Modern Automation Tools" },
      { id: "personalization", text: "Hyper-Personalization Tactics" },
      { id: "testing", text: "Testing and Analytics" },
    ],
    content: `
    <h2 id="intro">Introduction</h2>
    <p>Email remains one of the highest-converting digital channels, and automation now makes it smarter than ever.</p>

    <h2 id="automation">Modern Automation Tools</h2>
    <p>Platforms like Mailchimp and ActiveCampaign use AI to trigger emails based on behavior and lifecycle events.</p>

    <h2 id="personalization">Hyper-Personalization Tactics</h2>
    <p>Using customer data, marketers can tailor subject lines, content, and timing to individual preferences.</p>

    <h2 id="testing">Testing and Analytics</h2>
    <p>A/B testing and metrics like CTR and conversion rates guide ongoing optimization.</p>
  `,
    faq: [
      {
        question: "Which tool is best for email automation?",
        answer:
          "Popular tools include Mailchimp, HubSpot, ActiveCampaign, and ConvertKit, depending on your needs.",
      },
      {
        question: "Is email marketing still effective?",
        answer:
          "Yes, with personalization and automation, email continues to deliver high ROI in 2025.",
      },
    ],
    slug: "email-marketing-automation-2025",
  },

  {
    id: 8,
    metaTitle: "Ethical AI: Building Trust in Automated Systems",
    metaDescription:
      "Understand the key principles of ethical AI and how businesses can ensure fairness, transparency, and accountability in algorithms.",
    title: "Ethical AI: Building Trust in Automated Systems",
    category: "AI",
    read: "7 min read",
    date: "August 11, 2025",
    image:
      "https://images.unsplash.com/photo-1639747280908-6fb62d87db47?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Ethical AI concept",
    isFeatured: false,
    tldr: [
      "AI must be transparent and accountable.",
      "Bias in algorithms can harm communities.",
      "Explainability is key for trust in AI.",
      "Ethical audits are becoming standard.",
      "Regulations around AI are evolving.",
    ],
    toc: [
      { id: "intro", text: "Introduction" },
      { id: "issues", text: "The Ethical Challenges" },
      { id: "solutions", text: "Solutions and Frameworks" },
      { id: "future", text: "The Path Forward" },
    ],
    content: `
    <h2 id="intro">Introduction</h2>
    <p>As AI becomes mainstream, ethical considerations are crucial for long-term trust and usability.</p>

    <h2 id="issues">The Ethical Challenges</h2>
    <p>AI systems can inherit human biases, lack transparency, and make decisions without accountability.</p>

    <h2 id="solutions">Solutions and Frameworks</h2>
    <p>Frameworks like Explainable AI (XAI) and ethical audits help create more responsible AI systems.</p>

    <h2 id="future">The Path Forward</h2>
    <p>Collaborations between regulators, developers, and ethicists will define how AI grows responsibly.</p>
  `,
    faq: [
      {
        question: "What is ethical AI?",
        answer:
          "Ethical AI refers to developing AI systems that are fair, accountable, transparent, and respect privacy.",
      },
      {
        question: "Can AI be truly unbiased?",
        answer:
          "Complete neutrality is hard, but ongoing efforts aim to minimize and audit bias in AI.",
      },
    ],
    slug: "ethical-ai-trust-and-transparency",
  },

  {
    id: 9,
    metaTitle: "Quantum Computing: A Beginner’s Guide",
    metaDescription:
      "Quantum computing promises unprecedented processing power. Learn the basics, applications, and challenges in this guide.",
    title: "Quantum Computing: A Beginner’s Guide",
    category: "Tech",
    read: "8 min read",
    date: "August 15, 2025",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981d?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Quantum computer processor",
    isFeatured: true,
    tldr: [
      "Quantum bits (qubits) go beyond binary logic.",
      "Enables faster problem-solving for complex tasks.",
      "Great potential in cryptography and drug discovery.",
      "Still in early stages of development.",
      "Requires new programming models and languages.",
    ],
    toc: [
      { id: "intro", text: "Introduction" },
      { id: "how-it-works", text: "How Quantum Computing Works" },
      { id: "applications", text: "Applications and Use Cases" },
      { id: "challenges", text: "Challenges in Adoption" },
    ],
    content: `
    <h2 id="intro">Introduction</h2>
    <p>Quantum computing represents a leap forward in computing power, using principles of quantum mechanics to solve complex problems faster.</p>

    <h2 id="how-it-works">How Quantum Computing Works</h2>
    <p>Unlike classical bits, qubits can represent both 0 and 1 simultaneously, enabling exponential processing power.</p>

    <h2 id="applications">Applications and Use Cases</h2>
    <p>Quantum computing is promising in areas like cryptography, logistics optimization, and molecular simulations.</p>

    <h2 id="challenges">Challenges in Adoption</h2>
    <p>Cost, stability, and the need for new algorithms are major hurdles before it becomes mainstream.</p>
  `,
    faq: [
      {
        question: "What is a qubit?",
        answer:
          "A qubit is the basic unit of quantum information, capable of existing in multiple states simultaneously.",
      },
      {
        question: "Is quantum computing available now?",
        answer:
          "It's in experimental stages, with limited access through platforms like IBM Quantum or Google’s Quantum AI.",
      },
    ],
    slug: "quantum-computing-guide",
  },
];
