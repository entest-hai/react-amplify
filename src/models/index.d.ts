import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Record {
  readonly id: string;
  readonly name: string;
  readonly samplingRate?: number;
  readonly gestationAge?: number;
  readonly mSQICh1?: number;
  readonly mSQICh2?: number;
  readonly mSQICh3?: number;
  readonly mSQICh4?: number;
  readonly fSQICh1?: number;
  readonly fSQICh2?: number;
  readonly fSQICh3?: number;
  readonly fSQICh4?: number;
  readonly rawECGSQI?: number;
  readonly signalLost?: number;
  readonly signalLostCh1?: number;
  readonly signalLostCh2?: number;
  readonly signalLostCh3?: number;
  readonly signalLostCh4?: number;
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

export declare class Todo {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  constructor(init: ModelInit<Todo>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo>) => MutableModel<Todo> | void): Todo;
}