import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";

// Eagerly load the home page for best initial load experience
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

// Lazy load other pages for code splitting
const Post = lazy(() => import("@/pages/post"));
const QAList = lazy(() => import("@/pages/qa-list"));
const QADetail = lazy(() => import("@/pages/qa-detail"));
const AmbassadorProfile = lazy(() => import("@/pages/ambassador-profile"));
const UniversityProfile = lazy(() => import("@/pages/university-profile"));
const UniversityAmbassadors = lazy(() => import("@/pages/university-ambassadors"));
const UniversityEnquiry = lazy(() => import("@/pages/university-enquiry"));
const Dreamwall = lazy(() => import("@/pages/dreamwall"));

// Loading fallback component
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-[#3b66f5]" />
        <span className="text-sm text-slate-500">Loading...</span>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/post/:id" component={Post} />
        <Route path="/qa" component={QAList} />
        <Route path="/qa/:id" component={QADetail} />
        <Route path="/dreamwall" component={Dreamwall} />
        <Route path="/ambassador/:id" component={AmbassadorProfile} />
        <Route path="/university/:id" component={UniversityProfile} />
        <Route path="/university/:id/ambassadors" component={UniversityAmbassadors} />
        <Route path="/university/:id/enquiry" component={UniversityEnquiry} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
