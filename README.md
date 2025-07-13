# Polyglot Meeting Whisperer 🌐

A beautiful, modern React application for real-time meeting transcription and translation. Capture conversations in multiple languages, get instant translations, and leverage AI-powered agents with an elegant glassmorphism UI.

## ✨ Features

- **Real-time Audio Transcription** - Convert speech to text instantly
- **Multi-language Translation** - Translate conversations in real-time
- **Speaker Identification** - Automatically detect and label different speakers
- **AI-Powered Agents** - Utilize specialized agents for audio input, transcription, translation, question generation, summarization, topic extraction, keyword explanation, and output orchestration
- **Beautiful Glass UI** - Modern glassmorphism design with smooth animations
- **Session Analytics** - Track word count, speaker count, and session duration
- **Export Functionality** - Save transcripts and translations as JSON files
- **Responsive Design** - Works perfectly on desktop and mobile devices

## 🚀 Technologies Used

- **React 18** - Modern React with Hooks
- **Web Audio API** - For audio recording and processing
- **CSS3/Tailwind CSS** - Custom styling with glassmorphism effects
- **Lucide React** - Beautiful icons
- **ES6+** - Modern JavaScript features

## 📁 Project Structure

```
polyglot-meeting-whisperer/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── Dashboard.js
│   │   ├── TranscriptCard.js
│   │   ├── SettingsModal.js
│   │   ├── ControlButtons.js
│   │   ├── Header.js
│   │   ├── StatsPanel.js
│   │   └── AgentCard.js
│   ├── hooks/
│   │   └── useAudioRecording.js
│   ├── utils/
│   │   └── translator.js
│   ├── styles/
│   │   └── globals.css
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/polyglot-meeting-whisperer.git
   cd polyglot-meeting-whisperer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "lucide-react": "^0.263.1"
}
```

## 🎯 Usage

### Starting a Recording Session
1. Click the "Start Recording" button to begin capturing audio
2. The app will request microphone permissions
3. Speak naturally - the app will transcribe and translate in real-time
4. View live statistics in the dashboard and agent outputs

### Language Selection
1. Choose your original language from the language selector
2. Select your target translation language
3. The app supports English, Spanish, French, German, and Chinese

### Exporting Transcripts
1. Click the "Export" button to download your session data
2. The exported file includes original transcript, translations, and session metadata
3. Files are saved in JSON format for easy processing

### AI Agents
- **Audio Input Listener**: Captures and processes live audio with noise filtering
- **Transcriber Agent**: Converts speech to text with speaker identification
- **Translator Agent**: Provides real-time translation with contextual understanding
- **Question Generator Agent**: Generates follow-up questions for engagement
- **Summarizer Agent**: Produces concise meeting summaries
- **Topic Extractor Agent**: Identifies and categorizes discussion topics
- **Keyword Explanation Agent**: Explains technical terms
- **Output Orchestrator**: Manages all agent outputs for a seamless experience

### Settings
1. Click the "Settings" button to open the configuration modal
2. Adjust default language preferences
3. Configure audio input settings

## 🎨 Design Philosophy

The app features a modern **glassmorphism** design with:
- Translucent glass-like cards with backdrop blur effects
- Vibrant gradient backgrounds
- Smooth animations and transitions
- Responsive layout that works on all devices
- Intuitive user interface with clear visual hierarchy

## 🔧 Development

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (irreversible)

### Browser Support

- Chrome (recommended for best Web Audio API support)
- Firefox
- Safari
- Edge

### Audio Recording

The app uses the Web Audio API for audio capture. For production use, you would integrate with services like:
- Google Cloud Speech-to-Text
- Azure Speech Services
- AWS Transcribe
- OpenAI Whisper

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Glassmorphism design inspiration from modern UI trends
- Web Audio API documentation and examples

## 🐛 Known Issues

- Audio recording requires HTTPS in production
- Some browsers may have different Web Audio API implementations
- Translation is currently mock data - integrate with real translation APIs for production

## 🚀 Future Enhancements

- [ ] Integration with real speech-to-text APIs
- [ ] Real-time translation API integration
- [ ] WebRTC for multi-participant meetings
- [ ] Advanced audio processing and noise reduction
- [ ] Meeting notes and summary generation
- [ ] User authentication and session management
- [ ] Cloud storage for transcripts
- [ ] Advanced analytics and reporting
```