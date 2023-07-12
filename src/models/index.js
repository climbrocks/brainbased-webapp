// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Video, Category, Teacher, Tag, UserData, VideoTags } = initSchema(schema);

export {
  Video,
  Category,
  Teacher,
  Tag,
  UserData,
  VideoTags
};