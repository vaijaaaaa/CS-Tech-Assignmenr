import React, { useEffect, useState } from 'react';
import API from '../services/api';
import AddAgent from '../components/AddAgent';
import UploadCSV from '../components/UploadCSV';

const Dashboard = () => {
  const [agents, setAgents] = useState([]);

  const fetchAgents = async () => {
    const { data } = await API.get('/agents');
    setAgents(data);
  };

  useEffect(() => { fetchAgents(); }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Dashboard</h1>
      <AddAgent onAdd={fetchAgents} />
      <UploadCSV />
      <h2 className="text-xl mt-6">Agents & Tasks</h2>
      {agents.map(agent => (
        <div key={agent._id} className="border p-2 my-2">
          <h3 className="font-bold">{agent.name}</h3>
          <p>{agent.email}</p>
          <p>{agent.mobile}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;