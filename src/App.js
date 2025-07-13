import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ControlButtons from './components/ControlButtons';
import StatsPanel from './components/StatsPanel';
import TranscriptCard from './components/TranscriptCard';
import SettingsModal from './components/SettingsModal';
import AgentCard from './components/AgentCard';
import useAudioRecording from './hooks/useAudioRecording';
import { translate, getLanguageOptions } from './utils/translator';
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
    const data = { session: { duration: sessionDuration, timestamp: new Date().toISOString(), summary }, original: transcript, translated: translatedTranscript };
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

  const languageOptions = getLanguageOptions();

  const agents = [
    { icon: '🎤', title: 'Audio Input Listener', description: 'Captures and processes live audio input from meetings and conferences with advanced noise filtering', status: 'Ready' },
    { icon: '📝', title: 'Transcriber Agent', description: 'Real-time speech-to-text using advanced recognition models (Groq/Whisper) with speaker identification', status: 'Ready' },
    { icon: '🌍', title: 'Translator Agent', description: 'Live translation into multiple languages with contextual understanding and cultural nuances', status: 'Ready' },
    { icon: '❓', title: 'Question Generator Agent', description: 'Generates relevant follow-up questions based on ongoing conversation to enhance engagement', status: 'Ready' },
    { icon: '📋', title: 'Summarizer Agent', description: 'Continuously produces concise summaries of meeting content with key points and action items', status: 'Ready' },
    { icon: '🏷', title: 'Topic Extractor Agent', description: 'Identifies and extracts major topics being discussed in real-time for categorization', status: 'Ready' },
    { icon: '💡', title: 'Keyword Explanation Agent', description: 'Detects technical terms and provides brief explanations and definitions for better understanding', status: 'Ready' },
    { icon: '🎯', title: 'Output Orchestrator', description: 'Coordinates and manages all agent outputs for seamless user experience and data flow', status: 'Ready' },
  ];

  return (
    <div className="min-h-screen purple-gradient">
      <div className="container mx-auto px-4 py-6">
        <Header currentTime={currentTime} />
        <ControlButtons
          isRecording={isRecording}
          toggleRecording={toggleRecording}
          openSettings={() => setIsSettingsOpen(true)}
          resetTranscript={resetTranscript}
          exportData={handleExport}
        />
        <StatsPanel
          wordCount={summary.wordCount}
          speakerCount={summary.speakers}
          avgWords={summary.avgWords}
          sessionDuration={sessionDuration}
        />
        <div className="grid grid-cols-2 gap-6 mb-6">
          <TranscriptCard
            title="Original Transcript"
            icon="📝"
            transcript={transcript}
            isLoading={isLoading}
            languageOptions={languageOptions}
            selectedLanguage={selectedOriginalLang}
            onLanguageChange={setSelectedOriginalLang}
            showAutoDetect={true}
          />
          <TranscriptCard
            title="Translated Output"
            icon="🌐"
            transcript={translatedTranscript}
            isLoading={isLoading}
            languageOptions={languageOptions}
            selectedLanguage={selectedTranslatedLang}
            onLanguageChange={setSelectedTranslatedLang}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent, index) => (
            <AgentCard key={index} {...agent} />
          ))}
        </div>
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