import { useState } from "react";
import {
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "./../customHooks/useAuth";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { logging,Login  } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const validateForm = () => {
    if (!formData.email.trim()) {
      toast.error("Email is required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Invalid email format");
      return false;
    }
    if (!formData.password) {
      toast.error("Password is required");
      return false;
    }
    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = validateForm();
    if (success) {
      Login(formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-background)] text-[var(--color-foreground)]">
      <div className="w-full max-w-md rounded-2xl shadow-xl border border-[var(--color-border)] bg-[var(--color-background)] p-8">
        {/* LOGO */}
        <div className="flex justify-center items-center mb-8 gap-3">
          <img className="w-12" src="/favicon.png" alt="logo" />
          <h1 className="text-2xl font-bold">EchoHire</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
         

          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-[var(--color-foreground)]">
                Email
              </span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="size-5 text-[var(--color-foreground)]/40" />
              </div>
              <input
                type="email"
                className="input w-full pl-10 bg-transparent border border-[var(--color-border)] text-[var(--color-foreground)] placeholder:text-[var(--color-foreground)]/40 rounded-xl"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-[var(--color-foreground)]">
                Password
              </span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="size-5 text-[var(--color-foreground)]/40" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                className="input w-full pl-10 bg-transparent border border-[var(--color-border)] text-[var(--color-foreground)] placeholder:text-[var(--color-foreground)]/40 rounded-xl"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="size-5 text-[var(--color-foreground)]/40" />
                ) : (
                  <Eye className="size-5 text-[var(--color-foreground)]/40" />
                )}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold bg-[var(--color-border)] text-[var(--color-background)] hover:opacity-90 transition"
          >
            {logging ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="size-5 animate-spin" />
                Loading...
              </span>
            ) : (
              "Login"
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-[var(--color-foreground)]/70">
            Dont have an account?{" "}
            <Link
              to="/sign-up"
              className="font-medium text-[var(--color-border)] hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
