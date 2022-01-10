import { getAuth } from 'firebase/auth';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { AuthProvider, useFirebaseApp } from 'reactfire';
import { UserLogin } from '../components/UserLogin';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const app = useFirebaseApp(); // a parent component contains a `FirebaseAppProvider`
  const auth = getAuth(app);

  return (
    <AuthProvider sdk={auth}>
      <div className={styles.container}>
        <Head>
          <title>Vote for new features!</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <UserLogin />
        <main className={styles.main}>
          <h1 className={styles.title}>Leeroy Jenkins Voting App</h1>
        </main>
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
    </AuthProvider>
  );
};

export default Home;
