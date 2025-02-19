"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { IoSchool, IoHome } from "react-icons/io5";
import { FaStore } from "react-icons/fa";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { PiArticleNyTimesFill } from "react-icons/pi";
import AuthButtons from "./AuthButtons";


export default function Header() {
  const pathname = usePathname();

  const navigationItems = [
    { href: '#', icon: IoHome, text: 'الرئــسية' },
    { href: '#', icon: PiArticleNyTimesFill, text: 'المدونــة' },
    { href: '#', icon: IoSchool, text: 'منصة التعلم' },
    { href: '#', icon: FaStore, text: 'المتجـــر', external: true },
    { href: '#', icon: BsFillInfoSquareFill, text: 'من نـــحن ؟' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#306eca] to-[#173664]" >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">

          {/* Auth Buttons */}
          <div className="flex items-center gap-3 order-3">
            <div className="flex gap-2" dir="rtl">
              <AuthButtons />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="flex flex-1 justify-center mx-8 lg:flex md:hidden order-2" dir='rtl'> 
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-6 py-2 text-white hover:bg-[#1d4ed8] rounded-lg transition-all mx-1.5 ${pathname === item.href ? 'bg-[#1d4ed8]' : ''
                  }`}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <item.icon className="w-6 h-6" />
                <span className="text-base font-medium">{item.text}</span>
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 order-1">
            <div className="bg-white p-2 shadow-md">
              <Image
                src="/logos/blue-logo.svg"
                width={100}
                height={50}
                alt="Logo"
                className="h-10 w-auto object-contain"
              />
            </div>
          </Link>

        </div>
      </div>
    </header>
  );
}
