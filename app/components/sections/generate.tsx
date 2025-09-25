import { FileText, Play, Edit, Sparkles, Image, VideoIcon, PencilLine } from "lucide-react";

export default function GenerateTools() {
  const tools = [
    {
      icon: (
        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
          <Image className="w-5 h-5 text-blue-600" />
        </div>
      ),
      name: "Image",
      badge: "NEW",
      description: "Generate images with custom styles in Text and Image.",
      action: "Open",
    },
    {
      icon: (
        <div className="w-8 h-8 bg-yellow-200 rounded-lg flex items-center justify-center">
          <VideoIcon className="w-5 h-5 text-orange-600" />
        </div>
      ),
      name: "Video",
      description: "Generate videos with Hailuo, Pika, Runway, Luma, and more.",
      action: "Open",
    },
    {
      icon: (
        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
          <PencilLine className="w-5 h-5 text-blue-600" />
        </div>
      ),
      name: "Realtime",
      description: "Real-time AI rendering as a canvas. Instant feedback loops.",
      action: "Open",
    },
    {
      icon: (
        <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center">
          <Edit className="w-5 h-5 rotate-270 text-gray-600" />
        </div>
      ),
      name: "Enhancer",
      badge: "NEW",
      description: "Upscale and enhance images and videos up to 2x.",
      action: "Open",
    },
    {
      icon: (
        <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
          A
        </div>
      ),
      name: "Edit",
      badge: "NEW",
      description: "Add objects, change style, or remove photos and preselects.",
      action: "Open",
    },
    {
      icon: (
        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
          <Play className="w-5 h-5 text-green-600" />
        </div>
      ),
      name: "Video Lipsyncs",
      badge: "NEW",
      description: "Lip sync any video to any audio.",
      action: "Open",
    },
    {
      icon: (
        <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-white font-bold">
          X
        </div>
      ),
      name: "Motion Transfer",
      badge: "NEW",
      description: "Transfer motion to images and create compositions.",
      action: "Open",
    },
    {
      icon: (
        <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-pink-600" />
        </div>
      ),
      name: "Train",
      description:
        "Train LoRa to replicate your style, character, or 3D objects.",
      action: "Open",
    },
  ];

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Generate</h2>
        <button className="text-blue-600 text-sm font-medium">Show all</button>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                {tool.icon}
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-900">
                      {tool.name}
                    </span>
                    {tool.badge && (
                      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                        {tool.badge}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <button className="text-blue-600 text-sm font-medium bg-gray-200 p-1 rounded-lg hover:text-blue-700">
                {tool.action}
              </button>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {tool.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
