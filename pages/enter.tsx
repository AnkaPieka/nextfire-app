import { auth, googleAuthProvider } from "../lib/firebase";

export default function EnterPage({}) {
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
      <img src={`/google-png.png`} alt="google logo" /> Sign in with Google
    </button>
  )
}
function SignOutButton() {}
function UsernameForm() {}
