/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSong = /* GraphQL */ `
  subscription OnCreateSong {
    onCreateSong {
      id
      title
      description
      filePath
      like
      owner
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription onCreateMessage {
    onCreateMessage {
      id
      senderName
      body
      creationDate
      __typename
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSongFilter = /* GraphQL */ `
  subscription OnCreateSongFilter($owner: String!) {
    onCreateSongFilter(owner: $owner) {
      id
      title
      description
      filePath
      like
      owner
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;

export const onUpdateSong = /* GraphQL */ `
  subscription OnUpdateSong {
    onUpdateSong {
      id
      title
      description
      filePath
      like
      owner
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSong = /* GraphQL */ `
  subscription OnDeleteSong {
    onDeleteSong {
      id
      title
      description
      filePath
      like
      owner
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateRecord = /* GraphQL */ `
  subscription OnCreateRecord {
    onCreateRecord {
      id
      name
      samplingRate
      gestationAge
      mSQICh1
      mSQICh2
      mSQICh3
      mSQICh4
      fSQICh1
      fSQICh2
      fSQICh3
      fSQICh4
      rawECGSQI
      signalLost
      signalLostCh1
      signalLostCh2
      signalLostCh3
      signalLostCh4
      createdDate
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRecord = /* GraphQL */ `
  subscription OnUpdateRecord {
    onUpdateRecord {
      id
      name
      samplingRate
      gestationAge
      mSQICh1
      mSQICh2
      mSQICh3
      mSQICh4
      fSQICh1
      fSQICh2
      fSQICh3
      fSQICh4
      rawECGSQI
      signalLost
      signalLostCh1
      signalLostCh2
      signalLostCh3
      signalLostCh4
      createdDate
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRecord = /* GraphQL */ `
  subscription OnDeleteRecord {
    onDeleteRecord {
      id
      name
      samplingRate
      gestationAge
      mSQICh1
      mSQICh2
      mSQICh3
      mSQICh4
      fSQICh1
      fSQICh2
      fSQICh3
      fSQICh4
      rawECGSQI
      signalLost
      signalLostCh1
      signalLostCh2
      signalLostCh3
      signalLostCh4
      createdDate
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
