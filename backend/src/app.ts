import cors from 'cors'
import express from 'express';
import http from 'node:http';
import {Server} from 'socket.io';

import router from './controller';
import middleware from './lib/middleware';
import handlers from './socket';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors())

const server = http.createServer(app);

export const io = new Server(server);

app.get('/health', async (req, res) => {
  res.json({status: 'http ok!'});
});

app.use('/api', router);

app.use(middleware.error);

io.on('connnection', (socket) => {
  handlers.like.likeHandlers(io, socket);
  handlers.state.stateHandlers(io, socket);
  handlers.queue.queueHandlers(io, socket);
  handlers.jam.jamHandlers(io, socket);
});

export default server;
