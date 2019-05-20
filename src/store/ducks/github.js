import * as api from 'api/api'
// Action Types
export const Types = {
  FETCH_REPOSITORIES_BEGIN: 'github/FETCH_REPOSITORIES_BEGIN',
  FETCH_REPOSITORIES_SUCCESS: 'github/FETCH_REPOSITORIES_SUCCESS',
  FETCH_REPOSITORIES_FAILURE: 'github/FETCH_REPOSITORIES_FAILURE',

  UPDATE_REPOSITORY_SELECTED_BEGIN: 'github/UPDATE_REPOSITORY_SELECTED_BEGIN',
  UPDATE_REPOSITORY_SELECTED_SUCCESS: 'github/UPDATE_REPOSITORY_SELECTED_SUCCESS',
  UPDATE_REPOSITORY_SELECTED_FAILURE: 'github/UPDATE_REPOSITORY_SELECTED_FAILURE',

  FETCH_COMMITS_BEGIN: 'github/FETCH_COMMITS_BEGIN',
  FETCH_COMMITS_SUCCESS: 'github/FETCH_COMMITS_SUCCESS',
  FETCH_COMMITS_FAILURE: 'github/FETCH_COMMITS_FAILURE',
};

// Reducer
const initialState = {
  author: 'alexsandrosa',
  repositories: {
    isLoading: false,
    data: [],
    error: ''
  },
  repositorySelected: {
    isLoading: false,
    data: [],
    error: ''
  },
  commits: {
    isLoading: false,
    data: [],
    error: ''
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.FETCH_REPOSITORIES_BEGIN:
      return {
        ...state,
        repositories: {
          isLoading: true
        }
      };
    case Types.FETCH_REPOSITORIES_SUCCESS:
      return {
        ...state,
        repositories: {
          isLoading: false,
          data: action.payload
        }
      };
    case Types.FETCH_REPOSITORIES_FAILURE:
      return {
        ...state,
        repositories: {
          isLoading: false,
          data: [],
          error: action.payload
        }
      };

    // UPDATE_REPOSITORY
    case Types.UPDATE_REPOSITORY_SELECTED_BEGIN:
      return {
        ...state,
        repositorySelected: {
          isLoading: true
        }
      };
    case Types.UPDATE_REPOSITORY_SELECTED_SUCCESS:
      return {
        ...state,
        repositorySelected: {
          isLoading: false,
          data: action.payload
        }
      };
    case Types.UPDATE_REPOSITORY_SELECTED_FAILURE:
      return {
        ...state,
        repositorySelected: {
          isLoading: false,
          data: [],
          error: action.payload
        }
      };
    // FETCH_COMMITS
    case Types.FETCH_COMMITS_BEGIN:
      return {
        ...state,
        commits: {
          isLoading: true
        }
      };
    case Types.FETCH_COMMITS_SUCCESS:
      return {
        ...state,
        commits: {
          isLoading: false,
          data: action.payload
        }
      };
    case Types.FETCH_COMMITS_FAILURE:
      return {
        ...state,
        commits: {
          isLoading: false,
          data: [],
          error: action.payload
        }
      };
    default:
      return state;
  }
}

// Action Creators
export const fetchRepositories = () => {
  return async (dispatch, getState) => {
    const { github: { author } } = getState();
    dispatch({ type: Types.FETCH_REPOSITORIES_BEGIN });

    try {
      const response = await api.fetchRepositories(author);

      dispatch({
        type: Types.FETCH_REPOSITORIES_SUCCESS,
        payload: response
      });
    }
    catch(err) {
      dispatch({
        type: Types.FETCH_REPOSITORIES_FAILURE,
        payload: 'error'
      });
    }
  }
};

export const updateRepositorySelected = repository => {
  return async dispatch => {
    dispatch({ type: Types.UPDATE_REPOSITORY_SELECTED_BEGIN });

    try {
      dispatch({
        type: Types.UPDATE_REPOSITORY_SELECTED_SUCCESS,
        payload: repository
      });
    }
    catch(err) {
      dispatch({
        type: Types.UPDATE_REPOSITORY_SELECTED_FAILURE,
        payload: 'error'
      });
    }
  }
};

export const fetchCommitsByRepositories = (repository) => {
  return async (dispatch, getState) => {
    dispatch({ type: Types.FETCH_COMMITS_BEGIN });

    const { github: { author } } = getState();
    const { name } = repository;

    try {
      const response = await api.fetchRepositoriesDetails(author, name);

      dispatch({
        type: Types.FETCH_COMMITS_SUCCESS,
        payload: response
      });
    }
    catch(err) {
      dispatch({
        type: Types.FETCH_COMMITS_FAILURE,
        payload: 'error'
      });
    }
  }
};
