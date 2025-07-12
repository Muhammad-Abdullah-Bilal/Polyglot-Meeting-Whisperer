// Simple translation utility (in a real app, you'd use a proper translation API)
export const translate = (text, targetLanguage) => {
  const translations = {
    es: { // Spanish
      'Welcome to our quarterly review meeting.': 'Bienvenido a nuestra reunión trimestral.',
      'Thank you for joining us today.': 'Gracias por acompañarnos hoy.',
      'The results look very promising.': 'Los resultados se ven muy prometedores.',
      'Meeting in progress...': 'Reunión en progreso...'
    },
    fr: { // French
      'Welcome to our quarterly review meeting.': 'Bienvenue à notre réunion trimestrielle.',
      'Thank you for joining us today.': 'Merci de nous avoir rejoint aujourd\'hui.',
      'The results look very promising.': 'Les résultats semblent très prometteurs.',
      'Meeting in progress...': 'Réunion en cours...'
    },
    de: { // German
      'Welcome to our quarterly review meeting.': 'Willkommen zu unserem vierteljährlichen Review-Meeting.',
      'Thank you for joining us today.': 'Vielen Dank, dass Sie heute bei uns sind.',
      'The results look very promising.': 'Die Ergebnisse sehen sehr vielversprechend aus.',
      'Meeting in progress...': 'Besprechung läuft...'
    }
  };

  if (targetLanguage === 'en' || !translations[targetLanguage]) {
    return text;
  }

  return translations[targetLanguage][text] || text;
};

export const getLanguageOptions = () => [
  { code: 'english', name: 'English', flag: '🇺🇸' },
  { code: 'spanish', name: 'Spanish', flag: '🇪🇸' },
  { code: 'french', name: 'French', flag: '🇫🇷' },
  { code: 'german', name: 'German', flag: '🇩🇪' },
  { code: 'chinese', name: 'Chinese', flag: '🇨🇳' },
];

