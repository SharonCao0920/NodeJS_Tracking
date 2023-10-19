# NodeJS_Tracking

## Design

![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/c4cefe9a-9383-4e0e-89fd-5437e198a598)

**APIs used:**
1. **[Create a Tracking](https://docs.trackship.com/docs/tracking-api/create-shipment/)**
2. [Get a shipment status](https://docs.trackship.com/docs/tracking-api/get-a-shipment-status/) from **[TrackShip](https://trackship.com/)**
3. [Get Result](https://www.trackingmore.com/v3/api-index.html?language=Golang#get-results) from **[TackingMore](https://www.trackingmore.com/)**


## Implementation

### 1. Project Setup
* Using NodeJS express framework
  * Create a folder for the project and go to the project folder
  * Initialize the nodejs project by:
  ```
  $ npm init -y
  ```
  * Install needed packages
  ```
  $ npm install express axios winson luxon dotenv node-fetch
  ```

* Create .env file to store variables

![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/f71c2a82-a9ac-45cf-8944-b9169198a72b)


### 2. Environmental Variables
Save Tracking API keys in this folder. API I used for this project is from: 
[TrackShip](https://docs.trackship.com/docs/tracking-api/)

![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/b83fb998-53c0-4802-b36f-9ff7eff3a92b)


### 3. Create a Tracker

API used in this section is **[Create a Tracking](https://docs.trackship.com/docs/tracking-api/create-shipment/)**

* **Connect to a store**

![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/32412289-7b96-42c0-8b03-bad33ce5f487)

* **Test Webhook**
*Note: it seems that Webhook is not required but need to connect to store since APP_NAME is required in header.*
![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/568e8b06-3083-4b0f-913c-7a093d317526)

In this section, we post the data through the API to create a tracker information.

<br>

* **Request Parameters:**

![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/1a0be285-c8bc-4c1f-8780-6513e7b16e08)


* **Response Body:**
  
![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/d9e70520-7d2c-4177-906e-c8d51db09a7b)

* **Response Parameters:**
  
![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/11e5615f-a79b-464e-abc4-64b01999b603)


* **API URL:**

https://my.trackship.com/api/create-tracker/customapp/


### 4. Save Data
With the data posted in previous section, create a method to save the data to data.json file which removes duplicate data and save data set in order of order_id.

![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/d84cead4-10cc-4616-8b14-58480240afc1)


### 5. Get Tracking Details
* API tested in this section are:
  1.  [Get a shipment status](https://docs.trackship.com/docs/tracking-api/get-a-shipment-status/) from **[TrackShip](https://trackship.com/)**
  2.  [Get Result](https://www.trackingmore.com/v3/api-index.html?language=Golang#get-results) from **[TackingMore](https://www.trackingmore.com/)**

* In this section, the program will do:

  1. use the order_id parsed from the URL to filter throught data.json file to get the tracking number and provider for the specific order_id.
     
  2. Use the tracking number and provider information as parameters to call the tracking API to get the shipment status.

<br>

* **TrackShip API**

 * Request Parameters:
  
![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/9f8ce0b4-5485-4391-ac07-8216e75343a1)


 * Response Body:
  
![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/6e190a26-6590-4000-b062-a468a64c6967)

or

![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/5f780f3a-6b94-4cf7-97cd-260a6979da8d)


 * Response Parameters:

![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/910b9642-f9b8-4512-b91d-ec2e4ed89124)


 * API URL:

[https://my.trackship.com/api/create-tracker/customapp/]{https://my.trackship.com/api/create-tracker/customapp/}

* **TrackingMore API**
 * Request

![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/e5033d75-4c39-4a70-9167-8dec13540ef0)

 
 * Example

![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/62556c2e-5b06-4352-8558-bee230804adf)

 * Response

![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/89ea2623-d04d-4177-8c82-a2c408ac1fc2)

<br>

## Run Project

* **package.json**

![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/f6c9208c-b2cf-4a3d-9479-562870e0ce80)

```
$ npm start
```
![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/f71d65e3-63c3-4d59-a8fc-55c8fd0fe050)

* **On another terminal**

```
$ ngrok http https://localhost:8080
```
![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/5b05e80d-99de-4fb6-9ce8-3a094e718330)

## Test Results
Testing the project using Postman.

* **Create a Tracking:**
  
![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/809d5071-3d42-47a1-aba6-20bd10650259)


* **Data Saved:**
  
![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/286a6fe8-6a29-4069-9212-a3e06012ce84)


* **Get Shipment Status:**

  * TrackShip API

![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/a4489961-591d-4ddf-b04a-c042d31cad06)

  * TackingMore API
 
![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/4edcdf47-9d9c-4547-8414-6bb2254d2c0a)

### logger

* TrackShip API

![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/9caf368b-e56b-482a-a731-30c178f3aad5)

* TackingMore API

![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/8b9a388b-c5dd-4cb4-ac49-a9f73562b40a)


### Trackship Preview

![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/1e86590b-1748-41e6-9254-5a9746f57a7e)

