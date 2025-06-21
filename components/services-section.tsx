"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Package, Wrench, Fuel, Ship, Anchor, ShoppingBag } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: <Package className="w-8 h-8 text-blue-600" />,
      title: "Provisiones y productos de limpieza",
      description:
        "Suministros completos para la operación diaria de embarcaciones, incluyendo productos de limpieza especializados.",
    },
    {
      icon: <Wrench className="w-8 h-8 text-green-600" />,
      title: "Ferretería y herramientas",
      description: "Herramientas profesionales y materiales de ferretería para mantenimiento y reparaciones a bordo.",
    },
    {
      icon: <Fuel className="w-8 h-8 text-red-600" />,
      title: "Combustible por camión",
      description: "Suministro de combustible mediante transporte terrestre con entrega puntual y segura.",
    },
    {
      icon: <Ship className="w-8 h-8 text-purple-600" />,
      title: "Combustible por pontón",
      description:
        "Servicio innovador de suministro de combustible directamente en el río mediante pontones especializados.",
    },
    {
      icon: <Anchor className="w-8 h-8 text-indigo-600" />,
      title: "Equipos náuticos y de amarre",
      description:
        "Equipamiento especializado para navegación, seguridad y operaciones de amarre en puertos fluviales.",
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-orange-600" />,
      title: "Bazar y artículos de cama",
      description: "Productos para el confort de la tripulación, incluyendo ropa de cama y artículos de uso personal.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una gama completa de servicios especializados para satisfacer todas las necesidades de las
            embarcaciones fluviales
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-gray-100 rounded-full group-hover:bg-blue-50 transition-colors">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
