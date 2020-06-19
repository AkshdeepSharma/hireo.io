import tagsReducer, { INVERT_CHECKBOX } from '../../redux/ducks/tags';
import testStoreState from '../testStoreState';

describe('tags reducer', () => {
  const initialState = testStoreState.tags;
  it('should return the intitial state', () => {
    expect(tagsReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle INVERT_CHECKBOX and flip given value from false to true', () => {
    const backendDev = 'backendDev';
    const testState = initialState;
    const newReducerState = tagsReducer(testState, {
      type: INVERT_CHECKBOX,
      checkboxName: backendDev
    });
    expect(newReducerState.checkboxes[backendDev]).toEqual(true);
  });

  it('should handle INVERT_CHECKBOX and flip given value from true to false', () => {
    const frontendDev = 'frontendDev';
    const testState = {
      ...initialState,
      checkboxes: {
        ...initialState.checkboxes,
        frontendDev: true
      }
    };
    const newReducerState = tagsReducer(testState, {
      type: INVERT_CHECKBOX,
      checkboxName: frontendDev
    });
    expect(newReducerState.checkboxes[frontendDev]).toEqual(false);
  });
});
