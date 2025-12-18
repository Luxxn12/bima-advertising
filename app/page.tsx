"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  MessageCircle,
  CheckCircle,
  MapPin,
  Clock,
  Shield,
  Award,
  Zap,
  Star,
  ChevronRight,
  Play,
} from "lucide-react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { MediaModal } from "@/components/media-modal"

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalType, setModalType] = useState<"image" | "video">("image")
  const [modalSrc, setModalSrc] = useState("")
  const [modalAlt, setModalAlt] = useState("")

  const galleryImages = Array.from({ length: 22 }, (_, index) => `/img/${index + 1}.jpeg`)

  const openModal = (type: "image" | "video", src: string, alt = "") => {
    setModalType(type)
    setModalSrc(src)
    setModalAlt(alt)
    setModalOpen(true)
  }

  const services = [
    {
      title: "Neon Box",
      description: "Signage berkualitas tinggi dengan pencahayaan LED modern yang menarik perhatian 24/7.",
      icon: "💡",
    },
    {
      title: "Letter Timbul",
      description: "Huruf timbul 3D dengan berbagai material (stainless, akrilik, galvanis) untuk kesan premium.",
      icon: "🔤",
    },
    {
      title: "Neon Fleks",
      description: "Papan nama fleksibel dengan lampu neon yang cocok untuk berbagai jenis usaha.",
      icon: "✨",
    },
    {
      title: "Billboard",
      description: "Billboard strategis untuk promosi skala besar dengan visibilitas maksimal.",
      icon: "🎯",
    },
    {
      title: "Running Text",
      description: "Display teks berjalan LED untuk informasi dinamis dan menarik perhatian.",
      icon: "📱",
    },
    {
      title: "Servis & Ganti Visual",
      description: "Layanan perawatan dan penggantian visual reklame untuk menjaga tampilan tetap prima.",
      icon: "🔧",
    },
  ]

  const benefits = [
    {
      title: "Pengalaman & Terpercaya",
      description: "Telah melayani ratusan klien di Denpasar dan seluruh Bali",
      icon: Award,
    },
    {
      title: "Pengerjaan Rapi & Tepat Waktu",
      description: "Tim profesional dengan standar kualitas tinggi dan deadline terjaga",
      icon: Clock,
    },
    {
      title: "Material Berkualitas",
      description: "Menggunakan bahan premium yang tahan cuaca tropis Bali",
      icon: Shield,
    },
    {
      title: "Desain Custom",
      description: "Desain sesuai kebutuhan bisnis Anda yang unik",
      icon: Zap,
    },
  ]

  const testimonials = [
    {
      name: "Pak Wayan Suarta",
      business: "Warung Makan Bali Asli",
      text: "Neon box dari Toto Advertising sangat terang dan menarik perhatian. Sejak pasang, pelanggan makin banyak yang tahu tempat saya!",
      rating: 5,
    },
    {
      name: "Ibu Made Sari",
      business: "Toko Fashion Denpasar",
      text: "Letter timbul yang dipasang sangat rapi dan berkualitas. Tim-nya profesional dan tepat waktu. Sangat puas!",
      rating: 5,
    },
    {
      name: "Pak Ketut Anom",
      business: "Klinik Kesehatan",
      text: "Harga kompetitif, kualitas bagus, dan pelayanan ramah. Recommended banget untuk yang butuh signage di Bali!",
      rating: 5,
    },
  ]

  const handleWhatsAppContact = () => {
    window.open(
      "https://wa.me/6285238545208?text=Halo%20Bima%20Advertising,%20saya%20tertarik%20untuk%20konsultasi%20tentang%20layanan%20advertising",
      "_blank",
    )
  }

  const handlePhoneContact = () => {
    window.location.href = "tel:+6285238545208"
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <MediaModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={modalType}
        src={modalSrc}
        alt={modalAlt}
      />

      <section
        id="hero"
        className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground overflow-hidden pt-32 pb-20 md:pb-28"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-up animation-delay-100">
            <Badge
              className="mb-6 bg-accent text-accent-foreground border-0 px-4 py-1.5 text-sm font-semibold"
              variant="outline"
            >
              Jasa Advertising Profesional Bali
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-balance leading-tight">
              Buat Bisnis Anda Lebih <span className="text-accent">Terlihat</span> dengan Signage Premium
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl mb-10 text-primary-foreground/90 text-pretty max-w-3xl mx-auto leading-relaxed">
              Solusi lengkap advertising outdoor & indoor untuk meningkatkan brand awareness bisnis Anda di Denpasar dan
              seluruh Bali
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={handleWhatsAppContact}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold gap-2 text-base px-8 py-7 shadow-xl hover:shadow-2xl transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Konsultasi Gratis via WhatsApp
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={handlePhoneContact}
                className="gap-2 text-base px-8 py-7 border-2 border-primary-foreground/20 hover:bg-primary-foreground/10 bg-transparent text-primary-foreground hover:text-primary-foreground hover:border-accent transition-all"
              >
                <Phone className="w-5 h-5" />
                Hubungi Sekarang
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Survey Gratis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Garansi Kualitas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Pengerjaan Cepat</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4" variant="outline">
                  Tantangan Bisnis
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Apakah Bisnis Anda Kurang Terlihat?</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Lokasi usaha sulit ditemukan pelanggan</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Signage lama sudah kusam dan tidak menarik</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Kalah bersaing dengan kompetitor yang lebih menonjol</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span>Brand awareness masih rendah di area sekitar</span>
                  </p>
                </div>
              </div>

              <div>
                <Badge className="mb-4 bg-accent text-accent-foreground" variant="outline">
                  Solusi Kami
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Tingkatkan Visibilitas dengan Signage Profesional
                </h2>
                <div className="space-y-4 text-foreground">
                  <p className="flex items-start gap-3">
                    <CheckCircle className="text-accent mt-1 w-5 h-5 flex-shrink-0" />
                    <span>Signage menarik yang mudah dilihat 24/7</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <CheckCircle className="text-accent mt-1 w-5 h-5 flex-shrink-0" />
                    <span>Desain custom yang mencerminkan identitas brand</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <CheckCircle className="text-accent mt-1 w-5 h-5 flex-shrink-0" />
                    <span>Material berkualitas tahan lama & tahan cuaca</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <CheckCircle className="text-accent mt-1 w-5 h-5 flex-shrink-0" />
                    <span>Meningkatkan kredibilitas dan kepercayaan pelanggan</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-up animation-delay-100">
              <Badge className="mb-4" variant="outline">
                Layanan Kami
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
                Solusi Advertising Lengkap untuk Bisnis Anda
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto text-pretty">
                Dari neon box hingga billboard, kami menyediakan berbagai jenis signage berkualitas premium
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-accent transition-colors animate-fade-up"
                  style={{ animationDelay: `${index * 0.08 + 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-up animation-delay-100">
              <Badge className="mb-4" variant="outline">
                Keunggulan Kami
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Kenapa Memilih Toto Advertising?</h2>
              <p className="text-muted-foreground text-lg">
                Dipercaya oleh ratusan bisnis di Bali untuk kebutuhan advertising mereka
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <Card
                    key={index}
                    className="border-0 shadow-sm animate-fade-up"
                    style={{ animationDelay: `${index * 0.08 + 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="bg-accent text-accent-foreground p-3 rounded-lg h-fit">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                          <p className="text-muted-foreground">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="mt-12 bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center animate-zoom-in animation-delay-200">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Harga Kompetitif & Transparan</h3>
              <p className="text-lg mb-6 text-primary-foreground/90 max-w-2xl mx-auto">
                Dapatkan penawaran terbaik untuk kebutuhan advertising Anda. Tidak ada biaya tersembunyi!
              </p>
              <Button
                size="lg"
                onClick={handleWhatsAppContact}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold gap-2"
              >
                Minta Penawaran Sekarang
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-up animation-delay-100">
              <Badge className="mb-4" variant="outline">
                Portfolio Kami
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Hasil Pekerjaan Kami</h2>
              <p className="text-muted-foreground text-lg">Lihat kualitas pengerjaan kami yang rapi dan profesional</p>
            </div>

            {/* Photo Gallery */}
            <div className="mb-12 animate-fade-up animation-delay-100">
              <h3 className="text-2xl font-bold mb-6">Galeri Foto</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {galleryImages.map((imageSrc, index) => {
                  const altText = `Hasil pekerjaan Toto Advertising ${index + 1}`
                  return (
                    <div
                      key={imageSrc}
                      className="aspect-square rounded-lg overflow-hidden bg-muted cursor-pointer group animate-zoom-in"
                      style={{ animationDelay: `${index * 0.05 + 0.05}s` }}
                      onClick={() => openModal("image", imageSrc, altText)}
                    >
                      <Image
                        src={imageSrc}
                        alt={altText}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Video Gallery */}
            <div className="animate-fade-up animation-delay-200">
              <h3 className="text-2xl font-bold mb-6">Galeri Video</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[1, 2].map((item) => {
                  const videoSrc = `/signage-production-process-.mp3?query=signage+production+video+${item}`
                  const thumbnailSrc = `/signage-production-process-.jpg?height=360&width=640&query=signage+production+process+${item}`
                  return (
                    <div
                      key={item}
                      className="aspect-video rounded-lg overflow-hidden bg-muted cursor-pointer relative group animate-fade-up"
                      style={{ animationDelay: `${item * 0.1 + 0.1}s` }}
                      onClick={() => openModal("video", videoSrc, `Proses produksi Toto Advertising ${item}`)}
                    >
                      <Image
                        src={thumbnailSrc || "/placeholder.svg"}
                        alt={`Proses produksi Toto Advertising ${item}`}
                        width={640}
                        height={360}
                        className="w-full h-full object-cover"
                      />
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" />
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 md:py-28 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-up animation-delay-100">
              <Badge className="mb-4" variant="outline">
                Testimoni Klien
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Apa Kata Klien Kami?</h2>
              <p className="text-muted-foreground text-lg">Kepuasan klien adalah prioritas utama kami</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-sm animate-fade-up"
                  style={{ animationDelay: `${index * 0.08 + 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-accent overflow-hidden">
              <CardContent className="p-8 md:p-12 text-center">
                <Badge className="mb-4 bg-accent text-accent-foreground" variant="outline">
                  Hubungi Kami
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Siap Membuat Bisnis Anda Lebih Menonjol?</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Dapatkan survey & konsultasi gratis sekarang! Tim kami siap membantu mewujudkan signage impian Anda.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" onClick={handleWhatsAppContact} className="gap-2 text-base px-8 py-6">
                    <MessageCircle className="w-5 h-5" />
                    Chat WhatsApp
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    onClick={handlePhoneContact}
                    className="gap-2 text-base px-8 py-6 bg-transparent"
                  >
                    <Phone className="w-5 h-5" />
                    Telepon Langsung
                  </Button>
                </div>

                <p className="mt-6 text-sm text-muted-foreground">Response time: &lt; 30 menit pada jam kerja</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-20 md:py-28 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="animate-fade-up animation-delay-100">
                <h2 className="text-3xl font-bold mb-6">Toto Advertising</h2>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Alamat</p>
                      <p className="text-primary-foreground/90">
                        Jln. Merpati Puputan Baru C No. 2<br />
                        Denpasar, Bali
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Telepon</p>
                      <div className="flex flex-col gap-1">
                        <a
                          href="tel:+6285238545208"
                          className="text-primary-foreground/90 hover:text-accent transition-colors"
                        >
                          +62 852-3854-5208
                        </a>
                        <a
                          href="tel:+6289503956858"
                          className="text-primary-foreground/90 hover:text-accent transition-colors"
                        >
                          +62 895-0395-6858
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">WhatsApp</p>
                      <div className="flex flex-col gap-1">
                        <button
                          onClick={handleWhatsAppContact}
                          className="text-primary-foreground/90 hover:text-accent transition-colors text-left"
                        >
                          +62 852-3854-5208
                        </button>
                        <a
                          href="https://wa.me/6289503956858?text=Halo%20Bima%20Advertising,%20saya%20tertarik%20untuk%20konsultasi%20tentang%20layanan%20advertising"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-foreground/90 hover:text-accent transition-colors"
                        >
                          +62 895-0395-6858
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-primary-foreground/20">
                  <p className="text-sm text-primary-foreground/70">Melayani area Denpasar dan seluruh Bali</p>
                </div>
              </div>

              <div className="animate-zoom-in animation-delay-200">
                <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.3813676896203!2d115.19248121527857!3d-8.654938593778276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd241f4de1c5c2d%3A0x9fb73e5931a63c3!2sJl.%20Merpati%20Puputan%20Baru%20VI%20No.2%2C%20Tegal%20Kertha%2C%20Kec.%20Denpasar%20Bar.%2C%20Kota%20Denpasar%2C%20Bali%2080111%2C%20Indonesia!5e0!3m2!1sid!2sid!4v1733920000000!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Toto Advertising"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm">
            <p className="mb-2">&copy; {new Date().getFullYear()} Toto Advertising. All rights reserved.</p>
            <p className="text-background/70">Jasa Advertising Profesional di Denpasar, Bali</p>
          </div>
        </div>
      </footer>

      <button
        onClick={handleWhatsAppContact}
        className="fixed bottom-6 right-6 bg-accent hover:bg-accent/90 text-accent-foreground p-4 rounded-full shadow-2xl hover:shadow-accent/50 transition-all hover:scale-110 z-40"
        aria-label="Chat WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  )
}
