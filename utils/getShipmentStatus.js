import fs from 'fs';
import fetch from 'node-fetch';

const filePath = 'data.json'; 
const API_URL = 'https://my.trackship.com/api/shipment/get/';
const API_KEY = process.env.API_KEY; // Using environment variables for security
const APP_NAME = process.env.APP_NAME;

const loadDataFromFile = () => {
    if (fs.existsSync(filePath)) {
        console.log('File exists');
        const rawData = fs.readFileSync(filePath, 'utf8');
        if (!rawData.trim()) {
            return [];
        }

        try {
            return JSON.parse(rawData);
        } catch (error) {
            console.error('Error parsing JSON from data.json:', error);
            return [];
        }
    } else {
        console.error('File does not exist');   
        return [];
    }
};

const getShipmentStatus = async (orderId) => {
    const data = loadDataFromFile();
    const orderData = data.find(item => item.order_id === orderId);

    if (!orderData) {
        console.error('Order not found!');
        return null;
    }

    const { tracking_number, tracking_provider } = orderData;

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'trackship-api-key': API_KEY,
                'app-name': APP_NAME,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tracking_number,
                tracking_provider
            })
        });

        const result = await response.json();
        return result;

    } catch (error) {
        console.error('Error fetching shipment status:', error);
        return null;
    }
};

export default getShipmentStatus;