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
  return (
    <div className="glass-card p-6 mb-6">
      <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
        <h2 className="text-white text-lg font-semibold flex items-center gap-2">
          <span>{icon}</span> {title}
        </h2>
        <div className="flex gap-2">
          {languageOptions.map((lang) => (
            <button
              key={lang.code}
              onClick={() => onLanguageChange(lang.code)}
              className={`lang-btn ${selectedLanguage === lang.code ? 'bg-emerald-500' : 'bg-white/15'} text-white text-xs font-medium rounded-full px-3 py-1`}
            >
              {lang.flag} {lang.name}
            </button>
          ))}
          {showAutoDetect && (
            <button className="lang-btn bg-white/15 text-white/70 text-xs font-medium rounded-full px-3 py-1">
              Auto-detect
            </button>
          )}
        </div>
      </div>
      <div className="min-h-[320px] bg-white/10 rounded-lg p-4">
        {/* Existing content remains the same */}
      </div>
    </div>
  );
};

export default TranscriptCard;
