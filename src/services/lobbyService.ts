import Lobby, { ILobby } from '../models/lobby';
import generateAlphanumericCode from '../utils/codeHandler';

class LobbyService {
  async createLobby(name: string, maxPlayers: number = 4): Promise<ILobby> {
    const code = generateAlphanumericCode();
    
    const lobby = new Lobby({
      name,
      code,
      players: [],
      maxPlayers,
      isActive: true,
    });

    await lobby.save();
    return lobby;
  }

  async getLobbyByCode(code: string): Promise<ILobby | null> {
    return await Lobby.findOne({ code, isActive: true });
  }

  async getAllLobbies(): Promise<ILobby[]> {
    return await Lobby.find({ isActive: true });
  }

  async joinLobby(code: string, playerName: string): Promise<ILobby> {
    const lobby = await this.getLobbyByCode(code);
    
    if (!lobby) {
      throw new Error('Lobby não encontrado');
    }

    if (lobby.players.length >= lobby.maxPlayers) {
      throw new Error('Lobby está cheio');
    }

    if (lobby.players.includes(playerName)) {
      throw new Error('Jogador já está no lobby');
    }

    lobby.players.push(playerName);
    await lobby.save();
    
    return lobby;
  }

  async leaveLobby(code: string, playerName: string): Promise<ILobby> {
    const lobby = await this.getLobbyByCode(code);
    
    if (!lobby) {
      throw new Error('Lobby não encontrado');
    }

    lobby.players = lobby.players.filter(player => player !== playerName);
    
    if (lobby.players.length === 0) {
      lobby.isActive = false;
    }
    
    await lobby.save();
    return lobby;
  }

  async deleteLobby(code: string): Promise<void> {
    const lobby = await this.getLobbyByCode(code);
    
    if (!lobby) {
      throw new Error('Lobby não encontrado');
    }

    lobby.isActive = false;
    await lobby.save();
  }
}

export default new LobbyService();
