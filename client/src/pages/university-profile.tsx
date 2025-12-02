import Navigation from "@/components/Navigation";
import FeedCard from "@/components/FeedCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, ExternalLink, Globe, Users, GraduationCap, Search, ArrowRight, X } from "lucide-react";
import { Link } from "wouter";
import generatedImage from "@assets/generated_images/student_ambassador_at_gold_coast_campus.png";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function UniversityProfile() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 300;
      setShowSticky(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const ambassadors = [
    { name: "Aastha", avatar: "https://i.pravatar.cc/150?u=aastha_kaplan", country: "🇳🇵", role: "Student Ambassador" },
    { name: "Antonella", avatar: "https://i.pravatar.cc/150?u=antonella", country: "🇦🇷", role: "Student Ambassador" },
    { name: "Stephen", avatar: "https://i.pravatar.cc/150?u=stephen", country: "🇬🇧", role: "Alumni Ambassador" },
    { name: "Maria", avatar: "https://i.pravatar.cc/150?u=maria", country: "🇪🇸", role: "Student Ambassador" },
    { name: "John", avatar: "https://i.pravatar.cc/150?u=john", country: "🇺🇸", role: "Student Ambassador" },
    { name: "Sarah", avatar: "https://i.pravatar.cc/150?u=sarah", country: "🇨🇦", role: "Student Ambassador" },
    { name: "Michael", avatar: "https://i.pravatar.cc/150?u=michael", country: "🇩🇪", role: "Alumni Ambassador" },
    { name: "Yuki", avatar: "https://i.pravatar.cc/150?u=yuki", country: "🇯🇵", role: "Student Ambassador" },
    { name: "Chen", avatar: "https://i.pravatar.cc/150?u=chen", country: "🇨🇳", role: "Student Ambassador" },
  ];

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
      id: "2",
      author: "Antonella",
      school: "Kaplan Business School",
      time: "11 hours ago",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
      title: "Matcha and Hojicha parfait! 🍦 Loving all the experiences Melb has to offer ✨ #NanasGreenTea",
      avatarUrl: "https://i.pravatar.cc/150?u=antonella",
      likes: 18
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
        
        {/* University Header Card */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden mb-8 shadow-sm">
          
          {/* Cover Image */}
          <div className="h-32 md:h-48 bg-slate-100 relative">
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80" 
              alt="Kaplan Campus" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          <div className="px-6 md:px-8 pb-8 relative">
            <div className="flex flex-col md:flex-row md:items-end gap-6 -mt-12 mb-6">
               {/* Logo */}
               <div className="relative z-10">
                  <div className="h-24 w-24 md:h-32 md:w-32 rounded-xl border-4 border-white bg-white shadow-sm overflow-hidden flex items-center justify-center p-2">
                    <img src="https://logo.clearbit.com/kbs.edu.au" alt="Kaplan Logo" className="max-w-full max-h-full object-contain" />
                  </div>
               </div>

               {/* Info */}
               <div className="flex-1 pt-2 text-center md:text-left">
                  <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">Kaplan Business School</h1>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-slate-400" />
                        Australia (Multiple Campuses)
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Users className="h-4 w-4 text-slate-400" />
                        2,000+ International Students
                    </div>
                  </div>
               </div>

               {/* Actions */}
               <div className="flex flex-col gap-3 min-w-[200px]">
                 <Link href="/university/1/enquiry">
                   <Button className="w-full bg-[#3b66f5] hover:bg-[#2f52c4] text-white font-semibold gap-2 rounded-full shadow-sm">
                      <Search className="h-4 w-4" />
                      Enquire Now
                   </Button>
                 </Link>
                 <Button variant="outline" className="w-full border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold gap-2 rounded-full shadow-sm">
                    <ExternalLink className="h-4 w-4" />
                    Visit Website
                 </Button>
               </div>
            </div>

            {/* About Section */}
            <div className="max-w-3xl">
               <h2 className="text-lg font-bold text-slate-900 mb-3">About</h2>
               <p className="text-slate-600 leading-relaxed mb-6">
                 Kaplan Business School provides undergraduate and postgraduate business courses in Australia. We focus on student-centric learning and preparing our graduates for the workforce with practical, real-world skills. Our campuses are located in Adelaide, Brisbane, Melbourne, Perth and Sydney.
               </p>
            </div>

            {/* Ambassadors List */}
            <div className="border-t border-slate-100 pt-6">
               <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold text-slate-900">Meet our Ambassadors</h2>
                  <Link href="/university/1/ambassadors">
                    <Button variant="link" className="text-[#3b66f5] font-semibold p-0 h-auto">View all</Button>
                  </Link>
               </div>
               
               <div className="flex flex-wrap gap-4">
                  {ambassadors.slice(0, 5).map((amb, idx) => (
                    <Link key={idx} href="/ambassador/1">
                       <div className="flex flex-col items-center gap-2 cursor-pointer group">
                          <div className="relative">
                            <Avatar className="h-14 w-14 border border-slate-200 group-hover:ring-2 ring-[#3b66f5] ring-offset-2 transition-all">
                              <AvatarImage src={amb.avatar} alt={amb.name} />
                              <AvatarFallback>{amb.name[0]}</AvatarFallback>
                            </Avatar>
                            <div className="absolute -bottom-1 -right-1 bg-white p-0.5 rounded-full shadow-sm border border-slate-100 text-[10px]">
                              {amb.country}
                            </div>
                          </div>
                          <span className="text-xs font-medium text-slate-600 group-hover:text-[#3b66f5] transition-colors">{amb.name}</span>
                       </div>
                    </Link>
                  ))}
                  
                  <Link href="/university/1/ambassadors">
                    <div className="flex flex-col items-center gap-2 cursor-pointer group">
                      <div className="h-14 w-14 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-slate-100 group-hover:text-slate-600 transition-colors">
                        <span className="text-xs font-bold">+{ambassadors.length - 5}</span>
                      </div>
                      <span className="text-xs font-medium text-slate-500">More</span>
                    </div>
                  </Link>
               </div>
            </div>

          </div>
        </div>

        {/* Content Grid */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 pb-4 border-b border-slate-200">
             <h2 className="text-lg font-bold text-slate-900">Student Stories from Kaplan</h2>
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
        {showSticky && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.1)] md:hidden z-50 px-4 py-3 safe-area-pb"
          >
            <Link href="/university/1/enquiry">
              <Button className="w-full h-12 text-base font-semibold bg-[#3b66f5] hover:bg-[#2f52c4] text-white shadow-lg rounded-full gap-2">
                <Search className="h-5 w-5" />
                Enquire Now
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
