import express from 'express';
import getTrackShip from '../utils/trackship.js'; // Update the path as needed
import { getLoggerInstance } from "../logger.js";   
const loggers = getLoggerInstance();

export const getTrackShiping = express.Router();

getTrackShiping.get('/shipment-status/:orderId', async (req, res) => {
    const orderId = req.params.orderId;
    loggers.info(`orderId: ${orderId}`);
    const status = await getTrackShip(orderId);

    if (status) {
        loggers.info(`status: ${status.message}`); //log statuts to console
        res.json(status);
    } else {
        loggers.error(`Order not found or error fetching shipment status.`)
        res.status(404).json({ message: 'Order not found or error fetching shipment status.' });
    }
});