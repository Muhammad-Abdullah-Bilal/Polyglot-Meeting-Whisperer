import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import TranscriptCard from './components/TranscriptCard';
import SettingsModal from './components/SettingsModal';
import ControlButtons from './components/ControlButtons';
import useAudioRecording from './hooks/useAudioRecording';
import { translate } from './utils/translator';
import './App.css';

const App = () => {
  const [transcript, setTranscript] = useState([]);
  const [translatedTranscript, setTranslatedTranscript] = useState([]);
  const [language, setLanguage] = useState('en');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [sessionStart, setSessionStart] = useState(null);
  const [sessionDuration, setSessionDuration] = useState('00:00');
  const [selectedOriginalLang, setSelectedOriginalLang] = useState('english');
  const [selectedTranslatedLang, setSelectedTranslatedLang] = useState('spanish');

  const { isRecording, isLoading, toggleRecording, simulateTranscription } = useAudioRecording({
    onTranscriptUpdate: (newData) => {
      setTranscript((prev) => [...prev, ...newData]);
      setTranslatedTranscript((prev) => [
        ...prev,
        ...newData.map((line) => ({ ...line, text: translate(line.text, language) }))
      ]);
    },
    onSessionStart: () => setSessionStart(Date.now())
  });

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      if (sessionStart) {
        const elapsed = Math.floor((Date.now() - sessionStart) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        setSessionDuration(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [sessionStart]);

  const summary = {
    wordCount: transcript.reduce((acc, curr) => acc + curr.text.split(' ').length, 0),
    speakers: [...new Set(transcript.map((t) => t.speaker))].length,
    avgWords: transcript.length ? transcript.reduce((acc, curr) => acc + curr.text.split(' ').length, 0) / [...new Set(transcript.map((t) => t.speaker))].length : 0,
  };

  const resetTranscript = () => {
    setTranscript([]);
    setTranslatedTranscript([]);
    setSessionStart(null);
    setSessionDuration('00:00');
  };

  const handleExport = () => {
    const data = {
      session: {
        duration: sessionDuration,
        timestamp: new Date().toISOString(),
        summary
      },
      original: transcript,
      translated: translatedTranscript
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `meeting-transcript-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const languageOptions = [
    { code: 'english', name: 'English', flag: '🇺🇸' },
    { code: 'spanish', name: 'Spanish', flag: '🇪🇸' },
    { code: 'french', name: 'French', flag: '🇫🇷' },
    { code: 'german', name: 'German', flag: '🇩🇪' },
    { code: 'chinese', name: 'Chinese', flag: '🇨🇳' },
  ];

  return (
    <div className="min-h-screen purple-gradient">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="glass-card p-4 mb-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center">
                <span className="text-white text-lg">🌐</span>
              </div>
              <div>
                <h1 className="text-white text-xl font-semibold">Polyglot Meeting Whisperer</h1>
              </div>
            </div>
            <div className="text-white/80 text-sm">
              {currentTime.toLocaleTimeString()}
            </div>
          </div>
        </div>

        {/* Control Buttons */}
        <ControlButtons
          isRecording={isRecording}
          onToggleRecording={toggleRecording}
          onOpenSettings={() => setIsSettingsOpen(true)}
          onReset={resetTranscript}
          onExport={handleExport}
        />

        {/* Dashboard */}
        <Dashboard 
          wordCount={summary.wordCount} 
          speakerCount={summary.speakers} 
          avgWords={summary.avgWords}
          sessionDuration={sessionDuration}
        />

        {/* Transcript Cards */}
        <div className="grid grid-cols-2 gap-6">
          <TranscriptCard
            title="Original Transcript"
            emoji="📝"
            gradient="from-orange-400 to-pink-400"
            transcript={transcript}
            isLoading={isLoading}
            selectedLang={selectedOriginalLang}
            onLangChange={setSelectedOriginalLang}
            languageOptions={languageOptions}
            emptyMessage="No transcript yet. Start recording to begin transcription!"
          />

          <TranscriptCard
            title="Translated (EN)"
            emoji="🌍"
            gradient="from-blue-400 to-purple-400"
            transcript={translatedTranscript}
            isLoading={isLoading}
            selectedLang={selectedTranslatedLang}
            onLangChange={setSelectedTranslatedLang}
            languageOptions={languageOptions}
            emptyMessage="No translated transcript yet. Start recording to begin translation!"
          />
        </div>

        {/* Settings Modal */}
        <SettingsModal
          isOpen={isSettingsOpen}
          onClose={() => setIsSettingsOpen(false)}
          language={language}
          onLanguageChange={setLanguage}
        />
      </div>
    </div>
  );
};

export default App;

