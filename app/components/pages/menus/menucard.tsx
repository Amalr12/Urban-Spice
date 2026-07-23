import Link from "next/link";

interface MenuCardProps {
  title: string;
  image: string;
  description: string;
  link: string;
  price:string
  category: string;
}
export default function MenuCard({ title, image, description, link, price, category }: MenuCardProps) {
     return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
           <Link  href={link}>
                <img src={image} alt={title} className="w-full  object-cover" />
                <div className="md:p-4">
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-gray-600 text-[12px] lg:text-[18px]">{description}</p>
                       <p className="text-gray-600 text-[12px] lg:text-[18px]">{category}</p>
                    <p className="text-2xl font-bold text-green-500 mt-2">{price}</p>
                </div>
           </Link>
        </div>
    );
}