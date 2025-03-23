import Sidebar from "@/components/sidebar/sidebar"
import Feed from "@/components/feed/feed"
import Suggestions from "@/components/suggestions/suggestions"

export default function Home() {
  return (
    <main className="flex min-h-screen bg-white">
      {/* Left sidebar navigation */}
      <Sidebar />

      {/* Main content area with feed */}
      <div className="flex-1 flex justify-center">
        <div className="max-w-[630px] w-full px-2">
          <Feed />
        </div>

        {/* Right sidebar with suggestions - only visible on larger screens */}
        <div className="hidden lg:block w-[320px] mt-8">
          <Suggestions />
        </div>
      </div>
    </main>
  )
}

