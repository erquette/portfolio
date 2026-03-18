import { SKILLS } from "@/app/utils/data";

export const MONTH_MAP: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3,  May: 4,  Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
}

export const KEY_WIDTH = Math.max(...SKILLS.map(s => s.key.length)) + 2;