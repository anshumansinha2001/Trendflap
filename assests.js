import adminPic from "@/public/admin.jpg";
import trendflapLogo from "@/public/TrendflapLogo.png";

export { adminPic };
export { trendflapLogo };

// Dummy blog data
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
    image: { adminPic },
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
        answer: `AI in digital marketing refers to the use of <a rel="nofollow" target="_blank" href="/ai/" class="internal-link"> artificial intelligence </a> to analyze data, personalize content, and optimize ad campaigns.`,
      },
      {
        question: "How can AI help in Digital Marketing?",
        answer:
          "AI can help in digital marketing by enabling smarter data analysis, personalized content, and optimized ad campaigns.",
      },
    ],
    slug: "how-ai-is-transforming-digital-marketing",
  },
];
