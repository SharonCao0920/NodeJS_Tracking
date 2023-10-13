import express from 'express';
import * as dotenv from 'dotenv';
import { getTracker } from './routers/getTracking.js';
import { getDetails } from './routers/getDetails.js';
import https from 'https';
import fs from 'fs';
import { getLoggerInstance } from './logger.js';    

// Load environment variables
dotenv.config();
const PORT = process.env.PORT;

const httpsOptions = {
    key: fs.readFileSync('./ssl//key.pem'),
    cert: fs.readFileSync('./ssl/cert.pem')
}

const app = express();
const loggers = getLoggerInstance();
const server = https.createServer(httpsOptions,app);

// Middleware
app.use(express.json());

// Use the tracking router for all routes prefixed with /api
app.use('/api', getTracker);
app.use('/api', getDetails);

server.listen(PORT, () => {
    loggers.info(`Server is running on port ${PORT}`);
});
