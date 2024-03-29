/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createVideoURLs = /* GraphQL */ `
  mutation CreateVideoURLs(
    $input: CreateVideoURLsInput!
    $condition: ModelVideoURLsConditionInput
  ) {
    createVideoURLs(input: $input, condition: $condition) {
      id
      guid
      srcvideo
      MP4
      CMAF
      HLS
      DASH
      MSS
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateVideoURLs = /* GraphQL */ `
  mutation UpdateVideoURLs(
    $input: UpdateVideoURLsInput!
    $condition: ModelVideoURLsConditionInput
  ) {
    updateVideoURLs(input: $input, condition: $condition) {
      id
      guid
      srcvideo
      MP4
      CMAF
      HLS
      DASH
      MSS
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteVideoURLs = /* GraphQL */ `
  mutation DeleteVideoURLs(
    $input: DeleteVideoURLsInput!
    $condition: ModelVideoURLsConditionInput
  ) {
    deleteVideoURLs(input: $input, condition: $condition) {
      id
      guid
      srcvideo
      MP4
      CMAF
      HLS
      DASH
      MSS
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
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
      date
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
      tags {
        items {
          id
          videoId
          tagId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
      date
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
      tags {
        items {
          id
          videoId
          tagId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
      date
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
      tags {
        items {
          id
          videoId
          tagId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          date
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
          date
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
          date
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
          date
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
          date
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
          date
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
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
      id
      name
      video {
        items {
          id
          videoId
          tagId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
      video {
        items {
          id
          videoId
          tagId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
      video {
        items {
          id
          videoId
          tagId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
export const createUserData = /* GraphQL */ `
  mutation CreateUserData(
    $input: CreateUserDataInput!
    $condition: ModelUserDataConditionInput
  ) {
    createUserData(input: $input, condition: $condition) {
      id
      cognitoSub
      favorites
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUserData = /* GraphQL */ `
  mutation UpdateUserData(
    $input: UpdateUserDataInput!
    $condition: ModelUserDataConditionInput
  ) {
    updateUserData(input: $input, condition: $condition) {
      id
      cognitoSub
      favorites
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUserData = /* GraphQL */ `
  mutation DeleteUserData(
    $input: DeleteUserDataInput!
    $condition: ModelUserDataConditionInput
  ) {
    deleteUserData(input: $input, condition: $condition) {
      id
      cognitoSub
      favorites
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createVideoTags = /* GraphQL */ `
  mutation CreateVideoTags(
    $input: CreateVideoTagsInput!
    $condition: ModelVideoTagsConditionInput
  ) {
    createVideoTags(input: $input, condition: $condition) {
      id
      videoId
      tagId
      video {
        id
        title
        description
        url
        poster
        duration
        date
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
        video {
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
    }
  }
`;
export const updateVideoTags = /* GraphQL */ `
  mutation UpdateVideoTags(
    $input: UpdateVideoTagsInput!
    $condition: ModelVideoTagsConditionInput
  ) {
    updateVideoTags(input: $input, condition: $condition) {
      id
      videoId
      tagId
      video {
        id
        title
        description
        url
        poster
        duration
        date
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
        video {
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
    }
  }
`;
export const deleteVideoTags = /* GraphQL */ `
  mutation DeleteVideoTags(
    $input: DeleteVideoTagsInput!
    $condition: ModelVideoTagsConditionInput
  ) {
    deleteVideoTags(input: $input, condition: $condition) {
      id
      videoId
      tagId
      video {
        id
        title
        description
        url
        poster
        duration
        date
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
        video {
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
    }
  }
`;
