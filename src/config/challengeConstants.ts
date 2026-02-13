export const VALID_DIFFICULTIES = [
  'Muito fácil',
  'Fácil',
  'Médio',
  'Avançado',
  'Difícil'
] as const;

export type ChallengeDifficulty = typeof VALID_DIFFICULTIES[number];

export const isValidDifficulty = (difficulty: string): difficulty is ChallengeDifficulty => {
  return VALID_DIFFICULTIES.includes(difficulty as ChallengeDifficulty);
};
