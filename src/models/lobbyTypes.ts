export interface CreateLobbyRequest {
  name: string;
  maxPlayers?: number;
}

export interface JoinLobbyRequest {
  playerName: string;
}

export interface LeaveLobbyRequest {
  playerName: string;
}

export interface LobbyResponse {
  _id: string;
  name: string;
  code: string;
  players: string[];
  maxPlayers: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ErrorResponse {
  error: string;
}

export interface SuccessResponse {
  message: string;
}
