import express from 'express';
import Agent from '../models/Agent.js';
import bcrypt from 'bcryptjs';
const router = express.Router();

// Add agent
router.post('/', async (req, res) => {
  const { name, email, mobile, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const agent = new Agent({ name, email, mobile, password: hashed });
  await agent.save();
  res.json({ msg: 'Agent added' });
});

// Get all agents
router.get('/', async (req, res) => {
  const agents = await Agent.find();
  res.json(agents);
});

export default router;