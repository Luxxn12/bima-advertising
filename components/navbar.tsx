"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleWhatsAppContact = () => {
    window.open(
      "https://wa.me/6285238545208?text=Halo%20Bima%20Advertising,%20saya%20tertarik%20untuk%20konsultasi%20tentang%20layanan%20advertising",
      "_blank",
    )
    setIsMobileMenuOpen(false)
  }

  const handlePhoneContact = () => {
    window.location.href = "tel:+6285238545208"
    setIsMobileMenuOpen(false)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  const navLinks = [
    { label: "Beranda", href: "#hero" },
    { label: "Layanan", href: "#services" },
    { label: "Keunggulan", href: "#benefits" },
    { label: "Portfolio", href: "#gallery" },
    { label: "Testimoni", href: "#testimonials" },
    { label: "Kontak", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-36 w-36">
              <Image
                src="/logo.png"
                alt="Logo Bima Advertising"
                fill
                className="object-contain"
                priority
                sizes="48px"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href.substring(1))}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                  isScrolled
                    ? "text-gray-700 hover:text-accent hover:bg-gray-100"
                    : "text-white hover:text-accent hover:bg-white/10"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              size="sm"
              variant="outline"
              onClick={handlePhoneContact}
              className={`gap-2 transition-colors ${
                isScrolled
                  ? "bg-white border-gray-300 text-gray-700 hover:border-accent hover:text-accent"
                  : "bg-transparent border-white/30 text-white hover:border-accent hover:text-accent hover:bg-white/10"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">Telepon</span>
            </Button>
            <Button size="sm" onClick={handleWhatsAppContact} className="gap-2 bg-accent hover:bg-accent/90 text-white">
              <MessageCircle className="w-4 h-4" />
              <span className="hidden lg:inline">WhatsApp</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? "text-gray-700 hover:text-accent" : "text-white hover:text-accent"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href.substring(1))}
                  className="px-4 py-3 text-left text-sm font-medium text-gray-700 hover:text-accent hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex flex-col gap-2 px-4 pt-4 mt-2 border-t border-gray-200">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handlePhoneContact}
                  className="gap-2 justify-center bg-white border-gray-300 text-gray-700"
                >
                  <Phone className="w-4 h-4" />
                  Telepon Kami
                </Button>
                <Button size="sm" onClick={handleWhatsAppContact} className="gap-2 justify-center bg-accent text-white">
                  <MessageCircle className="w-4 h-4" />
                  Chat WhatsApp
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
