export const SHOW_SNACKBAR = 'tas/shared/SHOW_SNACKBAR';
export const CLOSE_SNACKBAR = 'tas/shared/CLOSE_SNACKBAR';

const initialState = {
  snackBarMessage: '',
  showSnackBar: false,
  snackBarColor: 'info'
};

export default (state = initialState, action) => {
  const { snackBarMessage, snackBarColor = 'info' } = action;
  switch (action.type) {
    case SHOW_SNACKBAR:
      return {
        ...state,
        snackBarMessage,
        snackBarColor,
        showSnackBar: true
      };
    case CLOSE_SNACKBAR:
      return {
        ...state,
        showSnackBar: false
      };
    default:
      return state;
  }
};

export const showSnackBar = (snackBarMessage, snackBarColor) => ({
  type: SHOW_SNACKBAR,
  snackBarMessage,
  snackBarColor
});

export const closeSnackbar = () => ({
  type: CLOSE_SNACKBAR
});
