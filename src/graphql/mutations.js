/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createHeartRate = /* GraphQL */ `
  mutation CreateHeartRate(
    $input: CreateHeartRateInput!
    $condition: ModelHeartRateConditionInput
  ) {
    createHeartRate(input: $input, condition: $condition) {
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
export const updateHeartRate = /* GraphQL */ `
  mutation UpdateHeartRate(
    $input: UpdateHeartRateInput!
    $condition: ModelHeartRateConditionInput
  ) {
    updateHeartRate(input: $input, condition: $condition) {
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
export const deleteHeartRate = /* GraphQL */ `
  mutation DeleteHeartRate(
    $input: DeleteHeartRateInput!
    $condition: ModelHeartRateConditionInput
  ) {
    deleteHeartRate(input: $input, condition: $condition) {
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
export const createRecord = /* GraphQL */ `
  mutation CreateRecord(
    $input: CreateRecordInput!
    $condition: ModelRecordConditionInput
  ) {
    createRecord(input: $input, condition: $condition) {
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
export const updateRecord = /* GraphQL */ `
  mutation UpdateRecord(
    $input: UpdateRecordInput!
    $condition: ModelRecordConditionInput
  ) {
    updateRecord(input: $input, condition: $condition) {
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
export const deleteRecord = /* GraphQL */ `
  mutation DeleteRecord(
    $input: DeleteRecordInput!
    $condition: ModelRecordConditionInput
  ) {
    deleteRecord(input: $input, condition: $condition) {
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
export const createSong = /* GraphQL */ `
  mutation CreateSong(
    $input: CreateSongInput!
    $condition: ModelSongConditionInput
  ) {
    createSong(input: $input, condition: $condition) {
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
export const updateSong = /* GraphQL */ `
  mutation UpdateSong(
    $input: UpdateSongInput!
    $condition: ModelSongConditionInput
  ) {
    updateSong(input: $input, condition: $condition) {
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
export const deleteSong = /* GraphQL */ `
  mutation DeleteSong(
    $input: DeleteSongInput!
    $condition: ModelSongConditionInput
  ) {
    deleteSong(input: $input, condition: $condition) {
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
