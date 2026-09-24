import {Router} from 'express';
import { validate } from '../middlewares/validate.js';
import { loginSchema, registerSchema } from '../validators/auth.validator.js';
import { register } from '../controllers/auth.controller.js'
import { login } from '../controllers/auth.controller.js';
import { loginRateLimiter, registerRateLimiter } from '../middlewares/rate-limit.middleware.js';

const router = Router();

router.post('/auth/register', validate(registerSchema),registerRateLimiter, register);
router.post('/auth/login', validate(loginSchema),loginRateLimiter, login);

export default router;