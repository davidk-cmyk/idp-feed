import KaplanCard from "@/components/KaplanCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-4 md:p-8 font-sans">
      <div className="w-full max-w-6xl flex flex-col items-center gap-12">
        
        {/* Header / Context for the demo */}
        <div className="text-center space-y-4 max-w-2xl">
          <h1 className="text-4xl font-heading font-bold text-slate-900 dark:text-white tracking-tight">
            Student Stories
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            Connect with our student ambassadors and see what life is really like at Kaplan Business School.
          </p>
        </div>

        {/* The Component */}
        <KaplanCard />

        {/* Footer / Context */}
        <div className="text-sm text-slate-400 font-medium">
          Designed for Kaplan Business School &bull; Mockup Prototype
        </div>
      </div>
    </div>
  );
}
