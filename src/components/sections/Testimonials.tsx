import React, { useState, useEffect } from "react";
import SectionHeading from "@/components/common/SectionHeading";
import TestimonialCard from "@/components/common/TestimonialCard";
import { testimonialsData } from "@/data/testimonials";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight,Sparkle } from "lucide-react";

export const Testimonials: React.FC = () => {
  const[api,setApi] = useState<CarouselApi>()
  const[current,setCurrent] = useState(0);
  const[count,setCount] = useState(0)

  
  useEffect(() => {
    if(!api) return
    setCount(api.scrollSnapList().length) //Calc Sn ap points to creat the stars
    setCurrent(api.selectedScrollSnap()) // send the curent selected slide index

    const handler = ()=>{
      setCurrent(api.selectedScrollSnap())
    }
    api.on("select",handler)
    //cleanup function run when component unmounts
    return ()=>{api.off('select',handler)}


  }, [api]);

  return (
    <section id="testimonials" className="w-full py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
       
        <SectionHeading
          title="Testimonials"
          description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
        />

       
        <div className="bg-positivus-dark rounded-[35px] md:rounded-[45px] py-10 sm:py-14 lg:py-20 px-4 sm:px-8 lg:px-12 overflow-hidden">
          
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            {/* Cards of testimonial */}
            <CarouselContent className="-ml-4">
              {testimonialsData.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="pl-4 basis-full md:basis-[75%] lg:basis-[60%]"
                >
                  <TestimonialCard item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/*carousel controls */}
            <div className="flex items-center justify-center gap-12 sm:gap-16 mt-14 sm:mt-16 text-white">
              {/* Previous button */}
              <button
                type="button"
                onClick={() => api?.scrollPrev()}
                className="text-white hover:text-positivus-green transition-colors p-2 cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-6 h-6 md:w-7 md:h-7" />
              </button>

              {/* Pagination Dots */}
              <div className="flex items-center gap-3">
                {Array.from({ length: count }).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className="focus:outline-none transition-transform hover:scale-125 cursor-pointer"
                  >
                    {/* star icon*/}
                    <Sparkle
                      className={`w-3.5 h-3.5 transition-colors duration-300 ${
                        current === index
                          ? "fill-positivus-green text-positivus-green"
                          : "fill-white text-white opacity-70"
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* Next button*/}
              <button
                type="button"
                onClick={() => api?.scrollNext()}
                className="text-white hover:text-positivus-green transition-colors p-2 cursor-pointer"
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-6 h-6 md:w-7 md:h-7" />
              </button>
            </div>

          </Carousel>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;