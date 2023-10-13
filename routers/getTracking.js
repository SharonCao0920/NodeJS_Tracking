import express from 'express';
import { createTracking } from '../utils/getTracker.js';
import { appendTrackingData } from '../utils/dataStore.js';

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
        appendTrackingData(inputData); // Append the data if it doesn't already exist

        console.log(trackingData);
        res.json(trackingData);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Failed to create tracking' });
    }
});