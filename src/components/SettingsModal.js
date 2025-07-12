import React from 'react';

const SettingsModal = ({ isOpen, onClose, language, onLanguageChange }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="glass-card p-6 w-full max-w-md">
        <h2 className="text-white text-xl font-semibold mb-4">Settings</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-white/80 text-sm mb-2">Default Language:</label>
            <select
              value={language}
              onChange={(e) => onLanguageChange(e.target.value)}
              className="w-full bg-white/15 border border-white/25 rounded-lg p-2 text-white"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </div>
          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;

