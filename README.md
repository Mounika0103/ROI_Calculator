# ROI_Calculator

# Project Overview

This ROI Calculator is a web-based tool designed to help marketers and businesses calculate the Return on Investment (ROI) for their digital marketing campaigns. The application allows users to input key campaign metrics like ad spend, cost per click (CPC), and conversion rates to dynamically calculate projected gross revenue, net results, and ROI.

The tool is built using HTML, CSS, and JavaScript for easy deployment and can handle currency conversion between USD and INR.

# Features

**Currency Selector:** Allows users to choose between USD and INR.

**Interactive Input Controls:** Users can adjust input values such as ad spend, CPC, and conversion rates using sliders.

**Real-time Calculations:** Gross revenue, net result, and ROI are calculated and displayed instantly as users adjust inputs.

**Profit or Loss Messaging:** The tool displays whether the campaign will result in profit or loss based on the user's input, with custom messages.

# Tech Stack
**HTML:** Structuring the web page and content.

**CSS:** For styling and layout.

**JavaScript:** Handles the ROI calculations, currency conversion, and dynamic updates of the UI.

# Project Files
**index.html:** The main HTML file containing the structure of the ROI calculator.

**styles.css:** The CSS file that styles the calculator layout, including font choices, colors, and spacing.

**script.js:** The JavaScript file that manages real-time calculations, updates the UI, and handles currency conversions.

# Demo
**Select Currency:** Choose either USD or INR for calculations.

**Input Monthly Ad Spend:** Adjust the slider to set your estimated monthly ad spend.

**Adjust CPC and Conversion Rates:** Modify the sliders for CPC (cost per click), opt-in conversion rate, lead-to-customer conversion rate, and average sale price.

**View Results:** Instantly see the gross revenue, net result, and ROI based on your inputs.

# How It Works
**Currency Conversion:** If INR is selected, the exchange rate (defined as 83 in script.js) is applied to all relevant calculations.

**Total Clicks Calculation:**

```javascript
const totalClicks = adSpendUSD / cpcUSD;```
Total clicks are calculated by dividing the ad spend by the CPC.

**Total Conversions Calculation:**

```javascript
const totalConversions = totalClicks * (conversionRate / 100) * (customerConversionRate / 100);```
This multiplies the total clicks by the conversion rates (both opt-in and lead-to-customer) to estimate total conversions.

**Gross Revenue Calculation:**

```javascript
const grossRevenueUSD = totalConversions * salePriceUSD;```
This calculates the total gross revenue based on the conversions and the average sale price.

**ROI Calculation:**

```javascript
const roi = (netResultUSD / adSpendUSD) * 100;```
The ROI is computed by dividing the net result (gross revenue minus ad spend) by the ad spend.

# Setup Instructions

## Prerequisites
Web Browser (Chrome, Firefox, Safari, etc.)

## Running Locally

**Clone the repository:**

```bash
git clone https://github.com/yourusername/roi-calculator.git
cd roi-calculator```

**Open the project:** Open the index.html file in your browser to launch the ROI Calculator.

# Usage Instructions

**Input Values:** Use the sliders to adjust your ad spend, CPC, conversion rates, and sale price.

**Currency Switch:** Switch between USD and INR to see the projected ROI in either currency.

**Review Results:** The gross revenue, net result, and ROI will be calculated automatically and displayed below the sliders.

# Customization
You can modify the following in script.js:

**Exchange Rate:** Adjust the exchangeRate variable if you want to change the INR to USD conversion rate.
**UI Behavior:** Modify the updateValues function to tweak how calculations are handled or displayed.
