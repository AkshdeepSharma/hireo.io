export const INVERT_CHECKBOX = 'CHECK_BOX';
export const RESET_CHECKBOXES = 'RESET_CHECKBOXES';

const initialState = {
  checkboxes: {
    backendDev: false,
    frontendDev: false,
    fullstackDev: false,
    appDev: false,
    gameDev: false,
    fulltimeWork: false,
    internWork: false,
    contractWork: false
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INVERT_CHECKBOX:
      return {
        ...state,
        checkboxes: {
          ...state.checkboxes,
          [action.checkboxName]: !state.checkboxes[action.checkboxName]
        }
      };
    case RESET_CHECKBOXES:
      return initialState;
    default:
      return state;
  }
};

export const invertCheckbox = checkboxName => ({
  type: INVERT_CHECKBOX,
  checkboxName
});

export const resetCheckboxes = () => ({
  type: RESET_CHECKBOXES
});
