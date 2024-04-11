import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-300 p-2">
      <ul className="flex justify-center gap-8 items-center text-lg font-semibold uppercase">
        <li>
          <Link className="hover:text-gray-600" href="/">
            Home
          </Link>
        </li>

        <li>
          <Link className="hover:text-gray-600" href="/todos">
            Todos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
