import React from "react";
import SectionHeading from "@/components/common/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { workingProcessData } from "../../data/process";

 const WorkingProcess: React.FC = () => {
  return (
    <section id="process" className="w-full py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading
          title="Our Working Process"
          description="Step-by-Step Guide to Achieving Your Business Goals"
        />


        <Accordion
          type="single"
          collapsible
          defaultValue="1"  // first item is open by default 
          className="flex flex-col gap-6 md:gap-[30px]"
        >
          {workingProcessData.map((step) => (
            <AccordionItem
              key={step.id}
              value={step.id.toString()}
              className="rounded-[30px] sm:rounded-[40px] md:rounded-[45px] border border-positivus-dark px-6 py-6 sm:px-10 sm:py-8 lg:px-[60px] lg:py-10 shadow-[0px_5px_0px_#191A23] transition-colors duration-300 data-[state=open]:bg-positivus-green data-[state=closed]:bg-positivus-grey"
            >
              {/* titles and number of step */}
              <AccordionTrigger className="hover:no-underline py-0">
                <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
                  <span className="text-3xl sm:text-4xl md:text-6xl font-medium text-positivus-dark">
                    {step.number}
                  </span>
                  <span className="text-base sm:text-xl md:text-3xl font-medium text-positivus-dark">
                    {step.title}
                  </span>
                </div>
              </AccordionTrigger>

              {/* content*/}
              <AccordionContent className="p-0 pt-6 sm:pt-8">
                <div className="border-t border-positivus-dark/30 pt-6 sm:pt-7">
                  <p className="text-base sm:text-lg text-positivus-dark font-normal leading-relaxed">
                    {step.content}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  );
};

export default WorkingProcess;