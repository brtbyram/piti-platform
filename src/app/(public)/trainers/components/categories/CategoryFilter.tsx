"use client";

import { useState } from "react";
import { Icon } from "../../../../../../public/Icons";

function CategoryFilter({activeCategory, setActiveCategory}) {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="flex shrink space-x-2 font-semibold">
      <button
        onClick={() => setFilterOpen(true)}
        className="text-[#222222] flex items-center px-4 border rounded-xl py-2.5 hover:border-black hover:bg-[#f5f5f5]"
      >
        <span className="flex items-center justify-center space-x-2 text-xs">
          <Icon name="filter" size={16} />
          <span>Filtreler</span>
        </span>
      </button>
      <button className="text-[#222222] flex items-center space-x-2 px-4 border rounded-xl py-2.5 hover:border-black hover:bg-[#f5f5f5]">
        <span className="flex items-center justify-center space-x-2 text-xs min-w-max">
          Sıralama
        </span>
      </button>
      {filterOpen && (
        <div className='fixed top-0 left-0 right-0 z-20 h-screen w-full bg-[#000000]/50'>
            <div className="bg-white border rounded-2xl my-10 w-[780px] h-[880px] overflow-hidden mx-auto">
              <header className="relative flex justify-center items-center w-full p-6">
                <h1 className="leading-5 font-bold">Filtreler</h1>
                <button onClick={() => setFilterOpen(false) } className="absolute  left-4 p-2 rounded-full hover:bg-[#f7f7f7]">
                  <Icon name="close" size={20} />
                </button>
              </header>
              <hr />
                <div className="p-6 h-full overflow-scroll">
                </div>
            </div>
        </div>
      )}
    </div>
  );
}

export default CategoryFilter;
