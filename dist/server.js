import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Basic request logger
app.use((req, _res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});
// Routes
app.get('/', (req, res) => {
    res.json({ message: 'Server is running' });
});
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});
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
//# sourceMappingURL=server.js.map