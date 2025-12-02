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
        <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
           <span className="text-[#3b66f5] text-[10px]">●</span>
        </div>
        <span className="text-xs font-semibold text-[#3b66f5]">{category}</span>
        <span className="text-xs text-slate-300">&bull; {time}</span>
      </div>

      {/* Question */}
      <Link href={`/qa/${id}`}>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 cursor-pointer hover:text-[#3b66f5] transition-colors leading-tight">
          {question}
        </h3>
      </Link>

      {/* Answered By */}
      <div className="flex items-start sm:items-center gap-4 mt-4">
        <span className="text-xs font-medium text-slate-400 mt-1 sm:mt-0">
          {answerCount} Answers
        </span>
        <div className="h-4 w-px bg-slate-200 hidden sm:block" />
        <div className="hidden sm:block text-xs text-slate-400">Answered by</div>
        
        <div className="flex flex-wrap items-center gap-3">
           {answerers.map((person, idx) => (
             <div key={idx} className="flex items-center gap-2 group cursor-pointer">
               <Avatar className="h-6 w-6 border border-slate-100">
                 <AvatarImage src={person.avatar} alt={person.name} />
                 <AvatarFallback>{person.name[0]}</AvatarFallback>
               </Avatar>
               <div className="flex flex-col">
                  <span className="text-xs font-semibold text-slate-700 group-hover:text-[#3b66f5] transition-colors leading-none">{person.name}</span>
                  <span className="text-[10px] text-slate-400 leading-none mt-0.5 truncate max-w-[100px]">{person.school}</span>
               </div>
             </div>
           ))}
           {answerCount > answerers.length && (
             <div className="flex items-center justify-center h-6 px-2 bg-slate-50 rounded-full text-[10px] font-medium text-slate-500 border border-slate-100">
               +{answerCount - answerers.length} others
             </div>
           )}
        </div>
      </div>
    </div>
  );
}
