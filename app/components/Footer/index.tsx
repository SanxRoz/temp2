"use client";

import Image from "next/image";
import Link from "next/link";
import {
  InstagramLogo,
  FacebookLogo,
  TwitterLogo,
  Lightning,
} from "@phosphor-icons/react";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  section: string;
  link: string[];
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Menu",
    link: ["Home", "Popular", "About", "Contact"],
  },
  {
    id: 2,
    section: "Category",
    link: ["Design", "Mockup", "View all", "Log In"],
  },
  {
    id: 3,
    section: "Pages",
    link: ["404", "Instructions", "License"],
  },
  {
    id: 4,
    section: "Others",
    link: ["Styleguide", "Changelog"],
  },
];

const footer = () => {
  return (
    <div className="-mt-40" id="first-section">
      <div className="mx-auto max-w-2xl pt-48 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          {/* COLUMN-1 */}

          <div className="col-span-4">
            <div className="flex gap-1">
              <Lightning size={40} color="#fff" weight="duotone" />
              <h3 className="text-white text-4xl font-semibold leading-9 mb-4 lg:mb-20">
                {" "}
                Bold
              </h3>
            </div>
            <div className="flex gap-4">
              <div className="footer-icons">
                <Link href="https://facebook.com">
                  <FacebookLogo size={30} color="#fff" weight="duotone" />
                </Link>
              </div>
              <div className="footer-icons">
                <Link href="https://twitter.com">
                  <TwitterLogo size={30} color="#fff" weight="duotone" />
                </Link>
              </div>
              <div className="footer-icons">
                <Link href="https://instagram.com">
                  <InstagramLogo size={30} color="#fff" weight="duotone" />
                </Link>
              </div>
            </div>
          </div>

          {/* CLOUMN-2/3 */}

          {products.map((product) => (
            <div key={product.id} className="group relative col-span-2">
              <p className="text-white text-xl font-extrabold mb-9">
                {product.section}
              </p>
              <ul>
                {product.link.map((link: string, index: number) => (
                  <li key={index} className="mb-5">
                    <Link
                      href="/"
                      className="text-white text-lg font-normal mb-6 hover:font-bold hover:tracking-[1px] space-links"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* All Rights Reserved */}

      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4">
          <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8">
            <div>
              <h3 className="text-center md:text-start text-offwhite text-lg">
                @2023 - All Rights Reserved by{" "}
                <Link href="https://twitter.com/SanxRoz" target="_blank">
                  {" "}
                  @SanxRoz
                </Link>
              </h3>
            </div>
            <div className="flex justify-center md:justify-end">
              <Link href="/">
                <h3 className="text-offwhite pr-6">Privacy policy</h3>
              </Link>
              <Link href="/">
                <h3 className="text-offwhite pl-6 border-solid border-l border-footer">
                  Terms & conditions
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
