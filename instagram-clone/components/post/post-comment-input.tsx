"use client"

import type React from "react"

import { Smile } from "lucide-react"
import { useState } from "react"

export default function PostCommentInput() {
  // State to track the comment input value
  const [comment, setComment] = useState("")

  // Function to handle comment submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the comment to an API
    console.log("Submitting comment:", comment)
    setComment("") // Clear the input after submission
  }

  return (
    <form onSubmit={handleSubmit} className="border-t border-gray-200 p-3 flex items-center">
      {/* Emoji button */}
      <button type="button" className="p-1">
        <Smile size={24} />
      </button>

      {/* Comment input field */}
      <input
        type="text"
        placeholder="Add a comment..."
        className="flex-1 mx-2 outline-none text-sm"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      {/* Post button - only enabled if there's text in the input */}
      <button
        type="submit"
        className={`text-blue-500 font-semibold text-sm ${!comment.trim() ? "opacity-50 cursor-not-allowed" : ""}`}
        disabled={!comment.trim()}
      >
        Post
      </button>
    </form>
  )
}

