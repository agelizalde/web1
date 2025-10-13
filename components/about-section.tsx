"use client"

import { Truck, Ship, Clock } from "lucide-react"

export function AboutSection() {
  const strengths = [
    {
      icon: <Truck className="w-6 h-6 text-blue-600" />,
      title: "Logística terrestre y fluvial",
      description: "Cobertura completa por tierra y río",
    },
    {
      icon: <Clock className="w-6 h-6 text-green-600" />,
      title: "Servicio 24/7",
      description: "Disponibilidad continua para emergencias",
    },
    {
      icon: <Ship className="w-6 h-6 text-purple-600" />,
      title: "Soluciones personalizadas",
      description: "Adaptamos nuestros servicios a cada cliente",
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Sobre Nosotros</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Somos una empresa pionera en Paraguay, dedicada a transformar el sector de suministros fluviales mediante soluciones logísticas innovadoras y tecnología de vanguardia. Nuestra misión es ofrecer servicios confiables y de alta calidad que potencien el crecimiento del transporte fluvial en la región.
              </p>
            </div>

            <div className="space-y-6">
              {strengths.map((strength, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-shrink-0 mt-1">{strength.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{strength.title}</h3>
                    <p className="text-gray-600">{strength.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Large image */}
              <div className="col-span-2 relative overflow-hidden rounded-xl">
                <img
                  src="/big_1.png?height=300&width=600"
                  alt="Operaciones fluviales"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Small images */}
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="/small_1.png?height=200&width=300"
                  alt="Equipo de trabajo"
                  className="w-full h-32 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="/small_2.jpg?height=200&width=300"
                  alt="Tecnología avanzada"
                  className="w-full h-32 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="/small_3.png?height=200&width=300"
                  alt="Logística terrestre"
                  className="w-full h-32 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="small_4.jpg?height=200&width=300"
                  alt="Suministros de calidad"
                  className="w-full h-32 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-100 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
