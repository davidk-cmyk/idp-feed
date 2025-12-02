import Navigation from "@/components/Navigation";
import QASidebar from "@/components/QASidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Home } from "lucide-react";
import { Link } from "wouter";

export default function QADetail() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
      <Navigation />

      <div className="w-full max-w-6xl mx-auto px-4 pb-12 flex items-start gap-8">
        {/* Sidebar */}
        <QASidebar />

        {/* Main Content */}
        <div className="flex-1 min-w-0">
           {/* Breadcrumbs */}
           <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
             <Link href="/" className="hover:text-[#3b66f5]">Home</Link>
             <ChevronRight className="h-3 w-3" />
             <Link href="/qa" className="hover:text-[#3b66f5]">Student Q&A</Link>
             <ChevronRight className="h-3 w-3" />
             <span className="text-slate-400">Student life</span>
             <ChevronRight className="h-3 w-3" />
             <span className="font-medium text-slate-900 truncate max-w-[200px]">What support services are there...</span>
           </div>

           {/* Question Header */}
           <div className="mb-8 border-b border-slate-100 pb-8">
             <div className="flex items-center gap-2 mb-4">
               <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                  <span className="text-orange-600 text-sm">✨</span>
               </div>
               <span className="text-sm font-semibold text-orange-600">Student life</span>
             </div>
             
             <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
               What support services are there and which have you used?
             </h1>
             
             <div className="text-sm font-bold text-slate-900">2 Answers</div>
           </div>

           {/* Answers List */}
           <div className="space-y-8">
             {/* Answer 1 */}
             <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 md:p-8">
               {/* Author */}
               <div className="flex items-center gap-3 mb-6">
                  <Link href="/ambassador/1">
                    <Avatar className="h-12 w-12 border border-slate-100 cursor-pointer hover:ring-2 ring-[#3b66f5] ring-offset-2 transition-all">
                      <AvatarImage src="https://i.pravatar.cc/150?u=victoria" alt="Victoria Xu" />
                      <AvatarFallback>VX</AvatarFallback>
                    </Avatar>
                  </Link>
                  <div className="flex flex-col">
                     <Link href="/ambassador/1">
                       <span className="text-base font-bold text-slate-900 hover:text-[#3b66f5] cursor-pointer transition-colors">Victoria Xu</span>
                     </Link>
                     <Link href="/university/1">
                       <span className="text-xs text-[#3b66f5] font-medium hover:underline cursor-pointer">University of Wollongong</span>
                     </Link>
                     <span className="text-[10px] text-slate-400 mt-0.5">6 days ago</span>
                  </div>
               </div>

               {/* Content */}
               <div className="prose prose-slate prose-sm max-w-none mb-8">
                 <p>
                   In UOW, student success hub is my favourite place. It's a welcoming space for students to study, relax, connect with others and access support. When I feel I need to fuel up, I will just drop by, grab a free snack, find a cosy spot, and have a good chat with the staff there.
                 </p>
                 <p>
                   Student success hub also hosts a good series of workshops, covering topics from job hunting to legal clinic. This session, I even attended a migration workshop, where the experts explained basically everything related to our future move after graduation.
                 </p>
                 <p>
                   The Hub can also set you up for Peer Learning Coaches, for non-subject-specific support, and Peer Assisted Study Sessions, subject-specific assistance. These services are important for new students to survive and excel in the finals! In conclusion, I strongly recommend new students to explore UOW websites and make full use of these services!
                 </p>
               </div>

               {/* University CTA */}
               <Link href="/university/1">
                 <div className="flex items-center justify-between bg-slate-50 rounded-xl p-4 border border-slate-100 cursor-pointer hover:bg-blue-50/50 hover:border-blue-200 transition-all group">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 bg-white rounded-lg border border-slate-200 flex items-center justify-center p-1">
                         <img src="https://logo.clearbit.com/uow.edu.au" alt="UOW Logo" className="w-full h-full object-contain opacity-80" onError={(e) => {e.currentTarget.style.display='none'}} />
                         <span className="text-[10px] font-bold text-slate-700 text-center leading-none" style={{display: 'none'}}>UOW</span> 
                       </div>
                       <div className="flex flex-col">
                          <span className="text-[10px] text-slate-500 uppercase font-semibold tracking-wide">Explore courses at</span>
                          <span className="text-sm font-bold text-slate-900 group-hover:text-[#3b66f5] transition-colors">University of Wollongong</span>
                       </div>
                    </div>
                    <Button size="sm" className="rounded-full bg-white text-[#3b66f5] border border-[#3b66f5] hover:bg-blue-50 font-bold px-6 shadow-sm">
                       Visit
                       <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                    </Button>
                 </div>
               </Link>
             </div>
           </div>

           {/* Marketing Banner (matches screenshot 2) */}
           <div className="mt-12 bg-[#C3E76E] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
              <div className="relative z-10 max-w-md">
                <div className="flex items-center gap-1.5 mb-2">
                   <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">Product of</span>
                   <span className="text-sm font-bold text-slate-900">idp</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 leading-tight">
                  Have you discovered our IDP community?
                </h3>
                <p className="text-slate-800 font-medium mb-6">
                  Get to hear first-hand experiences from past students, join groups and more with our new community feature.
                </p>
                <Button className="bg-[#3b66f5] hover:bg-[#2f52c4] text-white rounded-full px-6 font-semibold">
                  View community now
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
              
              <div className="relative z-10 mt-8 md:mt-0 flex gap-2">
                 {/* Mock image of students */}
                 <div className="w-48 h-48 bg-slate-200 rounded-lg overflow-hidden shadow-lg rotate-3">
                   <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=500&q=80" alt="Students" className="w-full h-full object-cover" />
                 </div>
              </div>

              {/* Decorative blobs */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
           </div>
        </div>
      </div>
    </div>
  );
}
