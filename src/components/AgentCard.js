import React from 'react';

const AgentCard = ({ icon, title, description, status }) => {
  return (
    <div className="glass-card p-6 cursor-pointer hover:shadow-lg transition-all duration-300">
      <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-lg flex items-center justify-center mb-4">
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
      <p className="text-white/70 text-sm mb-3">{description}</p>
      <div className="flex items-center gap-2 text-white/80 text-sm">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <span>{status}</span>
      </div>
    </div>
  );
};

export default AgentCard;