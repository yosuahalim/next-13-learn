import Link from "next/link";
import React, { Suspense } from "react";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Link href={"/todos"} className="text-red-600">
        Go to Todos
      </Link>
      <Link href={"/search"} className="text-red-600">
        Go to search
      </Link>
    </div>
  );
};

export default Home;
