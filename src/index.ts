import 'dotenv/config';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import connectDB from './config/database';
import { RegisterRoutes } from './generated/routes';
import swaggerDocument from './generated/swagger.json';

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

RegisterRoutes(app);

app.get('/hello', (_req: express.Request, res: express.Response) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port} \n CNAME: http://localhost:${port}`);
    console.log(`API Documentation available at http://localhost:${port}/api-docs`);
});
