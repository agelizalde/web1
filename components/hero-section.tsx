"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Ship, Clock, MapPin } from "lucide-react"

interface HeroSectionProps {
  onContactClick: () => void
}

export function HeroSection({ onContactClick }: HeroSectionProps) {
  return (
    <section id="hero" className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Revolucionando la
                <span className="text-blue-600 block">Logística Fluvial</span>
                en Paraguay
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Soluciones logísticas de alta calidad y confiables para embarcaciones que operan en ríos. Digitalizamos
                el sector con tecnología avanzada y servicio 24/7.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-gray-700">
                <Ship className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium">Logística Fluvial</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium">Servicio 24/7</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium">Paraguay</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={onContactClick}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg group"
              >
                Solicitar Cotización
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
              >
                Ver Servicios
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Logística fluvial en Paraguay"
                className="w-full h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 border">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Disponibilidad</div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-6 border">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">100%</div>
                <div className="text-sm text-gray-600">Confiabilidad</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
