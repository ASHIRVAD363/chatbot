import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const steps = [
  {
    id: '0',
    message: 'Hi! I am CIA virtual assistant. I can help you find a healthcare provider or information on our website. Please note, I am not intended for medical advice. If this is a medical emergency, please call 911.',
    trigger: 'userNAME',
  },
  {
    id: 'userNAME',
    message: 'Please write your username',
    trigger: 'getUsername',
  },
  {
    id: 'getUsername',
    user: true,
    trigger: 'askAge',
  },
  {
    id: 'askAge',
    message: "Hi {previousValue}, please write your age",
    trigger: 'getAge',
  },
  {
    id: 'getAge',
    user: true,
    trigger: 'askSex',
  },
  {
    id: 'askSex',
    message: "Please write your sex",
    trigger: 'getSex',
  },
  {
    id: 'getSex',
    user: true,
    trigger: 'askInterest',
  },
  {
    id: 'askInterest',
    message: "What kind of provider do you need?",
    trigger: 'options',
  },
  {
    id: 'options',
    options: [
      { value: 'Primary care', label: 'Primary care', trigger: 'endMessage' },
      { value: 'family medicine', label: 'family medicine', trigger: 'endMessage' },
      { value: 'Dentistry', label: 'Dentistry', trigger: 'endMessage' },
      { value: 'Psychiatry', label: 'Psychiatry', trigger: 'endMessage' },
      { value: 'Dermatology', label: 'Dermatology', trigger: 'endMessage' },
      { value: 'other', label: 'Other', trigger: 'endMessage' },
    ],
  },
  {
    id: 'Primary care',
    message: 'You selected Primary care',
    end: true,
  },
  {
    id: 'family medicine',
    message: 'You selected family medicine',
    end: true,
  },
  {
    id: 'Dentistry',
    message: 'You selected Dentistry',
    end: true,
  },
  {
    id: 'Psychiatry',
    message: 'You selected Psychiatry',
    end: true,
  },
  {
    id: 'Dermatology',
    message: 'You selected Dermatology',
    end: true,
  },
  {
    id: 'endMessage',
    message: 'Thank you for your information. We will assist you accordingly.',
    end: true,
  },
];


// Creating our own theme
const theme = {
	background: '#C9FF8F',
	headerBgColor: '#197B22',
	headerFontSize: '20px',
	botBubbleColor: '#0F3789',
	headerFontColor: 'white',
	botFontColor: 'white',
	userBubbleColor: '#FF5733',
	userFontColor: 'white',
};

// Set some properties of the bot
const config = {
	botAvatar: "https://cody.md/avatar_0.svg",
	floating: true,
};

function App() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<ChatBot

					// This appears as the header
					// text for the chat bot
					headerTitle="Clinical Virtual Assistant"
					steps={steps}
					{...config}

				/>
			</ThemeProvider>
		</div>
	);
}

export default App;
