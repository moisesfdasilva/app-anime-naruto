import express from 'express';
import CharactersRoutes from './infra/routes/CharactersRoutes';

const app = express();
app.use(express.json());
app.use(CharactersRoutes);

export default app;
