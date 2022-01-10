import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { useUser, useAuth } from 'reactfire';

export function UserLogin() {
  const { status, data: user } = useUser();
  const auth = useAuth();

  const signIn = () => {
    signInWithPopup(auth, new GoogleAuthProvider());
  };

  const logOut = () => signOut(auth);

  if (status === 'loading') {
    return <span>loading...</span>;
  }

  if (!user) {
    return <button onClick={signIn}>Sign in</button>;
  }

  return (
    <h1>
      Welcome Back, {user.displayName}!
      {user.photoURL && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={user.photoURL} alt={user.displayName ?? ''} />
      )}
      <button onClick={logOut}>Logout</button>
    </h1>
  );
}
