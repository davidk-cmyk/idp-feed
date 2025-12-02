import Navigation from "@/components/Navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";

export default function UniversityAmbassadors() {
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
    { name: "David", avatar: "https://i.pravatar.cc/150?u=david", country: "🇦🇺", role: "Student Ambassador" },
    { name: "Emma", avatar: "https://i.pravatar.cc/150?u=emma", country: "🇫🇷", role: "Student Ambassador" },
    { name: "Lucas", avatar: "https://i.pravatar.cc/150?u=lucas", country: "🇧🇷", role: "Student Ambassador" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
      <Navigation />

      <div className="w-full max-w-5xl mx-auto px-4 pb-24">
        
        {/* Back Navigation */}
        <div className="w-full mb-6">
          <Link href="/university/1">
            <Button 
              variant="ghost" 
              className="pl-0 text-slate-500 hover:text-[#3b66f5] hover:bg-transparent gap-1 group"
            >
              <ChevronLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to University Profile</span>
            </Button>
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">Meet our Ambassadors</h1>
          <p className="text-slate-500">Connect with students from around the world studying at Kaplan Business School.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {ambassadors.map((amb, idx) => (
            <Link key={idx} href="/ambassador/1">
               <div className="flex flex-col items-center p-6 rounded-xl bg-white border border-slate-200 hover:border-[#3b66f5] hover:shadow-md transition-all cursor-pointer group text-center">
                  <div className="relative mb-4">
                    <Avatar className="h-20 w-20 border-2 border-slate-100 group-hover:border-[#3b66f5] transition-all">
                      <AvatarImage src={amb.avatar} alt={amb.name} />
                      <AvatarFallback>{amb.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow-sm border border-slate-100 text-base">
                      {amb.country}
                    </div>
                  </div>
                  <span className="text-base font-bold text-slate-900 group-hover:text-[#3b66f5] transition-colors">{amb.name}</span>
                  <span className="text-xs text-slate-500 mt-1 font-medium">{amb.role}</span>
                  <Button size="sm" variant="ghost" className="mt-3 h-8 rounded-full text-[#3b66f5] bg-blue-50 hover:bg-blue-100 w-full text-xs font-semibold">
                    View Profile
                  </Button>
               </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
