"use client"

import { Heart, MessageCircle, Send, Bookmark } from "lucide-react"
import { useState } from "react"

export default function PostActions() {
  // State to track if the post is liked or saved
  const [isLiked, setIsLiked] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  return (
    <div className="p-3">
      <div className="flex justify-between">
        {/* Left side actions: like, comment, share */}
        <div className="flex space-x-4">
          <button onClick={() => setIsLiked(!isLiked)} className="p-1">
            <Heart size={24} fill={isLiked ? "#ed4956" : "none"} color={isLiked ? "#ed4956" : "currentColor"} />
          </button>
          <button className="p-1">
            <MessageCircle size={24} />
          </button>
          <button className="p-1">
            <Send size={24} />
          </button>
        </div>

        {/* Right side action: save */}
        <button onClick={() => setIsSaved(!isSaved)} className="p-1">
          <Bookmark size={24} fill={isSaved ? "black" : "none"} />
        </button>
      </div>
    </div>
  )
}

