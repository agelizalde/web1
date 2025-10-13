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
              La Hidrovía Paraguay-Paraná está en constante crecimiento, y con ello surge la necesidad de elevar 
              los estándares de servicio en toda la cadena logística. En River Supply, nos enfocamos en mejorar la 
              calidad de servicio, garantizar la trazabilidad de los productos y ofrecer soluciones integrales que respondan 
              a las necesidades de la industria.
            </p>
            <p className="text-gray-600">
              Unimos la experiencia de siempre con tecnología de punta para brindar soluciones que realmente marcan la 
              diferencia para nuestros clientes.
            </p>
          </div>

          {/* Right Video */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="aspect-video bg-gray-900 flex items-center justify-center">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/2EoUvQs3R9Y"
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
