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
      <div className="flex items-center gap-2 mb-2">
        <div className="flex items-center gap-1.5 bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">
           <span className="text-[10px] font-bold uppercase tracking-wide">{category}</span>
        </div>
        <span className="text-xs text-slate-400">&bull; {time}</span>
      </div>

      {/* Question */}
      <Link href={`/qa/${id}`}>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 cursor-pointer hover:text-[#3b66f5] transition-colors">
          {question}
        </h3>
      </Link>

      {/* Stats */}
      <div className="flex items-center gap-1 text-slate-500 text-sm mb-4">
        <span className="font-medium">{answerCount} Answers</span>
      </div>

      {/* Answered By */}
      {answerers.length > 0 && (
        <div className="flex items-center gap-4">
          <span className="text-xs text-slate-400">Answered by</span>
          <div className="flex items-center gap-4">
             {answerers.map((person, idx) => (
               <div key={idx} className="flex items-center gap-2">
                 <Avatar className="h-8 w-8 border border-slate-100">
                   <AvatarImage src={person.avatar} alt={person.name} />
                   <AvatarFallback>{person.name[0]}</AvatarFallback>
                 </Avatar>
                 <div className="flex flex-col">
                    <span className="text-xs font-semibold text-slate-700 leading-none">{person.name}</span>
                    <span className="text-[10px] text-slate-400 leading-none mt-0.5 truncate max-w-[100px]">{person.school}</span>
                 </div>
               </div>
             ))}
             {answerCount > answerers.length && (
               <div className="flex items-center justify-center h-8 px-2 bg-slate-50 rounded-full text-xs font-medium text-slate-500 border border-slate-100">
                 +{answerCount - answerers.length} others
               </div>
             )}
          </div>
        </div>
      )}
    </div>
  );
}
