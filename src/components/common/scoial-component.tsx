import linkedinIconSrc from "@/assets/icons/linkedin-icon.svg"
import linkedinIconSrcWhite from "@/assets/icons/linkedin-white.svg"
import twitterIconSrc from "@/assets/icons/Twitter.svg"
import facebookIconSrc from "@/assets/icons/Facebook.svg"

export const LinkedInIcon = ({ className = "w-4 h-4", isWhite }: { className?: string, isWhite?: boolean }) => {
  return (
    <img
      src={isWhite ? linkedinIconSrcWhite : linkedinIconSrc}
      alt="LinkedIn"
      className={className}
    />
  );
};

export const TwitterIcon = ({ className = "w-4 h-4" }: { className?: string }) => {
  return (
    <img
      src={twitterIconSrc}
      alt="Twitter"
      className={className}
    />
  );
};

export const FacebookIcon = ({ className = "w-4 h-4" }: { className?: string }) => {
  return (
    <img
      src={facebookIconSrc}
      alt="Facebook"
      className={className}
    />
  );
};