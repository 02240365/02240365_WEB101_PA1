"use client"

import Link from "next/link"
import { Home, Search, Compass, MessageCircle, Heart, PlusSquare, User, Menu } from "lucide-react"
import { useState } from "react"

export default function Sidebar() {
  // State to track if the sidebar is expanded on mobile
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Navigation items with their icons and labels
  const navItems = [
    { icon: <Home size={24} />, label: "Home", href: "/" },
    { icon: <Search size={24} />, label: "Search", href: "/search" },
    { icon: <Compass size={24} />, label: "Explore", href: "/explore" },
    { icon: <MessageCircle size={24} />, label: "Messages", href: "/messages" },
    { icon: <Heart size={24} />, label: "Notifications", href: "/notifications" },
    { icon: <PlusSquare size={24} />, label: "Create", href: "/create" },
    { icon: <User size={24} />, label: "Profile", href: "/profile" },
  ]

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden md:flex flex-col w-[220px] border-r border-gray-200 p-4 fixed h-full">
        {/* Instagram logo */}
        <div className="py-6 mb-6">
          <h1 className="text-2xl font-cursive">Instagram</h1>
        </div>

        {/* Navigation items */}
        <nav className="flex-1">
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-100">
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* More button at the bottom */}
        <div className="mt-auto">
          <Link href="/more" className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-100">
            <Menu size={24} />
            <span>More</span>
          </Link>
        </div>
      </div>

      {/* Mobile bottom navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10">
        <div className="flex justify-around py-2">
          {navItems.slice(0, 5).map((item, index) => (
            <Link key={index} href={item.href} className="p-2">
              {item.icon}
            </Link>
          ))}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile expanded menu */}
        {mobileMenuOpen && (
          <div className="absolute bottom-full left-0 right-0 bg-white border-t border-gray-200 p-4">
            <ul className="space-y-4">
              {navItems.slice(5).map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="flex items-center gap-3 p-2">
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Spacer for mobile bottom navigation */}
      <div className="md:hidden h-16"></div>
    </>
  )
}

