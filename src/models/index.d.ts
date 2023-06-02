import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





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
  readonly category?: Category | null;
  readonly teacher?: Teacher | null;
  readonly tags?: (Tag | null)[] | null;
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
  readonly category: AsyncItem<Category | undefined>;
  readonly teacher: AsyncItem<Teacher | undefined>;
  readonly tags: AsyncCollection<Tag>;
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
  readonly video?: Video | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly videoTagsId?: string | null;
}

type LazyTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tag, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly video: AsyncItem<Video | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly videoTagsId?: string | null;
}

export declare type Tag = LazyLoading extends LazyLoadingDisabled ? EagerTag : LazyTag

export declare const Tag: (new (init: ModelInit<Tag>) => Tag) & {
  copyOf(source: Tag, mutator: (draft: MutableModel<Tag>) => MutableModel<Tag> | void): Tag;
}