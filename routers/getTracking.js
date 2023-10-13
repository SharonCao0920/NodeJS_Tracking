import express from 'express';
import { createTracking } from '../utils/getTracker.js';
import { appendTrackingData } from '../utils/dataStore.js';
import { getLoggerInstance } from "../logger.js";   
const loggers = getLoggerInstance();

export const getTracker = express.Router();

getTracker.post('/create-tracker', async (req, res) => {
    const { tracking_number, tracking_provider, order_id, postal_code, destination_country } = req.body;

    try {
        const trackingData = await createTracking({
            tracking_number,
            tracking_provider,
            order_id,
            postal_code,
            destination_country
        });

        const inputData = { tracking_number, tracking_provider, order_id, postal_code, destination_country };
        appendTrackingData(inputData); 
        loggers.info(`Tracking data appended to trackingData.json`);

        loggers.info(`Tracking data: ${trackingData}`);
        res.json(trackingData);
    } catch (error) {
        loggers.error(`Failed to create tracking: ${error}`);
        return res.status(500).json({ error: 'Failed to create tracking' });
    }
});