import Image from "next/image";

export default function AboutImages() {
  return (
   <div className="relative md:p-8">
      <div className="md:space-y-4">
        <div className="grid md:grid-cols-2 gap-4 relative z-10">
          <div className="relative overflow-hidden rounded-xl shadow-lg h-54 ">
            <Image
              src="/photo-1414235077428-338989a2e8c0.avif"
              alt="Interior"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="relative overflow-hidden rounded-xl shadow-lg h-64">
            <Image
              src="/images.jfif"
              alt="Kitchen"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />

          </div>
          
        </div>
          
      </div>
  
    </div>
  );}
    