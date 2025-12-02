import { ChevronLeft, MoreHorizontal, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import KaplanCard from "@/components/KaplanCard";
import Navigation from "@/components/Navigation";
import FeedCard from "@/components/FeedCard";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";

export default function Post() {
  const moreFromAmbassador = [
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

  const moreFromUniversity = [
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
      id: "6",
      author: "Michael",
      school: "Kaplan Business School",
      time: "1 day ago",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      title: "Networking night with alumni! Great opportunity to connect and learn from their experiences.",
      avatarUrl: "https://i.pravatar.cc/150?u=michael",
      likes: 32
    }
  ];

  const relevantPosts = [
    {
      id: "7",
      author: "Sarah",
      school: "Griffith University",
      time: "3 days ago",
      image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=80",
      title: "Exploring the Gold Coast hinterland waterfalls! Australia is so beautiful 🌿",
      avatarUrl: "https://i.pravatar.cc/150?u=sarah",
      likes: 56
    },
    {
      id: "8",
      author: "Yuki",
      school: "Bond University",
      time: "5 days ago",
      image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=800&q=80",
      title: "Sunset surfing session at Burleigh Heads. Best way to end the day! 🏄‍♂️",
      avatarUrl: "https://i.pravatar.cc/150?u=yuki",
      likes: 41
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
      {/* Navigation Header */}
      <Navigation />

      <div className="w-full max-w-5xl mx-auto px-4 pb-12 flex flex-col items-center">
        
        {/* Back Navigation - Explicitly separated */}
        <div className="w-full mb-4 flex items-center justify-between">
          <Link href="/">
            <Button 
              variant="ghost" 
              className="pl-0 text-slate-500 hover:text-[#3b66f5] hover:bg-transparent gap-1 group"
              aria-label="Back to Student Life Feed"
            >
              <ChevronLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Student Life Feed</span>
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="text-slate-400">
             <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>


        {/* Feed Context */}
        <div className="w-full space-y-12">
          {/* The Component */}
          <KaplanCard />

          {/* Related Content Sections */}
          <div className="grid grid-cols-1 gap-12">
            
            {/* More from Author */}
            <div className="space-y-4">
               <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                 <div className="flex items-center gap-2">
                   <h2 className="text-lg font-bold text-slate-900">More from Aastha</h2>
                   <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-100">Ambassador</Badge>
                 </div>
                 <Link href="/ambassador/1">
                   <Button variant="link" className="text-[#3b66f5] font-semibold p-0 h-auto">View Profile</Button>
                 </Link>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {moreFromAmbassador.map(post => (
                   <FeedCard key={post.id} {...post} />
                 ))}
               </div>
            </div>

            {/* More from University */}
            <div className="space-y-4">
               <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                 <div className="flex items-center gap-2">
                   <h2 className="text-lg font-bold text-slate-900">From Kaplan Business School</h2>
                   <Badge variant="outline" className="text-slate-500 border-slate-200">University</Badge>
                 </div>
                 <Link href="/university/1">
                   <Button variant="link" className="text-[#3b66f5] font-semibold p-0 h-auto">View University</Button>
                 </Link>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {moreFromUniversity.map(post => (
                   <FeedCard key={post.id} {...post} />
                 ))}
               </div>
            </div>

            {/* Relevant / Similar Destination */}
            <div className="space-y-4">
               <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                 <div className="flex items-center gap-2">
                   <Sparkles className="h-4 w-4 text-amber-500" />
                   <h2 className="text-lg font-bold text-slate-900">Explore Gold Coast</h2>
                   <Badge variant="secondary" className="bg-amber-50 text-amber-700 border-amber-100">Recommended</Badge>
                 </div>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {relevantPosts.map(post => (
                   <FeedCard key={post.id} {...post} />
                 ))}
               </div>
            </div>

          </div>
        </div>

        {/* Footer / Context */}
        <div className="mt-12 text-sm text-slate-400 font-medium text-center">
          Designed for Kaplan Business School &bull; Mockup Prototype
        </div>
      </div>
    </div>
  );
}
