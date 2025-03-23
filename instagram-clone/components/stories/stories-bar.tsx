import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import StoryCircle from "./story-circle"

// Sample data for stories
const storyData = [
  { id: 1, username: "sonam", imageUrl: "/placeholder.svg?height=56&width=56" },
  { id: 2, username: "yugyel", imageUrl: "/placeholder.svg?height=56&width=56" },
  { id: 3, username: "kinzang", imageUrl: "/placeholder.svg?height=56&width=56" },
  { id: 4, username: "karma", imageUrl: "/placeholder.svg?height=56&width=56" },
  { id: 5, username: "choki", imageUrl: "/placeholder.svg?height=56&width=56" },
  { id: 6, username: "dorji", imageUrl: "/placeholder.svg?height=56&width=56" },
  { id: 7, username: "choing", imageUrl: "/placeholder.svg?height=56&width=56" },
  { id: 8, username: "menlam", imageUrl: "/placeholder.svg?height=56&width=56" },
]

export default function StoriesBar() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
      {/* Scrollable area for stories */}
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-4">
          {storyData.map((story) => (
            <StoryCircle
              key={story.id}
              username={story.username}
              imageUrl={story.imageUrl}
              isActive={true} // All stories shown as active for demo
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}

