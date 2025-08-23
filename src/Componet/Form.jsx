import React, { useState } from 'react';

const Formed = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Store form data in localStorage
    localStorage.setItem('contactFormData', JSON.stringify(formData));

    alert('Message sent and saved locally!');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto space-y-6 bg-white p-8 sm:p-10 rounded-lg shadow-lg"
    >
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="flex-1 bg-gray-100 p-3 rounded border border-gray-300 focus:border-[#b18050] focus:ring-2 focus:ring-[#b18050] outline-none text-gray-700 placeholder-gray-400 transition"
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="flex-1 bg-gray-100 p-3 rounded border border-gray-300 focus:border-[#b18050] focus:ring-2 focus:ring-[#b18050] outline-none text-gray-700 placeholder-gray-400 transition"
          required
        />
      </div>

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full bg-gray-100 p-3 rounded border border-gray-300 focus:border-[#b18050] focus:ring-2 focus:ring-[#b18050] outline-none text-gray-700 placeholder-gray-400 transition"
        required
      />

      <textarea
        name="message"
        placeholder="Message"
        rows="6"
        value={formData.message}
        onChange={handleChange}
        className="w-full bg-gray-100 p-3 rounded border border-gray-300 focus:border-[#b18050] focus:ring-2 focus:ring-[#b18050] outline-none text-gray-700 placeholder-gray-400 resize-none transition"
        required
      />

      <button
        type="submit"
        className="w-full sm:w-auto bg-[#b18050] cursor-pointer text-white font-semibold px-6 py-3 rounded hover:bg-[#9a673d] transition"
      >
        Send Message
      </button>
    </form>
  );
};

export default Formed;
