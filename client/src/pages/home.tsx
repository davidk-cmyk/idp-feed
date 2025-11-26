import { ChevronLeft } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import KaplanCard from "@/components/KaplanCard";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
      {/* Navigation Header */}
      <Navigation />

      <div className="w-full max-w-5xl mx-auto px-4 pb-12 flex flex-col items-center">
        
        {/* Back Navigation - Explicitly separated */}
        <div className="w-full mb-4">
          <Button 
            variant="ghost" 
            className="pl-0 text-slate-500 hover:text-[#3b66f5] hover:bg-transparent gap-1 group"
            aria-label="Back to Student Life Feed"
          >
            <ChevronLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Student Life Feed</span>
          </Button>
        </div>


        {/* Feed Context */}
        <div className="w-full space-y-6">
          {/* The Component */}
          <KaplanCard />
        </div>

        {/* Footer / Context */}
        <div className="mt-12 text-sm text-slate-400 font-medium text-center">
          Designed for Kaplan Business School &bull; Mockup Prototype
        </div>
      </div>
    </div>
  );
}
