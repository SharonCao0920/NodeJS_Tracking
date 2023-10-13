import fs from 'fs';

const filePath = './data.json';

const loadDataFromFile = () => {
    if (fs.existsSync(filePath)) {
        const rawData = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(rawData);
    } else {
        return [];
    }
};

const saveToFile = (data) => {
    // Sort the data array by order_id before saving
    data.sort((a, b) => a.order_id - b.order_id);

    fs.writeFile(filePath, JSON.stringify(data, null, 4), (err) => {
        if (err) {
            console.error('Error saving to file:', err);
        } else {
            console.log('Data saved to data.json');
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
    console.log(currentData);
};
