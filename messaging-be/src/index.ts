import express from 'express';
import connectDatabase from './database/dbConnect';
import { appConfig } from './config/constant';
import expressListEndpoints from 'express-list-endpoints';
const fs = require('fs');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require('./routers/index');

const app = express();
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(cookieParser());
app.use(appConfig.prefix('v1'), router);


connectDatabase().then(() => {
  app.listen(appConfig.port, async () => {
      console.log(`Server is listening on port ${appConfig.port}...`);

      const endpoints = expressListEndpoints(app).flatMap((endpoint) => {
          return endpoint.methods.map((method) => `${method} ${endpoint.path}`);
      });

      fs.writeFileSync('endpoints.json', JSON.stringify(endpoints, null, 2));

      // await createFirstAccount()
  });
});