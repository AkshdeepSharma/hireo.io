import resumeReducer, {
  GET_NEXT,
  GET_PREV,
  UPDATE_SINGLE_RESUME
} from '../../redux/ducks/resume';
import { testResumes } from '../../constants/constants';
import testStoreState from '../testStoreState';

describe('resume reducer', () => {
  const initialState = testStoreState.resume;
  it('should return the intitial state', () => {
    expect(resumeReducer(undefined, {})).toEqual(initialState);
  });

  // it('should get the resumeList', () => {
  //   const testState = initialState;
  //   const newReducerState = resumeReducer(testState, {
  //     type: GET_RESUMES,
  //     updatedResumeList: testResumes
  //   });
  //   expect(newReducerState.resumeList).toEqual(testResumes);
  // });

  it('should get the next resume', () => {
    const testState = {
      ...initialState,
      resumeList: testResumes,
      resumeListGotten: true
    };
    const newReducerState = resumeReducer(testState, {
      type: GET_NEXT
    });
    expect(newReducerState.resumeIndex).toEqual(1);
  });

  it('should get the previous resume', () => {
    const testState = {
      ...initialState,
      resumeList: testResumes,
      resumeListGotten: true,
      resumeIndex: 1
    };
    const newReducerState = resumeReducer(testState, {
      type: GET_PREV
    });
    expect(newReducerState.resumeIndex).toEqual(0);
  });

  it('should get a single resume', () => {
    const data = 'rYz3';
    const testState = {
      ...initialState,
      resumeList: testResumes,
      resumeListGotten: true
    };
    const newReducerState = resumeReducer(testState, {
      type: UPDATE_SINGLE_RESUME,
      data
    });
    expect(newReducerState.resumeList[0]).toEqual(data);
  });

  // it('should reset the resumeListGotten variable', () => {
  //   const testState = {
  //     ...initialState,
  //     resumeListGotten: true
  //   };
  //   const newReducerState = resumeReducer(testState, {
  //     type: RESET_RESUME_GOTTEN
  //   });
  //   expect(newReducerState.resumeListGotten).toEqual(false);
  // });
});
