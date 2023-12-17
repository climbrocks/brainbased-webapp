import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerVideoURLs = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VideoURLs, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly guid: string;
  readonly srcvideo?: string | null;
  readonly MP4?: string | null;
  readonly CMAF?: string | null;
  readonly HLS?: string | null;
  readonly DASH?: string | null;
  readonly MSS?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVideoURLs = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VideoURLs, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly guid: string;
  readonly srcvideo?: string | null;
  readonly MP4?: string | null;
  readonly CMAF?: string | null;
  readonly HLS?: string | null;
  readonly DASH?: string | null;
  readonly MSS?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type VideoURLs = LazyLoading extends LazyLoadingDisabled ? EagerVideoURLs : LazyVideoURLs

export declare const VideoURLs: (new (init: ModelInit<VideoURLs>) => VideoURLs) & {
  copyOf(source: VideoURLs, mutator: (draft: MutableModel<VideoURLs>) => MutableModel<VideoURLs> | void): VideoURLs;
}

type EagerVideo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Video, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly url: string;
  readonly poster: string;
  readonly duration: number;
  readonly date: string;
  readonly category?: Category | null;
  readonly teacher?: Teacher | null;
  readonly tags?: (VideoTags | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly categoryVideosId?: string | null;
  readonly teacherVideosId?: string | null;
}

type LazyVideo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Video, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly url: string;
  readonly poster: string;
  readonly duration: number;
  readonly date: string;
  readonly category: AsyncItem<Category | undefined>;
  readonly teacher: AsyncItem<Teacher | undefined>;
  readonly tags: AsyncCollection<VideoTags>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly categoryVideosId?: string | null;
  readonly teacherVideosId?: string | null;
}

export declare type Video = LazyLoading extends LazyLoadingDisabled ? EagerVideo : LazyVideo

export declare const Video: (new (init: ModelInit<Video>) => Video) & {
  copyOf(source: Video, mutator: (draft: MutableModel<Video>) => MutableModel<Video> | void): Video;
}

type EagerCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Category, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly videos?: (Video | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Category, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly videos: AsyncCollection<Video>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Category = LazyLoading extends LazyLoadingDisabled ? EagerCategory : LazyCategory

export declare const Category: (new (init: ModelInit<Category>) => Category) & {
  copyOf(source: Category, mutator: (draft: MutableModel<Category>) => MutableModel<Category> | void): Category;
}

type EagerTeacher = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Teacher, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image: string;
  readonly bio?: string | null;
  readonly videos?: (Video | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTeacher = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Teacher, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image: string;
  readonly bio?: string | null;
  readonly videos: AsyncCollection<Video>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Teacher = LazyLoading extends LazyLoadingDisabled ? EagerTeacher : LazyTeacher

export declare const Teacher: (new (init: ModelInit<Teacher>) => Teacher) & {
  copyOf(source: Teacher, mutator: (draft: MutableModel<Teacher>) => MutableModel<Teacher> | void): Teacher;
}

type EagerTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tag, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly video?: (VideoTags | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tag, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly video: AsyncCollection<VideoTags>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Tag = LazyLoading extends LazyLoadingDisabled ? EagerTag : LazyTag

export declare const Tag: (new (init: ModelInit<Tag>) => Tag) & {
  copyOf(source: Tag, mutator: (draft: MutableModel<Tag>) => MutableModel<Tag> | void): Tag;
}

type EagerUserData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cognitoSub: string;
  readonly favorites?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cognitoSub: string;
  readonly favorites?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserData = LazyLoading extends LazyLoadingDisabled ? EagerUserData : LazyUserData

export declare const UserData: (new (init: ModelInit<UserData>) => UserData) & {
  copyOf(source: UserData, mutator: (draft: MutableModel<UserData>) => MutableModel<UserData> | void): UserData;
}

type EagerVideoTags = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VideoTags, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly videoId?: string | null;
  readonly tagId?: string | null;
  readonly video: Video;
  readonly tag: Tag;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVideoTags = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VideoTags, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly videoId?: string | null;
  readonly tagId?: string | null;
  readonly video: AsyncItem<Video>;
  readonly tag: AsyncItem<Tag>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type VideoTags = LazyLoading extends LazyLoadingDisabled ? EagerVideoTags : LazyVideoTags

export declare const VideoTags: (new (init: ModelInit<VideoTags>) => VideoTags) & {
  copyOf(source: VideoTags, mutator: (draft: MutableModel<VideoTags>) => MutableModel<VideoTags> | void): VideoTags;
}