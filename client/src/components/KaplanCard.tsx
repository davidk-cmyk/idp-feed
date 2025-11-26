import { motion, AnimatePresence } from "framer-motion";
import { 
  Share2, 
  Heart, 
  MessageCircle, 
  Play, 
  MoreHorizontal,
  MapPin,
  GraduationCap,
  Globe,
  Coffee,
  Sun,
  ThumbsUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import generatedImage from "@assets/generated_images/student_ambassador_at_gold_coast_campus.png";
import { useState } from "react";

export default function KaplanCard() {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(24);

  const handleLike = () => {
    if (liked) {
      setLikeCount(prev => prev - 1);
      setLiked(false);
    } else {
      setLikeCount(prev => prev + 1);
      setLiked(true);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-5xl bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 font-sans overflow-hidden grid md:grid-cols-[1.1fr_1fr]"
    >
      {/* Left Side: Media & Content Context */}
      <div className="relative h-full min-h-[400px] md:h-auto group overflow-hidden bg-slate-100 flex flex-col">
        <div className="relative flex-grow h-[60%] overflow-hidden">
          <motion.img 
            src={generatedImage} 
            alt="Student Ambassador at Gold Coast"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Gradient Overlay - Subtle to match IDP style */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

          {/* Video Controls */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <Button size="icon" variant="secondary" className="h-14 w-14 rounded-full bg-white/90 text-primary hover:bg-white hover:scale-105 transition-all shadow-lg">
              <Play className="h-6 w-6 fill-current ml-1" />
            </Button>
          </div>

        </div>

        {/* Post Description Area */}
        <div className="bg-white dark:bg-slate-800 p-6 border-t border-slate-100 dark:border-slate-800 flex-grow">
          <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-4 font-normal">
            Great day joining the Offshore Student Recruitment Team event! It's amazing to learn how Kaplan engages with future students globally.
          </p>
          <div className="mb-5">
             <div className="mb-2.5">
               <p className="text-sm font-semibold text-slate-800 mb-0.5">Like what you see?</p>
               <p className="text-xs text-slate-500">Explore similar content using the tags below</p>
             </div>
             <div className="flex flex-wrap gap-2">
                <Badge 
                  variant="secondary" 
                  className="rounded-full px-3 py-1 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 hover:text-primary border-none cursor-pointer transition-colors"
                  title="View more posts about Life at Kaplan"
                >
                  #LifeAtKaplan
                </Badge>
                <Badge 
                  variant="secondary" 
                  className="rounded-full px-3 py-1 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 hover:text-primary border-none cursor-pointer transition-colors"
                  title="View more posts about Gold Coast"
                >
                  #GoldCoast
                </Badge>
             </div>
          </div>
          
          <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-700/60">
             {/* Enhanced Like Interaction */}
             <div className="flex items-center gap-2">
                <motion.button
                  onClick={handleLike}
                  whileTap={{ scale: 0.9 }}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    liked 
                      ? "bg-red-50 text-red-600 border border-red-100" 
                      : "bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100 hover:border-slate-300"
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
                        <Heart className="h-5 w-5 fill-current" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="outline"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                      >
                        <Heart className="h-5 w-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <span className="font-semibold text-sm">
                    {liked ? "Liked!" : "Like this post"}
                  </span>
                  
                  {/* Confetti particles could go here for extra delight */}
                </motion.button>
                
                {/* Counter Badge - Separated for clarity */}
                <div className="flex items-center gap-1 px-2 py-1 bg-slate-50 rounded-md border border-slate-100 text-xs font-medium text-slate-500">
                  <ThumbsUp className="h-3 w-3" />
                  {likeCount}
                </div>
             </div>

          </div>
        </div>
      </div>

      {/* Right Side: Author Profile & "Ask Me" Context */}
      <div className="p-8 md:p-8 flex flex-col h-full bg-white dark:bg-slate-900 relative overflow-y-auto border-l border-slate-100 dark:border-slate-800">
        
        {/* Author Header - Clean & Corporate */}
        <div className="flex items-start gap-4 mb-8">
          <div className="relative">
            <Avatar className="h-16 w-16 border border-slate-200">
              <AvatarImage src="https://i.pravatar.cc/150?u=aastha_kaplan" alt="Aastha" />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-1 -right-1 bg-white p-0.5 rounded-full shadow-sm border border-slate-100">
               <span className="text-lg leading-none block">🇳🇵</span>
            </div>
          </div>
          
          <div className="flex-1 min-w-0 pt-1">
            <h3 className="font-bold text-xl text-slate-900 dark:text-white leading-tight truncate">Aastha</h3>
            <div className="flex items-center gap-2 text-slate-500 text-sm mt-1">
              <span className="font-medium text-primary truncate">Student Ambassador</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-slate-400 mt-1">
              <MapPin className="h-3 w-3" /> Kathmandu, Nepal
            </div>
          </div>
        </div>

        {/* Bio / "About Me" Section */}
        <div className="space-y-6 mb-8">
          <div>
             <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-slate-900">MBA (Global)</span>
             </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Hi there! Namaste! 🙏 I'm Aastha, an international student from Nepal loving life on the Gold Coast. I chose Kaplan for its flexible MBA program and supportive community.
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mt-3">
              I'm currently working part-time as a barista while studying, and I love exploring the local beaches on weekends! 🌊☕️
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
              Interests
            </h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="rounded-md px-2.5 py-1 font-normal text-slate-600 border-slate-200 gap-1.5 bg-transparent hover:bg-slate-50">
                <Globe className="h-3.5 w-3.5 text-slate-400" /> Travel
              </Badge>
              <Badge variant="outline" className="rounded-md px-2.5 py-1 font-normal text-slate-600 border-slate-200 gap-1.5 bg-transparent hover:bg-slate-50">
                <Coffee className="h-3.5 w-3.5 text-slate-400" /> Coffee
              </Badge>
              <Badge variant="outline" className="rounded-md px-2.5 py-1 font-normal text-slate-600 border-slate-200 gap-1.5 bg-transparent hover:bg-slate-50">
                <Sun className="h-3.5 w-3.5 text-slate-400" /> Beach
              </Badge>
            </div>
          </div>
        </div>

        <div className="flex-grow" />

        {/* Call to Action Area */}
        <div className="mt-6 pt-6 border-t border-slate-100">
          <p className="text-slate-600 text-sm mb-4 font-medium">
            Have questions about life in Gold Coast?
          </p>
          <Button className="w-full h-12 text-base font-bold bg-primary hover:bg-primary/90 text-white shadow-sm rounded-lg gap-2">
            <MessageCircle className="h-5 w-5" />
            Ask me a question
          </Button>
          <p className="text-center text-xs text-slate-400 mt-3">
            Typically replies in a few hours
          </p>
        </div>
      </div>
    </motion.div>
  );
}
