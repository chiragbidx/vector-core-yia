// WalkBuddy Homepage and Branding Content

// Types remain unedited for contract compliance
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

export type SponsorItem = { icon: string; name: string };
export type SponsorsContent = {
  heading: string;
  items: SponsorItem[];
};

export type BenefitItem = { icon: string; title: string; description: string };
export type BenefitsContent = {
  eyebrow: string;
  heading: string;
  description: string;
  items: BenefitItem[];
};

export type FeatureItem = { icon: string; title: string; description: string };
export type FeaturesContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  items: FeatureItem[];
};

export type ServiceItem = { title: string; description: string; pro: boolean };
export type ServicesContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  items: ServiceItem[];
};

export type TestimonialItem = {
  image: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
};
export type TestimonialsContent = {
  eyebrow: string;
  heading: string;
  reviews: TestimonialItem[];
};

export type SocialLink = { name: string; url: string };
export type TeamMember = {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialLink[];
};
export type TeamContent = {
  eyebrow: string;
  heading: string;
  members: TeamMember[];
};

export type PricingPlan = {
  title: string;
  popular: boolean;
  price: number;
  description: string;
  buttonText: string;
  benefits: string[];
};
export type PricingContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  priceSuffix: string;
  plans: PricingPlan[];
};

export type ContactInfoBlock = { label: string; value: string | string[] };
export type ContactContent = {
  eyebrow: string;
  heading: string;
  description: string;
  mailtoAddress: string;
  info: {
    address: ContactInfoBlock;
    phone: ContactInfoBlock;
    email: ContactInfoBlock;
    hours: ContactInfoBlock;
  };
  formSubjects: string[];
  formSubmitLabel: string;
};

export type FaqItem = { question: string; answer: string };
export type FaqContent = {
  eyebrow: string;
  heading: string;
  items: FaqItem[];
};

export type FooterLink = { label: string; href: string };
export type FooterColumn = { heading: string; links: FooterLink[] };
export type FooterContent = {
  brandName: string;
  columns: FooterColumn[];
  copyright: string;
  attribution: { label: string; href: string };
};

export type NavRoute = { href: string; label: string };
export type NavFeature = { title: string; description: string };
export type NavbarContent = {
  brandName: string;
  routes: NavRoute[];
  featureDropdownLabel: string;
  featureImage: { src: string; alt: string };
  features: NavFeature[];
  signInLabel: string;
  signUpLabel: string;
  dashboardLabel: string;
  githubLink: { href: string; ariaLabel: string };
};

export type HomeContent = {
  hero: HeroContent;
  sponsors: SponsorsContent;
  benefits: BenefitsContent;
  features: FeaturesContent;
  services: ServicesContent;
  testimonials: TestimonialsContent;
  team: TeamContent;
  pricing: PricingContent;
  contact: ContactContent;
  faq: FaqContent;
  footer: FooterContent;
  navbar: NavbarContent;
};

