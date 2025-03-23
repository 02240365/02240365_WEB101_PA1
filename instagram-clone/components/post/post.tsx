"use client"

import PostHeader from "./post-header"
import PostContent from "./post-content"
import PostActions from "./post-actions"
import PostCaption from "./post-caption"
import PostCommentInput from "./post-comment-input"

// Props interface for the Post component
interface PostProps {
  username: string
  profileImageUrl: string
  images: string[]
  caption: string
  likes?: string
  timestamp?: string
  commentCount?: number
  location?: string
}

export default function Post({
  username,
  profileImageUrl,
  images,
  caption,
  likes,
  timestamp,
  commentCount,
  location,
}: PostProps) {
  return (
    <div className="border border-gray-200 rounded-lg bg-white mb-4 overflow-hidden">
      {/* Post header with user info */}
      <PostHeader username={username} profileImageUrl={profileImageUrl} location={location} />

      {/* Post content/images */}
      <PostContent images={images} />

      {/* Post actions (like, comment, share, save) */}
      <PostActions />

      {/* Post caption and metadata */}
      <PostCaption
        username={username}
        caption={caption}
        likes={likes}
        timestamp={timestamp}
        commentCount={commentCount}
      />

      {/* Comment input field */}
      <PostCommentInput />
    </div>
  )
}

