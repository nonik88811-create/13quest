export type Language = 'ru' | 'uz' | 'en';

export interface Scenario {
  id: string;
  key: 'wax1' | 'wax2' | 'souls' | 'breathe';
  title: string;
  quote: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  duration: string;
  players: string;
  fearLevel: number; // 1 to 5
  logicLevel: number; // 1 to 5
  genre: string;
  ageLimit: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  scenario: string;
  text: string;
  verified?: boolean;
}

export interface BookingData {
  scenarioId: string;
  name: string;
  phone: string;
  date: string;
  timeSlot: string;
  players: number;
  contactLevel: 'light' | 'medium' | 'hard';
  comments?: string;
}
