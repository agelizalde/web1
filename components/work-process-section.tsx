"use client"

import { ShoppingCart, Package, Truck } from "lucide-react"

export function WorkProcessSection() {
  const steps = [
    {
      icon: <ShoppingCart className="w-12 h-12 text-blue-600" />,
      title: "Pedido",
      description: "Recibimos tu solicitud junto con la ETA.",
    },
    {
      icon: <Package className="w-12 h-12 text-green-600" />,
      title: "Preparación",
      description:
        "Nuestro equipo prepara cuidadosamente tu pedido con los más altos estándares de calidad.",
    },
    {
      icon: <Truck className="w-12 h-12 text-purple-600" />,
      title: "Entrega",
      description:
        "Entregamos por tierra o agua, garantizando puntualidad y seguridad en cada envío.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Cómo Trabajamos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Nuestro proceso optimizado garantiza eficiencia y calidad en cada etapa
          </p>
          <div className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full inline-block">
            <span className="font-semibold">
              🚛 🚢 Logística terrestre y fluvial disponible 24/7
            </span>
          </div>
        </div>

        {/* Contenedor de pasos */}
        <div className="flex flex-col md:flex-row items-center justify-between relative">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 flex flex-col items-center relative">
              {/* Icono con número */}
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto transition-shadow group-hover:shadow-xl">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed text-center">{step.description}</p>

              {/* Línea punteada entre pasos */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-12 right-[-50%] w-[100%] h-0.5 items-center z-0">
                  <div className="flex w-full justify-between">
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 h-1 bg-gray-300 rounded-full"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
