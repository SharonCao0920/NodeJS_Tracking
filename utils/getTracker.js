import axios from 'axios';
import { getLoggerInstance } from "../logger.js";   
const loggers = getLoggerInstance();

export const createTracking = async (data) => {
    const API_KEY = process.env.TRACKSHIP_API_KEY;
    const APP_NAME = process.env.APP_NAME_Tarcker;
    const TRACKSHIP_URL = 'https://my.trackship.com/api/create-tracker/customapp/';

    try {
        const response = await axios.post(TRACKSHIP_URL, data, {
            headers: {
                'trackship-api-key': API_KEY,
                'app-name': APP_NAME,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        loggers.error(`Error creating tracking: ${error}`);
        throw error;
    }
};