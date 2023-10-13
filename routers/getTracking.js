import express from 'express';
import { createTracking } from '../components/getTracker.js';
import { appendTrackingData } from '../Data/dataStore.js';

export const getTracker = express.Router();

getTracker.post('/create-tracker', async (req, res) => {
    const { tracking_number, tracking_provider, order_id, postal_code, destination_country } = req.body;

    if (!tracking_number || !tracking_provider || !order_id) {
        return res.status(400).json({ error: 'Tracking number, tracking provider, and order ID are required' });
    }

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