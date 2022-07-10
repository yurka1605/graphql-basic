# graphql-basic

## Installation

1. Clone repo
   `git clone git@github.com:yurka1605/graphql-basic.git` ssh,
   `git clone https://github.com/yurka1605/graphql-basic.git` http
2. Rename `.env.example` file to `.env`
3. Install project dependencies `npm ci` or `npm i`
4. Run start script
   `npm start` - development mode
   `npm run start:dev` - development watch mode
   `npm run start:prod` - production mode
5. Check `http://localhost:3000/graphql`

## Testing

- Test with graphql playground - `http://localhost:3000/graphql`

- Test with postman collection and environment

  - collection `./postman_tests/Graphql_musicify.postman_collection.json`
  - environment `./postman_tests/Graphql_musicify.postman_environment.json`

  1. Work with user

     - Register new user `register`
     - Get registered user by id `user`
     - Get jwt registered user `jwt`

  > **_NOTE:_** jwt is automatically stored in postman environment

  2. First you need to create all the objects in the following order:

     - Genre `createGenre`
     - Artist `createArtist`
     - Band `createBand`
     - Album `createAlbum`
     - Track `createTrack`

  > **_NOTE:_** Ids of all entities are stored in postman environment

  3. Add entities to favourites
  4. After that you can do all other queries and mutations
