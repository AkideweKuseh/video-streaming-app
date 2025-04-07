import { FC } from "react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

const Sidebar: FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-gray-800 shadow-lg pt-20 transition-all duration-300 ease-in-out ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
    >
      <div className="flex flex-col space-y-6 p-3">
        {/* Home Button */}
        <button
          className={`flex items-center p-3 rounded-lg transition-colors ${
            activeTab === "home"
              ? "bg-blue-500 text-white"
              : "text-gray-400 hover:bg-gray-700"
          }`}
          onClick={() => setActiveTab("home")}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span
            className={`ml-3 transition-opacity duration-200 ${
              isSidebarOpen ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            Home
          </span>
        </button>

        {/* Live Button */}
        <button
          className={`flex items-center p-3 rounded-lg transition-colors ${
            activeTab === "live"
              ? "bg-blue-500 text-white"
              : "text-gray-400 hover:bg-gray-700"
          }`}
          onClick={() => setActiveTab("live")}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          <span
            className={`ml-3 transition-opacity duration-200 ${
              isSidebarOpen ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            Live
          </span>
        </button>

        {/* Library Button */}
        <button
          className={`flex items-center p-3 rounded-lg transition-colors ${
            activeTab === "library"
              ? "bg-blue-500 text-white"
              : "text-gray-400 hover:bg-gray-700"
          }`}
          onClick={() => setActiveTab("library")}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          <span
            className={`ml-3 transition-opacity duration-200 ${
              isSidebarOpen ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            Library
          </span>
        </button>

        {/* Toggle Button */}
        <button
          className="absolute bottom-4 left-0 right-0 mx-auto flex items-center justify-center p-3 text-gray-400 hover:text-gray-300"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isSidebarOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            )}
          </svg>
          <span
            className={`ml-2 transition-opacity duration-200 ${
              isSidebarOpen ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            {isSidebarOpen ? "Collapse" : "Expand"}
          </span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
