import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface QAFeaturedCardProps {
  id: string;
  category: string;
  time: string;
  question: string;
  answer: {
    author: string;
    school: string;
    avatar: string;
    text: string;
    videoThumbnail?: string;
  };
}

export default function QAFeaturedCard({ id, category, time, question, answer }: QAFeaturedCardProps) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
         <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
            <span className="text-orange-600 text-xs">✨</span>
         </div>
         <span className="text-xs font-semibold text-orange-600">{category}</span>
         <span className="text-xs text-slate-400">&bull; {time}</span>
      </div>

      {/* Question */}
      <Link href={`/qa/${id}`}>
        <h3 className="text-lg font-bold text-[#3b66f5] mb-4 cursor-pointer hover:underline">
          {question}
        </h3>
      </Link>

      {/* Answer Preview */}
      <div className="space-y-4">
         <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
           {answer.text}
         </p>

         {answer.videoThumbnail && (
           <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-100 group cursor-pointer">
             <img src={answer.videoThumbnail} alt="Video thumbnail" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
               <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                 <Play className="h-5 w-5 text-slate-900 ml-1" />
               </div>
             </div>
             <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/60 rounded text-[10px] text-white font-medium">
               0:16
             </div>
           </div>
         )}

         {/* Author */}
         <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 border border-slate-100">
                <AvatarImage src={answer.avatar} alt={answer.author} />
                <AvatarFallback>{answer.author[0]}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                 <span className="text-sm font-bold text-slate-900">{answer.author}</span>
                 <span className="text-xs text-slate-500">{answer.school}</span>
              </div>
            </div>
            <Link href={`/qa/${id}`}>
                <Button variant="ghost" size="sm" className="text-[#3b66f5] hover:bg-blue-50 gap-1">
                  Read more <ArrowRight className="h-4 w-4" />
                </Button>
            </Link>
         </div>
         
         {/* University CTA */}
         <div className="flex items-center justify-between bg-slate-50 rounded-lg p-3 border border-slate-100 mt-4">
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 bg-white rounded-md border border-slate-200 flex items-center justify-center p-1">
                 <span className="text-[10px] font-bold text-slate-700 text-center leading-none">Bond</span>
               </div>
               <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 uppercase font-semibold">Explore courses at</span>
                  <span className="text-xs font-bold text-slate-900">{answer.school}</span>
               </div>
            </div>
            <Button size="sm" variant="outline" className="h-8 rounded-full text-[#3b66f5] border-[#3b66f5] hover:bg-blue-50 text-xs font-bold px-4">
               Visit
               <ArrowRight className="h-3 w-3 ml-1" />
            </Button>
         </div>
      </div>
    </div>
  );
}
