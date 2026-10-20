export interface TestimonialItem {
    id: number;
    text: string;
    name: string;
    role: string;
} 

export const testimonialsData: TestimonialItem[] = [
  {
    id: 1,
    name: "John Smith",
    role: "Marketing Director at XYZ Corp",
    text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
  },
  {
    id: 2,
    name: "Jane Doe",
    role: "Director of Operations at Alpha Inc",
    text: '"Their targeted PPC and SEO strategies completely revamped our inbound client acquisition. Working with the Positivus team has been one of the smoothest, most transparent experiences we have had with an external agency."',
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Founder at Nova Retail",
    text: '"The strategic thinking and responsiveness Positivus brought to our campaigns resulted in a remarkable 200% growth in organic traffic. They are an indispensable partner for our long-term digital growth."',
  },
  {
    id: 4,
    name: "Emily Johnson",
    role: "Product Manager at Nexus Tech",
    text: '"From day one, the team demonstrated unmatched expertise in content strategy and performance monitoring. Every dollar invested translated directly into verifiable business metrics and revenue gains."',
  },
  {
    id: 5,
    name: "Brian Williams",
    role: "Head of Marketing at Global Brands",
    text: '"Highly organized, data-driven, and truly dedicated. Positivus helped scale our social media footprint while consistently optimizing conversion funnels across our customer journeys."',
  },
];
    