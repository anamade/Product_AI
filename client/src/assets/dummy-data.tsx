import { UploadIcon, VideoIcon, ZapIcon } from 'lucide-react';

export const featuresData = [
  {
    icon: <UploadIcon className="w-6 h-6" />,
    title: 'Smart Upload',
    desc: 'Drag and drop your assets images .We auto-optimize formats and sizes.',
  },
  {
    icon: <ZapIcon className="w-6 h-6" />,
    title: 'Instant Generation',
    desc: 'Optimized models drive output in seconds with great fidelity.',
  },
  {
    icon: <VideoIcon className="w-6 h-6" />,
    title: 'Video Synthesis',
    desc: 'Bring products short to life with short-form , social-ready Videos.',
  },
];

export const plansData = [
  {
    id: 'starter',
    name: 'Starter',
    price: 'Rp 20.000',
    desc: 'Trey the platform at no cost.',
    credits: 25,
    features: ['25 Credits & planning', 'Standart quality', 'No watermark', 'Slower generation speed', 'Email support'],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 'Rp 50.000',
    desc: 'Growing teams and businesses.',
    credits: 80,
    features: ['80 Credits', 'HD quality', 'No wtermark', 'Video generation', 'Priority support'],
    popular: true,
  },
  {
    id: 'ultra',
    name: 'Ultra',
    price: 'Rp 75.000',
    desc: 'Scale across teams and agencies.',
    credits: 300,
    features: ['300 Credits', 'FHD quality', 'No watermark', 'Fast generation speed', 'chat + email support'],
  },
];

export const faqData = [
  {
    question: 'How does the AI generation work?',
    answer: 'We leverage state-of-the-art AI models trained on millions of product images to blend your product into realistic scenes while preserving details, lighting and reflections.',
  },
  {
    question: 'Do you work with startups or only large companies?',
    answer: 'We work with startups, growing businesses and established brands. Our process is flexible and tailored to match your goals and scale.',
  },
  {
    question: 'Do I own the generate images?',
    answer: 'Yes - you recive full commercial rights to  any images and videos generate on the platform. Use the for ads, ecommerc ,social media and more',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes - you can cancel from your dashboard .You will retain access trought the end of your billing period.',
  },
  {
    question: 'Do you offer ongoing support after launch?',
    answer: 'Yes. We offer maintenance, optimization and growth support packages to ensure your product continues to perform and evolve.',
  },
];

export const footerLinks = [
  {
    title: 'Quick Links',
    links: [
      { name: 'Home', url: '#' },
      { name: 'Features', url: '#' },
      { name: 'Pricing', url: '#' },
      { name: 'FAQ', url: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', url: '#' },
      { name: 'Terms of Service', url: '#' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { name: 'Twitter', url: '#' },
      { name: 'LinkedIn', url: '#' },
      { name: 'GitHub', url: '#' },
    ],
  },
];
