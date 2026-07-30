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
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full min-h-[360px] hover:shadow-2xl transition-shadow duration-500">
      <Link href={link} className="flex flex-col h-full">
        <div className="h-48 sm:h-52 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
          <p className="text-gray-600 text-[12px] lg:text-[18px] line-clamp-2">{description}</p>
          <p className="text-gray-600 text-[12px] lg:text-[18px] mt-2">{category}</p>
          <p className="text-2xl font-bold text-green-500 mt-auto pt-3">{price}</p>
        </div>
      </Link>
    </div>
  );
}