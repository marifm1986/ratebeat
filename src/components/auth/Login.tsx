import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const auth = getAuth();

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin");
    } catch (err: any) {
      setError(err.message || "Login failed");
    }
  };

  // const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   // Add authentication logic here if needed
  //   navigate("/admin");
  // };
  return (
    <>
      <div className="login-container h-screen w-full flex items-center justify-center bg-gray-200">

        <div className="login-form bg-white rounded-2xl shadow-xl w-full max-w-md p-8 flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <img src={`${import.meta.env.BASE_URL}ratebeat-logo.png`} alt="Rocket Mortgage Logo"
              width={100}
              className="h-auto" />
            <h2 className="text-2xl font-bold text-gray-900">Sign in to your account</h2>
            <p className="text-gray-500 text-sm">Securely access your blog's admin panel</p>
          </div>
            <form
            className="space-y-5"
            autoComplete="off"
            onSubmit={e => {
              e.preventDefault();
              handleLogin(e as unknown as React.MouseEvent<HTMLButtonElement>);
            }}
            >
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Username or Email
              </label>
              <input
              id="email"
              name="email"
              type="email"
              autoComplete="username"
              required
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 py-3 px-4 text-gray-900 placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary transition"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
              </label>
              <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 py-3 px-4 text-gray-900 placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary transition"
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-gray-700">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              Remember me
              </label>
              <a href="#" className="text-sm text-primary hover:underline">
              Forgot password?
              </a>
            </div>
            {error && (
              <div className="text-red-600 text-sm text-center">{error}</div>
            )}
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-lg bg-red-800 text-white font-semibold text-base shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition"
            >
              Login
            </button>
            </form>
          <div className="text-center text-sm text-gray-500 mt-4">
            Don't have an account?{' '}
            <a href="#" className="text-primary font-medium hover:underline">
              Sign up
            </a>
          </div>
        </div>

      </div>
    </>
  )
}

export default Login