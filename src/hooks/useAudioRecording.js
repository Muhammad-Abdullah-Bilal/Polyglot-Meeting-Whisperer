import { useState, useRef, useEffect } from 'react';

const useAudioRecording = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioContextRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  useEffect(() => {
    if (isRecording && !audioContextRef.current) {
      initializeAudio();
    } else if (!isRecording && audioContextRef.current) {
      stopRecording();
    }
  }, [isRecording]);

  const initializeAudio = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      const source = audioContextRef.current.createMediaStreamSource(stream);
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.ondataavailable = (event) => audioChunksRef.current.push(event.data);
      mediaRecorderRef.current.onstop = processAudio;
      mediaRecorderRef.current.start();
    } catch (error) {
      console.error('Error accessing microphone:', error);
      simulateTranscription();
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
  };

  const processAudio = () => {
    setIsLoading(true);
    const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
    
    // Simulate audio processing
    setTimeout(() => {
      const fakeData = [
        { 
          speaker: 'Speaker 1', 
          time: new Date().toLocaleTimeString(), 
          text: 'Meeting in progress...' 
        }
      ];
      
      setIsLoading(false);
      audioChunksRef.current = [];
      
      // Return processed data
      return fakeData;
    }, 1000);
  };

  const simulateTranscription = () => {
    setIsLoading(true);
    setTimeout(() => {
      const fakeData = [
        { speaker: 'Speaker 1', time: '09:00:12', text: 'Welcome to our quarterly review meeting.' },
        { speaker: 'Speaker 2', time: '09:00:45', text: 'Thank you for joining us today.' },
        { speaker: 'Speaker 3', time: '09:01:22', text: 'The results look very promising.' },
      ];
      setIsLoading(false);
      // This would normally be handled by a callback
    }, 1000);
  };

  const toggleRecording = () => {
    setIsRecording(prev => !prev);
  };

  return {
    isRecording,
    isLoading,
    toggleRecording,
    simulateTranscription
  };
};

export default useAudioRecording;
