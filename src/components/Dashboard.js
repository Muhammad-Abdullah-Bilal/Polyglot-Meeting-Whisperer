import React from 'react';

const Dashboard = ({ wordCount, speakerCount, avgWords, sessionDuration }) => {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      <div className="glass-card p-4 text-center">
        <div className="text-emerald-400 text-2xl mb-2">📝</div>
        <div className="text-white/60 text-sm mb-1">Total Words</div>
        <div className="text-white text-2xl font-bold">{wordCount || 0}</div>
      </div>
      <div className="glass-card p-4 text-center">
        <div className="text-emerald-400 text-2xl mb-2">🎤</div>
        <div className="text-white/60 text-sm mb-1">Unique Speakers</div>
        <div className="text-white text-2xl font-bold">{speakerCount || 0}</div>
      </div>
      <div className="glass-card p-4 text-center">
        <div className="text-emerald-400 text-2xl mb-2">📊</div>
        <div className="text-white/60 text-sm mb-1">Avg Words/Speaker</div>
        <div className="text-white text-2xl font-bold">{avgWords ? avgWords.toFixed(0) : 0}</div>
      </div>
      <div className="glass-card p-4 text-center">
        <div className="text-emerald-400 text-2xl mb-2">⏱️</div>
        <div className="text-white/60 text-sm mb-1">Session Duration</div>
        <div className="text-white text-2xl font-bold">{sessionDuration}</div>
      </div>
    </div>
  );
};

export default Dashboard;