export const defaultHomeContent: HomeContent = {
  // Hero
  hero: {
    badgeInner: "Hassle-free dog walking",
    badgeOuter: "WalkBuddy. For Modern Professionals.",
    titleBefore: "WalkBuddy —",
    titleHighlight: "Simplify Your",
    titleAfter: "Dog Walking Business",
    subtitle: "Manage clients, schedule dog walks, and track payments with one easy-to-use dashboard. WalkBuddy helps you focus on happy pups, not paperwork.",
    primaryCta: { label: "Get Started", href: "#pricing" },
    secondaryCta: { label: "See How It Works", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "Dog walker and happy dog",
  },

  sponsors: {
    heading: "Trusted by dog walkers & owners",
    items: [],
  },

  // Benefits
  benefits: {
    eyebrow: "Why WalkBuddy",
    heading: "Everything you need for dog walking success",
    description:
      "WalkBuddy is built for professional dog walkers and busy pet owners. Effortlessly track walks, manage client info, and keep everyone in sync—so every dog gets the care and attention they deserve.",
    items: [
      {
        icon: "UserPlus",
        title: "Easy client & dog management",
        description: "Keep all profiles, details, and records in one place.",
      },
      {
        icon: "CreditCard",
        title: "Simple monthly pricing",
        description: "Just £25 per month per dog walk.",
      },
      {
        icon: "Lock",
        title: "Secure dashboard",
        description: "Trust your data and payments to our secure system.",
      },
    ],
  },

  // Feature Grid
  features: {
    eyebrow: "Features",
    heading: "Manage Your Dog Walking Business",
    subtitle: "WalkBuddy helps you run your business and delight your clients—every day.",
    items: [
      {
        icon: "Users",
        title: "Client & Dog Profiles",
        description: "Store info for every dog and owner—no more spreadsheets or sticky notes.",
      },
      {
        icon: "Calendar",
        title: "Walk Scheduling",
        description: "Plan and track all your walks in one calendar view.",
      },
      {
        icon: "CreditCard",
        title: "Easy Payments",
        description: "Automated billing at £25 per dog walk. Stay on top of your earnings.",
      },
      {
        icon: "LayoutGrid",
        title: "Professional Dashboard",
        description: "Everything you need to operate your business, all in one place.",
      },
    ],
  },

  // Services
  services: {
    eyebrow: "WalkBuddy Services",
    heading: "Core Features",
    subtitle:
      "Built for the modern dog professional.",
    items: [
      { title: "Dog management", description: "Track every dog’s details and health needs.", pro: false },
      { title: "Calendar scheduling", description: "Visual calendar so you never miss a walk.", pro: false },
      { title: "Payment tracking", description: "Never lose track of payments or client status.", pro: false },
      { title: "Automation", description: "Automatic reminders, insights, and tools.", pro: true },
    ],
  },

  // Testimonials
  testimonials: {
    eyebrow: "WalkBuddy Reviews",
    heading: "Dog walkers & owners love WalkBuddy",
    reviews: [
      {
        image: "/team1.jpg",
        name: "Sophie Barker",
        role: "Dog Walker, Bark & Bones",
        comment: "WalkBuddy keeps my business organized and my clients happy. No more lost notes!",
        rating: 5.0,
      },
      {
        image: "/team2.jpg",
        name: "Toby Shepherd",
        role: "Pet Owner",
        comment:
          "I never worry about walks getting missed, and billing is a breeze.",
        rating: 4.9,
      },
      {
        image: "/team3.jpg",
        name: "Emily Pawson",
        role: "Dog Walker",
        comment: "Best choice I made for my dog walking business.",
        rating: 5.0,
      },
    ],
  },

  // Team
  team: {
    eyebrow: "Meet the Team",
    heading: "The humans behind WalkBuddy",
    members: [
      {
        imageUrl: "/team1.jpg",
        firstName: "Simon",
        lastName: "Dutta",
        positions: ["Founder", "Product Lead"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/simon-dutta/" },
        ],
      },
    ],
  },

  // Pricing
  pricing: {
    eyebrow: "Pricing",
    heading: "Simple, Transparent Pricing",
    subtitle: "Just £25 per month per dog walk. No hidden fees or surprises. Start with WalkBuddy today.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Per Walk",
        popular: true,
        price: 25,
        description: "One dog walk per month. Simple pricing per walk.",
        buttonText: "Start Free Trial",
        benefits: [
          "Client & dog management",
          "Calendar scheduling",
          "Secure dashboard",
          "Automated payments",
          "Unlimited support",
        ],
      },
    ],
  },

  // Contact
  contact: {
    eyebrow: "Contact",
    heading: "Talk to the WalkBuddy team",
    description:
      "Want to know more? Reach out to Simon Dutta or our support team to learn how WalkBuddy can grow your business.",
    mailtoAddress: "simon@bidx.ai",
    info: {
      address: { label: "Based in", value: "UK — Remote" },
      phone: { label: "Phone", value: "" },
      email: { label: "Email", value: "simon@bidx.ai" },
      hours: { label: "Hours", value: ["Monday - Friday", "9am - 6pm GMT"] },
    },
    formSubjects: [
      "Product Enquiry",
      "Partnership",
      "Billing",
      "Support",
    ],
    formSubmitLabel: "Send message",
  },

  // FAQ
  faq: {
    eyebrow: "FAQ",
    heading: "Common Questions",
    items: [
      {
        question: "How much does it cost?",
        answer: "WalkBuddy is priced at £25 per month per dog walk. No hidden fees.",
      },
      {
        question: "Who is WalkBuddy for?",
        answer: "Professional dog walkers and pet owners who want to streamline walks and payments.",
      },
      {
        question: "How do I get started?",
        answer: "Click 'Get Started' and set up your business in minutes. No credit card required for trial.",
      },
      {
        question: "Can I manage multiple dogs?",
        answer: "Yes! WalkBuddy is built for multi-dog households and dog walking businesses.",
      },
    ],
  },

  // Footer
  footer: {
    brandName: "WalkBuddy",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "simon@bidx.ai", href: "mailto:simon@bidx.ai" },
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        heading: "Social",
        links: [
          { label: "LinkedIn", href: "https://www.linkedin.com/in/simon-dutta/" },
        ],
      },
    ],
    copyright: "© WalkBuddy. All rights reserved.",
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },

  // Navbar
  navbar: {
    brandName: "WalkBuddy",
    routes: [
      { href: "/#features", label: "Features" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/demo-img.jpg", alt: "WalkBuddy app screenshot" },
    features: [
      { title: "Dog Profiles", description: "Track info for every dog and owner." },
      { title: "Walk Scheduling", description: "Calendar and reminders for every walk." },
      { title: "Automated Payments", description: "No more chasing invoices or manual billing." },
    ],
    signInLabel: "Sign In",
    signUpLabel: "Get Started",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://nextjs.org/docs", ariaLabel: "View on GitHub" },
  },
};

export const homeContent: HomeContent = defaultHomeContent;

export function getHomeContent(): HomeContent {
  return homeContent;
}