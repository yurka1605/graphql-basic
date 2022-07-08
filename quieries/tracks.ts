/*
  {
    track(id: "62c55e37f259880691928db7") {
        id
        title
        albums {
          id
        }
        bands {
          id
        }
        duration
        released
        genres {
          id
        }
    }
  }

  {
    tracks(input: {
      limit: 100
      offset: 0
    }) {
        id
        title
        albums {
          id
        }
        bands {
          id
        }
        duration
        released
        genres {
          id
          year
          country
          description
        }
    }
  }

  mutation {
    createTrack(input: {
      title: "Track name 12"
      albumId: "62beb2613cf9d8f093e1e6d9",
      duration: 360,
      genresIds: [],
      released: 1970
    }) {
      id
      title
      duration,
      released
    }
  }

  mutation {
    updateTrack(
      id: "62c5915b60c17624e3661927"
      input: {
        title: "New track name 2"
        albumId: "62beb2613cf9d8f093e1e6d9",
        duration: 201,
        released: 3001,
        genresIds: ["62c6b9934a5434141664e0e5", "62c724484a5434141664e11e"]
      }
    ) {
      id
      title
      duration,
      released,
      genres {
        id
      }
    }
  }

  mutation {
    deleteTrack(id: "62c5915c60c17624e3661929") {
      acknowledged,
      deletedCount
    }
  }
*/