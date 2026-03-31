import { Header } from "./header-3";




export default function VidMed(){
  

  return (
    <div className="relative h-screen w-full overflow-hidden">
  <Header />

  <video
    className="absolute inset-0 w-full h-full object-cover"
    src="vdeo.mp4"
    autoPlay
    muted
    loop
    playsInline
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40" />

  {/* Content */}
  <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
    <div>
      <h1 className="text-4xl md:text-6xl font-bold text-white">
        Unlock Your Global Future
      </h1>
      <p className="mt-4 text-white/80 max-w-xl mx-auto">
        Expert consultancy to guide you towards international education and career success.
      </p>
    </div>
  </div>
</div>
  );
};


