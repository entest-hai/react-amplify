/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRecord = /* GraphQL */ `
  query GetRecord($id: ID!) {
    getRecord(id: $id) {
      id
      name
      samplingrate
      GA
      msqich1
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
        samplingrate
        GA
        msqich1
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMyRecord = /* GraphQL */ `
  query GetMyRecord($id: ID!) {
    getMyRecord(id: $id) {
      id
      name
      samplingrate
      GA
      msqich1
      createdAt
      updatedAt
    }
  }
`;
export const listMyRecords = /* GraphQL */ `
  query ListMyRecords(
    $filter: ModelMyRecordFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMyRecords(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        samplingrate
        GA
        msqich1
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
