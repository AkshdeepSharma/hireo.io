import express from 'express';
import { getNextResume, getSingleResume, storeResume } from './controller';

const router = express.Router();

router.get('/getSingle/:id', getSingleResume);
router.post('/getNext', getNextResume);
router.post('/store/', storeResume);

export default router;
