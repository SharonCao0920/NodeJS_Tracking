import fs from 'fs';
import fetch from 'node-fetch';
import { getLoggerInstance } from "../logger.js";   
const loggers = getLoggerInstance();

const filePath = 'data.json'; 
const API_URL = 'https://my.trackship.com/api/shipment/get/';
const API_KEY = process.env.API_KEY; // Using environment variables for security
const APP_NAME = process.env.APP_NAME_SHIPMENT;

const loadDataFromFile = () => {
    if (fs.existsSync(filePath)) {
        loggers.info(`File exists`);
        const rawData = fs.readFileSync(filePath, 'utf8');
        if (!rawData.trim()) {
            return [];
        }

        try {
            return JSON.parse(rawData);
        } catch (error) {
            loggers.error(`Error parsing JSON from data.json: ${error}`);
            return [];
        }
    } else {
        loggers.error(`File does not exist`); 
        return [];
    }
};

const getShipmentStatus = async (orderId) => {
    const data = loadDataFromFile();
    const orderData = data.find(item => item.order_id === orderId);

    if (!orderData) {
        loggers.error(`Order not found!`);
        return null;
    }

    const { tracking_number, tracking_provider } = orderData;
    loggers.info(`tracking_number: ${tracking_number}`);
    loggers.info(`tracking_provider: ${tracking_provider}`);

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'trackship-api-key': API_KEY,
                'app-name': APP_NAME,
            },
            body: JSON.stringify({
                tracking_number,
                tracking_provider
            })
        });

        const result = await response.json();
        return result;

    } catch (error) {
        loggers.error(`Error fetching shipment status: ${error}`);
        return null;
    }
};

export default getShipmentStatus;