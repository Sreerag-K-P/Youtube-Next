"use client";
import { categories } from "@/utils/constants";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Sidebar = ({ selected }) => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState(selected);
  return (
    <div className="flex flex-row overflow-y-auto h-auto md:h-[95%] md:flex-col">
      {categories.map((category) => (
        <button
          onClick={() => {
            setSelectedCategory(category.name);
            router.push(`/${category.name}`);
          }}
          className={`${
            category.name === selectedCategory && "text-black"
          }font-bold py-2 my-3 rounded-xl transition-all capitalize flex items-center justify-start cursor-pointer bg-transparent outline-none border-none px-4`}
          key={category.name}
        >
          <span
            className={`${
              category.name.replace(" ", "%20") === selectedCategory
                ? "opacity-100"
                : "opacity-75"
            } font-bold`}
          >
            {category.name}
          </span>
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
