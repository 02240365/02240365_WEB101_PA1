import Image from "next/image"

// Props interface for the StoryCircle component
interface StoryCircleProps {
  username: string
  imageUrl: string
  isActive?: boolean
}

export default function StoryCircle({ username, imageUrl, isActive = false }: StoryCircleProps) {
  // Truncate username if it's too long
  const displayName = username.length > 10 ? username.substring(0, 9) + "..." : username

  return (
    <div className="flex flex-col items-center space-y-1 w-[70px]">
      {/* Story circle with gradient border if active */}
      <div
        className={`rounded-full p-[2px] ${isActive ? "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600" : "bg-gray-200"}`}
      >
        <div className="bg-white rounded-full p-[2px]">
          <div className="relative w-14 h-14 rounded-full overflow-hidden">
            <Image src={imageUrl || "/placeholder.svg"} alt={`${username}'s story`} fill className="object-cover" />
          </div>
        </div>
      </div>

      {/* Username below the story circle */}
      <span className="text-xs text-center">{displayName}</span>
    </div>
  )
}

