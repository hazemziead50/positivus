import React from "react";
import SectionHeading from "@/components/common/SectionHeading";
import TeamCard from "@/components/common/TeamCard";
import { teamMembers } from "@/data/team";
import { Button } from "@/components/ui/button";

export const Team: React.FC = () => {
  return (
    <section id="team" className="w-full py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        
        
        <SectionHeading
          title="Team"
          description="Meet the skilled and experienced team behind our successful digital marketing strategies"
        />

        {/* Cards of team*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>


        <div className="flex justify-center  md:justify-center lg:justify-end mt-10 md:mt-12">
          <Button
            asChild
            variant="dark"
            size="lg"
            className="w-full sm:w-auto px-12 py-5 text-base sm:text-lg rounded-[14px]"
          >
            <a href="#team">See all team</a>
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Team;
