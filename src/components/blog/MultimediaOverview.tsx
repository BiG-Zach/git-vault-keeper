import React from 'react';

interface MultimediaOverviewProps {
  audioUrl: string;
  videoUrl: string;
  audioDescription?: string;
  videoDescription?: string;
}

export default function MultimediaOverview({
  audioUrl,
  videoUrl,
  audioDescription = "The $140K cost gap, 72% cost misconception crisis, 2025 market trends (IUL +11%, VUL +41%), and when whole life makes sense.",
  videoDescription = "Animated cost comparisons, data visualizations, and key statistics from LIMRA/Bankrate 2025 research."
}: MultimediaOverviewProps) {
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
        <div className="bg-white rounded-lg p-5 shadow-sm">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">🎧</span>
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-1">Audio Overview</h4>
              <p className="text-sm text-slate-600">8 minutes • AI-generated summary</p>
            </div>
          </div>
          
          <audio controls className="w-full mt-3">
            <source src={audioUrl} type="audio/mp4" />
            Your browser does not support the audio element.
          </audio>
          
          <p className="text-sm text-slate-500 mt-3 leading-relaxed">
            <strong>Covers:</strong> {audioDescription}
          </p>
        </div>

        {/* Video Card */}
        <div className="bg-white rounded-lg p-5 shadow-sm">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">🎬</span>
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-1">Video Breakdown</h4>
              <p className="text-sm text-slate-600">8 minutes • Visual guide</p>
            </div>
          </div>
          
          <video controls className="w-full rounded mt-3">
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video element.
          </video>
          
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