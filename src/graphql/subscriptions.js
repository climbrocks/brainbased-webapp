/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateVideo = /* GraphQL */ `
  subscription OnCreateVideo($filter: ModelSubscriptionVideoFilterInput) {
    onCreateVideo(filter: $filter) {
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
      tags {
        items {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          videoTagsId
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
export const onUpdateVideo = /* GraphQL */ `
  subscription OnUpdateVideo($filter: ModelSubscriptionVideoFilterInput) {
    onUpdateVideo(filter: $filter) {
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
      tags {
        items {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          videoTagsId
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
export const onDeleteVideo = /* GraphQL */ `
  subscription OnDeleteVideo($filter: ModelSubscriptionVideoFilterInput) {
    onDeleteVideo(filter: $filter) {
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
      tags {
        items {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          videoTagsId
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
export const onCreateTeacher = /* GraphQL */ `
  subscription OnCreateTeacher($filter: ModelSubscriptionTeacherFilterInput) {
    onCreateTeacher(filter: $filter) {
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
export const onUpdateTeacher = /* GraphQL */ `
  subscription OnUpdateTeacher($filter: ModelSubscriptionTeacherFilterInput) {
    onUpdateTeacher(filter: $filter) {
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
export const onDeleteTeacher = /* GraphQL */ `
  subscription OnDeleteTeacher($filter: ModelSubscriptionTeacherFilterInput) {
    onDeleteTeacher(filter: $filter) {
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
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag($filter: ModelSubscriptionTagFilterInput) {
    onCreateTag(filter: $filter) {
      id
      name
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      videoTagsId
    }
  }
`;
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag($filter: ModelSubscriptionTagFilterInput) {
    onUpdateTag(filter: $filter) {
      id
      name
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      videoTagsId
    }
  }
`;
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag($filter: ModelSubscriptionTagFilterInput) {
    onDeleteTag(filter: $filter) {
      id
      name
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      videoTagsId
    }
  }
`;
