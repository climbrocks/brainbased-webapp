// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Video, Category, Teacher, Topic, Tag, VideoTopic, VideoTag } = initSchema(schema);

export {
  Video,
  Category,
  Teacher,
  Topic,
  Tag,
  VideoTopic,
  VideoTag
};