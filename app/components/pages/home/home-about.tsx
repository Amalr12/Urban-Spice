import Image from "next/image";
import Link from "next/link";
import AboutImages from "./about-images";
import "aos/dist/aos.css";

export default function HomeAbout() {
    return (
        <div className="flex flex-col flex-1  mt-10 font-sans relative  " data-aos="fade-up">

              <div className="grid md:grid-cols-2 gap-24 items-center">

          <div className="space-y-6 pt-10">

            <span
              className="uppercase tracking-[0.7px] text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] leading-5"
              style={{ 
                
              }}
            >
              About Us
            </span>


            <h2
              className="text-[28px] md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-black leading-none  mt-2 font-medium" 
            >
              Welcome to <br /> Urban Spices
            </h2>

            <p
              className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] leading-normal text-justify"
             
            >
             Urban Spices is a modern restaurant brand offering delicious, high-quality meals in a sophisticated setting. We focus on using the finest ingredients, creative culinary techniques, and a welcoming atmosphere to create an unforgettable dining experience. From our signature dishes to our carefully curated beverages, Urban Spices delivers on every level.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center group md:mt-10">

              <span 
                className=" text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl  font-medium"
               
              >Learn More About Us</span>

              

            </Link>

          </div>
          <AboutImages />
      

          
          
        </div>
        </div>

    );
}