import type { ArticleGuide } from '../types';

export const GUIDES_DATA: ArticleGuide[] = [
  {
    id: 'guide-harvard-cs50-free',
    slug: 'how-to-get-harvard-cs50-certificate-free',
    title: 'How to Get Harvard\'s Official CS50 Certificate 100% Free (Without Paying $299 on edX)',
    excerpt: 'A comprehensive step-by-step walkthrough explaining the little-known difference between the paid edX certificate and the free official honors certificate directly issued by Harvard University.',
    category: 'Computer Science & Code',
    readTime: '7 min read',
    author: 'David Vance, M.Ed.',
    authorRole: 'Higher Ed & EdTech Policy Researcher',
    publishedDate: 'February 18, 2026',
    heroImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&auto=format&fit=crop&q=80',
    content: [
      {
        heading: '1. The "Secret" Behind Harvard\'s Open Access Policy',
        body: 'When students navigate to popular MOOC platforms like edX to take CS50 (Computer Science 50: Introduction to Computer Science), the portal prompts them to pay between $199 and $299 for a "verified track". However, Professor David J. Malan and the Harvard Division of Continuing Education maintain a transparent open-access policy: any student in the world who submits and passes all nine problem sets, labs, and the final capstone project with a score of 70% or higher is entitled to a free, downloadable, high-resolution official CS50 Certificate issued directly by cs50.harvard.edu with a cryptographically verifiable QR code.',
        keyPoints: [
          'The course materials, recorded lectures in Sanders Theatre, and sandbox tools are 100% identical.',
          'Submissions are graded automatically via GitHub Classroom and the check50 testing suite.',
          'The official PDF credential includes a persistent validation link you can embed directly into LinkedIn and your resume.'
        ]
      },
      {
        heading: '2. Step-by-Step Enrollment Without Credit Card Entry',
        body: 'To enroll without being pressured into the payment funnel, register on edX or directly via Harvard Online using the "Free Audit" option. Once logged in, navigate to the official course portal at cs50.harvard.edu/x/2026/. Link your personal GitHub account to authenticate with the CS50 automated grading system (submit50). You do not need to submit payment details at any point during your learning journey.',
        keyPoints: [
          'Create a free GitHub account if you do not have one.',
          'Log in to Visual Studio Code in the browser (cs50.dev) for your cloud IDE.',
          'Complete assignments at your own pace — deadlines roll over annually.'
        ]
      },
      {
        heading: '3. Resume & LinkedIn Presentation for US Recruiters',
        body: 'Under the "Licenses & Certifications" section of your LinkedIn profile, select "Harvard Division of Continuing Education" or "Harvard University" as the issuing organization. In the credential name field, input "CS50x: Introduction to Computer Science" and link your unique verification URL. US tech hiring managers universally recognize CS50 for its rigorous problem sets in memory management, data structures, and algorithms.'
      }
    ],
    relatedCourseIds: ['harvard-cs50x', 'mit-python-programming', 'stanford-machine-learning']
  },
  {
    id: 'guide-coursera-financial-aid',
    slug: 'how-to-apply-coursera-financial-aid-template',
    title: 'The Proven Blueprint to Get 100% Financial Aid on Google & IBM Certificates in 2026',
    excerpt: 'Do not pay $49/month. Discover how to legally obtain full financial aid waivers for Google Career Certificates and IBM professional credentials.',
    category: 'Artificial Intelligence',
    readTime: '6 min read',
    author: 'Rachel Steinberg',
    authorRole: 'Career Strategist & Tech Recruiter',
    publishedDate: 'February 12, 2026',
    heroImage: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&auto=format&fit=crop&q=80',
    content: [
      {
        heading: '1. Why Coursera Offers 100% Tuition Waivers',
        body: 'Tech conglomerates including Google, IBM, and Meta partnered with Coursera to bridge the digital skills gap. Under their charter, financial hardship must never prevent an ambitious learner from acquiring recognized workforce credentials. Every single professional certificate program features a discreet "Financial Aid Available" link right next to the "Enroll" button.',
        keyPoints: [
          'Full 100% waiver of monthly fees ($49/mo) and exam costs.',
          'Unlimited access to graded peer reviews, quizzes, and digital verified certificates.',
          'Application review takes approximately 15 calendar days from submission.'
        ]
      },
      {
        heading: '2. The Two Mandatory Essay Questions and How to Answer',
        body: 'The financial aid form requires answers to two core prompts: explaining your current financial situation, and articulating how the certificate will assist your professional career trajectory. Transparency and commitment are the primary evaluation criteria.',
        keyPoints: [
          'Be honest regarding your student status, career transition, or geographic cost of living.',
          'Clearly specify the job titles you are targeting (e.g., Junior Data Analyst, Associate Cloud Engineer).',
          'Commit to spending 5-10 weekly hours to finish the curriculum within 3 to 6 months.'
        ]
      },
      {
        heading: '3. Critical Caution: Do Not Start the 7-Day Free Trial',
        body: 'A common pitfall that invalidates pending financial aid applications is clicking the "Start 7-Day Free Trial" button while awaiting your application verdict. Doing so automatically converts your account into a recurring subscription. Wait patiently for the confirmation email from Coursera before launching your course modules.'
      }
    ],
    relatedCourseIds: ['google-ai-essentials', 'ibm-cybersecurity-analyst', 'aws-cloud-practitioner']
  },
  {
    id: 'guide-cybersecurity-zero-experience',
    slug: 'top-free-cybersecurity-certifications-remote-jobs',
    title: 'Top Free Cybersecurity Certifications to Break Into a $90k+ Remote Career With No Degree',
    excerpt: 'The global cybersecurity industry faces an acute talent shortage of over 3.4 million professionals. Here are the accredited pathways that land entry-level SOC roles.',
    category: 'Cybersecurity',
    readTime: '5 min read',
    author: 'Marcus Vance, CISSP',
    authorRole: 'Senior Security Architect & Consultant',
    publishedDate: 'January 28, 2026',
    heroImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&auto=format&fit=crop&q=80',
    content: [
      {
        heading: '1. The Real State of Entry-Level Cyber Defense',
        body: 'With stricter compliance mandates such as SEC cybersecurity disclosures in the United States and DORA in Europe, enterprises are aggressively expanding Security Operations Centers (SOCs). Entry-level triage analysts monitor alert streams, verify phishing reports, and document vulnerability vectors. Practical digital badges from recognized vendors like IBM, Cisco, and Microsoft frequently bypass legacy four-year college degree requirements.',
        keyPoints: [
          'High remote work adoption across financial services, healthcare, and software.',
          'Starting base salaries in the United States consistently range from $65,000 to $95,000.',
          'Vendor-backed credentials on Credly prove hands-on tool mastery.'
        ]
      },
      {
        heading: '2. The Recommended Zero-Cost Pathway',
        body: 'Begin with IBM SkillsBuild Fundamentals of Cybersecurity to build baseline literacy in cryptographic handshakes, threat modeling, and incident response. Next, pair this credential with Cisco Networking Academy\'s "Cybersecurity Essentials" to understand packet switching and firewall rule design.'
      }
    ],
    relatedCourseIds: ['ibm-cybersecurity-analyst', 'linux-foundation-lfs101x', 'microsoft-azure-ai-900']
  }
];
