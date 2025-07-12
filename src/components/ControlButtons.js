import React from 'react';
import { Mic, MicOff, Settings, RotateCcw, Download } from 'lucide-react';

const ControlButtons = ({ 
  isRecording, 
  toggleRecording, 
  openSettings, 
  resetTranscript, 
  exportData 
}) => {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      <button
        onClick={toggleRecording}
        className={`btn-primary ${
          isRecording 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-gradient-to-r from-orange-400 to-pink-400 hover:from-orange-500 hover:to-pink-500'
        }`}
      >
        {isRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
      
      <button
        onClick={openSettings}
        className="btn-secondary"
      >
        <Settings className="h-4 w-4" />
        Settings
      </button>
      
      <button
        onClick={resetTranscript}
        className="btn-secondary"
      >
        <RotateCcw className="h-4 w-4" />
        Reset
      </button>
      
      <button
        onClick={exportData}
        className="btn-secondary"
      >
        <Download className="h-4 w-4" />
        Export
      </button>
    </div>
  );
};

export default ControlButtons;

