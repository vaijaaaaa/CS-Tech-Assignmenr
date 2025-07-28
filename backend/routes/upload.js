import express from 'express';
import multer from 'multer';
import XLSX from 'xlsx';
import fs from 'fs';
import Agent from '../models/Agent.js';
import Task from '../models/Task.js';
const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/csv', upload.single('file'), async (req, res) => {
  const { path, originalname } = req.file;
  const ext = originalname.split('.').pop();
  if (!['csv', 'xlsx', 'xls'].includes(ext)) {
    fs.unlinkSync(path);
    return res.status(400).json({ msg: 'Invalid file type' });
  }
  const workbook = XLSX.readFile(path);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = XLSX.utils.sheet_to_json(sheet);
  fs.unlinkSync(path);

  const agents = await Agent.find();
  if (!agents.length) return res.status(400).json({ msg: 'No agents' });

  const base = Math.floor(data.length / agents.length);
  let idx = 0;
  for (let i = 0; i < agents.length; i++) {
    const count = base + (i < data.length % agents.length ? 1 : 0);
    const slice = data.slice(idx, idx + count);
    idx += count;
    for (const row of slice) {
      const task = new Task({
        agentId: agents[i]._id,
        firstName: row.FirstName,
        phone: row.Phone,
        notes: row.Notes
      });
      await task.save();
    }
  }

  res.json({ msg: 'Distributed' });
});

router.get('/tasks', async (req, res) => {
  const tasks = await Task.find().populate('agentId', 'name email');
  res.json(tasks);
});

export default router;