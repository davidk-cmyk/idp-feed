import { Heart, ArrowRight, Bookmark } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ToastAction } from "@/components/ui/toast";
import { usePrefersReducedMotion } from "@/hooks/use-mobile";

interface FeedCardProps {
  id: string;
  author: string;
  school: string;
  time: string;
  image: string;
  title: string;
  avatarUrl: string;
  likes: number;
}

export default function FeedCard({ id, author, school, time, image, title, avatarUrl, likes: initialLikes }: FeedCardProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(initialLikes);
  const [saved, setSaved] = useState(false);
  const { toast } = useToast();
  const prefersReducedMotion = usePrefersReducedMotion();

  // Load saved state from localStorage
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("saved_posts") || "[]");
    setSaved(savedPosts.includes(id));
  }, [id]);

  const handleLike = () => {
    if (liked) {
      setLikeCount(prev => prev - 1);
      setLiked(false);
    } else {
      setLikeCount(prev => prev + 1);
      setLiked(true);
    }
  };

  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent navigating if clicking the bookmark
    e.preventDefault();

    const savedPosts = JSON.parse(localStorage.getItem("saved_posts") || "[]");
    
    if (saved) {
      // Remove from saved
      const newSaved = savedPosts.filter((postId: string) => postId !== id);
      localStorage.setItem("saved_posts", JSON.stringify(newSaved));
      setSaved(false);
      toast({
        title: "Removed from Dreamwall",
        description: "Post has been removed from your saved collection.",
      });
    } else {
      // Add to saved
      savedPosts.push(id);
      localStorage.setItem("saved_posts", JSON.stringify(savedPosts));
      setSaved(true);
      toast({
        title: "Added to Dreamwall",
        description: "Post saved! Check your Dreamwall to see your collection.",
        duration: 3000,
        action: (
          <Link href="/dreamwall">
            <ToastAction altText="View Dreamwall">View</ToastAction>
          </Link>
        ),
      });
    }
  };

  return (
    <motion.div
      whileHover={prefersReducedMotion ? undefined : { y: -4 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
      className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
    >
      {/* Header */}
      <div className="p-4 flex items-center gap-3">
        <Link href={`/ambassador/${id}`}>
          <Avatar className="h-8 w-8 border border-slate-200 cursor-pointer hover:ring-2 ring-[#3b66f5] ring-offset-1 transition-all">
            <AvatarImage src={avatarUrl} alt={author} />
            <AvatarFallback>{author[0]}</AvatarFallback>
          </Avatar>
        </Link>
        <div className="flex flex-col">
          <Link href={`/ambassador/${id}`}>
            <span className="text-sm font-bold text-slate-900 dark:text-white leading-none cursor-pointer hover:text-[#3b66f5] transition-colors">
              {author}
            </span>
          </Link>
          <Link href="/university/1">
            <span className="text-[11px] text-[#3b66f5] font-medium mt-0.5 cursor-pointer hover:underline">
              {school}
            </span>
          </Link>
          <span className="text-[10px] text-slate-400 mt-0.5">
            {time}
          </span>
        </div>
      </div>

      {/* Media Area */}
      <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden group">
        <Link href={`/post/${id}`} className="cursor-pointer block h-full">
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-500 md:duration-700 md:group-hover:scale-105"
          />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 p-4 w-full">
            <h3 className="text-white font-bold text-sm leading-snug line-clamp-2 mb-2 drop-shadow-sm">
              {title}
            </h3>
            <span className="text-[11px] font-semibold text-blue-300 hover:text-blue-200 cursor-pointer">
              Read more
            </span>
          </div>
        </Link>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.button
                onClick={handleLike}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-3 py-2 rounded-full border transition-all duration-200 ${
                  liked 
                    ? "bg-red-50 text-red-600 border-red-100" 
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                }`}
              >
                <AnimatePresence mode="wait">
                  {liked ? (
                    <motion.div
                      key="filled"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <Heart className="h-4 w-4 fill-current" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="outline"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <Heart className="h-4 w-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
                <span className="text-xs font-semibold whitespace-nowrap hidden sm:inline">
                  {liked ? "Liked" : "Like"}
                </span>
              </motion.button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Like this post</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <motion.button
                onClick={handleSave}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-3 py-2 rounded-full border transition-all duration-200 ${
                  saved
                    ? "bg-purple-50 text-purple-600 border-purple-100"
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                }`}
              >
                <Bookmark className={`h-4 w-4 ${saved ? "fill-current" : ""}`} />
                <span className="text-xs font-semibold whitespace-nowrap hidden sm:inline">
                  {saved ? "Saved" : "Save"}
                </span>
              </motion.button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{saved ? "Remove from Dreamwall" : "Save to your Dreamwall"}</p>
            </TooltipContent>
          </Tooltip>
        </div>
        
        <Link href={`/post/${id}`}>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-blue-100 bg-blue-50 text-blue-600 hover:bg-blue-100 hover:border-blue-200 transition-all duration-200"
          >
            <span className="text-xs font-semibold">Read full story</span>
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}

