"use client"

import { X } from "lucide-react"
import { useEffect } from "react"
import Image from "next/image"

interface MediaModalProps {
  isOpen: boolean
  onClose: () => void
  type: "image" | "video"
  src: string
  alt?: string
}

export function MediaModal({ isOpen, onClose, type, src, alt = "" }: MediaModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      window.addEventListener("keydown", handleEscape)
    }

    return () => {
      window.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={onClose}>
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        aria-label="Close modal"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Modal Content */}
      <div className="relative max-w-7xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
        {type === "image" ? (
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={src || "/placeholder.svg"}
              alt={alt}
              width={1200}
              height={800}
              className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg"
            />
          </div>
        ) : (
          <div className="relative w-full aspect-video">
            <video src={src} controls autoPlay className="w-full h-full rounded-lg">
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </div>
  )
}
