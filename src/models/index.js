// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Video, Category, Teacher, Tag, UserData } = initSchema(schema);

export {
  Video,
  Category,
  Teacher,
  Tag,
  UserData
};