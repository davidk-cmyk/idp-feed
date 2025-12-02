import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Post from "@/pages/post";
import QAList from "@/pages/qa-list";
import QADetail from "@/pages/qa-detail";
import AmbassadorProfile from "@/pages/ambassador-profile";
import UniversityProfile from "@/pages/university-profile";
import UniversityAmbassadors from "@/pages/university-ambassadors";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/post/:id" component={Post} />
      <Route path="/qa" component={QAList} />
      <Route path="/qa/:id" component={QADetail} />
      <Route path="/ambassador/:id" component={AmbassadorProfile} />
      <Route path="/university/:id" component={UniversityProfile} />
      <Route path="/university/:id/ambassadors" component={UniversityAmbassadors} />
      <Route component={NotFound} />
    </Switch>
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
