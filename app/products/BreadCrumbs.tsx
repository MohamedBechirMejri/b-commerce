"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbHome } from "react-icons/tb";

const BreadCrumbs = () => {
  const pathname = usePathname();
  const paths = pathname.split("/");

  return (
    <div className="flex items-center gap-1 text-sm text-gray-500 w-full max-w-7xl mx-auto p-5 capitalize">
      {paths.map((path, i) => {
        const isLast = i === paths.length - 1;
        const link = paths.slice(0, i + 1).join("/") || "/";

        if (isLast) return <span key={"breadcrumblink" + i}>{path}</span>;

        return (
          <Link
            href={link}
            key={"breadcrumblink" + i}
            className="flex items-center gap-1"
          >
            <div className="hover:underline">
              {path || (
                <span className="flex gap-1 items-center">
                  <TbHome className="-mt-0.5" /> {"Home"}
                </span>
              )}
            </div>
            <span>/</span>
          </Link>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
