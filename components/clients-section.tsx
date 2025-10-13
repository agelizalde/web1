"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Users, Handshake, MessageCircle } from "lucide-react"

interface ClientsSectionProps {
  onContactClick: () => void
}

export function ClientsSection({ onContactClick }: ClientsSectionProps) {
  const cards = [
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Para Nuestros Clientes",
      description: "Descarga nuestro catálogo completo de servicios y productos disponibles.",
      buttonText: "Descargar PDF",
      buttonAction: () => {
        const link = document.createElement("a")
        link.href = "riversupply.com.py/catalogo-clientes.pdf" // ruta dentro de /public
        link.download = "catalogo-clientes.pdf"
        link.click()
      },
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: <Handshake className="w-12 h-12 text-green-600" />,
      title: "Para Proveedores",
      description: "Información para empresas interesadas en formar parte de nuestra red de proveedores.",
      buttonText: "Descargar PDF",
      buttonAction: () => {
        const link = document.createElement("a")
        link.href = "riversupply.com.py/catalogo-clientes.pdf" // ruta dentro de /public
        link.download = "informacion-proveedores.pdf"
        link.click()
      },
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: <MessageCircle className="w-12 h-12 text-purple-600" />,
      title: "Contáctanos",
      description: "¿Tienes preguntas o necesitas una cotización personalizada? Estamos aquí para ayudarte.",
      buttonText: "Abrir Formulario",
      buttonAction: onContactClick,
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Para Nuestros Clientes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recursos y herramientas diseñados para facilitar tu experiencia con nosotros
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 ${card.borderColor} ${card.bgColor}`}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">{card.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-8">{card.description}</p>
                <Button onClick={card.buttonAction} className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                  <Download className="w-4 h-4 mr-2" />
                  {card.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
