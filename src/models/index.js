// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { VideoURLs, Video, Category, Teacher, Tag, UserData, VideoTags } = initSchema(schema);

export {
  VideoURLs,
  Video,
  Category,
  Teacher,
  Tag,
  UserData,
  VideoTags
};