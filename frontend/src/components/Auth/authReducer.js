const initialState = {
  loading: false,
  isAuthenticated: false,
  user: null,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
        error: null,
      };
    case 'REGISTER_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    // Add login/logout cases as needed
    default:
      return state;
  }
};