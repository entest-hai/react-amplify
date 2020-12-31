import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Records {
  readonly id: string;
  readonly name: string;
  readonly samplingrate?: number;
  readonly GA?: number;
  readonly msqich1?: number;
  constructor(init: ModelInit<Records>);
  static copyOf(source: Records, mutator: (draft: MutableModel<Records>) => MutableModel<Records> | void): Records;
}