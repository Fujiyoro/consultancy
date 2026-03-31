import {
  BentoCell,
  BentoGrid,
  ContainerScale,
  ContainerScroll,
} from "@/components/hero-gallery-scroll-animation";
import { Button } from "@/components/ui/button";

const IMAGES = [
  "https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?q=80&w=2368&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
];

const HeroDemo1 = () => {
  return (
    <div className="container mx-auto mb-20">
      <ContainerScroll className="h-[350vh]">
        {/* Removed sticky/top-0/h-screen — ContainerScroll handles that now */}
        <BentoGrid className="absolute inset-0 z-0 h-full w-full p-4">
          {IMAGES.map((imageUrl, index) => (
            <BentoCell
              key={index}
              className="overflow-hidden rounded-xl shadow-xl"
            >
              <img
                className="size-full object-cover object-center"
                src={imageUrl}
                alt=""
              />
            </BentoCell>
          ))}
        </BentoGrid>

        <ContainerScale className="text-center">
          <h1 className="max-w-xl text-5xl font-bold tracking-tighter text-slate-800">
  Unlock Your Global Opportunities
</h1>
<p className="my-6 max-w-xl text-sm text-slate-700 md:text-base">
  We help students and professionals achieve their dreams with personalized guidance, strategic planning, and expert support to succeed abroad. Your journey starts here.
</p>
        </ContainerScale>
      </ContainerScroll>
    </div>
  );
};

export { HeroDemo1 };
