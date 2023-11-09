"use client";
import Image from "next/image";
import { logo } from "@/utils/constants";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const route = useRouter();
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    route.push(`/${search}`);
  };
  return (
    <div className="flex flex-row p-2 items-center drop-shadow-sm sticky bg-white top-0 z-10 justify-between">
      <Link href="/" style={{ display: "flex", alignItems: "center" }}>
        <Image src={logo} alt="logo" height={45} width={45} />
      </Link>
      {/* <SearchBar /> */}
      <form onSubmit={handleSubmit} className="shadow-sm">
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
export default Navbar;
