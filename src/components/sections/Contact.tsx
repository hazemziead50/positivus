import React, { useState } from "react";
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import contactIllustration from "@/assets/images/illustrations/Illustration-contact.svg";

export const Contact: React.FC = () => {
 
  const [contactType, setContactType] = useState<"say-hi" | "get-quote">("say-hi");
  

  const [formData, setFormData] = useState({ //controled form
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ 
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // تنفيذ منطق الإرسال هنا
    console.log("Form Submitted:", { contactType, ...formData });
  };

  return (
    <section id="contact" className="w-full py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        
 
        <SectionHeading
          title="Contact Us"
          description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
        />

        {/* big grey container */}
        <div className="relative bg-positivus-grey rounded-[35px] md:rounded-[45px] p-8 sm:p-12 lg:p-16 overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            

            <div className="lg:col-span-7 xl:col-span-6 z-10">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                {/* Radio Buttons */}
                <div className="flex items-center gap-9 mb-2">
                  
                  {/*  Say Hi */}
                  <label className="flex items-center gap-3 cursor-pointer text-base sm:text-lg text-positivus-dark select-none">
                    <input
                      type="radio"
                      name="contactType"
                      value="say-hi"
                      checked={contactType === "say-hi"}
                      onChange={() => setContactType("say-hi")}
                      className="sr-only" // إخفاء زر الراديو الافتراضي واستبداله بالتصميم المخصص
                    />
                    <div className="w-7 h-7 rounded-full border border-positivus-dark bg-white flex items-center justify-center transition-all">
                      {contactType === "say-hi" && (
                        <div className="w-3.5 h-3.5 rounded-full bg-positivus-green" />
                      )}
                    </div>
                    <span>Say Hi</span>
                  </label>

                  {/* Get a Quote */}
                  <label className="flex items-center gap-3 cursor-pointer text-base sm:text-lg text-positivus-dark select-none">
                    <input
                      type="radio"
                      name="contactType"
                      value="get-quote"
                      checked={contactType === "get-quote"}
                      onChange={() => setContactType("get-quote")}
                      className="sr-only"
                    />
                    <div className="w-7 h-7 rounded-full border border-positivus-dark bg-white flex items-center justify-center transition-all">
                      {contactType === "get-quote" && (
                        <div className="w-3.5 h-3.5 rounded-full bg-positivus-green" />
                      )}
                    </div>
                    <span>Get a Quote</span>
                  </label>

                </div>

                {/* name */}
                <div className="flex flex-col gap-2 text-left">
                  <label htmlFor="name" className="text-base font-normal text-positivus-dark">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full bg-white border border-positivus-dark rounded-[14px] px-6 py-4 text-base text-positivus-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-positivus-green transition-all"
                  />
                </div>

                {/* email */}
                <div className="flex flex-col gap-2 text-left">
                  <label htmlFor="email" className="text-base font-normal text-positivus-dark">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full bg-white border border-positivus-dark rounded-[14px] px-6 py-4 text-base text-positivus-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-positivus-green transition-all"
                  />
                </div>

                {/* text area */}
                <div className="flex flex-col gap-2 text-left">
                  <label htmlFor="message" className="text-base font-normal text-positivus-dark">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    className="w-full bg-white border border-positivus-dark rounded-[14px] px-6 py-4 text-base text-positivus-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-positivus-green transition-all resize-none"
                  />
                </div>

                {/* submit button*/}
                <Button
                  type="submit"
                  variant="dark"
                  size="lg"
                  className="w-full py-5 text-base sm:text-lg rounded-[14px] mt-2"
                >
                  Send Message
                </Button>

              </form>
            </div>

            
            <div className="hidden lg:flex items-center absolute right-[-273px] top-1/2 -translate-y-1/2 h-full pointer-events-none select-none">
              <img
                src={contactIllustration}
                alt="Contact Illustration"
                className="h-[85%] max-h-[550px] w-auto object-contain object-right"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;