import KaplanCard from "@/components/KaplanCard";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
      {/* Navigation Header */}
      <Navigation />

      <div className="w-full max-w-5xl mx-auto px-4 pb-12 flex flex-col items-center">
        
        {/* Feed Context - Optional, maybe a subtle 'Latest updates' or just the cards */}
        <div className="w-full space-y-6">
          {/* The Component */}
          <KaplanCard />
          
          {/* Duplicate for demo feel if needed, or just one */}
        </div>

        {/* Footer / Context */}
        <div className="mt-12 text-sm text-slate-400 font-medium text-center">
          Designed for Kaplan Business School &bull; Mockup Prototype
        </div>
      </div>
    </div>
  );
}
