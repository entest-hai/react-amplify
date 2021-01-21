import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Message {
  readonly id: string;
  readonly body: string;
  readonly senderName: string;
  readonly creationDate: string;
  constructor(init: ModelInit<Message>);
  static copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}

export declare class HeartRate {
  readonly id: string;
  readonly mHR?: (number | null)[];
  readonly fHR?: (number | null)[];
  readonly mSQI?: number;
  readonly fSQI?: number;
  readonly time?: (string | null)[];
  readonly desc?: string;
  constructor(init: ModelInit<HeartRate>);
  static copyOf(source: HeartRate, mutator: (draft: MutableModel<HeartRate>) => MutableModel<HeartRate> | void): HeartRate;
}

export declare class Record {
  readonly id: string;
  readonly name: string;
  readonly samplingRate?: number;
  readonly gestationAge?: number;
  readonly rawMSQICh1?: number;
  readonly rawMSQICh2?: number;
  readonly rawMSQICh3?: number;
  readonly rawMSQICh4?: number;
  readonly mSQICh1?: number;
  readonly mSQICh2?: number;
  readonly mSQICh3?: number;
  readonly mSQICh4?: number;
  readonly fSQICh1?: number;
  readonly fSQICh2?: number;
  readonly fSQICh3?: number;
  readonly fSQICh4?: number;
  readonly signalLostCh1?: number;
  readonly signalLostCh2?: number;
  readonly signalLostCh3?: number;
  readonly signalLostCh4?: number;
  readonly S3DataURL?: string;
  readonly S3CTGURL?: string;
  readonly createdDate?: string;
  readonly description?: string;
  constructor(init: ModelInit<Record>);
  static copyOf(source: Record, mutator: (draft: MutableModel<Record>) => MutableModel<Record> | void): Record;
}

export declare class Song {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly filePath: string;
  readonly like: number;
  readonly owner: string;
  constructor(init: ModelInit<Song>);
  static copyOf(source: Song, mutator: (draft: MutableModel<Song>) => MutableModel<Song> | void): Song;
}