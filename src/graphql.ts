
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
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
    _id: string;
    title: string;
    albums?: Nullable<Nullable<Album>[]>;
    bands?: Nullable<Nullable<Band>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genres?: Nullable<Nullable<Genre>[]>;
}

export abstract class IQuery {
    abstract track(id: string): Nullable<Track> | Promise<Nullable<Track>>;

    abstract tracks(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Track>[]> | Promise<Nullable<Nullable<Track>[]>>;
}

export abstract class IMutation {
    abstract createTrack(title: string, album: string, duration: number, genres: Nullable<string>[], released: number): Nullable<Track> | Promise<Nullable<Track>>;

    abstract deleteTrack(_id: string): Nullable<string> | Promise<Nullable<string>>;

    abstract jwt(email: string, password: string): Nullable<JWT> | Promise<Nullable<JWT>>;

    abstract register(firstName: string, lastName: string, password: string, email: string, albums?: Nullable<Nullable<string>[]>): Nullable<User> | Promise<Nullable<User>>;
}

export class JWT {
    jwt: string;
}

export class User {
    id: string;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
}

type Nullable<T> = T | null;
