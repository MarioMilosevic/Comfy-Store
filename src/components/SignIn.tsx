import SignInButton from "./SignInButton"
const SignIn = () => {
  return (
    <header className="w-screen bg-indigo-950 text-indigo-50 p-2">
      <div className="w-[57%] mx-auto flex justify-end gap-4 text-xs">
        <SignInButton>Sign In / Guest</SignInButton>
        <SignInButton>Create Account</SignInButton>
      </div>
    </header>
  )
}

export default SignIn
