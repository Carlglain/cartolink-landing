"use client";

import { 
  Home, 
  FileText, 
  Play, 
  PencilLine, 
  Sparkles, 
  HelpCircle, 
  Bell, 
  Settings,
  Menu,
  X,
  ChevronDown,
  Image,
  Video,
  
} from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedNav, setSelectedNav] = useState('home');
  return (
    <header className="px-6 py-3 mb-6">
      <div className="flex items-center justify-between">
        {/* Logo & Left Section */}
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-gray-900 rounded flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div>
          <div className="hidden sm:flex items-center space-x-2">
            <div className="w-6 h-6 bg-purple-400 rounded-full"></div>
            <span className="text-sm text-gray-700">benwwchcmbndaal</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>
        {/* Center Navigation */}
        <div className="hidden md:flex items-center space-x-6 rounded-md bg-gray-100 px-4 py-2">
          <Home className={`w-6 h-6 ${selectedNav === 'home' ? 'text-gray-700 shadow-sm bg-white p-1 rounded' : 'text-black'}`} onClick={() => setSelectedNav('home')} />
          <Image className={`w-5 h-5 ${selectedNav === 'image' ? 'text-gray-700 shadow-sm bg-white p-1 rounded' : 'text-black'}`} onClick={() => setSelectedNav('image')} />
          <Video className={`w-5 h-5 ${selectedNav === 'video' ? 'text-gray-700 shadow-sm bg-white p-1 rounded' : 'text-black'}`} onClick={() => setSelectedNav('video')} />
          <PencilLine className={`w-5 h-5 rotate-270 ${selectedNav === 'edit' ? 'text-gray-700 shadow-sm bg-white p-1 rounded' : 'text-black'}`} onClick={() => setSelectedNav('edit')} />
          <PencilLine className={`w-5 h-5 ${selectedNav === 'magic' ? 'text-gray-700 shadow-sm bg-white p-1 rounded' : 'text-black'}`} onClick={() => setSelectedNav('magic')} />
          <div className={`w-5 h-5 ${selectedNav === 'custom' ? 'text-gray-700 shadow-sm bg-white p-1 rounded' : 'bg-black'}`}></div>
          <FileText className={`w-5 h-5 ${selectedNav === 'files' ? 'text-gray-700 shadow-sm bg-white p-1 rounded' : 'text-black'}`} onClick={() => setSelectedNav('files')} />
        </div>

        {/* Right Section */}
        <div className="hidden sm:flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-bla">
            <Image className="w-4 h-4 text-black" />
            <span>Gallery</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <HelpCircle className="w-4 h-4 text-black" />
            <span>Support</span>
          </div>
          <Bell className="w-5 h-5 text-black" />
          <Settings className="w-5 h-5 text-black" />
          <div className="w-8 h-8 bg-purple-400 rounded-full"></div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="sm:hidden p-2 rounded-md hover:bg-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="sm:hidden mt-4 space-y-4">
          <div className="flex flex-col space-y-2">
            <button className="flex items-center space-x-2 text-gray-700">
              <Home className="w-5 h-5" /> <span>Home</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-700">
              <Image className="w-5 h-5" /> <span>Pictures</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-700">
              <Video className="w-5 h-5" /> <span>Videos</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-700">
              <PencilLine className="w-5 h-5 rotate-270" /> <span>Edit</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-700">
              <PencilLine className="w-5 h-5" /> <span>Transform</span>
            </button>
          </div>

          <div className="flex flex-col space-y-2 border-t pt-4">
            <button className="flex items-center space-x-2 text-gray-600">
              <Image className="w-4 h-4" /> <span>Gallery</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600">
              <HelpCircle className="w-4 h-4" /> <span>Support</span>
            </button>
            <div className="flex items-center space-x-4 mt-2">
              <Bell className="w-5 h-5 text-gray-400" />
              <Settings className="w-5 h-5 text-gray-400" />
             
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
