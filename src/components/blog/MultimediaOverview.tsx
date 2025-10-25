import React, { useState } from 'react';
import { AlertCircle, Volume2, Video } from 'lucide-react';

interface MultimediaOverviewProps {
  audioUrl: string;
  videoUrl: string;
  audioDescription?: string;
  videoDescription?: string;
  audioDuration?: string;
  videoDuration?: string;
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
  videoDescription = "Animated cost comparisons, data visualizations, and key statistics from LIMRA/Bankrate 2025 research.",
  audioDuration = "8 minutes",
  videoDuration = "8 minutes"
}: MultimediaOverviewProps) {
  const [audioError, setAudioError] = useState(false);
  const [videoError, setVideoError] = useState(false);

  // Extract Google Drive IDs
  const audioId = extractDriveId(audioUrl);
  const videoId = extractDriveId(videoUrl);

  // Convert Google Drive URLs to direct streaming format
  const audioStreamUrl = audioId 
    ? `https://drive.google.com/uc?export=download&id=${audioId}`
    : audioUrl;
  const videoStreamUrl = videoId 
    ? `https://drive.google.com/uc?export=download&id=${videoId}`
    : videoUrl;

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
        Choose your preferred format: read the full article below, listen to our {audioDuration}
        AI-powered overview, or watch the {videoDuration} visual breakdown covering 2025 market trends.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Audio Card */}
        <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow border border-slate-200">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 rounded-full p-3 mr-3">
              <Volume2 className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-1">Audio Overview</h4>
              <p className="text-sm text-slate-600">{audioDuration} • AI-generated summary</p>
            </div>
          </div>
          
          {audioError ? (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-amber-800 font-medium mb-1">Audio temporarily unavailable</p>
                  <p className="text-xs text-amber-700 mb-2">The audio file may need to be re-uploaded or have different sharing settings.</p>
                  <a 
                    href={audioId ? `https://drive.google.com/file/d/${audioId}/view` : audioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:text-blue-700 underline"
                  >
                    Open in Google Drive
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <audio 
                controls 
                className="w-full"
                preload="metadata"
                onError={() => setAudioError(true)}
                style={{
                  outline: 'none',
                  height: '54px'
                }}
              >
                <source src={audioStreamUrl} type="audio/mpeg" />
                <source src={audioStreamUrl} type="audio/mp4" />
                <source src={audioStreamUrl} type="audio/ogg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          )}
          
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
              <Video className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-1">Video Breakdown</h4>
              <p className="text-sm text-slate-600">{videoDuration} • Visual guide</p>
            </div>
          </div>
          
          {videoError ? (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-amber-800 font-medium mb-1">Video temporarily unavailable</p>
                  <p className="text-xs text-amber-700 mb-2">The video file may need to be re-uploaded or have different sharing settings.</p>
                  <a 
                    href={videoId ? `https://drive.google.com/file/d/${videoId}/view` : videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:text-blue-700 underline"
                  >
                    Open in Google Drive
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-slate-900 rounded-lg overflow-hidden">
              <video 
                controls 
                className="w-full"
                preload="metadata"
                onError={() => setVideoError(true)}
                style={{
                  aspectRatio: '16/9',
                  outline: 'none'
                }}
              >
                <source src={videoStreamUrl} type="video/mp4" />
                <source src={videoStreamUrl} type="video/webm" />
                <source src={videoStreamUrl} type="video/ogg" />
                Your browser does not support the video element.
              </video>
            </div>
          )}
          
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