import cors from 'cors';
import express, { Router } from 'express';
import mongoose from 'mongoose';
import tasksRouter from './tasks';
import usersRouter from './users';
import imagesRouter from './images';
import session from 'express-session';
import { config } from './common/config';
import MongoStore from 'connect-mongo';

(async ()=> {
  const server = express();

  // Middlewares
  server.use(cors({
    credentials: true,
    origin: [
      "http://localhost:3000",
      "https://localhost:3000",
    ]
  }))

  server.use(session({
    resave: false,
    saveUninitialized: false,
    secret: config.SESSION_SECRET,
    store: MongoStore.create({
      mongoUrl: config.MONGO_URI
    })
  }))

  server.use(express.json());
  
  // Routes
  const apiRouter = Router();

  apiRouter.use(usersRouter);
  apiRouter.use(imagesRouter);
  apiRouter.use(tasksRouter);

  server.use("/api", apiRouter);

  // Database Connection
  await mongoose.connect(config.MONGO_URI);

  server.listen(config.PORT, ()=> {
    console.log(`Server running on port ${config.PORT}`);
  })
})();
