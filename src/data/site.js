import { Factory, HeartPulse, Sun, TrainFront, Warehouse, Wheat } from 'lucide-react';

export const COMPANY = {
  name: 'Fort Infrastructure Group',
  email: 'contact@fortinfrastructure.com',
};

export const IMAGES = {
  logo: '/images/logo.png',
  hero: '/images/hero.webp',
  about: '/images/about.webp',
  solar: '/images/solar.webp',
  logistics: '/images/logistics.webp',
  agro: '/images/agro.webp',
};

export const NAV = [
  { label: 'Who We Are', href: '#who-we-are' },
  { label: 'Sectors', href: '#sectors' },
  { label: 'Experience', href: '#experience' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export const CLIENTS = ['Governments', 'MDAs', 'Infrastructure Developers', 'Corporates', 'Investors & DFIs'];

export const HOW_WE_HELP = [
  { num: '01', title: 'Project Execution', text: 'Project development, oversight, delivery and stakeholder coordination as Owner’s Representative.' },
  { num: '02', title: 'Outsourced Management', text: 'Hands-on support to operate and grow projects and businesses through Management as a Service.' },
  { num: '03', title: 'Fractional Leadership', text: 'Fractional executive leadership and execution capacity without FTE cost or commitment.' },
  { num: '04', title: 'Capital Mobilisation', text: 'Structuring and securing financing for projects and businesses.' },
  { num: '05', title: 'Resource Supply', text: 'Supply of consumables, equipment, talent and technology.' },
];

export const SECTORS = [
  { icon: TrainFront, title: 'Transportation', text: 'Rail, ports and roads that connect people, goods and markets.' },
  { icon: Sun, title: 'Energy', text: 'Solar for schools, hospitals, industry and households.' },
  { icon: Factory, title: 'Manufacturing', text: 'Industrial facilities, equipment and local production capacity.' },
  { icon: Warehouse, title: 'Logistics', text: 'Cold chain, warehousing and distribution networks.' },
  { icon: Wheat, title: 'Agro-processing', text: 'Processing, storage and agricultural value chains.' },
  { icon: HeartPulse, title: 'Healthcare', text: 'Hospitals, diagnostics and health infrastructure.' },
];

export const EXPERIENCE = [
  { num: '01', title: 'Manufacturing Company', location: 'Toronto', scope: 'Origination, financing, acquisition, operation and growth.' },
  { num: '02', title: 'Solar Power for Hospitals', location: 'Ogun', scope: 'Origination and development.' },
  { num: '03', title: 'Manufacturing Facility for Solar Products', location: 'Oyo', scope: 'Construction and operation.' },
  { num: '04', title: 'Infrastructure Development Company', location: 'Lagos', scope: 'Executive recruitment.' },
  { num: '05', title: 'Federal Government Agency', location: 'South-West Nigeria', scope: 'Project development and capital mobilisation.' },
];

export const VALUES = [
  { title: 'People First', text: 'We invest in people and communities — the foundation every asset is built on.' },
  { title: 'Partnership Driven', text: 'We work alongside governments, developers, corporates and investors as long-term partners.' },
  { title: 'Ownership Mindset', text: 'We take responsibility for outcomes, from origination through operation.' },
  { title: 'Execution Capability', text: 'We deliver — structuring, building and operating with discipline and rigour.' },
  { title: 'Continuous Improvement', text: 'We refine how we work on every project, raising the standard each time.' },
];
