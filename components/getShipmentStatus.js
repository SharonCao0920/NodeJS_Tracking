import axios from 'axios';

export const getShipmentStatus = async ({ tracking_number, tracking_provider }) => {
    const API_ENDPOINT = 'https://my.trackship.com/api/shipment/get/';
    const API_KEY = process.env.TRACKSHIP_API_KEY;
    const APP_NAME = process.env.APP_NAME;
    try {
        const response = await axios.post(API_ENDPOINT, {
            tracking_number,
            tracking_provider
        }, {
            headers: {
                'trackship-api-key': API_KEY,
                'app-name': APP_NAME,
                'Content-Type': 'application/json'
            }
        });

        // // Check the response status
        // if (response.data.status === 'success') {
        //     return response.data.data;
        // } else {
        //     // Handle the error scenario where the API returns status 'error'
        //     throw new Error(response.data.message);
        // }
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
