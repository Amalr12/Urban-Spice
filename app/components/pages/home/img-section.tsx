import Image from "next/image";
import "aos/dist/aos.css";
export default function ImageSection() {
  return (
   <section className=" py-20" >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 items-center gap-12 px-6 mb-10" data-aos="fade-up">

        {/* Left Image */}
        <div className="flex justify-center">
          <div className="relative w-[420px] h-[520px] overflow-hidden rounded-t-[220px] rounded-b-[220px]">
            <Image
              src="/dish1.jpg"
              alt="Organic"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Center Content */}
        <div className="text-center lg:text-left">
          <h2 className="font-serif text-6xl leading-tight text-[#3D433B]">
            Premium <br />
            Organic <br />
            Selection
          </h2>

          <p className="text-gray-500 mt-8 leading-8">
            We take pride in sourcing only the highest quality organic
            products. Our extensive selection of farm-fresh fruits,
            vegetables, and more is handpicked to ensure you receive the
            best in organic goodness.
          </p>

          <button className="mt-10 border border-gray-400 px-12 py-4 hover:bg-black hover:text-white transition">
           Explore More
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-end">
          <div className="relative w-[170px] h-[520px] overflow-hidden">
            <Image
              src="/photo-1414235077428-338989a2e8c0.avif"
              alt="Decoration"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12 px-6 mt-20" data-aos="fade-right">

        {/* Left Image */}
     

        {/* Center Content */}
        <div className="text-center lg:text-left">
          <h2 className="font-serif text-6xl leading-tight text-[#3D433B]">
            Premium <br />
            Organic <br />
            Selection
          </h2>

          <p className="text-gray-500 mt-8 leading-8">
            We take pride in sourcing only the highest quality organic
            products. Our extensive selection of farm-fresh fruits,
            vegetables, and more is handpicked to ensure you receive the
            best in organic goodness.
          </p>

          <button className="mt-10 border border-gray-400 px-12 py-4 hover:bg-black hover:text-white transition">
           Explore More
          </button>
        </div>
           <div className="flex justify-center">
          <div className="relative w-[420px] h-[520px] overflow-hidden rounded-t-[220px] rounded-b-[220px]">
            <Image
              src="/dish1.jpg"
              alt="Organic"
              fill
              className="object-cover"
            />
          </div>
        </div>

       

      </div>
    </section>
  );
}
    