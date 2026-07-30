"use client"; 
import { useState } from "react";
import { menus } from "../../../../data/each-menus";
import SearchBar from "../../ui/searchbar";
import MenuCard from "./menucard";


export default function ExploreMenu() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const query = searchQuery.trim().toLowerCase();
  const filteredMenus = menus.filter((menu) => {
    if (!query) return true;

    const searchableText = `${menu.name} ${menu.category} ${menu.description}`.toLowerCase();
    return searchableText.includes(query);
  });

  return (
    <div className="py-20 bg-white p-5" id='explorecollection'>


      <div className="mb-8 lg:mb-12 flex flex-col  m-10">
        <h2 className="featured-section-title mb-0 leading-none lg:mb-3 lg:text-[48px] text-2xl font-bold" style={{ fontWeight: 500 }}>
          Explore Our Menus
        </h2>
        <p className="featured-section-description mt-3 lg:mt-6 lg:leading-6 text-[12px] lg:text-[18px]">
            Discover a world of flavors with our diverse menu offerings. From appetizers to desserts, we have something for every palate. Explore our menus and find your next favorite dish.
        </p>
      </div>

       <div className="w-full max-w-4xl mx-auto mb-6">
              <SearchBar
                searchTerm={searchTerm}
                onSearchTermChange={setSearchTerm}
                onSearch={() => setSearchQuery(searchTerm)}
              />
            </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-5 m-10 ">
        {filteredMenus.map((menu) => (
          <MenuCard
            key={menu.id}
            title={menu.name}
            image={menu.image}
            price={menu.price}
            description={menu.description}
            link={menu.link}
            category={menu.category}
          />
        ))}
      </div>
    </div>
  );
}

