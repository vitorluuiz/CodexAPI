import { Body, Controller, Delete, Get, Path, Post, Put, Route, SuccessResponse, Tags } from 'tsoa';
import challengeService from '../services/challengeService';
import { CreateChallengeRequest, UpdateChallengeRequest, ChallengeResponse, ErrorResponse } from '../models/challengeTypes';
import { SuccessResponse as SuccessMsg } from '../models/lobbyTypes';
import { IChallenge } from '../models/challenge';
import { VALID_DIFFICULTIES } from '../config/challengeConstants';

@Route('api/challenges')
@Tags('Challenges')
export class ChallengeController extends Controller {

  @Post('/')
  @SuccessResponse('201', 'Created')
  public async createChallenge(@Body() requestBody: CreateChallengeRequest): Promise<ChallengeResponse | ErrorResponse> {
    const result = await challengeService.createChallenge(requestBody);

    if (!result.success) {
      this.setStatus(400);
      return { error: result.error };
    }

    this.setStatus(201);
    return this.mapChallengeToResponse(result.data);
  }

  @Get('/')
  @SuccessResponse('200', 'OK')
  public async getAllChallenges(): Promise<ChallengeResponse[]> {
    const challenges = await challengeService.getAllChallenges();
    return challenges.map(challenge => this.mapChallengeToResponse(challenge));
  }

  @Get('/difficulties')
  @SuccessResponse('200', 'OK')
  public async getAvailableDifficulties(): Promise<string[]> {
    return [...VALID_DIFFICULTIES];
  }

  @Get('/{id}')
  @SuccessResponse('200', 'OK')
  public async getChallengeById(@Path() id: string): Promise<ChallengeResponse | ErrorResponse> {
    const challenge = await challengeService.getChallengeById(id);

    if (!challenge) {
      this.setStatus(404);
      return { error: 'Challenge não encontrado' };
    }

    return this.mapChallengeToResponse(challenge);
  }

  @Get('/creator/{creator}')
  @SuccessResponse('200', 'OK')
  public async getChallengesByCreator(@Path() creator: string): Promise<ChallengeResponse[]> {
    const challenges = await challengeService.getChallengesByCreator(creator);
    return challenges.map(challenge => this.mapChallengeToResponse(challenge));
  }

  @Get('/difficulty/{difficulty}')
  @SuccessResponse('200', 'OK')
  public async getChallengesByDifficulty(@Path() difficulty: string): Promise<ChallengeResponse[]> {
    const challenges = await challengeService.getChallengesByDifficulty(difficulty);
    return challenges.map(challenge => this.mapChallengeToResponse(challenge));
  }

  @Get('/category/{category}')
  @SuccessResponse('200', 'OK')
  public async getChallengesByCategory(@Path() category: string): Promise<ChallengeResponse[]> {
    const challenges = await challengeService.getChallengesByCategory(category);
    return challenges.map(challenge => this.mapChallengeToResponse(challenge));
  }

  @Put('/{id}')
  @SuccessResponse('200', 'OK')
  public async updateChallenge(@Path() id: string, @Body() requestBody: UpdateChallengeRequest): Promise<ChallengeResponse | ErrorResponse> {
    const result = await challengeService.updateChallenge(id, requestBody);

    if (!result.success) {
      this.setStatus(400);
      return { error: result.error };
    }

    if (!result.data) {
      this.setStatus(404);
      return { error: 'Challenge não encontrado' };
    }

    return this.mapChallengeToResponse(result.data);
  }

  @Delete('/{id}')
  @SuccessResponse('200', 'OK')
  public async deleteChallenge(@Path() id: string): Promise<SuccessMsg | ErrorResponse> {
    const deleted = await challengeService.deleteChallenge(id);

    if (!deleted) {
      this.setStatus(404);
      return { error: 'Challenge não encontrado' };
    }

    return { message: 'Challenge deletado com sucesso' };
  }

  private mapChallengeToResponse(challenge: IChallenge): ChallengeResponse {
    return {
      _id: challenge._id.toString(),
      title: challenge.title,
      creator: challenge.creator,
      createdAt: challenge.createdAt,
      difficulty: challenge.difficulty,
      categories: challenge.categories,
      description: challenge.description,
      testCases: challenge.testCases,
    };
  }
}
