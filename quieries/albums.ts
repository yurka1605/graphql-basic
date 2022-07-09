/*
  {
    albums {
      id
      name
      released
      artists {
        id
      }
      bands {
        id
      }
      tracks {
        id
      }
      genres {
        id
      }
      image
    }
  }

  {
    album(id: "62c934969cefaa54fb42801d") {
      id
      name
      released
      artists {
        id
      }
      bands {
        id
      }
      tracks {
        id
      }
      genres {
        id
      }
      image
    }
  }

  {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmJjYjFjMGJjZTJkODFlNGE1M2ZkMDYiLCJmaXJzdE5hbWUiOiJmaXJzdCBuYW1lIiwibGFzdE5hbWUiOiJsYXN0IG5hbWUiLCJlbWFpbCI6Im1ldDkxMjlAZ21haWwuY29tIiwiaWF0IjoxNjU2OTQ2MzcxfQ.q_3EYJx06uLSqWFva9mkZXWXpoQo9TO_WwDy8Ip2KZ0"
  }
  {
    "input": {
        "name": "Neighborhoods",
        "released": 2011
      }
  }
  mutation($input: CreateAlbumInput!) {
    createAlbum(input: $input) {
      id
      name
      released
      artists {
        id
      }
      bands {
        id
      }
      tracks {
        id
      }
      genres {
        id
      }
      image
    }
  }

  {
    "id": "62c9324b9cefaa54fb428014",
    "input": {
        "name": "New Album name",
        "released": 2022,
        "artistsIds": ["62c92c63730719aec6b9d9c7"],
        "bandsIds": ["62c75d42886de228122370e9"],
        "trackIds": ["62c5915b60c17624e3661927"],
        "genresIds": ["62c6b9934a5434141664e0e5"],
        "image": "image"
    }
  }
  mutation($id: ID!, $input: UpdateAlbumInput!) {
    updateAlbum(id: $id, input: $input) {
      id
      name
      released
      artists {
        id
      }
      bands {
        id
      }
      tracks {
        id
      }
      genres {
        id
      }
      image
    }
  }
  mutation {
    deleteAlbum(id: "62c9324b9cefaa54fb428014") {
      acknowledged,
      deletedCount
    }
  }
*/