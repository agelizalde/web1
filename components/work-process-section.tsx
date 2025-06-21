"use client"

import { ShoppingCart, Package, Truck } from "lucide-react"

export function WorkProcessSection() {
  const steps = [
    {
      icon: <ShoppingCart className="w-12 h-12 text-blue-600" />,
      title: "Pedido",
      description: "Recibimos tu solicitud y confirmamos disponibilidad de productos y servicios.",
    },
    {
      icon: <Package className="w-12 h-12 text-green-600" />,
      title: "Preparación",
      description: "Nuestro equipo prepara cuidadosamente tu pedido con los más altos estándares de calidad.",
    },
    {
      icon: <Truck className="w-12 h-12 text-purple-600" />,
      title: "Entrega",
      description: "Entregamos por tierra o río, garantizando puntualidad y seguridad en cada envío.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Cómo Trabajamos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Nuestro proceso optimizado garantiza eficiencia y calidad en cada etapa
          </p>
          <div className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full inline-block">
            <span className="font-semibold">🚛 🚢 Logística terrestre y fluvial disponible 24/7</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto group-hover:shadow-xl transition-shadow">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>

                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gray-300 -translate-x-12"></div>
                )}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
