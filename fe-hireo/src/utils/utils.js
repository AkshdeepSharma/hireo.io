import testStoreState from '../tests/testStoreState';

export const overrideTestStoreState = reducerOverride => {
  const combinedReducer = {};
  Object.keys(testStoreState).forEach(reducer => {
    combinedReducer[reducer] =
      reducer in reducerOverride
        ? Object.assign({}, testStoreState[reducer], reducerOverride[reducer])
        : testStoreState[reducer];
  });
  return combinedReducer;
};

export const isHiring = location => {
  const { pathname } = location;
  const hireMe = '/hireme';
  return pathname !== hireMe && pathname !== '/' && pathname !== '';
};

export const validateResumeIndex = (resumeIndex, resumeList) =>
  resumeIndex >= 0 &&
  resumeIndex < resumeList.length &&
  resumeList[resumeIndex] !== undefined;

export const generateRandomNumber = () => Math.floor(Math.random() * 100);
