// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { HeartRate, Record, Song, Todo } = initSchema(schema);

export {
  HeartRate,
  Record,
  Song,
  Todo
};