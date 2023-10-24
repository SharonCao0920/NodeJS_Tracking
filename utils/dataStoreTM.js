import fs from 'fs';
import { getLoggerInstance } from "../logger.js";   
const loggers = getLoggerInstance();

const filePath = './dataTM.json';

const loadDataFromFile = () => {
    if (fs.existsSync(filePath)) {
        const rawData = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(rawData);
    } else {
        return [];
    }
};

const saveToFile = (data) => {
    data.sort((a, b) => a.order_id - b.order_id);

    fs.writeFile(filePath, JSON.stringify(data, null, 4), (err) => {
        if (err) {
            loggers.error(`Error saving to file: ${err}`);
        } else {
            loggers.info(`Data saved to dataTM.json`);  // Updated file name for consistency
        }
    });
};

export const appendTrackingData = (data) => {
    const currentData = loadDataFromFile();
    const exists = currentData.some(item => item.order_id === data.order_id);
    if (!exists) {
        currentData.push(data);
        saveToFile(currentData);
    }
    loggers.info(`Tracking data appended to dataTM.json`); // Updated file name for consistency
};
