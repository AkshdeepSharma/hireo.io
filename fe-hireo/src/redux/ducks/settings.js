export const SWITCH_THEME = 'SWITCH_THEME';
export const TOGGLE_BOOL = 'TOGGLE_BOOL';

const initialState = {
  theme: 'dark',
  showFilter: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      const { theme } = state;
      return { ...state, theme: theme === 'light' ? 'dark' : 'light' };
    case TOGGLE_BOOL:
      return { ...state, [action.toToggle]: !state[action.toToggle] };
    default:
      return state;
  }
};

export const switchTheme = () => ({
  type: SWITCH_THEME
});

export const toggleBool = toToggle => ({
  type: TOGGLE_BOOL,
  toToggle
});
