import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import logoWhite from "@/assets/Logo/logo.svg";
import { LinkedInIcon, FacebookIcon, TwitterIcon } from "@/components/common/scoial-component";
import { navLinks } from '@/data/navLinks'

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed:", newsletterEmail);
    setNewsletterEmail("");
  };

  return (
    <footer className="w-full mt-16 md:mt-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        <div className="bg-positivus-dark text-white rounded-t-[35px] md:rounded-t-[45px] p-8 sm:p-12 lg:p-14">


          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-12 border-b border-white/20">
            {/* logo */}
            <a href="#home" aria-label="Positivus Home" className="shrink-0">
              <img
                src={logoWhite}
                alt="Positivus"
                className="h-8 md:h-9 w-auto brightness-0 invert"
              // brightness-0 invert :Transform the logo to white color
              />
            </a>

            {/*  navlinks */}
            <ul className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-base text-white/90 hover:text-positivus-green underline-offset-4 hover:underline transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* social media icons*/}
            <div className="flex items-center gap-4">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-white text-positivus-dark flex items-center justify-center "
              >
                <LinkedInIcon className="w-7 h-7 " isWhite={true} />
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-black text-positivus-dark flex items-center justify-center "
              >
                <FacebookIcon className="w-8 h-8   stroke-none" />
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-8 h-8 rounded-full bg-white text-positivus-dark flex items-center justify-centeren transition-colors"
              >
                <TwitterIcon className="w-7 h-7  stroke-none" />
              </a>
            </div>
          </div>

        
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center py-12">

            {/* contact information*/}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left gap-5">
              <span className="bg-positivus-green text-positivus-dark font-medium text-lg px-2.5 py-0.5 rounded-[7px]">
                Contact us:
              </span>

              <div className="flex flex-col gap-3 text-base text-white/90">
                <p>Email: info@positivus.com</p>
                <p>Phone: 555-567-8901</p>
                <p className="max-w-[300px]">
                  Address: 1234 Main St Moonstone City, Stardust State 12345
                </p>
              </div>
            </div>

            {/* box email*/}
            <div className="lg:col-span-7 bg-[#292A32] rounded-[14px] p-7 sm:p-10">
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row items-center gap-5 justify-between"
              >
                <input
                  type="email"
                  required
                  placeholder="Email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full sm:flex-1 bg-transparent border border-white rounded-[14px] px-6 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-positivus-green transition-all"
                />

                <Button
                  type="submit"
                  variant="green"
                  className="w-full sm:w-auto px-8 py-4 text-base font-medium rounded-[14px] shrink-0"
                >
                  Subscribe to news
                </Button>
              </form>
            </div>

          </div>

         
          <div className="pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-start gap-6 sm:gap-10 text-sm text-white/80">
            <p>© {new Date().getFullYear()} Positivus. All Rights Reserved.</p>
            <a
              href="#privacy"
              className="underline hover:text-positivus-green transition-colors"
            >
              Privacy Policy
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;