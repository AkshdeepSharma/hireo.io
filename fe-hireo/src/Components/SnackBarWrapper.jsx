import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { closeSnackbar } from '../redux/ducks/snackbar';

const SnackBar = () => {
  const dispatch = useDispatch();
  const message = useSelector(state => state.snackbar.snackBarMessage);
  const showSnackBar = useSelector(state => state.snackbar.showSnackBar);
  const snackBarColor = useSelector(state => state.snackbar.snackBarColor);

  const onClickClose = () => {
    dispatch(closeSnackbar());
  };

  return (
    <>
      <Snackbar
        open={showSnackBar}
        autoHideDuration={3000}
        onClose={onClickClose}
        action={[
          <IconButton onClick={onClickClose}>
            <CloseIcon />
          </IconButton>
        ]}
      >
        <MuiAlert severity={snackBarColor}>{message}</MuiAlert>
      </Snackbar>
    </>
  );
};

export default SnackBar;
