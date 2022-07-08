/*
    {
    artists {
      id
      firstName
      secondName
      middleName
      birthDate
      birthPlace
      country
      bands {
        id
        members {
          id
        }
      }
      instruments
    }
  }

    {
    artist(id: "62c83cf6730719aec6b9d944") {
      id
      firstName
      secondName
      middleName
      birthDate
      birthPlace
      country
      bands {
        id
        members {
          id
        }
      }
      instruments
    }
  }

    mutation {
    createArtist(input: {
      firstName: "Yuriy"
      secondName: "Litvinov"
      middleName: "Alexeevich"
      birthDate: "12/11/1987"
      birthPlace: "Russia"
      country: "Russia"
      bandsIds: ["62c75d42886de228122370e9"],
      instruments: ["guitar"]
    }) {
      id
      firstName
      secondName
      middleName
      birthDate
      birthPlace
      country
      bands {
        id
        members {
          id
        }
      }
      instruments
    }
  }


    mutation {
    updateArtist(id: "62c841ea730719aec6b9d9a9", input: {
      firstName: "Alexey"
      bandsIds: []
    }) {
      id
      firstName
      secondName
      middleName
      birthDate
      birthPlace
      country
      bands {
        id
        members {
          id
        }
      }
      instruments
    }
  }

  mutation {
    deleteArtist(id: "62c841ea730719aec6b9d9a9") {
      acknowledged,
      deletedCount
    }
  }
*/