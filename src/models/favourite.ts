export interface IFavourite {
  id: string;
  userId: string;
  bandsIds: string[];
  genresIds: string[];
  artistsIds: string[];
  tracksIds: string[];
}

type favouritesTypes = 'artists' | 'genres' | 'bands' | 'tracks';

export interface IFavoriteAddInput {
  id: string;
  type: favouritesTypes;
}