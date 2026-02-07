const mongoose = require('mongoose');

const lobbySchema = new mongoose.Schema({
  code: { type: String, unique: true, required: true },
  players: { type: Array },
  challenges: { type: Array },
  createdAt: { type: Date, default: Date.now },
  matchStatus: { type: String }
});

module.exports = mongoose.model('lobby', lobbySchema);