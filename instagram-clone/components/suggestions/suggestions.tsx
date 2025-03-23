import Link from "next/link"
import UserSuggestion from "./user-suggestion"

// Sample data for suggestions
const suggestionData = [
  {
    id: 1,
    username: "nima",
    imageUrl: "/placeholder.svg?height=32&width=32",
    subtitle: "Followed by wangmo",
  },
  {
    id: 2,
    username: "lekzin",
    imageUrl: "/placeholder.svg?height=32&width=32",
    subtitle: "Followed by wangchuk + 6 more",
  },
  {
    id: 3,
    username: "thinley",
    imageUrl: "/placeholder.svg?height=32&width=32",
    subtitle: "Suggested for you",
  },
  {
    id: 4,
    username: "wangzin",
    imageUrl: "/placeholder.svg?height=32&width=32",
    subtitle: "Followed by karma + 3 more",
  },
  {
    id: 5,
    username: "denkar",
    imageUrl: "/placeholder.svg?height=32&width=32",
    subtitle: "Followed by choki + 5 more",
  },
]

export default function Suggestions() {
  return (
    <div className="p-4">
      {/* Current user profile */}
      <UserSuggestion
        username="kindrel"
        imageUrl="/placeholder.svg?height=56&width=56"
        subtitle="_kiki"
        isProfile={true}
      />

      {/* Suggestions header */}
      <div className="flex justify-between items-center mt-4 mb-2">
        <h3 className="text-sm font-semibold text-gray-500">Suggestions For You</h3>
        <Link href="/explore/people" className="text-xs font-semibold">
          See All
        </Link>
      </div>

      {/* Suggested users */}
      <div className="space-y-2">
        {suggestionData.map((suggestion) => (
          <UserSuggestion
            key={suggestion.id}
            username={suggestion.username}
            imageUrl={suggestion.imageUrl}
            subtitle={suggestion.subtitle}
          />
        ))}
      </div>

      {/* Footer links */}
      <div className="mt-6 text-xs text-gray-400">
        <div className="flex flex-wrap gap-x-1">
          <Link href="/about">About</Link> ·<Link href="/help">Help</Link> ·<Link href="/press">Press</Link> ·
          <Link href="/api">API</Link> ·<Link href="/jobs">Jobs</Link> ·<Link href="/privacy">Privacy</Link> ·
          <Link href="/terms">Terms</Link> ·<Link href="/locations">Locations</Link> ·
          <Link href="/language">Language</Link>
        </div>
        <div className="mt-4">© 2025 INSTAGRAM FROM META</div>
      </div>
    </div>
  )
}

