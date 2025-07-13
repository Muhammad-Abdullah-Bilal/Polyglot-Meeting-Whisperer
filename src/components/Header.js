import React from 'react';

const Header = ({ currentTime }) => {
  return (
    <div className="glass-card p-4 mb-6 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center">
          <span className="text-white text-lg">🌐</span>
        </div>
        <h1 className="text-white text-xl font-semibold">Polyglot Meeting Whisperer</h1>
      </div>
      <div className="text-white/80 text-sm">{currentTime.toLocaleTimeString()}</div>
    </div>
  );
};

export default Header;