"use client"

import { useState } from "react"
import { ContactModal } from "@/components/contact-modal"
import { Navigation } from "@/components/navigation"
import { SubNavBar } from "@/components/sub-nav-bar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { StorySection } from "@/components/story-section"
import { WorkProcessSection } from "@/components/work-process-section"
import { ClientsSection } from "@/components/clients-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <SubNavBar />
      <Navigation onContactClick={() => setIsContactModalOpen(true)} />

      <main>
        <HeroSection onContactClick={() => setIsContactModalOpen(true)} />
        <AboutSection />
        <ServicesSection />
        <StorySection />
        <WorkProcessSection />
        <ClientsSection onContactClick={() => setIsContactModalOpen(true)} />
        <ContactSection />
      </main>

      <Footer />

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  )
}
