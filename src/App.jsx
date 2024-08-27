import React, { useState } from "react";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(
    "https://www.youtube.com/embed/dQw4w9WgXcQ"
  );

  const videoList = [
    {
      id: 1,
      name: "Samantha Jenkins",
      thumbnail: "https://i3.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 2,
      name: "John Doe",
      thumbnail: "https://i3.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/kXYiU_JCYtU",
    },
    {
      id: 3,
      name: "Jane Smith",
      thumbnail: "https://i3.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/tAGnKpE4NCI",
    },
    {
      id: 1,
      name: "Samantha Jenkins",
      thumbnail: "https://i3.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 2,
      name: "John Doe",
      thumbnail: "https://i3.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/kXYiU_JCYtU",
    },
    {
      id: 3,
      name: "Jane Smith",
      thumbnail: "https://i3.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/tAGnKpE4NCI",
    },
    {
      id: 1,
      name: "Samantha Jenkins",
      thumbnail: "https://i3.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 2,
      name: "John Doe",
      thumbnail: "https://i3.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/kXYiU_JCYtU",
    },
    {
      id: 3,
      name: "Jane Smith",
      thumbnail: "https://i3.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/tAGnKpE4NCI",
    },
    {
      id: 1,
      name: "Samantha Jenkins",
      thumbnail: "https://i3.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 2,
      name: "John Doe",
      thumbnail: "https://i3.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/kXYiU_JCYtU",
    },
    {
      id: 3,
      name: "Jane Smith",
      thumbnail: "https://i3.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/tAGnKpE4NCI",
    },
    {
      id: 1,
      name: "Samantha Jenkins",
      thumbnail: "https://i3.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 2,
      name: "John Doe",
      thumbnail: "https://i3.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/kXYiU_JCYtU",
    },
    {
      id: 3,
      name: "Jane Smith",
      thumbnail: "https://i3.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/tAGnKpE4NCI",
    },
    {
      id: 1,
      name: "Samantha Jenkins",
      thumbnail: "https://i3.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 2,
      name: "John Doe",
      thumbnail: "https://i3.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/kXYiU_JCYtU",
    },
    {
      id: 3,
      name: "Jane Smith",
      thumbnail: "https://i3.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/tAGnKpE4NCI",
    },
    {
      id: 1,
      name: "Samantha Jenkins",
      thumbnail: "https://i3.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 2,
      name: "John Doe",
      thumbnail: "https://i3.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/kXYiU_JCYtU",
    },
    {
      id: 3,
      name: "Jane Smith",
      thumbnail: "https://i3.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/tAGnKpE4NCI",
    },
    {
      id: 1,
      name: "Samantha Jenkins",
      thumbnail: "https://i3.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 2,
      name: "John Doe",
      thumbnail: "https://i3.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/kXYiU_JCYtU",
    },
    {
      id: 3,
      name: "Jane Smith",
      thumbnail: "https://i3.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/tAGnKpE4NCI",
    },
    {
      id: 1,
      name: "Samantha Jenkins",
      thumbnail: "https://i3.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 2,
      name: "John Doe",
      thumbnail: "https://i3.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/kXYiU_JCYtU",
    },
    {
      id: 3,
      name: "Jane Smith",
      thumbnail: "https://i3.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/tAGnKpE4NCI",
    },

    // Add more videos if necessary
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="container mx-auto p-4">
        <h2 className="text-center text-3xl font-bold mb-4">
          OUR <span className="text-red-500">CLIENT'S</span> EXPERIENCE
        </h2>
        <p className="text-center mb-6">See what our clients say about us.</p>

        {/* Main Content Flexbox */}
        <div className="flex flex-col lg:flex-row lg:space-x-4">
          {/* Playing Video */}
          <div className="flex-1 mb-4 lg:mb-0">
            <div className="w-full">
              <iframe
                className="w-full h-72 lg:h-[65vh] rounded-lg"
                src={selectedVideo}
                title="Client Testimonial Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Video List */}
          <div className="lg:w-1/3 max-h-[65vh] lg:overflow-y-auto overflow-x-auto flex lg:block lg:space-y-4">
            {videoList.map((video) => (
              <div
                key={video.id}
                className="flex items-center space-x-2 cursor-pointer video-items min-w-[200px] lg:min-w-0"
                onClick={() => setSelectedVideo(video.videoUrl)}
              >
                <div className="lg:w-1/3 space-y-4 mx-5 flex flex-col items-center video-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12 text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                  </svg>
                  <p className="text-xs px-2 text-gray-500">08:27</p>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 sm:w-8 sm:h-8 mr-2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <img
                    src={video.thumbnail}
                    alt={video.name}
                    className="w-32 h-auto rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
