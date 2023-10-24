import express from 'express';
import getShipmentStatus from '../utils/trackmore.js'; // Update the path as needed
import { getLoggerInstance } from "../logger.js";   
const loggers = getLoggerInstance();

export const getDetails = express.Router();

getDetails.get('/getTracking/:orderId', async (req, res) => {
    const order_number = req.params.orderId;
    loggers.info(`order_number${order_number}`);
    const status = await getShipmentStatus(order_number);

    if (status) {
        loggers.info(`status: ${status.message}`); //log statuts to console
        res.json(status);
    } else {
        loggers.error(`Order not found or error fetching shipment status.`)
        res.status(404).json({ message: 'Order not found or error fetching shipment status.' });
    }
});