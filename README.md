# NodeJS_Tracking

## Design
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

![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/c4cefe9a-9383-4e0e-89fd-5437e198a598)


### 2. Environmental Variables
Save Tracking API keys in this folder. API I used for this project is from: 
[TrackShip](https://docs.trackship.com/docs/tracking-api/)

![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/b83fb998-53c0-4802-b36f-9ff7eff3a92b)


### 3. Create a Tracker

API used in this section is **[Create a Tracking](https://docs.trackship.com/docs/tracking-api/create-shipment/)**

![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/5e00c833-309d-424f-9dfa-128adb751955)

In this section, we post the information through the API to create a tracker.
![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/568e8b06-3083-4b0f-913c-7a093d317526)

<br>

**Request Parameters:**
![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/1a0be285-c8bc-4c1f-8780-6513e7b16e08)


**Response Body:**
![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/d9e70520-7d2c-4177-906e-c8d51db09a7b)

**Response Parameters:**
![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/11e5615f-a79b-464e-abc4-64b01999b603)


API URL:

https://my.trackship.com/api/create-tracker/customapp/


### 4. Save Data
With the data posted in previous section, create a method to save the data to data.json file which removes duplicate data and save data set in order of order_id.

![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/d84cead4-10cc-4616-8b14-58480240afc1)


### 5. Get Tracking Details
API used in this section is **[Get a shipment status](https://docs.trackship.com/docs/tracking-api/get-a-shipment-status/)**

In this section, the program will do:
1. use the order_id parsed from the URL to filter throught data.json file to get the tracking number and provider for the specific order_id.
   
2. Use the tracking number and provider information as parameters to call *[Get a shipment status](https://docs.trackship.com/docs/tracking-api/get-a-shipment-status/)* API to get the shipment status.

<br>

**Request Parameters:**
![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/9f8ce0b4-5485-4391-ac07-8216e75343a1)


**Response Body:**
![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/6e190a26-6590-4000-b062-a468a64c6967)

**Response Parameters:**
![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/910b9642-f9b8-4512-b91d-ec2e4ed89124)


API URL:

https://my.trackship.com/api/create-tracker/customapp/


### 6. Test Results
Testing the project using Postman.

* **Create a Tracking:**
  
![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/809d5071-3d42-47a1-aba6-20bd10650259)


* **Data Saved:**
  
![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/286a6fe8-6a29-4069-9212-a3e06012ce84)


* **Get Shipment Status:**
  
![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/20e99220-f921-4cf2-8f3b-a5db7e50f61b)

### logger

![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/f54c0a70-05cb-40e1-9443-bec309dd4665)

### Trackship Preview
![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/8a5d01dd-93ca-4957-a25f-f32851510a19)

