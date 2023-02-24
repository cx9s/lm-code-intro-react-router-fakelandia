export const MISDEMEANOURS = [
  "rudeness",
  "vegetables",
  "lift",
  "united",
] as const;
export type MisdemeanourKind = (typeof MISDEMEANOURS)[number];

export const JUST_TALK = "just-talk";
export type JustTalk = typeof JUST_TALK;

export type MisdemeanourDataType = {
  citizenId: number;
  misdemeanour: MisdemeanourKind;
  date: string;
  subject?: string;
  details?: string;
};

export const MisdemeanourIcons = {
  rudeness: "🤪",
  lift: "🗣",
  vegetables: "🥗",
  united: "😈",
};
