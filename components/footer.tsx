"use client"

import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 space-y-2 sm:space-y-0">
            <img
              src="/logo_fondo.png" /* Modificar a posterior */
              alt="River Supply"
              className="w-10 h-10 object-contain"
            />
            <div className="flex flex-col">
              <h3 className="text-xl font-bold">River Supply</h3>
              <p className="text-sm text-gray-400">
                Revolucionando la logística fluvial en Paraguay con soluciones innovadoras y servicio 24/7.
              </p>
            </div>
          </div>


          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Provisiones</li>
              <li className="text-gray-400">Ferretería</li>
              <li className="text-gray-400">Combustible</li>
              <li className="text-gray-400">Equipos Náuticos</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400">Asunción, Paraguay</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-green-400" />
                <span className="text-gray-400">+595 981 075153</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-gray-400">operaciones@riversupply.com.py</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sister Companies */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h4 className="text-lg font-semibold mb-4 text-center">Conoce más de nosotros</h4>
          <div className="flex justify-center space-x-8">
            <a
              href="https://riverservices.com.py"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src="river"
                alt="RiverServices Logo"
                className="w-24 h-12 object-contain rounded"
              />
            </a>
            <a
              href="https://nuevaasuncion.com.py/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src="/ana-logo-en-blanco.webp"
                alt="RiverServices Logo"
                className="w-24 h-12 object-contain rounded"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
