import express from 'express';
import getShipmentStatus from '../utils/getShipmentStatus.js'; // Update the path as needed

export const getDetails = express.Router();

getDetails.get('/shipment-status/:orderId', async (req, res) => {
    const orderId = req.params.orderId;
    console.log('orderId:', orderId);
    const status = await getShipmentStatus(orderId);

    if (status) {
        console.log('status:', status);
        res.json(status);
    } else {
        res.status(404).json({ message: 'Order not found or error fetching shipment status.' });
    }
});
