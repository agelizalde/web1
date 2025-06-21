"use client"

export function StorySection() {
  return (
    <section id="story" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Nuestra Historia</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Desde nuestros inicios, hemos estado comprometidos con la transformación digital del sector logístico
              fluvial en Paraguay. Nuestro video corporativo muestra el camino recorrido y nuestra visión hacia el
              futuro.
            </p>
            <p className="text-gray-600">
              Descubre cómo combinamos la experiencia tradicional con la innovación tecnológica para ofrecer soluciones
              que superan las expectativas de nuestros clientes.
            </p>
          </div>

          {/* Right Video */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="aspect-video bg-gray-900 flex items-center justify-center">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Video Corporativo RiverSupply"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full opacity-30"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-green-100 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
