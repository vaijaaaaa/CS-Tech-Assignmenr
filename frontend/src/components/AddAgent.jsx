// src/components/AddAgent.jsx
import React, { useState } from 'react';
import axios from 'axios';

const AddAgent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('http://localhost:5000/api/agents', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      setMessage(res.data.message || 'Agent added successfully');
      setFormData({ name: '', email: '', mobile: '', password: '' });
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || 'Failed to add agent');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-4 border rounded-lg shadow">
      <h2 className="text-lg font-bold mb-4">Add New Agent</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full p-2 border rounded"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile (+91...)"
          className="w-full p-2 border rounded"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Add Agent
        </button>
      </form>
      {message && <p className="mt-3 text-sm text-green-700">{message}</p>}
    </div>
  );
};

export default AddAgent;
