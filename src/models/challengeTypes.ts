import { ChallengeDifficulty } from '../config/challengeConstants';

export interface TestCaseInput {
  input: string | number | object | Array<string | number>;
  expectedOutput: string | number | object | Array<string | number>;
}

export interface CreateChallengeRequest {
  title: string;
  creator: string;
  difficulty: ChallengeDifficulty;
  categories: string[];
  description: string;
  testCases: TestCaseInput[];
}

export interface UpdateChallengeRequest {
  title?: string;
  difficulty?: ChallengeDifficulty;
  categories?: string[];
  description?: string;
  testCases?: TestCaseInput[];
}

export interface ChallengeResponse {
  _id: string;
  title: string;
  creator: string;
  createdAt: Date;
  difficulty: ChallengeDifficulty;
  categories: string[];
  description: string;
  testCases: TestCaseInput[];
}

export interface ErrorResponse {
  error: string;
}

export type ServiceResult<T> =
  | { success: true; data: T }
  | { success: false; error: string };
