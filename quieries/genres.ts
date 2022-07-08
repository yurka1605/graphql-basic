/*
  {
    genre(id: "62c6b9934a5434141664e0e5") {
      id
      name
      description
      country
      year
    }
  }

  {
    genres(input: {
      limit: 1,
      offset: 0
    }) {
      id
      name
      description
      country
      year
    }
  }

 {
   genres {
       id
       name
       description
       country
       year
   }
 }

  mutation {
    createGenre(input: {
      name: "New genre UK"
      description: "genre description"
      country: "UK"
      year: 1970
    }) {
      id
      name
      description
      country
      year
    }
  }

  mutation {
    updateGenre(
      id: "62c6b9934a5434141664e0e5"
      input: {
        name: "new genre"
        description: "genre descriptions was changed"
        country: "RU"
        year: 2000
      }
    ) {
      id
      name
      description
      country
      year
    }
  }

  mutation {
    deleteGenre(id: "62c6aeec4a5434141664e0d4") {
      acknowledged,
      deletedCount
    }
  }
*/