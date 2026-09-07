import { BrainCircuit, Code2, Database, Palette } from 'lucide-react'

export type Project = { number: string; title: string; type: string; description: string; image: string; tags: string[]; details: string; projectType: 'Personal project' | 'Concept / demo' | 'Client project'; featured?: boolean; liveUrl?: string; githubUrl?: string }

export const projects: Project[] = [
  { number: '01', title: 'AI Student OS', type: 'AI Product / Education', description: 'AI-powered student productivity platform combining planning, learning, organization, and academic workflows in one intelligent workspace.', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=90', tags: ['AI', 'Productivity', 'Automation', 'React', 'Database'], details: 'A student-focused product concept exploring how AI, automation, and a connected database can bring academic workflows into one intelligent workspace.', projectType: 'Personal project', featured: true },
  { number: '02', title: 'Ortho Dental', type: 'Web / Healthcare', description: 'Responsive dental practice website built to explain treatments clearly, build trust, and help patients discover and contact the clinic.', image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1800&q=90', tags: ['Next.js', 'UX/UI', 'Responsive Web'], details: 'A professional healthcare website focused on clear treatment presentation, trustworthy UX, and responsive browsing across devices.', projectType: 'Client project', liveUrl: 'https://orthodentals.netlify.app/' },
  { number: '03', title: 'Five Spice', type: 'Web / Food', description: 'Responsive restaurant website concept using Webflow and CMS content to present the menu, strengthen the brand, and guide the customer journey.', image: 'https://images.pexels.com/photos/33865961/pexels-photo-33865961.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920', tags: ['Webflow', 'CMS', 'Responsive Web'], details: 'A restaurant web concept centered on CMS-driven menu presentation, brand atmosphere, and a smooth digital customer journey.', projectType: 'Concept / demo', liveUrl: 'https://five-spice.netlify.app/' },
  { number: '04', title: 'Roast Ritual', type: 'Web / Coffee', description: 'Responsive React coffee brand website designed to make the menu, story, and daily ritual feel inviting on every screen.', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1800&q=90', tags: ['Branding', 'React', 'Responsive Web'], details: 'A React coffee website experience built around product discovery, brand atmosphere, and an inviting customer journey.', projectType: 'Client project', liveUrl: 'https://roast-ritual.netlify.app/' },
  { number: '05', title: 'Legends Gym', type: 'Web / Fitness', description: 'Responsive React fitness website with motion-led presentation for showcasing programs, building a strong identity, and supporting membership discovery.', image: 'https://legends-gym.netlify.app/assets/hero-gym-D4YCLO0s.jpg', tags: ['Branding', 'React', 'Responsive Web', 'Motion'], details: 'A fitness website experience built with React around visual identity, program discovery, motion, and a clear membership journey.', projectType: 'Client project', liveUrl: 'https://legends-gym.netlify.app/' },
  { number: '06', title: 'Crema Coffee House', type: 'Web / Coffee', description: 'Responsive coffee house website focused on presenting the menu, atmosphere, and personality of a neighborhood destination.', image: 'https://crema-coffee-house.netlify.app/img/hero-1.jpg', tags: ['Branding', 'UX/UI', 'Responsive Web'], details: 'A coffee house web experience focused on menu presentation, atmosphere, and helping visitors plan a visit through clear UX.', projectType: 'Client project', liveUrl: 'https://crema-coffee-house.netlify.app/' },
]

export const skills = [
  { name: 'Frontend', icon: Code2, list: 'React · TypeScript · CSS · Tailwind', note: 'Interfaces that feel as good as they function.' },
  { name: 'Backend', icon: Database, list: 'Node.js · APIs · SQL · Supabase', note: 'Reliable systems behind every beautiful screen.' },
  { name: 'Data & AI', icon: BrainCircuit, list: 'Python · ML · Data Science', note: 'Turning raw information into useful intelligence.' },
  { name: 'Design & Tools', icon: Palette, list: 'Figma · Git · VS Code · Netlify', note: 'A sharp toolkit from first sketch to launch.' },
]

export const services = [
  ['Web development', 'Responsive websites and web applications built from concept to launch with modern frontend tools.'],
  ['UI/UX implementation', 'Thoughtful interface designs translated into fast, accessible, and usable web experiences.'],
  ['Full-stack applications', 'Frontend, backend, APIs, and databases connected into reliable full-stack products.'],
  ['E-commerce experiences', 'Clear product journeys that make browsing, choosing, and buying feel simple.'],
  ['AI-powered products', 'Practical AI integrations and workflow automation for smarter, more useful digital tools.'],
  ['Performance & accessibility', 'Focused improvements to speed, responsive behavior, and inclusive user experiences.'],
] as const

export const experience = [
  ['2025 — now', 'Freelance web developer', 'Partnering with founders and local businesses to turn early ideas into polished digital experiences.'],
  ['2024 — now', 'Data science student', 'Studying the language of data, machine learning, and the systems that make products smarter.'],
  ['2023 — now', 'Building in public', 'Shipping experiments, e-commerce projects, and small tools that teach me something new.'],
] as const

export type Certification = { name: string; issuer: string; description: string; skills: string[]; date?: string; credentialUrl?: string }

export const certifications: Certification[] = [
  { name: 'Partnering with AI in the workplace', issuer: 'Datacom', description: 'Forage virtual experience focused on applying AI tools to workplace tasks, problem-solving, and productivity.', skills: ['AI', 'Generative AI', 'AI Productivity'], credentialUrl: 'https://www.theforage.com/completion-certificates/gCW7Xki5Y3vNpBmnn/YKTiJKCwxeXG3diLY_gCW7Xki5Y3vNpBmnn_6a7b13022339785293916c21_1787081375354_completion_certificate.pdf' },
  { name: 'Generative AI', issuer: 'LinkedIn Learning', description: 'Training focused on generative AI concepts, applications, and practical use cases.', skills: ['Generative AI', 'AI', 'LLMs'], credentialUrl: 'https://www.linkedin.com/learning/certificates/e2a3cf4626611c2dddacaf1407709f69549428afbd98136bd936a886f1c6b195?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BcMuEb%2FR7RdO%2BWhqON0ihZg%3D%3D' },
  { name: 'Data Analytics Job Simulation', issuer: 'Deloitte Australia', description: 'Practical data analytics experience covering business insights, data analysis, and communicating findings.', skills: ['Data Analysis', 'Business Insights', 'Data Analytics'], credentialUrl: 'https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_6a7b13022339785293916c21_1787243857432_completion_certificate.pdf' },
  { name: 'Microsoft Azure AI Essentials', issuer: 'Microsoft / LinkedIn Learning', description: 'Training covering foundational Microsoft Azure AI concepts, services, and practical AI applications.', skills: ['Azure AI', 'AI Services', 'Cloud AI'], credentialUrl: 'https://www.linkedin.com/learning/certificates/37b65cede190c171b093b1c3848f1fe977c460996504f841ff21cf6e5c7feb89?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BcMuEb%2FR7RdO%2BWhqON0ihZg%3D%3D' },
]