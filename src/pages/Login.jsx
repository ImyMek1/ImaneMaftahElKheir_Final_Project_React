import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const { login, user } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) navigate("/");
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(email, password);

    if (!success) {
      setError("Incorrect email or password.");
    } else {
      setError("");
      navigate("/");
    }
  };

  return (
    <section className="py-28">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

        <div className="border border-gray-200 p-10">
          <h2 className="text-3xl font-medium mb-4">New Customer</h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            By creating an account you will be able to shop faster, be up to
            date on an order’s status, and keep track of the orders you have
            previously made.
          </p>

          <Link
            to="/account/register"
            className="inline-block bg-black text-white px-10 py-3 text-sm uppercase tracking-wide"
          >
            Continue
          </Link>
        </div>

        <div className="border border-gray-200 p-10">
          <h2 className="text-3xl font-medium mb-4">Returning Customer</h2>

          <p className="text-gray-600 mb-6">
            I am a returning customer
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="block text-sm mb-1">
                Email Address 
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm mb-1">
                Password 
              </label>
              <input
                type="password"
                className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            <div className="flex items-center gap-6 mt-8">
              <button className="bg-black text-white px-10 py-3 text-sm uppercase tracking-wide">
                Login
              </button>

              <Link
                to="/"
                className="text-sm text-gray-600 underline"
              >
                Return to Store
              </Link>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
