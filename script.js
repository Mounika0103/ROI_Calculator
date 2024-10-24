const exchangeRate = 83;

function updateValues() {
    const adSpendUSD = parseFloat(document.getElementById("adSpend").value);
    const cpcUSD = parseFloat(document.getElementById("cpc").value);
    const conversionRate = parseFloat(document.getElementById("conversionRate").value);
    const customerConversionRate = parseFloat(document.getElementById("customerConversionRate").value);
    const salePriceUSD = parseFloat(document.getElementById("salePrice").value);
    
    document.getElementById("adSpendValue").innerText = formatCurrency(adSpendUSD);
    document.getElementById("cpcValue").innerText = formatCurrency(cpcUSD);
    document.getElementById("conversionRateValue").innerText = conversionRate + "%";
    document.getElementById("customerConversionRateValue").innerText = customerConversionRate + "%";
    document.getElementById("salePriceValue").innerText = formatCurrency(salePriceUSD);
    
    const totalClicks = adSpendUSD / cpcUSD;
    const totalConversions = totalClicks * (conversionRate / 100) * (customerConversionRate / 100);
    
    const grossRevenueUSD = totalConversions * salePriceUSD;
    const netResultUSD = grossRevenueUSD - adSpendUSD;
    const roi = (netResultUSD / adSpendUSD) * 100;

    const isINR = document.getElementById("currency").value === "INR";
    const grossRevenue = isINR ? grossRevenueUSD * exchangeRate : grossRevenueUSD;
    const netResult = isINR ? netResultUSD * exchangeRate : netResultUSD;

    document.getElementById("grossRevenue").innerText = "Gross Revenue: " + formatCurrency(grossRevenue);
    document.getElementById("netResult").innerText = "Net Result: " + formatCurrency(netResult);
    document.getElementById("roi").innerText = "ROI: " + roi.toFixed(2) + "%";
    
    const currency = document.getElementById("currency").value;
    const lossMessage = (netResult < 0) 
        ? `Oh no! You'll lose ${formatCurrency(Math.abs(netResult))} ${currency} in revenue, which means you're getting ${roi.toFixed(2)}% ROI on your money.` 
        : "";
    const profitMessage = (netResult > 0) 
        ? `Congratulations! You'll gain ${formatCurrency(netResult)} ${currency} in revenue, which means you're getting ${roi.toFixed(2)}% ROI on your money.` 
        : "";

    document.getElementById("lossMessage").innerText = lossMessage;
    document.getElementById("profitMessage").innerText = profitMessage;
}

function formatCurrency(value) {
    const currency = document.getElementById("currency").value;
    return currency === "INR" ? `₹${value.toFixed(2)}` : `$${value.toFixed(2)}`;
}

function updateCurrency() {
    updateValues();
}
