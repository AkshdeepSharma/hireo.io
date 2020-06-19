const testStoreState = {
  tags: {
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
  },
  settings: {
    showFilter: false,
    theme: 'dark'
  },
  resume: {
    resumeIndex: 0,
    resumeList: undefined,
    resumeListGotten: false,
    resumeUrl: 'https://akshdeep.me/resume',
    skills: new Set(),
    positions: new Set()
  }
};

export default testStoreState;
