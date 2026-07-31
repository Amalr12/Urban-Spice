import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

interface MenuHeroSectionProps {
  title?: string;
  description?: string;
  mainImage?: string;
  price?: number | string;
  id?: string | number;
}

export default function MenuIdHero({ title, description, mainImage, price, id }: MenuHeroSectionProps) {
  const pageTitle = title ?? "Menu item";
  const pageDescription = description ?? "";
  const pageImage = mainImage ?? "/images.jfif";
  const itemSlug = id ?? "menu-item";

  return (
    <section className="product-hero-bg pt-24 pb-0 md:pt-16 md:pb-10 md:mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 p-2 ">
          <div>
            <Link
              href="/menu"
              className="product-back-link mb-6 md:mb-8 md:text-base font-bold"
            >
              <BsArrowLeft className="h-2 w-2 md:h-4 md:w-4 mr-1 md:mr-2 text-2xl " />
              Back to Menu
            </Link>

            <h1 className="product-hero-title mb-3 md:mb-4 mt-0 md:mt-24 md:text-[48px] text-[28px] md:leading-14">
              {pageTitle}
            </h1>

            <p className="product-hero-description md:max-w-xl  ">{pageDescription}</p>
            <h1 className="product-hero-price md:text-3xl font-bold mt-2">₹{price}</h1>
             <Link href={`/order/${itemSlug}`} className="flex flex-col h-full ">
            <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-semibold transition cursor-pointer">
              Order Now
            </button>
          </Link>
          </div>
 
          <div className="relative w-full md:h-100 sm:h-80 h-60 ">
            <Image src={pageImage} alt={pageTitle} fill className="" />
          </div>
         
        </div>
       
      </div>
    </section>
  );
}