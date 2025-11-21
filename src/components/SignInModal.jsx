import React, { useState } from "react";

export default function SignInModal({ isOpen, onClose, onSignIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app you'd call your API here. For now call onSignIn with dummy user
    onSignIn({ name: email.split('@')[0] || "User", photoUrl: "" });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl w-11/12 max-w-md p-6 z-10">
        <h3 className="text-lg font-semibold mb-4">Sign in to your account</h3>
        <form onSubmit={handleSubmit}>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 mb-3 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500 transition-colors duration-150"
          />

          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 mb-4 w-full rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500 transition-colors duration-150"
          />

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
