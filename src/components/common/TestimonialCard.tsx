import React from "react";
import { type TestimonialItem } from "@/data/testimonials";

interface TestimonialCardProps {
  item: TestimonialItem;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ item }) => {
  return (
    <div className="flex flex-col items-center md:items-start max-w-[600px] mx-auto select-none">
      
      {/* box testimonial*/}
      <div className="relative border border-positivus-green rounded-[35px] md:rounded-[45px] p-8 md:p-12 text-white bg-positivus-dark">
         {/* triangle */}
        <p className="text-sm md:text-base lg:text-lg font-normal leading-relaxed text-white/95">
          {item.text}
        </p>
          {/*external triangle */ }
        <div className="absolute bottom-[-20px] left-12 md:left-16 w-0 h-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-t-[20px] border-t-positivus-green">
         {/*internal triangle */ }
          <div className="absolute -top-[21px] -left-[16px] w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[19px] border-t-positivus-dark" />
        </div>
      </div>

      {/* name client and role*/}
      <div className="mt-8 pl-12 md:pl-16 flex flex-col items-start">
        <h4 className="text-lg md:text-xl font-medium text-positivus-green">
          {item.name}
        </h4>
        <p className="text-sm md:text-base text-white/80 font-normal">
          {item.role}
        </p>
      </div>

    </div>
  );
};

export default TestimonialCard;