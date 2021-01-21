// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Message, HeartRate, Record, Song } = initSchema(schema);

export {
  Message,
  HeartRate,
  Record,
  Song
};