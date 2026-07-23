"use client";
import { Onest } from "next/font/google";
import Navbar from "../components/ui/Navbar";
import Image from "next/image";
export default function About() {
  return (
    <div className="flex flex-col flex-1  bg-zinc-50 font-sans relative h-screen " >
         <Navbar />
         <div className="flex min-h-[50vh] md:min-h-screen justify-center rounded-b-[4rem] rounded-t-none " 
        >
            <div className="absolute top-0 left-0 w-full h-[45%] bg-gradient-to-b from-black/90 to-transparent" ></div>
                <main className="w-full z-10 flex flex-col items-center md:pt-30 px-4 md:px-8 lg:px-16 " data-aos="fade-up" style={{ fontFamily: 'var(--font-onest)' }}>

                <h1 className="text-4xl md:text-6xl  z-50 ">About <span className="text-red-900">Urban Spices</span></h1>
                <p className="text-lg md:text-2xl  mb-8">Learn more about our restaurant and our story.</p>
               
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="mt-8  text-lg md:text-xl " style={{ fontFamily: 'var(--font-onest)' }}>
                <p>Urban Spices is a contemporary restaurant that brings together fresh ingredients, authentic flavors, and exceptional hospitality. Every dish is carefully crafted to create a memorable dining experience for every guest.</p>
                <p>At Urban Spices, we blend traditional recipes with modern culinary techniques to serve flavorful dishes in a warm and elegant atmosphere. From family dinners to special celebrations, every meal is made with passion.</p>
                </div> 
                <div className="mt-8">
                  <Image
                    src="/restbg1.jpg"
                    alt="Urban Spices"
                    width={500}
                    height={300}
                    className="rounded-lg shadow-lg "
                  />
                </div>
                </div>
               

                </main>
        </div>
    </div>
  );
}


