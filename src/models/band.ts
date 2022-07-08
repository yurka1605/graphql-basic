export interface IBand {
  id: string;
  name: string;
  origin: string;
  members: IMember[];
  website: string;
  genresIds: string[];
}

interface IMemberResponse {
  artist: string;
  instrument: string;
  years: string[];
}

export interface IMember extends IMemberResponse {
  id: string;
  firstName: string;
  secondName: string;
  middleName: string;
  birthDate: string;
  birthPlace: string;
  country: string;
}