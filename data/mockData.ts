import { TeamMember, Service, Article } from '../types';

export const teamMembers: TeamMember[] = [
  {
    name: 'Eleanor Vance',
    title: 'Managing Partner & CEO',
    imageUrl: 'https://picsum.photos/400/400?random=10',
    bio: 'Eleanor brings over 20 years of experience in strategic consulting, guiding Fortune 500 companies through complex transformations.'
  },
  {
    name: 'Marcus Thorne',
    title: 'Partner, Digital Strategy',
    imageUrl: 'https://picsum.photos/400/400?random=11',
    bio: 'Marcus is a leading expert in digital innovation, helping clients harness technology to drive competitive advantage.'
  },
  {
    name: 'Isabelle Chen',
    title: 'Partner, Risk Advisory',
    imageUrl: 'https://picsum.photos/400/400?random=12',
    bio: 'Isabelle specializes in enterprise risk management and regulatory compliance for the financial services industry.'
  },
  {
    name: 'Javier Rios',
    title: 'Partner, Operations Excellence',
    imageUrl: 'https://picsum.photos/400/400?random=13',
    bio: 'Javier excels at optimizing complex supply chains and operational processes for maximum efficiency and resilience.'
  },
];

export const services: Service[] = [
  {
    title: 'Strategy & Operations',
    description: 'We help leaders develop and execute winning strategies that deliver sustainable growth and operational excellence. Our approach connects high-level strategic vision with the practical realities of implementation, ensuring your goals are not only ambitious but also achievable.',
    imageUrl: 'https://picsum.photos/800/600?random=3',
    details: ['Corporate & Business Unit Strategy', 'Growth & Innovation', 'Supply Chain Optimization', 'Cost Transformation', 'Mergers & Acquisitions'],
  },
  {
    title: 'Digital Transformation',
    description: 'In a world driven by technology, we guide organizations through the complexities of digital change. From data analytics to process automation, we help you build a more agile, intelligent, and customer-centric enterprise that is ready for the future.',
    imageUrl: 'https://picsum.photos/800/600?random=4',
    details: ['Digital Strategy & Roadmap', 'Data Analytics & AI', 'Cloud Enablement', 'Enterprise Agility', 'Cybersecurity & Privacy'],
  },
  {
    title: 'Risk & Compliance',
    description: 'We provide the expertise to help you anticipate and manage risk, navigate regulatory change, and operate with integrity. Our forward-looking approach helps you build resilience and protect your reputation in an uncertain world.',
    imageUrl: 'https://picsum.photos/800/600?random=5',
    details: ['Enterprise Risk Management', 'Regulatory Compliance Advisory', 'Financial Crime Prevention', 'Internal Audit & Controls', 'Crisis Management'],
  },
];

