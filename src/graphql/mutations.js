/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createVideo = /* GraphQL */ `
  mutation CreateVideo(
    $input: CreateVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    createVideo(input: $input, condition: $condition) {
      id
      title
      description
      url
      poster
      duration
      category {
        id
        name
        description
        videos {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      teacher {
        id
        name
        image
        bio
        videos {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      topics {
        items {
          id
          videoID
          topicID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          videoTopicsId
          topicVideosId
        }
        nextToken
        startedAt
      }
      tags {
        items {
          id
          videoID
          tagID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          videoTagsId
          tagVideosId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      categoryVideosId
      teacherVideosId
    }
  }
`;
export const updateVideo = /* GraphQL */ `
  mutation UpdateVideo(
    $input: UpdateVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    updateVideo(input: $input, condition: $condition) {
      id
      title
      description
      url
      poster
      duration
      category {
        id
        name
        description
        videos {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      teacher {
        id
        name
        image
        bio
        videos {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      topics {
        items {
          id
          videoID
          topicID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          videoTopicsId
          topicVideosId
        }
        nextToken
        startedAt
      }
      tags {
        items {
          id
          videoID
          tagID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          videoTagsId
          tagVideosId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      categoryVideosId
      teacherVideosId
    }
  }
`;
export const deleteVideo = /* GraphQL */ `
  mutation DeleteVideo(
    $input: DeleteVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    deleteVideo(input: $input, condition: $condition) {
      id
      title
      description
      url
      poster
      duration
      category {
        id
        name
        description
        videos {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      teacher {
        id
        name
        image
        bio
        videos {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      topics {
        items {
          id
          videoID
          topicID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          videoTopicsId
          topicVideosId
        }
        nextToken
        startedAt
      }
      tags {
        items {
          id
          videoID
          tagID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          videoTagsId
          tagVideosId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      categoryVideosId
      teacherVideosId
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      description
      videos {
        items {
          id
          title
          description
          url
          poster
          duration
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          categoryVideosId
          teacherVideosId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      name
      description
      videos {
        items {
          id
          title
          description
          url
          poster
          duration
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          categoryVideosId
          teacherVideosId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      name
      description
      videos {
        items {
          id
          title
          description
          url
          poster
          duration
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          categoryVideosId
          teacherVideosId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createTeacher = /* GraphQL */ `
  mutation CreateTeacher(
    $input: CreateTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    createTeacher(input: $input, condition: $condition) {
      id
      name
      image
      bio
      videos {
        items {
          id
          title
          description
          url
          poster
          duration
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          categoryVideosId
          teacherVideosId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTeacher = /* GraphQL */ `
  mutation UpdateTeacher(
    $input: UpdateTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    updateTeacher(input: $input, condition: $condition) {
      id
      name
      image
      bio
      videos {
        items {
          id
          title
          description
          url
          poster
          duration
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          categoryVideosId
          teacherVideosId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTeacher = /* GraphQL */ `
  mutation DeleteTeacher(
    $input: DeleteTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    deleteTeacher(input: $input, condition: $condition) {
      id
      name
      image
      bio
      videos {
        items {
          id
          title
          description
          url
          poster
          duration
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          categoryVideosId
          teacherVideosId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createTopic = /* GraphQL */ `
  mutation CreateTopic(
    $input: CreateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    createTopic(input: $input, condition: $condition) {
      id
      name
      videos {
        items {
          id
          videoID
          topicID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          videoTopicsId
          topicVideosId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTopic = /* GraphQL */ `
  mutation UpdateTopic(
    $input: UpdateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    updateTopic(input: $input, condition: $condition) {
      id
      name
      videos {
        items {
          id
          videoID
          topicID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          videoTopicsId
          topicVideosId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTopic = /* GraphQL */ `
  mutation DeleteTopic(
    $input: DeleteTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    deleteTopic(input: $input, condition: $condition) {
      id
      name
      videos {
        items {
          id
          videoID
          topicID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          videoTopicsId
          topicVideosId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
      id
      name
      videos {
        items {
          id
          videoID
          tagID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          videoTagsId
          tagVideosId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
      id
      name
      videos {
        items {
          id
          videoID
          tagID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          videoTagsId
          tagVideosId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
      id
      name
      videos {
        items {
          id
          videoID
          tagID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          videoTagsId
          tagVideosId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createVideoTopic = /* GraphQL */ `
  mutation CreateVideoTopic(
    $input: CreateVideoTopicInput!
    $condition: ModelVideoTopicConditionInput
  ) {
    createVideoTopic(input: $input, condition: $condition) {
      id
      videoID
      topicID
      video {
        id
        title
        description
        url
        poster
        duration
        category {
          id
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        teacher {
          id
          name
          image
          bio
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        topics {
          nextToken
          startedAt
        }
        tags {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryVideosId
        teacherVideosId
      }
      topic {
        id
        name
        videos {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      videoTopicsId
      topicVideosId
    }
  }
`;
export const updateVideoTopic = /* GraphQL */ `
  mutation UpdateVideoTopic(
    $input: UpdateVideoTopicInput!
    $condition: ModelVideoTopicConditionInput
  ) {
    updateVideoTopic(input: $input, condition: $condition) {
      id
      videoID
      topicID
      video {
        id
        title
        description
        url
        poster
        duration
        category {
          id
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        teacher {
          id
          name
          image
          bio
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        topics {
          nextToken
          startedAt
        }
        tags {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryVideosId
        teacherVideosId
      }
      topic {
        id
        name
        videos {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      videoTopicsId
      topicVideosId
    }
  }
`;
export const deleteVideoTopic = /* GraphQL */ `
  mutation DeleteVideoTopic(
    $input: DeleteVideoTopicInput!
    $condition: ModelVideoTopicConditionInput
  ) {
    deleteVideoTopic(input: $input, condition: $condition) {
      id
      videoID
      topicID
      video {
        id
        title
        description
        url
        poster
        duration
        category {
          id
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        teacher {
          id
          name
          image
          bio
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        topics {
          nextToken
          startedAt
        }
        tags {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryVideosId
        teacherVideosId
      }
      topic {
        id
        name
        videos {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      videoTopicsId
      topicVideosId
    }
  }
`;
export const createVideoTag = /* GraphQL */ `
  mutation CreateVideoTag(
    $input: CreateVideoTagInput!
    $condition: ModelVideoTagConditionInput
  ) {
    createVideoTag(input: $input, condition: $condition) {
      id
      videoID
      tagID
      video {
        id
        title
        description
        url
        poster
        duration
        category {
          id
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        teacher {
          id
          name
          image
          bio
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        topics {
          nextToken
          startedAt
        }
        tags {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryVideosId
        teacherVideosId
      }
      tag {
        id
        name
        videos {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      videoTagsId
      tagVideosId
    }
  }
`;
export const updateVideoTag = /* GraphQL */ `
  mutation UpdateVideoTag(
    $input: UpdateVideoTagInput!
    $condition: ModelVideoTagConditionInput
  ) {
    updateVideoTag(input: $input, condition: $condition) {
      id
      videoID
      tagID
      video {
        id
        title
        description
        url
        poster
        duration
        category {
          id
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        teacher {
          id
          name
          image
          bio
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        topics {
          nextToken
          startedAt
        }
        tags {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryVideosId
        teacherVideosId
      }
      tag {
        id
        name
        videos {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      videoTagsId
      tagVideosId
    }
  }
`;
export const deleteVideoTag = /* GraphQL */ `
  mutation DeleteVideoTag(
    $input: DeleteVideoTagInput!
    $condition: ModelVideoTagConditionInput
  ) {
    deleteVideoTag(input: $input, condition: $condition) {
      id
      videoID
      tagID
      video {
        id
        title
        description
        url
        poster
        duration
        category {
          id
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        teacher {
          id
          name
          image
          bio
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        topics {
          nextToken
          startedAt
        }
        tags {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryVideosId
        teacherVideosId
      }
      tag {
        id
        name
        videos {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      videoTagsId
      tagVideosId
    }
  }
`;
