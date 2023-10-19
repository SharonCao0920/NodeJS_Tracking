# NodeJS_Tracking

## Design

![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/c4cefe9a-9383-4e0e-89fd-5437e198a598)

**APIs used:**
1. [Create a Tracking](https://docs.trackship.com/docs/tracking-api/create-shipment/) from **[TrackShip](https://trackship.com/)**
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

![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/9cbef5ef-6eaa-46cf-8e92-fe1ebc0dc276)


* **Response Body:**

![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/d9497539-9afb-49b5-b0ec-949b373c20b1)


* **Response Parameters:**
  
![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/b687b991-f210-4f60-9e75-15dd8e14f1a2)


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
  
![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/860a8fed-8d2c-46ad-b55d-3fe9944abe1e)


  * Response Body:
  
![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/695fb22c-435e-4a83-9377-0d3dd5e8e9e5)


or

![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/5f780f3a-6b94-4cf7-97cd-260a6979da8d)


  * Response Parameters:

![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/2966db04-8784-4d5c-ab09-d09d1f484aa2)


  * API URL:

[https://my.trackship.com/api/create-tracker/customapp/]{https://my.trackship.com/api/create-tracker/customapp/}

* **TrackingMore API**
 * Request

![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/b776a40d-07aa-4eed-90dd-57ffc8c87877)

 
 * Example

![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/9da64796-a136-4f00-a1dc-16a77630b68b)

 * Response

![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/4cdaa959-18c3-4b00-966e-0daa5a2ab97f)


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

 ![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/0aa8dbd2-e27d-48b2-aa43-7707e7f2be14)

### logger

* TrackShip API

![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/9caf368b-e56b-482a-a731-30c178f3aad5)

* TackingMore API

![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/3dcdbf9f-d242-42ff-befa-8b556319b081)


### Trackship Preview

![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/1e86590b-1748-41e6-9254-5a9746f57a7e)