export const articles: Article[] = [
  {
    slug: 'the-future-of-ai-in-enterprise-strategy',
    title: 'The Future of AI in Enterprise Strategy',
    author: 'Eleanor Vance',
    date: 'October 26, 2023',
    excerpt: 'Artificial intelligence is no longer a futuristic concept; it\'s a present-day reality transforming industries. Discover how to integrate AI into your core strategy for a competitive edge.',
    imageUrl: 'https://picsum.photos/1200/600?random=6',
    content: `Artificial intelligence (AI) is rapidly evolving from a niche technology to a fundamental driver of business value. Companies that successfully integrate AI into their core strategies will be the leaders of tomorrow. This isn't just about automating tasks; it's about reimagining business models, enhancing decision-making, and creating entirely new customer experiences.
    
    The first step is to identify high-impact use cases. Instead of a scattergun approach, focus on areas where AI can solve a critical business problem or unlock a significant opportunity. This could be anything from optimizing supply chains with predictive analytics to personalizing customer interactions with machine learning algorithms. The key is to align AI initiatives with strategic business objectives.
    
    Furthermore, building a data-driven culture is paramount. AI is only as good as the data it's trained on. This means investing in data infrastructure, ensuring data quality, and empowering employees with the skills to interpret and act on data-driven insights. It's a journey that requires commitment from the top down, fostering an environment where experimentation is encouraged and data is treated as a strategic asset.`,
    category: 'Strategy',
  },
  {
    slug: 'navigating-the-new-era-of-regulatory-compliance',
    title: 'Navigating the New Era of Regulatory Compliance',
    author: 'Isabelle Chen',
    date: 'October 15, 2023',
    excerpt: 'With regulatory landscapes shifting faster than ever, proactive compliance is key. We explore strategies to stay ahead of the curve and turn compliance into an advantage.',
    imageUrl: 'https://picsum.photos/1200/600?random=7',
    content: `In today's globalized and digitized economy, the regulatory landscape is in a constant state of flux. New rules around data privacy, financial crime, and environmental reporting are emerging at an unprecedented rate. For many organizations, compliance can feel like a moving target—a costly and complex burden. However, a forward-thinking approach can transform compliance from a defensive necessity into a strategic advantage.
    
    The key is to move from a reactive to a proactive stance. This involves continuous monitoring of the regulatory horizon to anticipate changes before they happen. Technology plays a crucial role here. Regulatory technology, or "RegTech," can automate compliance processes, improve reporting accuracy, and provide real-time insights into compliance risks. By leveraging these tools, organizations can reduce the manual effort involved in compliance and free up resources to focus on more strategic activities.
    
    Ultimately, a robust compliance framework builds trust with customers, regulators, and investors. It demonstrates a commitment to ethical business practices and responsible corporate citizenship. In an era where reputation is more valuable than ever, embedding compliance into the fabric of your organization is not just good practice—it's good business.`,
    category: 'Risk & Compliance',
  },
  {
    slug: 'building-resilient-supply-chains-in-a-volatile-world',
    title: 'Building Resilient Supply Chains in a Volatile World',
    author: 'Javier Rios',
    date: 'September 28, 2023',
    excerpt: 'Recent global events have exposed vulnerabilities in traditional supply chains. Learn how to build a more agile, resilient, and sustainable supply network.',
    imageUrl: 'https://picsum.photos/1200/600?random=8',
    content: `The disruptions of the past few years have served as a wake-up call for businesses worldwide. Lean, just-in-time supply chains, once lauded for their efficiency, have proven to be fragile in the face of geopolitical instability, climate events, and pandemics. The new imperative is resilience: the ability to anticipate, absorb, and adapt to disruptions without compromising customer service or financial performance.
    
    Building a resilient supply chain requires a multi-faceted approach. Diversification of suppliers and manufacturing locations is a critical first step to reduce dependence on any single region. Enhanced visibility, powered by IoT and blockchain, can provide real-time insights into the location and status of goods, enabling faster responses to potential bottlenecks.
    
    Furthermore, sustainability is becoming increasingly intertwined with resilience. A focus on circular economy principles, ethical sourcing, and reduced carbon footprints not only addresses environmental concerns but can also lead to more efficient and robust supply networks. By investing in resilience today, organizations can future-proof their operations and gain a significant competitive advantage in an increasingly unpredictable world.`,
    category: 'Strategy',
  },
    {
    slug: 'unlocking-customer-value-with-data-analytics',
    title: 'Unlocking Customer Value with Data Analytics',
    author: 'Marcus Thorne',
    date: 'September 12, 2023',
    excerpt: 'Your data holds the key to understanding your customers better. We delve into the analytics techniques that can unlock profound insights and drive growth.',
    imageUrl: 'https://picsum.photos/1200/600?random=9',
    content: `In the digital age, data is one of the most valuable assets a company possesses. Yet, many organizations are sitting on a treasure trove of customer data without knowing how to unlock its potential. The ability to collect, analyze, and act on this data is what separates market leaders from the laggards. Advanced data analytics allows you to move beyond simple historical reporting and start predicting customer behavior, personalizing experiences, and optimizing every touchpoint of the customer journey.
    
    Predictive analytics models, for example, can identify which customers are at risk of churning, allowing you to intervene with targeted retention offers. Machine learning algorithms can power recommendation engines that drive cross-selling and up-selling opportunities, significantly increasing customer lifetime value.
    
    The journey begins with a clear data strategy. This involves breaking down data silos, investing in the right analytics tools, and cultivating a culture of data literacy across the organization. When everyone from marketing to product development is empowered to use data to make better decisions, the result is a more customer-centric organization that can consistently deliver exceptional value and build lasting loyalty.`,
    category: 'Digital Transformation',
  },
];