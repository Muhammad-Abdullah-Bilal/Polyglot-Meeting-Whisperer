import React from 'react';

const TranscriptCard = ({ 
  title, 
  icon, 
  transcript, 
  isLoading, 
  languageOptions, 
  selectedLanguage, 
  onLanguageChange,
  showAutoDetect = false 
}) => {
  const iconGradient = title.includes('Original') 
    ? 'from-orange-400 to-pink-400' 
    : 'from-blue-400 to-purple-400';

  return (
    <div className="glass-card p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-8 h-8 bg-gradient-to-r ${iconGradient} rounded-full flex items-center justify-center`}>
          <span className="text-white text-sm">{icon}</span>
        </div>
        <h2 className="text-white text-lg font-semibold">{title}</h2>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {languageOptions.map((lang) => (
          <button
            key={lang.code}
            onClick={() => onLanguageChange(lang.code)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
              selectedLanguage === lang.code 
                ? 'bg-emerald-500 text-white' 
                : 'bg-white/15 text-white/70 hover:bg-white/25'
            }`}
          >
            {lang.flag} {lang.name}
          </button>
        ))}
        {showAutoDetect && (
          <button className="px-3 py-1 rounded-full text-xs font-medium bg-white/15 text-white/70 hover:bg-white/25">
            Auto-detect
          </button>
        )}
      </div>

      <div className="min-h-[300px] bg-white/10 rounded-lg p-4">
        {isLoading ? (
          <div className="space-y-3">
            <div className="animate-pulse bg-white/10 h-4 rounded"></div>
            <div className="animate-pulse bg-white/10 h-4 rounded w-3/4"></div>
            <div className="animate-pulse bg-white/10 h-4 rounded w-1/2"></div>
          </div>
        ) : transcript.length ? (
          <div className="space-y-3">
            {transcript.map((item, i) => (
              <div key={i} className="text-sm">
                <div className="text-emerald-400 font-medium">{item.speaker}</div>
                <div className="text-white/60 text-xs mb-1">{item.time}</div>
                <div className="text-white">{item.text}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-white/60 text-center">
            <div>
              <div className="text-4xl mb-2">{icon}</div>
              <p>No {title.toLowerCase()} yet. Start recording to begin {title.includes('Original') ? 'transcription' : 'translation'}!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TranscriptCard;
