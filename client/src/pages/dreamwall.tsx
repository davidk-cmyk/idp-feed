import Navigation from "@/components/Navigation";
import FeedCard from "@/components/FeedCard";
import { posts } from "@/lib/mock-data";
import { Bookmark, LayoutGrid } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Dreamwall() {
  const [savedPosts, setSavedPosts] = useState<typeof posts>([]);

  useEffect(() => {
    // Read saved IDs from localStorage
    const savedIds = JSON.parse(localStorage.getItem("saved_posts") || "[]");
    // Filter posts that are in the saved list
    const filtered = posts.filter(post => savedIds.includes(post.id));
    setSavedPosts(filtered);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
      <Navigation />

      <div className="w-full max-w-5xl mx-auto px-4 pb-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Bookmark className="h-6 w-6 text-purple-600" />
              </div>
              My Dreamwall
            </h1>
            <p className="text-slate-500 mt-2">
              Your personal collection of inspiring stories and university moments.
            </p>
          </div>
        </div>

        {savedPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {savedPosts.map((post) => (
              <FeedCard key={post.id} {...post} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 px-4 text-center border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50/50">
            <div className="bg-white p-4 rounded-full shadow-sm mb-4">
              <LayoutGrid className="h-8 w-8 text-slate-300" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Your Dreamwall is empty</h3>
            <p className="text-slate-500 max-w-md mb-6">
              Save posts that inspire you to build your personal collection of student experiences and university life.
            </p>
            <Link href="/">
              <Button className="bg-[#3b66f5] hover:bg-[#2f52c4] text-white rounded-full px-6">
                Explore Feed
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
