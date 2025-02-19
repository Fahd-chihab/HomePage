"use client"

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { IoClose } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
import { NavigationItem } from "./types";

interface NavigationMenuProps {
  isNavMenuOpen: boolean;
  setIsNavMenuOpen: (isOpen: boolean) => void;
  navigationItems: NavigationItem[];
  navMenuRef: React.RefObject<HTMLButtonElement>; // Updated type
}

export default function NavigationMenu({
  isNavMenuOpen,
  setIsNavMenuOpen,
  navigationItems,
  navMenuRef
}: NavigationMenuProps) {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const handleNavMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsNavMenuOpen(!isNavMenuOpen);
  };

  return (
    <>
      <button
        onClick={handleNavMenuClick}
        className="lg:hidden md:block hidden text-white p-2 hover:bg-[#1d4ed8] rounded-lg transition-colors"
        ref={navMenuRef}
      >
        {isNavMenuOpen ? <IoClose className="w-6 h-6" /> : <RiMenu3Line className="w-6 h-6" />}
      </button>

      <AnimatePresence>
        {isNavMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden md:block hidden absolute top-14 left-0 right-0 bg-[#173664] border-t border-[#306eca]/30"
          >
            <div className="py-2 space-y-1 px-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-2 text-white hover:bg-[#1d4ed8] rounded-lg transition-all justify-end ${
                    isActive(item.href) ? 'bg-[#1d4ed8]' : ''
                  }`}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  onClick={() => setIsNavMenuOpen(false)}
                >
                  <span className="text-sm font-medium">{item.text}</span>
                  <item.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 