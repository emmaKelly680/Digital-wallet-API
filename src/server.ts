import express, { Request, Response, NextFunction } from 'express';
import authRoutes from './routes/auth.Routes.js'
import walletRoutes from './routes/wallet.Routes.js'
import transactionRoutes from './routes/transaction.Routes.js'
import { globalRateLimiter } from './middlewares/rate-limit.middleware.js';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(globalRateLimiter);

app.use('/api/v1', authRoutes);
app.use('/api/v1', walletRoutes);
app.use('/api/v1', transactionRoutes)



// // 404 handler
// app.use((req: Request, res: Response) => {
//   res.status(404).json({ error: 'Not found' });
// });


// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//   console.error(err.stack);
//   res.status(500).json({ error: 'Internal server error' });
// });

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});