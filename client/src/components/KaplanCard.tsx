import { motion } from "framer-motion";
import { 
  Share2, 
  Heart, 
  MessageCircle, 
  Play, 
  MoreHorizontal,
  MapPin,
  GraduationCap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import generatedImage from "@assets/generated_images/student_ambassador_at_gold_coast_campus.png";

export default function KaplanCard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-5xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-[1.2fr_1fr] border border-slate-100 dark:border-slate-800"
    >
      {/* Left Side: Media/Visual */}
      <div className="relative h-[400px] md:h-auto group overflow-hidden bg-slate-100">
        <motion.img 
          src={generatedImage} 
          alt="Student Ambassador at Gold Coast"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Video Controls / Indicators */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="icon" variant="secondary" className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 hover:scale-110 transition-all">
            <Play className="h-8 w-8 fill-current ml-1" />
          </Button>
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 p-8 w-full text-white">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Badge variant="secondary" className="mb-3 bg-primary text-white border-none hover:bg-primary/90 font-medium tracking-wide px-3 py-1">
              GOLD COAST CAMPUS
            </Badge>
            <h2 className="text-2xl md:text-3xl font-heading font-bold leading-tight mb-2 drop-shadow-md">
              "My name's Aastha and I'm studying Business Analytics"
            </h2>
          </motion.div>
        </div>

        {/* Top Right Action */}
        <div className="absolute top-4 right-4">
          <Button size="icon" variant="ghost" className="text-white hover:bg-white/20 rounded-full">
            <MoreHorizontal className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Right Side: Profile & Interaction */}
      <div className="p-8 md:p-10 flex flex-col h-full bg-white dark:bg-slate-900 relative">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex gap-4">
            <div className="relative">
              <Avatar className="h-14 w-14 border-2 border-white shadow-sm ring-2 ring-slate-100">
                <AvatarImage src="https://i.pravatar.cc/150?u=aastha" alt="Aastha" />
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 bg-green-500 h-4 w-4 rounded-full border-2 border-white" title="Online now" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">Aastha</h3>
              <p className="text-sm text-primary font-medium mb-0.5">Student Ambassador</p>
              <p className="text-xs text-slate-500 flex items-center gap-1">
                <GraduationCap className="h-3 w-3" />
                MBA (Global)
              </p>
            </div>
          </div>
          <span className="text-xs font-medium text-slate-400">2h ago</span>
        </div>

        {/* Body Content */}
        <div className="flex-grow">
          <div className="prose prose-slate dark:prose-invert max-w-none mb-6">
            <h4 className="text-xl font-semibold text-slate-800 mb-3 flex items-center gap-2">
              Welcome to the team! <span className="text-2xl">🌊</span>
            </h4>
            <p className="text-slate-600 leading-relaxed">
              Great day joining the Offshore Student Recruitment Team event! It's amazing to learn how Kaplan engages with future students globally.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              If you're thinking about studying on the Gold Coast, I'd love to share my experience with the campus facilities and beach lifestyle! ☀️
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8">
             <Badge variant="outline" className="rounded-full px-3 py-1 text-slate-600 border-slate-200 bg-slate-50">
               #LifeAtKaplan
             </Badge>
             <Badge variant="outline" className="rounded-full px-3 py-1 text-slate-600 border-slate-200 bg-slate-50">
               #GoldCoast
             </Badge>
             <Badge variant="outline" className="rounded-full px-3 py-1 text-slate-600 border-slate-200 bg-slate-50">
               #StudentAmbassador
             </Badge>
          </div>
        </div>

        {/* Actions Area */}
        <div className="mt-auto space-y-6">
          <div className="flex items-center justify-between border-t border-slate-100 pt-6">
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="text-slate-500 hover:text-primary hover:bg-primary/5 -ml-2 gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-500 hover:text-red-500 hover:bg-red-50 gap-2 group">
                <Heart className="h-4 w-4 group-hover:scale-110 transition-transform" />
                Like
              </Button>
            </div>
            <div className="text-sm text-slate-400">
              124 views
            </div>
          </div>

          <Button className="w-full h-14 text-lg font-medium shadow-lg shadow-primary/20 rounded-xl gap-2 transition-all hover:shadow-primary/30 hover:-translate-y-0.5">
            <MessageCircle className="h-5 w-5" />
            Ask me a question
          </Button>
          
          <div className="text-center">
             <a href="#" className="text-xs font-medium text-slate-400 hover:text-primary transition-colors">
               View full profile &rarr;
             </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
