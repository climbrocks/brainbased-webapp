/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateVideo = /* GraphQL */ `
  subscription OnCreateVideo($filter: ModelSubscriptionVideoFilterInput) {
    onCreateVideo(filter: $filter) {
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
export const onUpdateVideo = /* GraphQL */ `
  subscription OnUpdateVideo($filter: ModelSubscriptionVideoFilterInput) {
    onUpdateVideo(filter: $filter) {
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
export const onDeleteVideo = /* GraphQL */ `
  subscription OnDeleteVideo($filter: ModelSubscriptionVideoFilterInput) {
    onDeleteVideo(filter: $filter) {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
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
export const onCreateTeacher = /* GraphQL */ `
  subscription OnCreateTeacher($filter: ModelSubscriptionTeacherFilterInput) {
    onCreateTeacher(filter: $filter) {
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
export const onUpdateTeacher = /* GraphQL */ `
  subscription OnUpdateTeacher($filter: ModelSubscriptionTeacherFilterInput) {
    onUpdateTeacher(filter: $filter) {
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
export const onDeleteTeacher = /* GraphQL */ `
  subscription OnDeleteTeacher($filter: ModelSubscriptionTeacherFilterInput) {
    onDeleteTeacher(filter: $filter) {
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
export const onCreateTopic = /* GraphQL */ `
  subscription OnCreateTopic($filter: ModelSubscriptionTopicFilterInput) {
    onCreateTopic(filter: $filter) {
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
export const onUpdateTopic = /* GraphQL */ `
  subscription OnUpdateTopic($filter: ModelSubscriptionTopicFilterInput) {
    onUpdateTopic(filter: $filter) {
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
export const onDeleteTopic = /* GraphQL */ `
  subscription OnDeleteTopic($filter: ModelSubscriptionTopicFilterInput) {
    onDeleteTopic(filter: $filter) {
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
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag($filter: ModelSubscriptionTagFilterInput) {
    onCreateTag(filter: $filter) {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag($filter: ModelSubscriptionTagFilterInput) {
    onUpdateTag(filter: $filter) {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag($filter: ModelSubscriptionTagFilterInput) {
    onDeleteTag(filter: $filter) {
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
export const onCreateVideoTopic = /* GraphQL */ `
  subscription OnCreateVideoTopic(
    $filter: ModelSubscriptionVideoTopicFilterInput
  ) {
    onCreateVideoTopic(filter: $filter) {
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
export const onUpdateVideoTopic = /* GraphQL */ `
  subscription OnUpdateVideoTopic(
    $filter: ModelSubscriptionVideoTopicFilterInput
  ) {
    onUpdateVideoTopic(filter: $filter) {
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
export const onDeleteVideoTopic = /* GraphQL */ `
  subscription OnDeleteVideoTopic(
    $filter: ModelSubscriptionVideoTopicFilterInput
  ) {
    onDeleteVideoTopic(filter: $filter) {
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
export const onCreateVideoTag = /* GraphQL */ `
  subscription OnCreateVideoTag($filter: ModelSubscriptionVideoTagFilterInput) {
    onCreateVideoTag(filter: $filter) {
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
export const onUpdateVideoTag = /* GraphQL */ `
  subscription OnUpdateVideoTag($filter: ModelSubscriptionVideoTagFilterInput) {
    onUpdateVideoTag(filter: $filter) {
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
export const onDeleteVideoTag = /* GraphQL */ `
  subscription OnDeleteVideoTag($filter: ModelSubscriptionVideoTagFilterInput) {
    onDeleteVideoTag(filter: $filter) {
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
