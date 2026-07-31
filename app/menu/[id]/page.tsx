import MenuIdHero from "@/app/components/pages/menus_id/menu-id-hero";
import { MenuData } from "@/data/each-mennu-details";
import { notFound } from "next/navigation";

interface MenuHero {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: MenuHero) {
  const { id } = await params;
  const menu = MenuData[id];

  if (!menu) {
    notFound();
  }

  const heroProps = {
    title: menu.title ?? menu.name,
    description: menu.description,
    mainImage: menu.mainImage ?? menu.image?.[0],
    price: menu.price,
    id,
  };

  return (
    <div className="bg-gray-100 h-full">
      <MenuIdHero {...heroProps} />
    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(MenuData).map((id) => ({ id }));
}