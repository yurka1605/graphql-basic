/**  QUERY */
/*

  {
    bands {
      id
      name
      origin
      website
      genres {
        id
        year
        country
        description
      }
      members {
        id
        birthDate
        secondName
        middleName
        firstName
        birthPlace
        country
        instrument
        years
      }
    }
  }

  query($id: ID!) {
    band(id: $id) {
      id
      name
      origin
      website
      genres {
        id
        year
        country
        description
      }
      members {
        id
        birthDate
        secondName
        middleName
        firstName
        birthPlace
        country
        instrument
        years
      }
    }
  }
*/

/*

// headers
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmJjYjFjMGJjZTJkODFlNGE1M2ZkMDYiLCJmaXJzdE5hbWUiOiJmaXJzdCBuYW1lIiwibGFzdE5hbWUiOiJsYXN0IG5hbWUiLCJlbWFpbCI6Im1ldDkxMjlAZ21haWwuY29tIiwiaWF0IjoxNjU2OTQ2MzcxfQ.q_3EYJx06uLSqWFva9mkZXWXpoQo9TO_WwDy8Ip2KZ0"
}

// variables
{
  "id": "62c75d42886de228122370e9",
  "input": {
        "name": "Band name 12"
        "origin": "62beb2613cf9d8f093e1e6d9"
        "website": "website"
        "genresIds": ["62c6b9934a5434141664e0e5", "62c6b9934a5434141664e0e5"]
        "members": [{
          "artist": "62c756e187c669326355ff30"
          "instrument": ""
          "years": ["1983", "1934"]
        }]
      }
}
/**  MUTATIONS */
/*
// update
  mutation($id: ID!, $input) {
    updateBand(id: $id, input: $input) {
      id
      name
      website
      genres {
        id
        description
        country
        year
      }
      members {
        id
        birthDate
        secondName
        middleName
        firstName
        birthPlace
        country
        instrument
        years
      }
    }
  }

// create 

  mutation($input) {
    createBand(input: $input) {
      id
      name
      website
      genres {
        id
        description
        country
        year
      }
      members {
        id
        birthDate
        secondName
        middleName
        firstName
        birthPlace
        country
        instrument
        years
      }
    }
  }

// delete 

  mutation($id: ID!) {
    deleteBand(id: $id) {
      acknowledged,
      deletedCount
    }
  }
*/