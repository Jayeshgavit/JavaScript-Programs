
const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const btn = document.querySelector("#btn1");
let dropdowns = document.querySelectorAll("select");
const fromCurr = document.querySelector("#fromselect");
const toCurr = document.querySelector("#toselect");
const amount = document.querySelector("#amount");
const fromFlag = document.querySelector("#from-flag");
const toFlag = document.querySelector("#to-flag");
const msg = document.querySelector(".msg");

// Populate dropdowns with currency codes
const populateDropdowns = () => {
    for (let select of dropdowns) {
        for (let currCode in countryList) {
            let newOption = document.createElement("option");
            newOption.innerText = currCode; // Visible text
            newOption.value = currCode;    // Associated value
            if (select.name === "from" && currCode === "USD") {
                newOption.selected = true;
            } else if (select.name === "to" && currCode === "INR") {
                newOption.selected = true;
            }
            select.append(newOption);      // Add to dropdown
        }
    }
};

// Update flag images based on selected currencies
const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    
    // Check which dropdown was changed and update the respective flag
    if (element === fromCurr) {
        fromFlag.src = newSrc;
    } else if (element === toCurr) {
        toFlag.src = newSrc;
    }
};

// Fetch exchange rates and update conversion
const updateExchangeRate = async () => {
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }

    // Fetch exchange rate data
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    try {
        let response = await fetch(URL);
        let data = await response.json();
        let rate = data[toCurr.value.toLowerCase()];
        
        // Perform the conversion
        let finalAmount = amtVal * rate;
        msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
    } catch (error) {
        console.error("Error fetching exchange rate data:", error);
        msg.innerText = "Error fetching exchange rate.";
    }
};

// Add event listeners to update flags when currency is changed
fromCurr.addEventListener("change", (evt) => {
    updateFlag(evt.target);
});
toCurr.addEventListener("change", (evt) => {
    updateFlag(evt.target);
});

// Convert currency when button is clicked
btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
});

// Initialize the page by populating the dropdowns and setting flags
populateDropdowns();
updateFlag(fromCurr); // Initial flag setup
updateFlag(toCurr);   // Initial flag setup
