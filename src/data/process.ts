export interface ProcessStep {
  id: number;
  number: string;
  title: string;
  content: string;
}

export const workingProcessData: ProcessStep[] = [
  {
    id: 1,
    number: "01",
    title: "Consultation",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 2,
    number: "02",
    title: "Research and Strategy Development",
    content:
      "We conduct thorough market research and competitor analysis to create a tailored digital marketing strategy designed to achieve your specific business goals.",
  },
  {
    id: 3,
    number: "03",
    title: "Implementation",
    content:
      "Our team executes the defined strategy across chosen channels, from SEO optimization and PPC campaigns to social media management and high-quality content creation.",
  },
  {
    id: 4,
    number: "04",
    title: "Monitoring and Optimization",
    content:
      "We continuously track KPIs and performance metrics, making data-driven adjustments to maximize campaign efficiency and return on investment.",
  },
  {
    id: 5,
    number: "05",
    title: "Reporting and Communication",
    content:
      "You receive regular, transparent reports detailing progress, insights, and outcomes, accompanied by scheduled check-ins to keep you fully aligned.",
  },
  {
    id: 6,
    number: "06",
    title: "Continual Improvement",
    content:
      "Based on iterative feedback and evolving market trends, we refine strategies continuously to drive sustained growth and competitive edge.",
  },
];