// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Records } = initSchema(schema);

export {
  Records
};