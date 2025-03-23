import Image from "next/image"
import { MoreHorizontal } from "lucide-react"

// Props interface for the PostHeader component
interface PostHeaderProps {
  username: string
  profileImageUrl: string
  location?: string
}

export default function PostHeader({ username, profileImageUrl, location }: PostHeaderProps) {
  return (
    <div className="flex items-center justify-between p-3">
      {/* User info section */}
      <div className="flex items-center gap-3">
        {/* Profile image */}
        <div className="relative w-8 h-8 rounded-full overflow-hidden">
          <Image
            src={profileImageUrl || "/placeholder.svg"}
            alt={`${username}'s profile`}
            fill
            className="object-cover"
          />
        </div>

        {/* Username and location */}
        <div className="flex flex-col">
          <span className="font-semibold text-sm">{username}</span>
          {location && <span className="text-xs">{location}</span>}
        </div>
      </div>

      {/* More options button */}
      <button className="p-1">
        <MoreHorizontal size={20} />
      </button>
    </div>
  )
}

