import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    register(form);
    navigate("/account");
  };

  return (
    <section className="py-28">
      <div className="max-w-3xl mx-auto px-6">

        <h1 className="text-4xl font-medium mb-10">
          Create Account
        </h1>

        <p className="text-gray-600 mb-12 leading-relaxed">
          If you already have an account with us, please login at the
          login page.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block text-sm mb-1">
              First Name 
            </label>
            <input
              className="w-full border px-4 py-3 focus:outline-none focus:border-black"
              onChange={(e) =>
                setForm({ ...form, firstName: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm mb-1">
              Last Name 
            </label>
            <input
              className="w-full border px-4 py-3 focus:outline-none focus:border-black"
              onChange={(e) =>
                setForm({ ...form, lastName: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm mb-1">
              Email 
            </label>
            <input
              type="email"
              className="w-full border px-4 py-3 focus:outline-none focus:border-black"
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm mb-1">
              Password 
            </label>
            <input
              type="password"
              className="w-full border px-4 py-3 focus:outline-none focus:border-black"
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />
          </div>

          <div className="flex items-center gap-6 mt-8">
          <button className="bg-black text-white px-12 py-3 text-sm uppercase tracking-wide mt-6">
            Create
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
    </section>
  );
}
