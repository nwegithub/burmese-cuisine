import React from "react";
import sampleVideo from "./assets/sample.mp4"

const CustomVideoComponent = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full p-4">
        {/* Video Section */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-bold mb-4">Watch This Video</h2>
          <video
            controls
            className="w-full rounded-lg"
            src={sampleVideo}
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Additional Content Section */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-bold mb-4">Video Details</h2>
          <p className="text-gray-700">
            This is a sample video. You can replace this with your content,
            including video descriptions, links, or related media.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomVideoComponent;
