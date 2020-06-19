import { getNext, getResume, storeResumeService } from './service';

export const getNextResume = async (req, res) => {
  const { body } = req;
  const { resumeList, filterList } = body;

  const returnPayLoad = await getNext(resumeList, filterList);
  if (returnPayLoad === 'error') {
    return res.sendStatus(400);
  }
  return res.json(returnPayLoad);
};

export const getSingleResume = async (req, res) => {
  const { params } = req;
  const { id } = params;
  const returnPayload = await getResume(id);
  if (returnPayload === 'error') {
    return res.sendStatus(400);
  }
  return res.json(returnPayload);
};

export const storeResume = async (req, res) => {
  const { body } = req;
  const { payload } = body;
  const { timestamp, filters } = payload;
  if (!timestamp || Object.keys(filters).length === 0) {
    return res.sendStatus(400);
  }
  return res.json(await storeResumeService(timestamp, filters));
};
