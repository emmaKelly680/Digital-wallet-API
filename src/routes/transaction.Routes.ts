import {Router} from 'express';

const router = Router ();

router.post('/transfers');
router.get('/transactions');
router.get('/transactions/:transaction_id');


export default router;