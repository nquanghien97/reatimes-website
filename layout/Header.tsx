'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuHeader } from "./MenuHeader";
import { usePathname } from "next/navigation";
import { ButtonIcon } from "@/components/ui/ButtonIcon";
import MenuIcon from "@/assets/icons/MenuIcon";
import Sidebar from "./sidebar";

function Header() {
  const [hideTop, setHideTop] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHideTop(true);
      } else {
        setHideTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Sidebar menuSidebar={MenuHeader} open={openSidebar} setOpen={setOpenSidebar} />
      <header className={`min-h-[60px] flex items-center justify-center ${hideTop ? 'fixed top-0 left-0' : ''} duration-300 w-full px-2 bg-[#4088b7] z-[99]`}>
        <div className="relative w-full flex items-center justify-between">
          <div className="absolute top-1/2 -translate-y-1/2 left-2 lg:hidden" onClick={() => setOpenSidebar(true)}>
            <ButtonIcon>
              <MenuIcon />
            </ButtonIcon>
          </div>
          <div className="m-auto">
            <Link href="/" className="mx-4">
              LOGO
            </Link>
          </div>
          <div className="flex items-center justify-center flex-1 max-lg:hidden">
            <ul className="flex items-center justify-center gap-4">
              {MenuHeader.map(header => (
                <li key={header.id} className={`text-white ${header.path === '/' ? 'max-lg:hidden' : ''}`}>
                  <Link href={header.path} className={`${pathname === header.path ? 'bg-[white] text-red-500' : 'bg-[#5393bd] hover:bg-[white] hover:text-red-500'} duration-300 opacity-80  py-2 lg:px-8 px-2 rounded-t-3xl border border-[#2999c9] font-semibold text-xl`}>{header.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header