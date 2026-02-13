import Challenge, { IChallenge } from '../models/challenge';
import { CreateChallengeRequest, UpdateChallengeRequest, ServiceResult } from '../models/challengeTypes';
import { isValidDifficulty, VALID_DIFFICULTIES } from '../config/challengeConstants';

class ChallengeService {
  async createChallenge(data: CreateChallengeRequest): Promise<ServiceResult<IChallenge>> {
    if (!isValidDifficulty(data.difficulty)) {
      return {
        success: false,
        error: `Dificuldade inválida. Valores aceitos: ${VALID_DIFFICULTIES.join(', ')}`
      };
    }

    const challenge = new Challenge({
      title: data.title,
      creator: data.creator,
      difficulty: data.difficulty,
      categories: data.categories,
      description: data.description,
      testCases: data.testCases,
    });

    await challenge.save();
    return { success: true, data: challenge };
  }

  async getChallengeById(id: string): Promise<IChallenge | null> {
    return await Challenge.findById(id);
  }

  async getAllChallenges(): Promise<IChallenge[]> {
    return await Challenge.find();
  }

  async getChallengesByCreator(creator: string): Promise<IChallenge[]> {
    return await Challenge.find({ creator });
  }

  async getChallengesByDifficulty(difficulty: string): Promise<IChallenge[]> {
    return await Challenge.find({ difficulty });
  }

  async getChallengesByCategory(category: string): Promise<IChallenge[]> {
    return await Challenge.find({ categories: category });
  }

  async updateChallenge(id: string, data: UpdateChallengeRequest): Promise<ServiceResult<IChallenge | null>> {
    const challenge = await Challenge.findById(id);

    if (!challenge) {
      return { success: true, data: null };
    }

    if (data.difficulty !== undefined && !isValidDifficulty(data.difficulty)) {
      return {
        success: false,
        error: `Dificuldade inválida. Valores aceitos: ${VALID_DIFFICULTIES.join(', ')}`
      };
    }

    if (data.title !== undefined) challenge.title = data.title;
    if (data.difficulty !== undefined) challenge.difficulty = data.difficulty;
    if (data.categories !== undefined) challenge.categories = data.categories;
    if (data.description !== undefined) challenge.description = data.description;
    if (data.testCases !== undefined) challenge.testCases = data.testCases;

    await challenge.save();
    return { success: true, data: challenge };
  }

  async deleteChallenge(id: string): Promise<boolean> {
    const challenge = await Challenge.findById(id);

    if (!challenge) {
      return false;
    }

    await Challenge.findByIdAndDelete(id);
    return true;
  }
}

export default new ChallengeService();
