import {Router} from 'express';

const router = Router();
router.post('/wallets');
router.get('/wallets');
router.get('/wallets/:wallet_id/balance');
router.get('wallets/:wallet_id');

export default router;