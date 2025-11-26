import { Heart } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "wouter";
import { motion } from "framer-motion";

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

export default function FeedCard({ id, author, school, time, image, title, avatarUrl, likes }: FeedCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
    >
      {/* Header */}
      <div className="p-4 flex items-center gap-3">
        <Avatar className="h-8 w-8 border border-slate-200">
          <AvatarImage src={avatarUrl} alt={author} />
          <AvatarFallback>{author[0]}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-slate-900 dark:text-white leading-none">
            {author}
          </span>
          <span className="text-[11px] text-[#3b66f5] font-medium mt-0.5">
            {school}
          </span>
          <span className="text-[10px] text-slate-400 mt-0.5">
            {time}
          </span>
        </div>
      </div>

      {/* Media Area */}
      <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden group">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 p-4 w-full">
          <h3 className="text-white font-bold text-sm leading-snug line-clamp-2 mb-2 drop-shadow-sm">
            {title}
          </h3>
          <Link href={`/post/${id}`}>
            <span className="text-[11px] font-semibold text-blue-300 hover:text-blue-200 cursor-pointer">
              Read more
            </span>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-slate-100 dark:border-slate-800">
        <button className="flex items-center gap-1.5 text-slate-500 hover:text-red-500 transition-colors">
          <Heart className="h-4 w-4" />
          <span className="text-xs font-medium">{likes} Likes</span>
        </button>
      </div>
    </motion.div>
  );
}
