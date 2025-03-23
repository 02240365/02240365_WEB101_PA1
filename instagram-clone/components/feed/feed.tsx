import StoriesBar from "../stories/stories-bar"
import Post from "../post/post"

// Sample data for posts
const postData = [
  {
    id: 1,
    username: "chozom",
    profileImageUrl: "/placeholder.svg?height=40&width=40",
    images: ["/placeholder.svg?height=600&width=600"],
    caption:
      "good day",
    likes: "sonam and others",
    timestamp: "3 days ago",
    commentCount: 7,
  },
  {
    id: 2,
    username: "dorji",
    profileImageUrl: "/placeholder.svg?height=40&width=40",
    images: ["/placeholder.svg?height=600&width=600", "/placeholder.svg?height=600&width=600"],
    caption: "all good",
    likes: "menlam and 42 others",
    timestamp: "5 hours ago",
    commentCount: 12,
    location: "Thimphu, Bhutan",
  },
]

export default function Feed() {
  return (
    <div className="py-4 max-w-[470px] mx-auto">
      {/* Stories bar at the top of the feed */}
      <StoriesBar />

      {/* Posts */}
      {postData.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          profileImageUrl={post.profileImageUrl}
          images={post.images}
          caption={post.caption}
          likes={post.likes}
          timestamp={post.timestamp}
          commentCount={post.commentCount}
          location={post.location}
        />
      ))}
    </div>
  )
}

