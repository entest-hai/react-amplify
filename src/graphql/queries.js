/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncMessages = /* GraphQL */ `
  query SyncMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        body
        senderName
        creationDate
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      body
      senderName
      creationDate
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        body
        senderName
        creationDate
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncHeartRates = /* GraphQL */ `
  query SyncHeartRates(
    $filter: ModelHeartRateFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncHeartRates(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        mHR
        fHR
        mSQI
        fSQI
        time
        desc
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getHeartRate = /* GraphQL */ `
  query GetHeartRate($id: ID!) {
    getHeartRate(id: $id) {
      id
      mHR
      fHR
      mSQI
      fSQI
      time
      desc
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listHeartRates = /* GraphQL */ `
  query ListHeartRates(
    $filter: ModelHeartRateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHeartRates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        mHR
        fHR
        mSQI
        fSQI
        time
        desc
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRecords = /* GraphQL */ `
  query SyncRecords(
    $filter: ModelRecordFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRecords(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        samplingRate
        gestationAge
        rawMSQICh1
        rawMSQICh2
        rawMSQICh3
        rawMSQICh4
        mSQICh1
        mSQICh2
        mSQICh3
        mSQICh4
        fSQICh1
        fSQICh2
        fSQICh3
        fSQICh4
        signalLostCh1
        signalLostCh2
        signalLostCh3
        signalLostCh4
        S3DataURL
        S3CTGURL
        createdDate
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getRecord = /* GraphQL */ `
  query GetRecord($id: ID!) {
    getRecord(id: $id) {
      id
      name
      samplingRate
      gestationAge
      rawMSQICh1
      rawMSQICh2
      rawMSQICh3
      rawMSQICh4
      mSQICh1
      mSQICh2
      mSQICh3
      mSQICh4
      fSQICh1
      fSQICh2
      fSQICh3
      fSQICh4
      signalLostCh1
      signalLostCh2
      signalLostCh3
      signalLostCh4
      S3DataURL
      S3CTGURL
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
export const listRecords = /* GraphQL */ `
  query ListRecords(
    $filter: ModelRecordFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecords(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        samplingRate
        gestationAge
        rawMSQICh1
        rawMSQICh2
        rawMSQICh3
        rawMSQICh4
        mSQICh1
        mSQICh2
        mSQICh3
        mSQICh4
        fSQICh1
        fSQICh2
        fSQICh3
        fSQICh4
        signalLostCh1
        signalLostCh2
        signalLostCh3
        signalLostCh4
        S3DataURL
        S3CTGURL
        createdDate
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSongs = /* GraphQL */ `
  query SyncSongs(
    $filter: ModelSongFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSongs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getSong = /* GraphQL */ `
  query GetSong($id: ID!) {
    getSong(id: $id) {
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
export const listSongs = /* GraphQL */ `
  query ListSongs(
    $filter: ModelSongFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSongs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
