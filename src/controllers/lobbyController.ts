import { Body, Controller, Delete, Get, Path, Post, Route, SuccessResponse, Tags } from 'tsoa';
import lobbyService from '../services/lobbyService';
import { CreateLobbyRequest, JoinLobbyRequest, LeaveLobbyRequest, LobbyResponse, SuccessResponse as SuccessMsg } from '../models/lobbyTypes';
import { ILobby } from '../models/lobby';

@Route('api/lobby')
@Tags('Lobby')
export class LobbyController extends Controller {
  
  @Post('/create')
  @SuccessResponse('201', 'Created')
  public async createLobby(@Body() requestBody: CreateLobbyRequest): Promise<LobbyResponse> {
    this.setStatus(201);
    const lobby = await lobbyService.createLobby(requestBody.name, requestBody.maxPlayers);
    return this.mapLobbyToResponse(lobby);
  }

  @Get('/')
  @SuccessResponse('200', 'OK')
  public async getAllLobbies(): Promise<LobbyResponse[]> {
    const lobbies = await lobbyService.getAllLobbies();
    return lobbies.map(lobby => this.mapLobbyToResponse(lobby));
  }

  @Get('/{code}')
  @SuccessResponse('200', 'OK')
  public async getLobbyByCode(@Path() code: string): Promise<LobbyResponse> {
    const lobby = await lobbyService.getLobbyByCode(code);
    
    if (!lobby) {
      this.setStatus(404);
      throw new Error('Lobby não encontrado');
    }

    return this.mapLobbyToResponse(lobby);
  }

  @Post('/{code}/join')
  @SuccessResponse('200', 'OK')
  public async joinLobby(@Path() code: string, @Body() requestBody: JoinLobbyRequest): Promise<LobbyResponse> {
    const lobby = await lobbyService.joinLobby(code, requestBody.playerName);
    return this.mapLobbyToResponse(lobby);
  }

  @Post('/{code}/leave')
  @SuccessResponse('200', 'OK')
  public async leaveLobby(@Path() code: string, @Body() requestBody: LeaveLobbyRequest): Promise<LobbyResponse> {
    const lobby = await lobbyService.leaveLobby(code, requestBody.playerName);
    return this.mapLobbyToResponse(lobby);
  }

  @Delete('/{code}')
  @SuccessResponse('200', 'OK')
  public async deleteLobby(@Path() code: string): Promise<SuccessMsg> {
    await lobbyService.deleteLobby(code);
    return { message: 'Lobby deletado com sucesso' };
  }

  private mapLobbyToResponse(lobby: ILobby): LobbyResponse {
    return {
      _id: lobby._id.toString(),
      name: lobby.name,
      code: lobby.code,
      players: lobby.players,
      maxPlayers: lobby.maxPlayers,
      isActive: lobby.isActive,
      createdAt: lobby.createdAt,
      updatedAt: lobby.updatedAt,
    };
  }
}
