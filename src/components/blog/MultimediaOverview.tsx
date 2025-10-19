import React from 'react';
import { ExternalLink } from 'lucide-react';

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
        <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <span className="text-3xl mr-3">🎧</span>
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-1">Audio Overview</h4>
                <p className="text-sm text-slate-600">8 minutes • AI-generated summary</p>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-50 border-2 border-slate-200 rounded-lg mt-3 overflow-hidden">
            {audioId ? (
              <iframe 
                src={`https://drive.google.com/file/d/${audioId}/preview`}
                className="w-full"
                style={{ height: '80px', border: 'none' }}
                allow="autoplay"
                title="Audio Overview"
              />
            ) : (
              <div className="p-4 text-center">
                <p className="text-sm text-slate-600 mb-3">Listen to the audio overview:</p>
                <a 
                  href={audioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open Audio
                </a>
              </div>
            )}
          </div>
          
          <p className="text-sm text-slate-500 mt-3 leading-relaxed">
            <strong>Covers:</strong> {audioDescription}
          </p>
        </div>

        {/* Video Card */}
        <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <span className="text-3xl mr-3">🎬</span>
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-1">Video Breakdown</h4>
                <p className="text-sm text-slate-600">8 minutes • Visual guide</p>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-900 border-2 border-slate-700 rounded-lg mt-3 overflow-hidden">
            {videoId ? (
              <iframe 
                src={`https://drive.google.com/file/d/${videoId}/preview`}
                className="w-full"
                style={{ aspectRatio: '16/9', minHeight: '200px', border: 'none' }}
                allow="autoplay"
                title="Video Breakdown"
              />
            ) : (
              <div className="p-4 text-center" style={{ aspectRatio: '16/9' }}>
                <p className="text-sm text-white mb-3">Watch the video breakdown:</p>
                <a 
                  href={videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open Video
                </a>
              </div>
            )}
          </div>
          
          <p className="text-sm text-slate-500 mt-3 leading-relaxed">
            <strong>Features:</strong> {videoDescription}
          </p>
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