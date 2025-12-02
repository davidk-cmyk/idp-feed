import Navigation from "@/components/Navigation";
import QASidebar from "@/components/QASidebar";
import QAListItem from "@/components/QAListItem";
import QAFeaturedCard from "@/components/QAFeaturedCard";

export default function QAList() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
      <Navigation />

      <div className="w-full max-w-6xl mx-auto px-4 pb-12 flex items-start gap-8">
        {/* Sidebar */}
        <QASidebar />

        {/* Main Content */}
        <div className="flex-1 min-w-0">
           {/* Section Header */}
           <div className="mb-8">
             <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Real Student Experiences: In their own words</h2>
             <p className="text-slate-500 text-sm">Discover what it's really like to study abroad through honest Q&A with current students.</p>
           </div>

           <div className="space-y-6">
             {/* Standard List Item */}
             <QAListItem 
               id="1"
               category="Student experience"
               time="19 days ago"
               question="What have you learnt about yourself since studying abroad?"
               answerCount={4}
               answerers={[
                 { name: "Zane", avatar: "https://i.pravatar.cc/150?u=zane", school: "Bond University" },
                 { name: "Maggie", avatar: "https://i.pravatar.cc/150?u=maggie", school: "Bond University" },
                 { name: "Anjula", avatar: "https://i.pravatar.cc/150?u=anjula", school: "The University of New England" }
               ]}
             />

             {/* Featured/Expanded Item */}
             <QAFeaturedCard
               id="2"
               category="Student life"
               time="22 days ago"
               question="How do you spend your free time as an international student?"
               answer={{
                 author: "Maggie",
                 school: "Bond University",
                 avatar: "https://i.pravatar.cc/150?u=maggie",
                 text: "I like to visit winery, look at the mountain view during semester break. What a beautiful and peaceful day.",
                 videoThumbnail: "https://images.unsplash.com/photo-1524645332028-69d152436257?auto=format&fit=crop&w=1000&q=80"
               }}
             />

             {/* Another List Item */}
              <QAListItem 
               id="3"
               category="Student life"
               time="6 days ago"
               question="What support services are there and which have you used?"
               answerCount={2}
               answerers={[
                 { name: "Victoria Xu", avatar: "https://i.pravatar.cc/150?u=victoria", school: "University of Wollongong" },
                 { name: "Sarah", avatar: "https://i.pravatar.cc/150?u=sarah", school: "Griffith University" }
               ]}
             />
           </div>
        </div>
      </div>
    </div>
  );
}
