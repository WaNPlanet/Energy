import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="flex flex-col h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/p3.jpg')" }} // Background applied to entire screen
    >
      {/* Navbar */}
      <div className="navbar bg-transparent shadow-none"> {/* Transparent navbar */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-800 bg-opacity-80 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-white">Boadi Corp.</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Item 1</a></li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <div className="navbar-end">
        <button className="btn btn-outline"> 
        <Image src="/user.png" alt="Arrow" width={16} height={16} />
          Login
        </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-start w-full px-5">
      <div className="flex flex-col items-start text-left">
        <h1 className="text-4xl md:text-6xl font-bold">
          Choose a Future with
          <br />
              <span style={{ color: "oklch(0.828 0.111 230.318)" }}>
                Reliable Energy Solutions
              </span>

        </h1>

        {/* Links */}
        <div className="flex gap-6 mt-6">
          <Link href="#" className="flex items-center space-x-2 underline hover:text-gray-300">
            <span>Electricity Supply</span>
            <Image src="/arrow.svg" alt="Arrow" width={16} height={16} />
          </Link>
          <Link href="#" className="flex items-center space-x-2 underline hover:text-gray-300">
            <span>Other Supplies</span>
            <Image src="/arrow.svg" alt="Arrow" width={16} height={16} />
          </Link>
        </div>
      </div>

      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: "oklch(0.828 0.111 230.318)" }} className="w-full  bg-opacity-80 text-white py-10 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} PowerPulse Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}
