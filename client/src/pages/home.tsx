import Navigation from "@/components/Navigation";
import FeedCard from "@/components/FeedCard";
import { posts } from "@/lib/mock-data";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
      <Navigation />

      <div className="w-full max-w-5xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {posts.map((post) => (
            <FeedCard key={post.id} {...post} />
          ))}
        </div>

        {/* Footer / Context */}
        <div className="mt-12 text-sm text-slate-400 font-medium text-center">
          Designed for Kaplan Business School &bull; Mockup Prototype
        </div>
      </div>
    </div>
  );
}

