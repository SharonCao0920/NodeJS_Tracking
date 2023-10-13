# NodeJS_Tracking

## Design
### 1. Project Setup
* Using NodeJS express framework
  * Create a folder for the project and go to the project folder
  * Initialize the nodejs project by:
  ```
  $ npm init -y
  ```

* Create .env file to store variables


### 2. Environmental Variables
Save Tracking API keys in this folder. API I used for this project is from: 
[TrackShip](https://docs.trackship.com/docs/tracking-api/)

### 3. Create a Tracker

API used in this section is **[Create a Tracking](https://docs.trackship.com/docs/tracking-api/create-shipment/)**

In this section, we post the information through the API to create a tracker.
<br>

**Request Parameters:**


**Response Body:**


API URL:

https://my.trackship.com/api/create-tracker/customapp/


### 4. Save Data
With the data posted in previous section, create a method to save the data to data.json file which removes duplicate data and save data set in order of order_id.


### 5. Get Tracking Details
API used in this section is **[Get a shipment status](https://docs.trackship.com/docs/tracking-api/get-a-shipment-status/)**

In this section, the program will do:
1. use the order_id parsed from the URL to filter throught data.json file to get the tracking number and provider for the specific order_id.
   
2. Use the tracking number and provider information as parameters to call *[Get a shipment status](https://docs.trackship.com/docs/tracking-api/get-a-shipment-status/)* API to get the shipment status.

<br>

**Request Parameters:**


**Response Body:**


API URL:

https://my.trackship.com/api/create-tracker/customapp/


### 6. Test Results
Testing the project using Postman.

* **Create a Tracking:**


* **Data Saved:**


* **Get Shipment Status:**


