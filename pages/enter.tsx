import { auth, googleAuthProvider } from "../lib/firebase";
import { useContext } from "react";
import { UserContext } from "../lib/context";


export default function EnterPage({}) {
  const { user, username } = useContext(UserContext);

  return (
    <main>
      <h1>Sign Up</h1>
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
}

function SignInButton() {
  const signInWithGoogle = async () => {
    try {
      await auth.signInWithPopup(googleAuthProvider);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <img src={`/google-logo.png`} alt="google logo" /> Sign in with Google
    </button>
  );
}
function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign out</button>;
}
function UsernameForm() {
  return <></>;
}
