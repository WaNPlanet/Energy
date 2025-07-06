"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const pathname = usePathname();

  // Convert URL path into an array of segments
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <nav className="text-gray-600 text-sm py-4">
      <ul className="flex items-center space-x-2">
        {/* Home Link */}
        <li>
          <Link href="/" className="text-blue-500 hover:underline">
            Home
          </Link>
        </li>

        {/* Separator and Path Segments */}
        {pathSegments.map((segment, index) => {
          const fullPath = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;

          return (
            <li key={fullPath} className="flex items-center">
              <span className="mx-2">/</span>
              {!isLast ? (
                <Link href={fullPath} className="text-blue-500 hover:underline capitalize">
                  {decodeURIComponent(segment)}
                </Link>
              ) : (
                <span className="text-gray-500 capitalize">{decodeURIComponent(segment)}</span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
