"use client";

import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/search/${search}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={search}
        placeholder="Enter the search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-lg"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
