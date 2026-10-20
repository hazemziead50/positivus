import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { type TeamMember } from "@/data/team";
import {LinkedInIcon} from "@/components/common/scoial-component"

interface TeamCardProps {
  member: TeamMember;
}


export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  
  return (
    <Card className="bg-white rounded-[35px] md:rounded-[45px] border border-positivus-dark p-7 sm:p-9 shadow-[0px_5px_0px_#191A23] transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-0 flex flex-col justify-between h-full gap-7">
        
      
        <div className="flex items-start justify-between relative">
          <div className="flex items-end gap-4">
            {/* image */}
            <div className="relative shrink-0 w-20 h-20 sm:w-24 sm:h-24">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-full h-full object-contain select-none"
              />
            </div>

            {/* name and role*/}
            <div className="flex flex-col">
              <h3 className="text-xl font-medium text-positivus-dark leading-tight">
                {member.name}
              </h3>
              <p className="text-sm sm:text-base text-positivus-dark/80 font-normal mt-0.5">
                {member.role}
              </p>
            </div>
          </div>

          {/* linkedin icon */}
         <a
              href={member.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name}'s LinkedIn profile`}
              className="shrink-0 hover:opacity-85 transition-opacity"
            >
            <LinkedInIcon
            className="w-8 h-8 object-contain" isWhite={false}/>
         </a>
        </div>

        {/* horizontal line*/}
        <hr className="border-t border-positivus-dark/20 my-0" />

        {/* experence*/}
        <p className="text-sm sm:text-base text-positivus-dark font-normal leading-relaxed">
          {member.experience}
        </p>
        
      </CardContent>
    </Card>
  );
};

export default TeamCard;