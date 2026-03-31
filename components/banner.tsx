export default function Banner() {
  return (
    <>
      <div className="container mx-auto bg-blue-500  mb-20 rounded-lg relative overflow-hidden">
        <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary to-primary/70 shadow-2xl flex items-center justify-center absolute right-[-90] top-[-220]" />
        <img src="circle_top_right.png" className="absolute right-[160] top-[-50]" alt="circle decoration" />
        <img src="top_left.png" className="absolute left-[-40] top-[-50]" alt="top left decoration" />
        <img src="top_left_2.png" className="absolute left-[-100] top-[-50]" alt="top left decoration 2" />
        
        <div className="relative z-10 h-full flex flex-col justify-center pt-15  pb-15 px-8 md:px-20 ">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-2xl">
            Our Global Partners
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            We&apos;ve partnered with 500+ leading organizations across 50+ countries to deliver transformative consulting solutions and drive sustainable business growth.
          </p>
        </div>
      </div>
    </>
  );
}
