import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "wouter";

interface QAListItemProps {
  id: string;
  category: string;
  time: string;
  question: string;
  answerCount: number;
  answerers: Array<{ name: string; avatar: string; school: string }>;
}

export default function QAListItem({ id, category, time, question, answerCount, answerers }: QAListItemProps) {
  return (
    <div className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 py-6 first:pt-0">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full bg-[#3b66f5] opacity-20 flex items-center justify-center">
           <div className="w-1 h-1 rounded-full bg-[#3b66f5]" />
        </div>
        <span className="text-sm font-medium text-[#3b66f5]">{category}</span>
        <span className="text-sm text-slate-300">&bull;</span>
        <span className="text-sm text-slate-300">{time}</span>
      </div>

      {/* Question */}
      <Link href={`/qa/${id}`}>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 cursor-pointer hover:text-[#3b66f5] transition-colors leading-tight">
          {question}
        </h3>
      </Link>

      {/* Answered By */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mt-4">
        <div className="flex items-center gap-6 text-slate-400 text-sm">
          <span>{answerCount} Answers</span>
          <div className="h-4 w-px bg-slate-200" />
          <span>Answered by</span>
        </div>
        
        <div className="flex flex-wrap items-center gap-4">
           {answerers.map((person, idx) => (
             <div key={idx} className="flex items-center gap-3 group cursor-pointer">
               <Avatar className="h-8 w-8 border border-slate-100">
                 <AvatarImage src={person.avatar} alt={person.name} />
                 <AvatarFallback>{person.name[0]}</AvatarFallback>
               </Avatar>
               <div className="flex flex-col">
                  <span className="text-sm font-semibold text-slate-900 group-hover:text-[#3b66f5] transition-colors leading-none">{person.name}</span>
                  <span className="text-xs text-slate-400 leading-none mt-1 truncate max-w-[120px]">{person.school}</span>
               </div>
             </div>
           ))}
           {answerCount > answerers.length && (
             <div className="flex items-center justify-center h-8 px-3 bg-slate-100/50 rounded-full text-xs font-medium text-slate-500 hover:bg-slate-100 transition-colors cursor-pointer">
               +{answerCount - answerers.length} others
             </div>
           )}
        </div>
      </div>
    </div>
  );
}
