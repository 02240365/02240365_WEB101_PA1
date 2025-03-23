import Image from "next/image"
import Link from "next/link"

// Props interface for the UserSuggestion component
interface UserSuggestionProps {
  username: string
  imageUrl: string
  subtitle?: string
  isProfile?: boolean
}

export default function UserSuggestion({ username, imageUrl, subtitle, isProfile = false }: UserSuggestionProps) {
  return (
    <div className="flex items-center justify-between py-2">
      {/* User info section */}
      <div className="flex items-center gap-3">
        {/* Profile image */}
        <div className="relative w-8 h-8 rounded-full overflow-hidden">
          <Image src={imageUrl || "/placeholder.svg"} alt={`${username}'s profile`} fill className="object-cover" />
        </div>

        {/* Username and subtitle */}
        <div className="flex flex-col">
          <Link href={`/${username}`} className="font-semibold text-sm">
            {username}
          </Link>
          {subtitle && <span className="text-xs text-gray-500">{subtitle}</span>}
        </div>
      </div>

      {/* Action button */}
      {isProfile ? (
        <Link href="/switch-accounts" className="text-xs font-semibold text-blue-500">
          Switch
        </Link>
      ) : (
        <button className="text-xs font-semibold text-blue-500">Follow</button>
      )}
    </div>
  )
}

