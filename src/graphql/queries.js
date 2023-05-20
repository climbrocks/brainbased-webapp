/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getVideo = /* GraphQL */ `
  query GetVideo($id: ID!) {
    getVideo(id: $id) {
      id
      title
      description
      url
      duration
      category {
        id
        name
        description
        videos {
          nextToken
        }
        createdAt
        updatedAt
      }
      teacher {
        id
        name
        bio
        videos {
          nextToken
        }
        createdAt
        updatedAt
      }
      topics {
        items {
          id
          videoID
          topicID
          createdAt
          updatedAt
          videoTopicsId
          topicVideosId
        }
        nextToken
      }
      tags {
        items {
          id
          videoID
          tagID
          createdAt
          updatedAt
          videoTagsId
          tagVideosId
        }
        nextToken
      }
      createdAt
      updatedAt
      categoryVideosId
      teacherVideosId
    }
  }
`;
export const listVideos = /* GraphQL */ `
  query ListVideos(
    $filter: ModelVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        url
        duration
        category {
          id
          name
          description
          createdAt
          updatedAt
        }
        teacher {
          id
          name
          bio
          createdAt
          updatedAt
        }
        topics {
          nextToken
        }
        tags {
          nextToken
        }
        createdAt
        updatedAt
        categoryVideosId
        teacherVideosId
      }
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      description
      videos {
        items {
          id
          title
          description
          url
          duration
          createdAt
          updatedAt
          categoryVideosId
          teacherVideosId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        videos {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTeacher = /* GraphQL */ `
  query GetTeacher($id: ID!) {
    getTeacher(id: $id) {
      id
      name
      bio
      videos {
        items {
          id
          title
          description
          url
          duration
          createdAt
          updatedAt
          categoryVideosId
          teacherVideosId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTeachers = /* GraphQL */ `
  query ListTeachers(
    $filter: ModelTeacherFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeachers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        bio
        videos {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTopic = /* GraphQL */ `
  query GetTopic($id: ID!) {
    getTopic(id: $id) {
      id
      name
      videos {
        items {
          id
          videoID
          topicID
          createdAt
          updatedAt
          videoTopicsId
          topicVideosId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTopics = /* GraphQL */ `
  query ListTopics(
    $filter: ModelTopicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTopics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        videos {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
      id
      name
      videos {
        items {
          id
          videoID
          tagID
          createdAt
          updatedAt
          videoTagsId
          tagVideosId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        videos {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getVideoTopic = /* GraphQL */ `
  query GetVideoTopic($id: ID!) {
    getVideoTopic(id: $id) {
      id
      videoID
      topicID
      video {
        id
        title
        description
        url
        duration
        category {
          id
          name
          description
          createdAt
          updatedAt
        }
        teacher {
          id
          name
          bio
          createdAt
          updatedAt
        }
        topics {
          nextToken
        }
        tags {
          nextToken
        }
        createdAt
        updatedAt
        categoryVideosId
        teacherVideosId
      }
      topic {
        id
        name
        videos {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      videoTopicsId
      topicVideosId
    }
  }
`;
export const listVideoTopics = /* GraphQL */ `
  query ListVideoTopics(
    $filter: ModelVideoTopicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideoTopics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        videoID
        topicID
        video {
          id
          title
          description
          url
          duration
          createdAt
          updatedAt
          categoryVideosId
          teacherVideosId
        }
        topic {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        videoTopicsId
        topicVideosId
      }
      nextToken
    }
  }
`;
export const getVideoTag = /* GraphQL */ `
  query GetVideoTag($id: ID!) {
    getVideoTag(id: $id) {
      id
      videoID
      tagID
      video {
        id
        title
        description
        url
        duration
        category {
          id
          name
          description
          createdAt
          updatedAt
        }
        teacher {
          id
          name
          bio
          createdAt
          updatedAt
        }
        topics {
          nextToken
        }
        tags {
          nextToken
        }
        createdAt
        updatedAt
        categoryVideosId
        teacherVideosId
      }
      tag {
        id
        name
        videos {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      videoTagsId
      tagVideosId
    }
  }
`;
export const listVideoTags = /* GraphQL */ `
  query ListVideoTags(
    $filter: ModelVideoTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideoTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        videoID
        tagID
        video {
          id
          title
          description
          url
          duration
          createdAt
          updatedAt
          categoryVideosId
          teacherVideosId
        }
        tag {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        videoTagsId
        tagVideosId
      }
      nextToken
    }
  }
`;
export const videoTopicsByVideoIDAndTopicID = /* GraphQL */ `
  query VideoTopicsByVideoIDAndTopicID(
    $videoID: ID!
    $topicID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelVideoTopicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    videoTopicsByVideoIDAndTopicID(
      videoID: $videoID
      topicID: $topicID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        videoID
        topicID
        video {
          id
          title
          description
          url
          duration
          createdAt
          updatedAt
          categoryVideosId
          teacherVideosId
        }
        topic {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        videoTopicsId
        topicVideosId
      }
      nextToken
    }
  }
`;
export const videoTopicsByTopicID = /* GraphQL */ `
  query VideoTopicsByTopicID(
    $topicID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelVideoTopicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    videoTopicsByTopicID(
      topicID: $topicID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        videoID
        topicID
        video {
          id
          title
          description
          url
          duration
          createdAt
          updatedAt
          categoryVideosId
          teacherVideosId
        }
        topic {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        videoTopicsId
        topicVideosId
      }
      nextToken
    }
  }
`;
export const videoTagsByVideoIDAndTagID = /* GraphQL */ `
  query VideoTagsByVideoIDAndTagID(
    $videoID: ID!
    $tagID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelVideoTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    videoTagsByVideoIDAndTagID(
      videoID: $videoID
      tagID: $tagID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        videoID
        tagID
        video {
          id
          title
          description
          url
          duration
          createdAt
          updatedAt
          categoryVideosId
          teacherVideosId
        }
        tag {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        videoTagsId
        tagVideosId
      }
      nextToken
    }
  }
`;
export const videoTagsByTagID = /* GraphQL */ `
  query VideoTagsByTagID(
    $tagID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelVideoTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    videoTagsByTagID(
      tagID: $tagID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        videoID
        tagID
        video {
          id
          title
          description
          url
          duration
          createdAt
          updatedAt
          categoryVideosId
          teacherVideosId
        }
        tag {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        videoTagsId
        tagVideosId
      }
      nextToken
    }
  }
`;
