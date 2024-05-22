# Currency Converter
Currency converter React + Axios + CSS

This is a currency conversion application developed with React.js. It allows users to convert values between different currencies using an exchange rate API.

![alt text](https://github.com/iurecastro/currency-converter/blob/main/public/images/printProject.png)


## Overview

Currency Converter is a simple application that allows users to select a source currency and a target currency, enter an amount, and get the updated conversion. The app uses the [Exchangerate-API](https://www.exchangerate-api.com/) to fetch exchange rates.

## Features

- Conversion of values between different currencies.
- Selection of source and target currencies.
- Intuitive user interface.

## Technologies Used

- React.js
- Axios (for HTTP requests)
- CSS (for styling)

## Prerequisites

Make sure you have Node.js and npm installed on your machine. You can download them [here](https://nodejs.org/).

## How to Set Up the Project

1. Clone this repository:

   ```sh
   git clone https://github.com/iurecastro/currency-converter.git
   cd currency-converter

2. Install the dependencies:
    ```sh
   npm install

3. Start the application:
   ```sh
   npm start
4. Open your browser and go to http://localhost:3000 to see the app in action.

## Project Structure

```plaintext
 
currency-converter/
  ├── public/
  ├── src/
  │   ├── components/
  │   │   └── CurrencyConverter.js
  │   ├── App.js
  │   ├── App.css
  │   └── index.js
  ├── .gitignore
  ├── package.json
  ├── README.md 
```

## How to Use
1. Enter the amount you want to convert.
2. Select the source currency.
3. Select the target currency.
4. Click the "Convert" button to see the conversion result.

## License
This project is licensed under the MIT License. See the LICENSE file for details.



Developed by Iure Castro.
