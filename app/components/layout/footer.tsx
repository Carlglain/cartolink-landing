import { AudioWaveform } from "lucide-react";

export default function Footer() {
    return(
        <div className="bg-gray-900 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-gray-900 rounded flex items-center justify-center">
                  <div className="w-3 h-3 bg-white"></div>
                </div>
              </div>
              <span className="text-xl font-semibold">Krea AI</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-300">curated by</span>
              <div className="flex items-center space-x-2">
                <div className="text-xl font-bold"> <AudioWaveform className="inline-block w-5 h-5 mr-1" /> Mobbin</div>
              </div>
            </div>
          </div>
        </div>
    )
}