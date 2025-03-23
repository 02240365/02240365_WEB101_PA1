"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

// Props interface for the PostContent component
interface PostContentProps {
  images: string[]
  aspectRatio?: string
}

export default function PostContent({ images, aspectRatio = "1/1" }: PostContentProps) {
  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0)

  // Function to navigate to the next image
  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  // Function to navigate to the previous image
  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <div className="relative">
      {/* Post image */}
      <div className={`relative w-full`} style={{ aspectRatio }}>
        <Image src={images[currentIndex] || "/placeholder.svg"} alt="Post content" fill className="object-cover" />
      </div>

      {/* Navigation arrows - only show if there are multiple images */}
      {images.length > 1 && (
        <>
          {/* Left arrow - only show if not on the first image */}
          {currentIndex > 0 && (
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 rounded-full p-1"
              onClick={prevImage}
            >
              <ChevronLeft size={20} />
            </button>
          )}

          {/* Right arrow - only show if not on the last image */}
          {currentIndex < images.length - 1 && (
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 rounded-full p-1"
              onClick={nextImage}
            >
              <ChevronRight size={20} />
            </button>
          )}

          {/* Dots indicator for multiple images */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full ${index === currentIndex ? "bg-blue-500" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

