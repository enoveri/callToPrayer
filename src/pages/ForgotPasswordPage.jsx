import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaArrowLeft } from "react-icons/fa";
import { gsap } from "gsap";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const headingRef = useRef(null);

  // Animation effects
  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
      }
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // In a real app, this would be an API call to send a reset link
    setTimeout(() => {
      setIsSubmitted(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-xl">
        <div ref={headingRef} className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">
            {!isSubmitted ? "Forgot Your Password?" : "Check Your Email"}
          </h1>
          <p className="text-gray-600">
            {!isSubmitted 
              ? "Enter your email and we'll send you instructions to reset your password."
              : `We've sent a password reset link to ${email}`
            }
          </p>
        </div>

        {!isSubmitted ? (
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? (
                  <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  "Send Reset Link"
                )}
              </button>
            </div>
          </form>
        ) : (
          <div ref={formRef} className="space-y-6 text-center">
            <div className="p-4 bg-blue-50 rounded-lg text-blue-800">
              <p>
                If an account exists with that email address, we've sent a password reset link.
                Please check your inbox and follow the instructions provided.
              </p>
            </div>
            <p className="text-sm text-gray-600">
              Didn't receive an email? Check your spam folder, or{" "}
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                try again
              </button>
            </p>
          </div>
        )}

        <div className="mt-8 text-center">
          <Link
            to="/sign-in"
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            <FaArrowLeft className="mr-1" /> Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
