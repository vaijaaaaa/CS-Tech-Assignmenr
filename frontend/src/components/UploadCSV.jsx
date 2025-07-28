// src/components/UploadCSV.jsx
import React, { useState } from 'react';
import axios from 'axios';

const UploadCSV = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file) {
      return setMessage('Please select a file.');
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('http://localhost:5000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      });

      setMessage(res.data.message || 'Upload successful!');
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || 'Something went wrong!');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-4 border rounded-lg shadow">
      <h2 className="text-lg font-bold mb-2">Upload CSV/XLSX</h2>
      <form onSubmit={handleUpload}>
        <input
          type="file"
          accept=".csv,.xlsx,.xls"
          onChange={(e) => setFile(e.target.files[0])}
          className="mb-2 block w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Upload
        </button>
      </form>
      {message && <p className="mt-2 text-sm text-green-700">{message}</p>}
    </div>
  );
};

export default UploadCSV;
