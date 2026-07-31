import OrderPage from "@/app/components/pages/contacts/order";
import { MenuData } from "@/data/each-mennu-details";
import { menus as menuList } from "@/data/each-menus";
import { notFound } from "next/navigation";

interface OrderRouteProps {
  params: Promise<{
    id: string;
  }>;
}

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default async function OrderRoute({ params }: OrderRouteProps) {
  const { id } = await params;

  const menuFromData = MenuData[id];
  const menuFromList = menuList.find((item) => slugify(item.name) === id);

  const item = menuFromData
    ? {
        title: menuFromData.title ?? menuFromData.name,
        image: menuFromData.mainImage ?? menuFromData.image?.[0] ?? "/images.jfif",
        description: menuFromData.description,
        link: `/menu/${id}`,
        price: menuFromData.price,
        category: menuFromData.category,
      }
    : menuFromList
      ? {
          title: menuFromList.name,
          image: menuFromList.image,
          description: menuFromList.description,
          link: `/menu/${id}`,
          price: menuFromList.price,
          category: menuFromList.category,
        }
      : undefined;

  if (!item) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8">
      <OrderPage
        title={item.title}
        image={item.image}
        description={item.description}
        link={item.link}
        price={item.price}
        category={item.category}
      />
    </div>
  );
}
