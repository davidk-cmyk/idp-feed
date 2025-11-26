import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [activeTab, setActiveTab] = useState("Student Life Feed");

  const tabs = [
    "Community Groups",
    "Student Life Feed",
    "Find friends",
    "Inbox"
  ];

  return (
    <div className="w-full bg-white dark:bg-slate-900 mb-8">
      <div className="max-w-5xl mx-auto px-4 pt-8">
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
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "pb-3 text-sm font-medium whitespace-nowrap transition-colors relative",
                activeTab === tab
                  ? "text-[#3b66f5] font-bold"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
              )}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#3b66f5]"></span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
