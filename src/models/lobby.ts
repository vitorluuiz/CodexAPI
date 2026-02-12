import mongoose, { Document, Schema } from 'mongoose';

export interface ILobby extends Document {
  name: string;
  code: string;
  players: string[];
  maxPlayers: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const lobbySchema = new Schema<ILobby>({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
    unique: true,
  },
  players: [{
    type: String,
  }],
  maxPlayers: {
    type: Number,
    default: 4,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});

const Lobby = mongoose.model<ILobby>('Lobby', lobbySchema);

export default Lobby;
