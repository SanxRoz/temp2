import React, { ReactNode } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface DrawerProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Drawer = ({ children, isOpen, setIsOpen }: DrawerProps) => {
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-150 translate-x-0  "
          : " transition-all delay-150 opacity-0 -translate-x-full  ")
      }
    >
      <section
        className={
          "w-340px max-w-lg left-0 backdrop-blur-xl border-r-2 border-[#ffffff33] border-dashed absolute bg-[##53535344] h-full shadow-xl delay-400 duration-150 ease-in-out transition-all transform " +
          (isOpen ? "translate-x-0" : "-translate-x-full")
        }
      >
        <article className="relative w-340px p-10 max-w-lg pb-10 flex flex-col space-y-6 h-full">
          <header className="px-4 py-4 flex items-center">
            <div className="flex flex-shrink-0 items-center border-right">
              <Link href="/" className="text-2xl font-semibold">
                Bold
              </Link>
            </div>

            <XMarkIcon
              className="block h-6 w-6"
              onClick={() => {
                setIsOpen(false);
              }}
            />
          </header>
          <div
            onClick={() => {
              setIsOpen(false);
            }}
          >
            {children}
          </div>
        </article>
      </section>
      <section
        className="w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
};

export default Drawer;
