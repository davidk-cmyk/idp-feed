import Navigation from "@/components/Navigation";
import FeedCard from "@/components/FeedCard";
import generatedImage from "@assets/generated_images/student_ambassador_at_gold_coast_campus.png";

export default function Home() {
  const posts = [
    {
      id: "1",
      author: "Aastha",
      school: "Kaplan Business School",
      time: "8 hours ago",
      image: generatedImage,
      title: "Great day joining the Offshore Student Recruitment Team event! As a Student Ambassador...",
      avatarUrl: "https://i.pravatar.cc/150?u=aastha_kaplan",
      likes: 0
    },
    {
      id: "2",
      author: "Antonella",
      school: "Kaplan Business School",
      time: "11 hours ago",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
      title: "Matcha and Hojicha parfait! 🍦 Loving all the experiences Melb has to offer ✨ #NanasGreenTea",
      avatarUrl: "https://i.pravatar.cc/150?u=antonella",
      likes: 0
    },
    {
      id: "3",
      author: "Stephen",
      school: "University of Southern Queensland",
      time: "12 hours ago",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
      title: "In archaeology, the method of conjoining - or refitting - involves matching stone tool fragments...",
      avatarUrl: "https://i.pravatar.cc/150?u=stephen",
      likes: 0
    },
    {
      id: "4",
      author: "Aastha",
      school: "Kaplan Business School",
      time: "10 hours ago",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
      title: "Taking breaks while studying helps keep the mind fresh! PS5 match -> assessment progress -> repeat 🎮",
      avatarUrl: "https://i.pravatar.cc/150?u=aastha_kaplan",
      likes: 0
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
      <Navigation />

      <div className="w-full max-w-5xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {posts.map((post) => (
            <FeedCard key={post.id} {...post} />
          ))}
        </div>

        {/* Footer / Context */}
        <div className="mt-12 text-sm text-slate-400 font-medium text-center">
          Designed for Kaplan Business School &bull; Mockup Prototype
        </div>
      </div>
    </div>
  );
}
