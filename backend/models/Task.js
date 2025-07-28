import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  agentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Agent' },
  firstName: String,
  phone: String,
  notes: String
});

export default mongoose.model('Task', taskSchema);