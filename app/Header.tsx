import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="p-5 bg-blue-500">
      <Link href={"/"} className="px-2 py-1 bg-white rounded-lg text-blue-500">
        Home
      </Link>
    </header>
  );
};

export default Header;
