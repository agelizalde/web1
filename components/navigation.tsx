"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  onContactClick: () => void
}

export function Navigation({ onContactClick }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
        {/* Logo and Company Name */}
          <div className="flex items-center space-x-3">
            <img
              src="/logo_mini.jpg" /* Modificar a posterior */
              alt="River Supply Logo"
              className="h-10 rounded-lg object-cover"
              />
          <div>
            <h1 className="text-xl font-bold text-gray-900">River Supply</h1>
          </div>
        </div>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("story")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Historia
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contacto
            </button>
            <Button onClick={onContactClick} className="bg-blue-600 hover:bg-blue-700 text-white">
              Contáctanos
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("story")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Historia
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contacto
              </button>
              <Button onClick={onContactClick} className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                Contáctanos
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
