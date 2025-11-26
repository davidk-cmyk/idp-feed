import { motion } from "framer-motion";
import { 
  Share2, 
  Heart, 
  MessageCircle, 
  Play, 
  MoreHorizontal,
  MapPin,
  GraduationCap,
  Globe,
  Music,
  Coffee,
  Sun
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import generatedImage from "@assets/generated_images/student_ambassador_at_gold_coast_campus.png";

export default function KaplanCard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-5xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-[1.1fr_1fr] border border-slate-100 dark:border-slate-800 font-sans"
    >
      {/* Left Side: Media & Content Context */}
      <div className="relative h-full min-h-[400px] md:h-auto group overflow-hidden bg-slate-100 flex flex-col">
        <div className="relative flex-grow h-[60%] overflow-hidden">
          <motion.img 
            src={generatedImage} 
            alt="Student Ambassador at Gold Coast"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Video Controls / Indicators */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <Button size="icon" variant="secondary" className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 hover:scale-110 transition-all">
              <Play className="h-8 w-8 fill-current ml-1" />
            </Button>
          </div>

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full text-white z-20">
            <Badge variant="secondary" className="mb-3 bg-primary/90 backdrop-blur-sm text-white border-none font-medium tracking-wide px-3 py-1">
              GOLD COAST CAMPUS
            </Badge>
            <h2 className="text-2xl md:text-3xl font-heading font-bold leading-tight mb-2 drop-shadow-lg">
              "My name's Aastha and I'm studying Business Analytics"
            </h2>
          </div>

          {/* Top Right Action */}
          <div className="absolute top-4 right-4 z-20">
            <Button size="icon" variant="ghost" className="text-white hover:bg-white/20 rounded-full">
              <MoreHorizontal className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Post Description Area - "About the Content" */}
        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 border-t border-slate-100 dark:border-slate-800 flex-grow">
          <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            About this post
          </h4>
          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
            Great day joining the Offshore Student Recruitment Team event! It's amazing to learn how Kaplan engages with future students globally.
          </p>
          <div className="flex flex-wrap gap-2">
             <Badge variant="outline" className="rounded-md px-2 py-1 text-xs font-medium text-slate-500 border-slate-200 bg-white dark:bg-slate-800 dark:text-slate-400">
               #LifeAtKaplan
             </Badge>
             <Badge variant="outline" className="rounded-md px-2 py-1 text-xs font-medium text-slate-500 border-slate-200 bg-white dark:bg-slate-800 dark:text-slate-400">
               #GoldCoast
             </Badge>
          </div>
          
          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-slate-200/60 dark:border-slate-700/60">
             <button className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-primary transition-colors">
               <Heart className="h-4 w-4" /> 24 Likes
             </button>
             <button className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-primary transition-colors">
               <Share2 className="h-4 w-4" /> Share
             </button>
          </div>
        </div>
      </div>

      {/* Right Side: Author Profile & "Ask Me" Context */}
      <div className="p-8 md:p-10 flex flex-col h-full bg-white dark:bg-slate-900 relative overflow-y-auto">
        
        {/* Author Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="relative mb-4">
            <div className="h-24 w-24 rounded-full p-1 bg-gradient-to-tr from-primary via-teal-400 to-blue-500">
              <Avatar className="h-full w-full border-4 border-white dark:border-slate-900">
                <AvatarImage src="https://i.pravatar.cc/150?u=aastha_kaplan" alt="Aastha" />
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
            </div>
            <div className="absolute bottom-0 right-0 bg-white dark:bg-slate-800 p-1.5 rounded-full shadow-md border border-slate-100 dark:border-slate-700" title="From Nepal">
               <span className="text-xl leading-none">🇳🇵</span>
            </div>
          </div>
          
          <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mb-1">Aastha</h3>
          <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
            <MapPin className="h-3.5 w-3.5" />
            <span>Kathmandu, Nepal</span>
            <span className="mx-1 text-slate-300">•</span>
            <span className="text-primary font-medium">Student Ambassador</span>
          </div>
          
          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl px-4 py-2 flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200 border border-slate-100 dark:border-slate-700">
            <GraduationCap className="h-4 w-4 text-primary" />
            MBA (Global)
          </div>
        </div>

        {/* Bio / "About Me" Section */}
        <div className="space-y-6 mb-8">
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide mb-3">
              About Me
            </h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Hi there! Namaste! 🙏 I'm Aastha, an international student from Nepal loving life on the Gold Coast. I chose Kaplan for its flexible MBA program and supportive community.
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mt-3">
              I'm currently working part-time as a barista while studying, and I love exploring the local beaches on weekends! 🌊☕️
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide mb-3">
              My Interests
            </h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-100 gap-1.5 py-1.5 px-3">
                <Globe className="h-3.5 w-3.5" /> Travel & Culture
              </Badge>
              <Badge variant="secondary" className="bg-amber-50 text-amber-700 hover:bg-amber-100 border-amber-100 gap-1.5 py-1.5 px-3">
                <Coffee className="h-3.5 w-3.5" /> Coffee Culture
              </Badge>
              <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border-emerald-100 gap-1.5 py-1.5 px-3">
                <Sun className="h-3.5 w-3.5" /> Beach Life
              </Badge>
            </div>
          </div>
        </div>

        <Separator className="my-2 mb-8" />

        {/* Call to Action Area */}
        <div className="mt-auto">
          <div className="bg-primary/5 rounded-2xl p-5 border border-primary/10 mb-4 text-center">
             <p className="text-primary-800 dark:text-primary-200 font-medium text-sm mb-3">
               Want to know more about studying in Gold Coast?
             </p>
             <Button className="w-full h-12 text-base font-semibold shadow-lg shadow-primary/20 rounded-xl gap-2 transition-all hover:shadow-primary/30 hover:-translate-y-0.5">
                <MessageCircle className="h-5 w-5" />
                Ask me a question
              </Button>
          </div>
          
          <p className="text-center text-xs text-slate-400">
            Usually replies within 2 hours
          </p>
        </div>
      </div>
    </motion.div>
  );
}
