import Navigation from "@/components/Navigation";
import FeedCard from "@/components/FeedCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, GraduationCap, Globe, Coffee, Sun, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import generatedImage from "@assets/generated_images/student_ambassador_at_gold_coast_campus.png";
import { useState, useEffect } from "react";

export default function AmbassadorProfile() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 300;
      setShowSticky(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const posts = [
    {
      id: "1",
      author: "Aastha",
      school: "Kaplan Business School",
      time: "8 hours ago",
      image: generatedImage,
      title: "Great day joining the Offshore Student Recruitment Team event! As a Student Ambassador...",
      avatarUrl: "https://i.pravatar.cc/150?u=aastha_kaplan",
      likes: 24
    },
    {
      id: "4",
      author: "Aastha",
      school: "Kaplan Business School",
      time: "10 hours ago",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
      title: "Taking breaks while studying helps keep the mind fresh! PS5 match -> assessment progress -> repeat 🎮",
      avatarUrl: "https://i.pravatar.cc/150?u=aastha_kaplan",
      likes: 12
    },
    {
      id: "5",
      author: "Aastha",
      school: "Kaplan Business School",
      time: "2 days ago",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      title: "Weekend vibes at Surfers Paradise! The weather is perfect for a beach day ☀️🌊",
      avatarUrl: "https://i.pravatar.cc/150?u=aastha_kaplan",
      likes: 45
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
      <Navigation />

      <div className="w-full max-w-5xl mx-auto px-4 pb-24">
        
        {/* Profile Header Card */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8">
            
            {/* Avatar Section */}
            <div className="flex-shrink-0 flex flex-col items-center md:items-start">
               <div className="relative">
                  <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-white shadow-sm">
                    <AvatarImage src="https://i.pravatar.cc/150?u=aastha_kaplan" alt="Aastha" />
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow-sm border border-slate-100">
                     <span className="text-2xl leading-none block">🇳🇵</span>
                  </div>
               </div>
            </div>

            {/* Info Section */}
            <div className="flex-1 text-center md:text-left">
               <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 mb-2 justify-center md:justify-start">
                 <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Aastha</h1>
                 <Badge variant="secondary" className="mx-auto md:mx-0 w-fit bg-blue-50 text-blue-700 border-blue-100">
                   Student Ambassador
                 </Badge>
               </div>

               <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-slate-500 mb-6">
                 <div className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-slate-400" />
                    Kathmandu, Nepal
                 </div>
                 <div className="flex items-center gap-1.5">
                    <GraduationCap className="h-4 w-4 text-slate-400" />
                    MBA (Global)
                 </div>
                 <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    Active now
                 </div>
               </div>

               <div className="space-y-4 max-w-2xl mx-auto md:mx-0">
                 <p className="text-slate-600 leading-relaxed">
                   Hi there! Namaste! 🙏 I'm Aastha, an international student from Nepal loving life on the Gold Coast. I chose Kaplan for its flexible MBA program and supportive community.
                 </p>
                 <p className="text-slate-600 leading-relaxed">
                   I'm currently working part-time as a barista while studying, and I love exploring the local beaches on weekends! 🌊☕️
                 </p>
               </div>

               <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-6">
                  <Badge variant="outline" className="px-3 py-1.5 font-normal text-slate-600 border-slate-200 gap-1.5 bg-slate-50/50">
                    <Globe className="h-3.5 w-3.5 text-slate-400" /> Travel
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1.5 font-normal text-slate-600 border-slate-200 gap-1.5 bg-slate-50/50">
                    <Coffee className="h-3.5 w-3.5 text-slate-400" /> Coffee
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1.5 font-normal text-slate-600 border-slate-200 gap-1.5 bg-slate-50/50">
                    <Sun className="h-3.5 w-3.5 text-slate-400" /> Beach
                  </Badge>
               </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex flex-col gap-3 min-w-[200px]">
               <Button className="w-full h-12 text-base font-semibold bg-[#3b66f5] hover:bg-[#2f52c4] text-white shadow-sm rounded-full gap-2">
                 <MessageCircle className="h-5 w-5" />
                 Ask me a question
               </Button>
               <p className="text-center text-xs text-slate-400">
                 Typically replies in a few hours
               </p>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 pb-4 border-b border-slate-200">
             <h2 className="text-lg font-bold text-slate-900">Posts by Aastha</h2>
             <Badge variant="secondary" className="bg-slate-100 text-slate-600">{posts.length}</Badge>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {posts.map((post) => (
              <FeedCard key={post.id} {...post} />
            ))}
          </div>
        </div>

      </div>

      {/* Sticky Mobile Action Bar */}
      <AnimatePresence>
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.1)] md:hidden z-50 px-4 py-3 safe-area-pb"
        >
          <div className="flex items-center gap-3 mb-3">
             <Avatar className="h-10 w-10 border border-slate-200">
               <AvatarImage src="https://i.pravatar.cc/150?u=aastha_kaplan" alt="Aastha" />
               <AvatarFallback>AS</AvatarFallback>
             </Avatar>
             <div className="flex-1">
                <p className="text-sm text-slate-600">Have a question for <span className="font-bold text-slate-900">Aastha</span>?</p>
             </div>
          </div>
          
          <Button className="w-full h-11 text-sm font-semibold bg-[#3b66f5] hover:bg-[#2f52c4] text-white shadow-none rounded-full gap-2">
            <MessageCircle className="h-4 w-4" />
            Ask me a question
          </Button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
