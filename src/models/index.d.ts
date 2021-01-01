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