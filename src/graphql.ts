
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class PaginationInput {
    limit?: Nullable<number>;
    offset?: Nullable<number>;
}

export class MembersInput {
    artist: string;
    instrument?: Nullable<string>;
    years?: Nullable<Nullable<string>[]>;
}

export class CreateBandInput {
    name?: Nullable<string>;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<MembersInput>[]>;
    website?: Nullable<string>;
    genreIds?: Nullable<Nullable<string>[]>;
}

export class UpdateBandInput {
    name?: Nullable<string>;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<MembersInput>[]>;
    website?: Nullable<string>;
    genreIds?: Nullable<Nullable<string>[]>;
}

export class CreateGenreInput {
    name: string;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export class UpdateGenreInput {
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export class CreateTrackInput {
    title: string;
    albumId: string;
    duration: number;
    genresIds: Nullable<string>[];
    released: number;
    bandsIds?: Nullable<Nullable<string>[]>;
}

export class UpdateTrackInput {
    title?: Nullable<string>;
    albumId?: Nullable<string>;
    duration?: Nullable<number>;
    genresIds?: Nullable<Nullable<string>[]>;
    released?: Nullable<number>;
    bandsIds?: Nullable<Nullable<string>[]>;
}

export class CreateUserInput {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
}

export class DeleteResponse {
    acknowledged?: Nullable<boolean>;
    deletedCount?: Nullable<number>;
}

export class Album {
    id: string;
    name?: Nullable<string>;
    released?: Nullable<number>;
    artists?: Nullable<Nullable<Artist>[]>;
    bands?: Nullable<Nullable<Band>[]>;
    tracks?: Nullable<Nullable<Track>[]>;
    genres?: Nullable<Nullable<Genre>[]>;
    image?: Nullable<string>;
}

export class Artist {
    id: string;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    bands?: Nullable<Nullable<Band>[]>;
    instruments?: Nullable<string>;
}

export class Band {
    id: string;
    name?: Nullable<string>;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<Member>[]>;
    website?: Nullable<string>;
    genres?: Nullable<Nullable<Genre>[]>;
}

export class Member {
    artist: string;
    instrument?: Nullable<string>;
    years?: Nullable<Nullable<string>[]>;
}

export abstract class IQuery {
    abstract band(id: string): Nullable<Band> | Promise<Nullable<Band>>;

    abstract bands(input?: Nullable<PaginationInput>): Nullable<Nullable<Band>[]> | Promise<Nullable<Nullable<Band>[]>>;

    abstract genre(id: string): Nullable<Genre> | Promise<Nullable<Genre>>;

    abstract genres(input?: Nullable<PaginationInput>): Nullable<Nullable<Genre>[]> | Promise<Nullable<Nullable<Genre>[]>>;

    abstract track(id: string): Nullable<Track> | Promise<Nullable<Track>>;

    abstract tracks(input?: Nullable<PaginationInput>): Nullable<Nullable<Track>[]> | Promise<Nullable<Nullable<Track>[]>>;

    abstract jwt(email: string, password: string): Nullable<JWT> | Promise<Nullable<JWT>>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createBand(input: CreateBandInput): Nullable<Band> | Promise<Nullable<Band>>;

    abstract updateBand(id: string, input: UpdateBandInput): Nullable<Band> | Promise<Nullable<Band>>;

    abstract deleteBand(id: string): Nullable<DeleteResponse> | Promise<Nullable<DeleteResponse>>;

    abstract createGenre(input: CreateGenreInput): Nullable<Genre> | Promise<Nullable<Genre>>;

    abstract updateGenre(id: string, input: UpdateGenreInput): Nullable<Genre> | Promise<Nullable<Genre>>;

    abstract deleteGenre(id: string): Nullable<DeleteResponse> | Promise<Nullable<DeleteResponse>>;

    abstract createTrack(input: CreateTrackInput): Nullable<Track> | Promise<Nullable<Track>>;

    abstract updateTrack(id: string, input: UpdateTrackInput): Nullable<Track> | Promise<Nullable<Track>>;

    abstract deleteTrack(id: string): Nullable<DeleteResponse> | Promise<Nullable<DeleteResponse>>;

    abstract register(input?: Nullable<CreateUserInput>): Nullable<User> | Promise<Nullable<User>>;
}

export class Favourites {
    id: string;
    userId?: Nullable<string>;
    bands?: Nullable<Nullable<Band>[]>;
    genres?: Nullable<Nullable<Genre>[]>;
    artists?: Nullable<Nullable<Artist>[]>;
    tracks?: Nullable<Nullable<Track>[]>;
}

export class Genre {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export class Track {
    id: string;
    title: string;
    albums?: Nullable<Nullable<Album>[]>;
    bands?: Nullable<Nullable<Band>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genres?: Nullable<Nullable<Genre>[]>;
}

export class JWT {
    jwt: string;
}

export class User {
    id: string;
    email: string;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    password?: Nullable<string>;
}

type Nullable<T> = T | null;
