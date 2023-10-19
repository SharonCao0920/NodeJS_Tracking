import fs from 'fs';
import { getLoggerInstance } from "../logger.js";   
import axios from 'axios';
const loggers = getLoggerInstance();

const filePath = 'data.json'; 
const API_URL = 'https://api.trackingmore.com/v3/trackings/get?tracking_numbers='


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
        loggers.info(`API_URL: ${API_URL+tracking_number}`);
        const API_KEY = process.env.TRACKMORE_API_KEY; // Using environment variables for security
        const response = await axios.get(API_URL+tracking_number, {
            headers: {
                'Tracking-Api-Key': API_KEY,
                'Content-Type': 'application/json'
            }
        });

        loggers.info(`response: ${response.status}`);
        return response.data;

    } catch (error) {
        loggers.error(`Error fetching shipment status: ${error}`);
        return null;
    }
};

export default getShipmentStatus;