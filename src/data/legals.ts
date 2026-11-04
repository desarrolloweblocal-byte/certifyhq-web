export interface LegalContent {
  title: string;
  lastUpdated: string;
  sections: {
    heading: string;
    body: string;
  }[];
}

export const LEGAL_PAGES: Record<string, LegalContent> = {
  privacy: {
    title: 'Privacy Policy & Data Protection (CCPA / GDPR)',
    lastUpdated: 'February 15, 2026',
    sections: [
      {
        heading: '1. Information We Collect & Process',
        body: 'CertifyHQ respects consumer privacy. We operate an informational directory and do not mandate personal account creation to access course listings or scholarship guides. Information collected automatically includes standard web server logs, IP addresses, browser types, and anonymized analytical metrics to optimize layout delivery and site performance.'
      },
      {
        heading: '2. Google AdSense, DoubleClick & Third-Party Advertising',
        body: 'This website displays third-party advertising served by Google AdSense and associated ad networks. Google utilizes cookies and web beacons to serve ads based on your prior visits to this website and other internet properties. You may opt out of personalized advertising by visiting Google Ads Settings (adssettings.google.com) or the Digital Advertising Alliance consumer choice portal (optout.aboutads.info).'
      },
      {
        heading: '3. California Consumer Privacy Act (CCPA / CPRA) Rights',
        body: 'Under the California Consumer Privacy Act, California residents have the right to request disclosure of categories of personal information collected, request deletion of personal records, and opt out of the "sale" or "sharing" of personal data for cross-context behavioral advertising. We do not sell personally identifiable information for monetary consideration.'
      },
      {
        heading: '4. Contacting Our Data Privacy Officer',
        body: 'If you have questions regarding our privacy framework, data practices, or wish to exercise statutory data rights under GDPR or US state regulations, contact us at privacy@certifyhq.org.'
      }
    ]
  },
  terms: {
    title: 'Terms of Service & User Agreement',
    lastUpdated: 'February 15, 2026',
    sections: [
      {
        heading: '1. Acceptance of Terms',
        body: 'By accessing and utilizing CertifyHQ, you agree to comply with and be bound by these Terms of Service. If you disagree with any portion of these provisions, you must discontinue use of the site immediately.'
      },
      {
        heading: '2. Independent Educational Directory Disclaimer',
        body: 'CertifyHQ is an independent informational resource. We do not grant academic degrees, verify institutional credentials directly, or operate as an admissions authority for third-party entities. Trademarks, logos, and course titles cited (including Harvard University, MIT, Google, AWS, and Stanford) remain the exclusive intellectual property of their respective trademark holders.'
      },
      {
        heading: '3. External Links & Third-Party Platforms',
        body: 'Our platform links to external educational services, universities, and technology vendors. We are not responsible for the ongoing availability, pricing policy adjustments, terms of service, or technical integrity of external websites.'
      }
    ]
  },
  disclaimer: {
    title: 'FTC Advertising & Affiliate Disclosure',
    lastUpdated: 'February 15, 2026',
    sections: [
      {
        heading: '1. Federal Trade Commission (FTC) Compliance',
        body: 'In accordance with Federal Trade Commission (FTC) guidelines concerning the use of endorsements and testimonials in advertising, please be advised that CertifyHQ may maintain affiliate relationships with select learning platforms and technology providers cited on this website.'
      },
      {
        heading: '2. Advertising Compensation',
        body: 'We display automated advertising units (via Google AdSense and partner networks) and may receive referral compensation when visitors register or purchase services via external outbound links. This financial sponsorship allows our editorial research team to continually update, curate, and maintain our extensive database of 100% free courses and financial aid guides at no monetary cost to learners.'
      },
      {
        heading: '3. Editorial Independence',
        body: 'Financial relationships do not dictate editorial recommendations. Our evaluations prioritize verifiable accreditation, authentic zero-cost pathways, and curriculum quality.'
      }
    ]
  },
  about: {
    title: 'About CertifyHQ — Mission & Editorial Standards',
    lastUpdated: 'February 15, 2026',
    sections: [
      {
        heading: 'Democratizing World-Class Tech & Ivy League Education',
        body: 'CertifyHQ was founded on a simple principle: transformative education should never be gated behind predatory subscription fees. Top-tier academic institutions and global technology corporations provide world-class instruction and verified credentials for free — if you understand how to navigate their enrollment pathways.'
      },
      {
        heading: 'Rigorous Editorial Verification',
        body: 'Every single program indexed in our repository undergoes thorough manual verification by our research team. We confirm the legitimacy of the issuing organization, audit the free access track, confirm digital credential delivery on platforms like Credly, and provide unambiguous instructions to bypass paywalls legally.'
      }
    ]
  },
  contact: {
    title: 'Contact & Editorial Inquiries',
    lastUpdated: 'February 15, 2026',
    sections: [
      {
        heading: 'Get in Touch with Our Editorial Team',
        body: 'Have questions regarding a specific course track, scholarship application, or wish to report a broken external link? We welcome inquiries and respond within 24 to 48 business hours.'
      },
      {
        heading: 'Official Communications',
        body: 'Direct editorial and institutional correspondence: contact@certifyhq.org\nPartnership & academic directory submissions: partners@certifyhq.org'
      }
    ]
  }
};
