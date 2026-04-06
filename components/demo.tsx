"use client"
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";

import { motion } from "motion/react";

const testimonials = [
  {
    text: "The entire process from university selection to visa approval was smooth and stress-free. Highly professional team.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "Student – Australia",
  },
  {
    text: "They guided me step by step and helped me secure admission in the UK. Everything was clearly explained.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
    role: "Student – UK",
  },
  {
    text: "Dami cha, ekdam helpful consultancy. Visa pani easily approve bhayo.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "Student – Canada",
  },
  {
    text: "I was confused about my future, but their counseling helped me choose the right path. Now I’m studying in the USA.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "Student – USA",
  },
  {
    text: "Very supportive team. They handled my documentation and visa process perfectly.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "Student – Australia",
  },
  {
    text: "From application to final visa, everything was managed smoothly. Great experience overall.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "Student – Canada",
  },
  {
    text: "They helped me shortlist universities based on my budget and profile. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
    role: "Student – UK",
  },
  {
    text: "The counselors were friendly and always available. I never felt lost during the process.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Student – USA",
  },
  {
    text: "Got my visa approved on the first attempt. Their preparation and guidance made a big difference.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Hassan Ali",
    role: "Student – Australia",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);


export default function Testimonials(){
 return (
    <section className="bg-background my-20 relative">

      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[840px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">Testimonials</div>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            What Our Students Say
          </h2>
          <p className="text-center mt-5 opacity-75">
            See what our students have to say about us and their experiences  .
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}
 
