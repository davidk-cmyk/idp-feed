import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [location] = useLocation();
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    if (location === "/") setActiveTab("Student Life Feed");
    else if (location.startsWith("/qa")) setActiveTab("Student Q&A");
    else setActiveTab("");
  }, [location]);

  const tabs = [
    { name: "Community Groups", path: "#" },
    { name: "Student Life Feed", path: "/" },
    { name: "Student Q&A", path: "/qa" },
    { name: "Find friends", path: "#" },
    { name: "Inbox", path: "#" }
  ];

  return (
    <div className="w-full bg-white dark:bg-slate-900 mb-8">
      <div className="max-w-6xl mx-auto px-4 pt-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white inline-block relative pb-2">
            IDP Community
            <span className="absolute bottom-0 left-0 w-8 h-1 bg-[#e86e25] rounded-full"></span>
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-8 border-b border-slate-200 dark:border-slate-800 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <Link key={tab.name} href={tab.path}>
              <div
                className={cn(
                  "pb-3 text-sm font-medium whitespace-nowrap transition-colors relative cursor-pointer",
                  activeTab === tab.name
                    ? "text-[#3b66f5] font-bold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                )}
              >
                {tab.name}
                {activeTab === tab.name && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#3b66f5]"></span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
