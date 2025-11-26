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
        
        {/* Post Header / Back Navigation */}
        <div className="w-full flex items-center gap-3 mb-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 -ml-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-full"
            aria-label="Back to Student Life Feed"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border border-slate-200 shadow-sm">
              <AvatarImage src="https://i.pravatar.cc/150?u=aastha_kaplan" alt="Aastha" />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-slate-900 dark:text-white leading-none">
                Aastha
              </span>
              <span className="text-xs font-semibold text-[#3b66f5] mt-0.5">
                Kaplan Business School
              </span>
              <span className="text-[11px] text-slate-500 mt-0.5">
                9 hours ago
              </span>
            </div>
          </div>
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
