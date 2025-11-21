import React, { useState } from "react";

export default function SignUpModal({ isOpen, onClose, onSignUp }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [repassword, setRepassword] = useState("");
  const [contact, setContact] = useState("");
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const validate = () => {
    const e = {};
    if (!fname.trim()) e.fname = "First name is required";
    if (!lname.trim()) e.lname = "Last name is required";
    if (!email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Invalid email";
    if (!contact.trim()) e.contact = "Contact is required";
    if (!password) e.password = "Password is required";
    if (password && password.length < 6) e.password = "Password must be at least 6 characters";
    if (password !== repassword) e.repassword = "Passwords do not match";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    // For demo, call onSignUp with collected data. In real app, call API and handle errors.
    onSignUp({ firstName: fname, lastName: lname, email, contact, photoUrl: "" });
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
        <h3 className="text-lg font-semibold mb-4">Create a new account</h3>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700">First name</label>
              <input
                type="text"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                className="mt-1 mb-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500 transition-colors duration-150"
              />
              {errors.fname && <p className="text-xs text-red-600">{errors.fname}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last name</label>
              <input
                type="text"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                className="mt-1 mb-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500 transition-colors duration-150"
              />
              {errors.lname && <p className="text-xs text-red-600">{errors.lname}</p>}
            </div>
          </div>

          <label className="block text-sm font-medium text-gray-700 mt-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 mb-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500 transition-colors duration-150"
          />
          {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}

          <label className="block text-sm font-medium text-gray-700 mt-2">Contact</label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="mt-1 mb-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500 transition-colors duration-150"
          />
          {errors.contact && <p className="text-xs text-red-600">{errors.contact}</p>}

          <label className="block text-sm font-medium text-gray-700 mt-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 mb-1 w-full rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500 transition-colors duration-150"
          />
          {errors.password && <p className="text-xs text-red-600">{errors.password}</p>}

          <label className="block text-sm font-medium text-gray-700 mt-2">Confirm password</label>
          <input
            type="password"
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
            required
            className="mt-1 mb-3 w-full rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500 transition-colors duration-150"
          />
          {errors.repassword && <p className="text-xs text-red-600">{errors.repassword}</p>}

          <div className="flex justify-end space-x-2 mt-3">
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
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
