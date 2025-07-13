import React from 'react';

const StatsPanel = ({ wordCount, speakerCount, avgWords, sessionDuration }) => {
  return (
    <div className="glass-card p-6 mb-6">
      <div className="flex flex-wrap justify-around gap-4">
        <div className="text-center">
          <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text">
            {wordCount || 0}
          </div>
          <div className="text-white/60 text-sm">Total Words</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text">
            {speakerCount || 0}
          </div>
          <div className="text-white/60 text-sm">Unique Speakers</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text">
            {avgWords ? avgWords.toFixed(0) : 0}
          </div>
          <div className="text-white/60 text-sm">Avg Words/Speaker</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text">
            {sessionDuration}
          </div>
          <div className="text-white/60 text-sm">Session Duration</div>
        </div>
      </div>
    </div>
  );
};

export default StatsPanel;