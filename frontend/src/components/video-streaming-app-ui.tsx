import { useState } from "react";
import Sidebar from "./Sidebar";

const VideoStreamingApp = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [playingVideo, setPlayingVideo] = useState<{
    id: number;
    title: string;
    thumbnail: string;
    duration: string;
    isLive?: boolean;
  } | null>(null);

  const featuredVideos = [
    {
      id: 1,
      title: "Introduction to AWS",
      thumbnail: "/api/placeholder/320/180",
      duration: "10:25",
    },
    {
      id: 2,
      title: "Cloud Architecture Fundamentals",
      thumbnail: "/api/placeholder/320/180",
      duration: "15:40",
    },
    {
      id: 3,
      title: "Serverless Applications",
      thumbnail: "/api/placeholder/320/180",
      duration: "12:15",
    },
    {
      id: 4,
      title: "Live: AWS Summit",
      thumbnail: "/api/placeholder/320/180",
      duration: "LIVE",
      isLive: true,
    },
  ];

  const categories = [
    "Technology",
    "Education",
    "Entertainment",
    "Business",
    "Sports",
  ];

  const renderTab = () => {
    if (playingVideo) {
      return (
        <div className="mt-4">
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 w-full">
              <div className="w-full h-64 bg-black flex items-center justify-center">
                <div className="text-white">
                  Video Player: {playingVideo.title}
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-white">
                  {playingVideo.title}
                </h2>
                {playingVideo.isLive ? (
                  <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs">
                    LIVE
                  </span>
                ) : (
                  <span className="text-gray-400">{playingVideo.duration}</span>
                )}
              </div>
              <div className="mt-4 flex space-x-2">
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
                  Like
                </button>
                <button className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded">
                  Share
                </button>
                <button className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded">
                  Save
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Recommended Videos</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {featuredVideos
                .filter((v) => v.id !== playingVideo.id)
                .map((video) => (
                  <div
                    key={video.id}
                    className="cursor-pointer bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700"
                    onClick={() => setPlayingVideo(video)}
                  >
                    <div className="relative">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-32 object-cover"
                      />
                      {video.isLive && (
                        <span className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full text-xs">
                          LIVE
                        </span>
                      )}
                      {!video.isLive && (
                        <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-1 py-0.5 text-xs rounded">
                          {video.duration}
                        </span>
                      )}
                    </div>
                    <div className="p-2">
                      <h3 className="font-medium text-sm text-white truncate">
                        {video.title}
                      </h3>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <button
            className="mt-4 text-blue-500 hover:underline"
            onClick={() => setPlayingVideo(null)}
          >
            Back to browse
          </button>
        </div>
      );
    }

    if (activeTab === "home") {
      return (
        <div className="mt-4">
          <div className="relative w-full mb-6">
            <img
              src="/api/placeholder/1200/400"
              alt="Featured content"
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <h2 className="text-white text-2xl font-bold">
                Featured Content
              </h2>
              <p className="text-gray-200 mt-2">
                Watch our latest AWS architecture webinars and tutorials
              </p>
              <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full">
                Watch Now
              </button>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-4">Featured Videos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredVideos.map((video) => (
              <div
                key={video.id}
                className="cursor-pointer bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-all"
                onClick={() => setPlayingVideo(video)}
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-40 object-cover"
                  />
                  {video.isLive && (
                    <span className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full text-xs">
                      LIVE
                    </span>
                  )}
                  {!video.isLive && (
                    <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-1 py-0.5 text-xs rounded">
                      {video.duration}
                    </span>
                  )}
                </div>
                <div className="p-3">
                  <h3 className="font-medium text-white">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-semibold mt-8 mb-4">Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <div
                key={category}
                className="cursor-pointer bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition-all"
              >
                <h3 className="font-medium text-white">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (activeTab === "live") {
      return (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-4">Live Streams</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredVideos
              .filter((v) => v.isLive)
              .map((video) => (
                <div
                  key={video.id}
                  className="cursor-pointer bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 flex"
                  onClick={() => setPlayingVideo(video)}
                >
                  <div className="relative w-1/3">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full text-xs">
                      LIVE
                    </span>
                  </div>
                  <div className="p-4 w-2/3">
                    <h3 className="font-medium text-white text-lg">
                      {video.title}
                    </h3>
                    <p className="text-gray-400 mt-2">
                      Join our live stream to learn about the latest AWS
                      technologies and solutions.
                    </p>
                    <div className="mt-4">
                      <span className="text-gray-400">1.2K watching</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <h2 className="text-xl font-semibold mt-8 mb-4">
            Upcoming Live Streams
          </h2>
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium text-white">
                  AWS Architecture Deep Dive
                </h3>
                <p className="text-gray-400 mt-1">Starting in 2 days</p>
              </div>
              <button className="bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded">
                Set Reminder
              </button>
            </div>
          </div>
        </div>
      );
    }

    if (activeTab === "library") {
      return (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-4">Your Library</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="font-medium text-white">History</h3>
              <p className="text-gray-400 mt-1">View your watch history</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="font-medium text-white">Saved Videos</h3>
              <p className="text-gray-400 mt-1">Access your saved content</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="font-medium text-white">Playlists</h3>
              <p className="text-gray-400 mt-1">Manage your custom playlists</p>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 py-4 px-6 shadow-md fixed top-0 right-0 left-0 z-20">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">AWS StreamCloud</h1>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search for videos..."
              className="bg-gray-700 text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
            />
          </div>
          <div className="flex items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-8 rounded-full hover:translate-y-1 transition-transform duration-300">
              Sign In
            </button>
          </div>
        </div>
      </header>
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <main
        className={`pt-20 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "pl-64" : "pl-20"
        }`}
      >
        <div className="container mx-auto px-4 py-6">{renderTab()}</div>
      </main>
    </div>
  );
};

export default VideoStreamingApp;
