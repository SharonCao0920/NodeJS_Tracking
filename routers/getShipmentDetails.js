import express from 'express';
import { getShipmentStatus } from '../components/getShipmentStatus.js';
import { trackingDataArray } from '../Data/dataStore.js';  // Import our data store

export const getShipment = express.Router();

getShipment.post('/shipment-status/:order_id', async (req, res) => {
    const order_id = req.params.order_id;

    // Find the tracking data for the given order_id
    const trackingData = trackingDataArray.find(item => item.order_id === order_id);

    if (!trackingData) {
        return res.status(404).json({ error: 'Order ID not found' });
    }

    const { tracking_number, tracking_provider } = trackingData;

    if (!tracking_number || !tracking_provider) {
        return res.status(400).json({ error: 'Tracking number and tracking provider are required' });
    }

    try {
        const shipmentData = await getShipmentStatus({
            tracking_number,
            tracking_provider
        });
        res.json(shipmentData);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to fetch shipment status' });
    }
});


