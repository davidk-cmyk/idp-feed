import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "wouter";
import { Menu, X, Home, MessageSquare, Bookmark, Users, Inbox } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Navigation() {
  const [location] = useLocation();
  const [activeTab, setActiveTab] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (location === "/") setActiveTab("Student Life Feed");
    else if (location.startsWith("/qa")) setActiveTab("Student Q&A");
    else if (location.startsWith("/dreamwall")) setActiveTab("Dreamwall");
    else setActiveTab("");
  }, [location]);

  // Close drawer on route change
  useEffect(() => {
    setIsDrawerOpen(false);
  }, [location]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  const tabs = [
    { name: "Student Life Feed", path: "/", icon: Home, enabled: true },
    { name: "Student Q&A", path: "/qa", icon: MessageSquare, enabled: true },
    { name: "Dreamwall", path: "/dreamwall", icon: Bookmark, enabled: true },
    { name: "Community Groups", path: "#", icon: Users, enabled: false },
    { name: "Inbox", path: "#", icon: Inbox, enabled: false }
  ];

  return (
    <div className="w-full bg-white dark:bg-slate-900 mb-8">
      <div className="max-w-6xl mx-auto px-4 pt-6 md:pt-8">
        {/* Header with Mobile Menu Button */}
        <div className="mb-4 md:mb-6 flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white inline-block relative pb-2">
            IDP Community
            <span className="absolute bottom-0 left-0 w-8 h-1 bg-[#e86e25] rounded-full"></span>
          </h1>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="md:hidden p-2 -mr-2 rounded-lg hover:bg-slate-100 active:bg-slate-200 transition-colors touch-manipulation"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6 text-slate-700" />
          </button>
        </div>

        {/* Desktop Tabs */}
        <div className="hidden md:flex items-center gap-8 border-b border-slate-200 dark:border-slate-800">
          {tabs.map((tab) => (
            <Link key={tab.name} href={tab.path}>
              <div
                className={cn(
                  "pb-3 text-sm font-medium whitespace-nowrap transition-colors relative cursor-pointer",
                  !tab.enabled && "opacity-50 cursor-not-allowed",
                  activeTab === tab.name
                    ? "text-[#3b66f5] font-bold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                )}
                aria-disabled={!tab.enabled}
              >
                {tab.name}
                {activeTab === tab.name && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#3b66f5]"></span>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Compact Tab Bar */}
        <div className="md:hidden flex items-center gap-4 border-b border-slate-200 dark:border-slate-800 overflow-x-auto scrollbar-hide -mx-4 px-4 snap-x snap-mandatory">
          {tabs.filter(t => t.enabled).map((tab) => (
            <Link key={tab.name} href={tab.path}>
              <div
                className={cn(
                  "pb-3 text-sm font-medium whitespace-nowrap transition-colors relative cursor-pointer snap-start min-w-[80px] text-center",
                  activeTab === tab.name
                    ? "text-[#3b66f5] font-bold"
                    : "text-slate-600 dark:text-slate-400"
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

      {/* Mobile Drawer Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 md:hidden"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-[280px] bg-white dark:bg-slate-900 z-50 transform transition-transform duration-300 ease-out md:hidden shadow-xl",
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800">
          <span className="font-bold text-lg text-slate-900 dark:text-white">Menu</span>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="p-2 -mr-2 rounded-lg hover:bg-slate-100 active:bg-slate-200 transition-colors touch-manipulation"
            aria-label="Close menu"
          >
            <X className="h-5 w-5 text-slate-700" />
          </button>
        </div>

        {/* Drawer Navigation Items */}
        <nav className="p-4">
          <ul className="space-y-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <li key={tab.name}>
                  {tab.enabled ? (
                    <Link href={tab.path}>
                      <div
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors touch-manipulation min-h-[48px]",
                          activeTab === tab.name
                            ? "bg-[#3b66f5]/10 text-[#3b66f5] font-semibold"
                            : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                        )}
                      >
                        <Icon className="h-5 w-5" />
                        <span>{tab.name}</span>
                      </div>
                    </Link>
                  ) : (
                    <div
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 cursor-not-allowed min-h-[48px]"
                    >
                      <Icon className="h-5 w-5" />
                      <span>{tab.name}</span>
                      <span className="ml-auto text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded">
                        Soon
                      </span>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
