// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Record, Song, Todo } = initSchema(schema);

export {
  Record,
  Song,
  Todo
};