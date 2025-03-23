import Link from "next/link"

// Props interface for the PostCaption component
interface PostCaptionProps {
  username: string
  caption: string
  likes?: string
  timestamp?: string
  commentCount?: number
}

export default function PostCaption({ username, caption, likes, timestamp, commentCount }: PostCaptionProps) {
  return (
    <div className="px-3 pb-2 space-y-2">
      {/* Likes count */}
      {likes && <div className="font-semibold text-sm">Liked by {likes}</div>}

      {/* Caption with username and text */}
      <div className="text-sm">
        <Link href={`/${username}`} className="font-semibold mr-1">
          {username}
        </Link>
        <span>{caption}</span>
      </div>

      {/* View all comments link - only show if there are comments */}
      {commentCount && commentCount > 0 && (
        <div className="text-sm text-gray-500">
          <Link href="#">View all {commentCount} comments</Link>
        </div>
      )}

      {/* Timestamp */}
      {timestamp && <div className="text-xs uppercase text-gray-500">{timestamp}</div>}
    </div>
  )
}

