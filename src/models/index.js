// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Beat, HeartRate, Record, Song, Todo } = initSchema(schema);

export {
  Beat,
  HeartRate,
  Record,
  Song,
  Todo
};