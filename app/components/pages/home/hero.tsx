
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "../../ui/Navbar";
export default function Hero() {


  return (
    <div className="flex flex-col flex-1  bg-zinc-50 font-sans relative h-screen " >
         <Navbar />
         <div className="flex min-h-[50vh] md:min-h-screen justify-center rounded-b-[4rem] rounded-t-none " style={{
        backgroundImage: "url('/moody-restaurant-interior-website-background.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      >
         <div className="absolute top-0 left-0 w-full h-[45%] bg-gradient-to-b from-black/90 to-transparent" ></div>
             <main className="w-full z-10 flex flex-col items-center md:pt-30 px-4 md:px-8 lg:px-16" data-aos="fade-up" style={{ fontFamily: 'var(--font-onest)' }}>
                
                <h1 className="text-4xl md:text-6xl  text-gray-200 ">Taste the Art of Fine Dining</h1>
                <p className="text-lg md:text-2xl text-gray-200 mb-8">Experience the finest dining with us.</p>
                <button className="border border-white rounded text-white font-bold py-2 px-4 rounded">
                  Make a Reservation
                </button>
             </main>
      </div>
    </div>
  );
}
