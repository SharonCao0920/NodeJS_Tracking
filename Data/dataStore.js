export let trackingDataArray = [];

export const appendTrackingData = (data) => {
    const exists = trackingDataArray.some(item => item.order_id === data.order_id);
    if (!exists) {
        trackingDataArray.push(data);
    }
    console.log(trackingDataArray);
};
