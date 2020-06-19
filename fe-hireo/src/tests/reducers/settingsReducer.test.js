import settingsReducer, { TOGGLE_BOOL } from '../../redux/ducks/settings';
import testStoreState from '../testStoreState';

describe('settings reducer', () => {
  const initialState = testStoreState.settings;
  it('should return the intitial state', () => {
    expect(settingsReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle TOGGLE_BOOL and toggle given value from false to true', () => {
    const showFilter = 'showFilter';
    const testState = initialState;
    const newReducerState = settingsReducer(testState, {
      type: TOGGLE_BOOL,
      toToggle: showFilter
    });
    expect(newReducerState.showFilter).toEqual(true);
  });

  it('should handle TOGGLE_BOOL and toggle given value from true to false', () => {
    const showFilter = 'showFilter';
    const testState = {
      ...initialState.settings,
      showFilter: true
    };
    const newReducerState = settingsReducer(testState, {
      type: TOGGLE_BOOL,
      toToggle: showFilter
    });
    expect(newReducerState.showFilter).toEqual(false);
  });
});
