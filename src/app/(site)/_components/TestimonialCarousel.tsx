"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

export function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selected, setSelected] = useState(0);

  const testimonials = [
    {
      quote: "Mechanical Engineering to ₹9 LPA Software Job",
      name: "Surya Vamsi",
      degree: "Mechanical Engineering",
      company: "Ascent Academy",
    },
    {
      quote: "B.Tech Graduate to Software Engineer",
      name: "Rahul Kumar",
      degree: "Electronics Engineering",
      company: "Infosys",
    },
    {
      quote: "Civil Engineering to Data Analyst",
      name: "Priya Sharma",
      degree: "Civil Engineering",
      company: "TCS",
    },
  ];

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", () => {
      setSelected(emblaApi.selectedScrollSnap());
    });

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="flex items-center justify-center flex-col flex-1 overflow-hidden mr-20 mt-20 select-none">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((item, index) => (
            <div key={index} className="flex-[0_0_100%] px-4 text-center">
              <p className="text-xl font-medium text-slate-700">{item.quote}</p>

              <div className="mt-6 flex justify-center items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-300" />

                <div className="text-left">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.degree}</p>
                </div>

                <div className="h-8 w-px bg-slate-300 mx-2" />

                <p className="text-sm font-medium text-slate-600">
                  {item.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-2 rounded-full transition-all ${
              selected === i ? "w-6 bg-slate-700" : "w-2 bg-slate-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
