import mongoose, { Document, Schema } from 'mongoose';
import { ChallengeDifficulty, VALID_DIFFICULTIES } from '../config/challengeConstants';

export interface ITestCase {
  input: string | number | object | Array<string | number>;
  expectedOutput: string | number | object | Array<string | number>;
}

export interface IChallenge extends Document {
  title: string;
  creator: string;
  createdAt: Date;
  difficulty: ChallengeDifficulty;
  categories: string[];
  description: string;
  testCases: ITestCase[];
}

const testCaseSchema = new Schema<ITestCase>({
  input: {
    type: Schema.Types.Mixed,
    required: true,
  },
  expectedOutput: {
    type: Schema.Types.Mixed,
    required: true,
  },
}, { _id: false });

const challengeSchema = new Schema<IChallenge>({
  title: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
    enum: VALID_DIFFICULTIES,
  },
  categories: [{
    type: String,
    required: true,
  }],
  description: {
    type: String,
    required: true,
  },
  testCases: [testCaseSchema],
}, {
  timestamps: true,
});

const Challenge = mongoose.model<IChallenge>('Challenge', challengeSchema);

export default Challenge;
