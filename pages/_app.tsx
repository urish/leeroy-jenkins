import type { AppProps } from 'next/app';
import { FirebaseAppProvider } from 'reactfire';
import '../styles/globals.css';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDdXNU0S4DbGSW6Kj08rqgZZtgtAYw17zo',
  authDomain: 'leeroy-jenkins-38f35.firebaseapp.com',
  projectId: 'leeroy-jenkins-38f35',
  storageBucket: 'leeroy-jenkins-38f35.appspot.com',
  messagingSenderId: '687723673209',
  appId: '1:687723673209:web:3b9e9d20d864264516c6a8',
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Component {...pageProps} />
    </FirebaseAppProvider>
  );
}

export default MyApp;
