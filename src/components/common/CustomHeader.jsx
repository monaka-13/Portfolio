'use client'
import { FaBars } from "react-icons/fa6";
import { Button } from "../ui/button";
import Link from "next/link";
import { MENU_ITEMS } from "../../constants/menuItems";
import MenuDrawer from "../ui/MenuDrawer";
import { useState } from 'react';

export default function CustomHeader() {
  const [isMenuOpen, setIsMenuOpen] =useState(false);
  return (
    <div className={`sticky w-full p-4 md:px-32 primary border`}>
      <MenuDrawer isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <header className={`flex justify-between items-center`}>
        <Button aria-label="menu" role="button" variant="default" className='lock md:hidden size-12' onClick={()=>setIsMenuOpen(true)}>
          <FaBars />
        </Button>

        <h1 className={`text-2xl hidden md:block`}>Kay Shigenaga</h1>
        <nav className={`hidden md:flex gap-4 primary`}>
          {MENU_ITEMS.map((item,index) => (
            <Link key={index} href={item.url}>
              {item.text}
            </Link>
          ))}
        </nav>
      </header>
    </div>
  );
}
