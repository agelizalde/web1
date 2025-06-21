"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export function SubNavBar() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 30000) // 30 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">🚢 ¡NUEVO!</span>
          <span className="text-sm">Servicio de combustible por pontón disponible 24/7</span>
        </div>
        <button onClick={() => setIsVisible(false)} className="text-white hover:text-gray-200 transition-colors">
          <X size={16} />
        </button>
      </div>
    </div>
  )
}
