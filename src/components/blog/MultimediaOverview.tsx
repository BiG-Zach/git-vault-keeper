import React from 'react';
import { ExternalLink, Play, Headphones } from 'lucide-react';

interface MultimediaOverviewProps {
  audioUrl: string;
  videoUrl: string;
  audioDescription?: string;
  videoDescription?: string;
}

// Extract Google Drive file ID from URL
function extractDriveId(url: string): string | null {
  const patterns = [
    /\/file\/d\/([^/]+)\//,
    /[?&]id=([^&]+)/,
    /\/d\/([^/]+)/
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

export default function MultimediaOverview({
  audioUrl,
  videoUrl,
  audioDescription = "The $140K cost gap, 72% cost misconception crisis, 2025 market trends (IUL +11%, VUL +41%), and when whole life makes sense.",
  videoDescription = "Animated cost comparisons, data visualizations, and key statistics from LIMRA/Bankrate 2025 research."
}: MultimediaOverviewProps) {
  // Extract Google Drive IDs
  const audioId = extractDriveId(audioUrl);
  const videoId = extractDriveId(videoUrl);

  // Create proper Google Drive links
  const audioLink = audioId ? `https://drive.google.com/file/d/${audioId}/view` : audioUrl;
  const videoLink = videoId ? `https://drive.google.com/file/d/${videoId}/view` : videoUrl;

  return (
    <div 
      className="multimedia-overview rounded-xl p-6 md:p-8 my-8 shadow-lg"
      style={{
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
      }}
    >
      <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
        📚 Experience This Guide Your Way
      </h3>
      <p className="text-slate-700 mb-6 leading-relaxed">
        Choose your preferred format: read the full article below, listen to our 8-minute 
        AI-powered overview, or watch the visual breakdown covering 2025 market trends.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Audio Card */}
        <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow border border-slate-200">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 rounded-full p-3 mr-3">
              <Headphones className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-1">Audio Overview</h4>
              <p className="text-sm text-slate-600">8 minutes • AI-generated summary</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-lg p-8 text-center">
            <div className="mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
              <p className="text-sm text-slate-700 mb-4">
                Click below to open and play the audio overview in a new window
              </p>
            </div>
            <a 
              href={audioLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg text-sm font-semibold"
            >
              <ExternalLink className="w-4 h-4" />
              Open Audio Player
            </a>
          </div>
          
          <div className="mt-4 pt-4 border-t border-slate-200">
            <p className="text-sm text-slate-600 leading-relaxed">
              <strong className="text-slate-900">Covers:</strong> {audioDescription}
            </p>
          </div>
        </div>

        {/* Video Card */}
        <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow border border-slate-200">
          <div className="flex items-center mb-4">
            <div className="bg-purple-100 rounded-full p-3 mr-3">
              <Play className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-1">Video Breakdown</h4>
              <p className="text-sm text-slate-600">8 minutes • Visual guide</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-lg p-8 text-center">
            <div className="mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-4">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
              <p className="text-sm text-slate-700 mb-4">
                Click below to open and watch the video breakdown in a new window
              </p>
            </div>
            <a 
              href={videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all shadow-md hover:shadow-lg text-sm font-semibold"
            >
              <ExternalLink className="w-4 h-4" />
              Open Video Player
            </a>
          </div>
          
          <div className="mt-4 pt-4 border-t border-slate-200">
            <p className="text-sm text-slate-600 leading-relaxed">
              <strong className="text-slate-900">Features:</strong> {videoDescription}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-slate-300 text-center">
        <p className="text-slate-600 text-sm">
          📖 <strong>Prefer to read?</strong> Full article below • 15 min read • 
          Updated with October 2025 market data
        </p>
      </div>
    </div>
  );
}