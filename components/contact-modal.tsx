"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Modal form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    })
    alert("¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.")
    onClose()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">Contáctanos</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="modal-name" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre *
              </label>
              <Input
                id="modal-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="modal-company" className="block text-sm font-medium text-gray-700 mb-1">
                Empresa
              </label>
              <Input
                id="modal-company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                className="w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="modal-email" className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <Input
                id="modal-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="modal-phone" className="block text-sm font-medium text-gray-700 mb-1">
                Teléfono
              </label>
              <Input
                id="modal-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="w-full"
              />
            </div>
          </div>

          <div>
            <label htmlFor="modal-message" className="block text-sm font-medium text-gray-700 mb-1">
              Mensaje *
            </label>
            <Textarea
              id="modal-message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full"
              placeholder="Cuéntanos sobre tus necesidades..."
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
              Enviar Mensaje
            </Button>
            <Button type="button" variant="outline" onClick={onClose} className="px-6">
              Cancelar
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
