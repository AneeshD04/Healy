"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-center">
          {/* Navigation Links */}
          <div className="flex items-center space-x-12">
            <Link
              href="/"
              className={`text-lg font-medium transition-all duration-200 ${
                pathname === "/" ? "text-white scale-110" : "text-white hover:scale-110"
              }`}
            >
              Home
            </Link>
            <Link
              href="/bots"
              className={`text-lg font-medium transition-all duration-200 ${
                pathname === "/bots" ? "text-white scale-110" : "text-white hover:scale-110"
              }`}
            >
              Our Bots
            </Link>
            <Link
              href="/services"
              className={`text-lg font-medium transition-all duration-200 ${
                pathname === "/services" ? "text-white scale-110" : "text-white hover:scale-110"
              }`}
            >
              Services
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
