export interface IBand {
  id: string;
  name: string;
  origin: string;
  members: IMember[];
  website: string;
  genresIds: string[];
}

export interface IMember {
  artist: string
  instrument: string
  years: string[]
}