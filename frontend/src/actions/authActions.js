import axios from 'axios';

export const registerUser = (userData) => async (dispatch) => {
  dispatch({ type: 'REGISTER_REQUEST' });

  try {
    const config = { headers: { 'Content-Type': 'application/json' } };
    const res = await axios.post('/api/register/', userData, config);

    dispatch({ type: 'REGISTER_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({
      type: 'REGISTER_FAIL',
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};