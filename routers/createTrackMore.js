import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import { getLoggerInstance } from "../logger.js";   
const logger = getLoggerInstance();
import { appendTrackingData } from '../utils/dataStoreTM.js';

export const createTracker = express.Router();

createTracker.use(bodyParser.json());

createTracker.post('/createTracking', async (req, res) => {
    logger.info(`Router to create tracker`);
    const API_URL = 'https://api.trackingmore.com/v3/trackings/create';
    const YOUR_API_KEY = process.env.TRACKMORE_API_KEY;
    const trackingData = req.body;
    logger.info(`trackingData: ${JSON.stringify(trackingData)}`);
    logger.info(`API_URL: ${API_URL}`);
    logger.info(`YOUR_API_KEY: ${YOUR_API_KEY}`);

    const headers = {
        'Content-Type': 'application/json',
        'Tracking-Api-Key': YOUR_API_KEY
    };

    try {
        const response = await axios.post(API_URL, trackingData, { headers: headers });
        
        // Save trackingData to the file before sending a response
        appendTrackingData(trackingData); 
        logger.info(`Tracking data appended to dataTM.json`);

        res.json(response.data);
    } catch (error) {
        res.status(500).json(error.data);
    }
});
