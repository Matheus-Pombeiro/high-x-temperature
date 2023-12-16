// Import functions
import themeChange from "./theme.js";

// Get the referrences from HTML
const theme = document.querySelector("[data-theme]");               // Theme switching
const form = document.querySelector("form");                        // Form
const fromSelect = document.querySelector("[data-from-select]");    // From
const fromInput = document.querySelector("[data-from-in]");
const toSelect = document.querySelector("[data-to-select]");        // To
const out = document.querySelector("[data-output]");                // Output

// Call the imported functions
themeChange(theme); 

// Temperature converter function
const converter = (frmSlct, frmIpt, toSlct) => {

    let calc;
    let msg = "";

    if (frmSlct == "celsius" && toSlct == "fahrenheit") {           // C => F
        calc = ((frmIpt * 1.8) + 32);
        msg = `${calc.toFixed(2)}° Celsius`;
    } else if (frmSlct == "celsius" && toSlct == "kelvin") {        // C => K
        calc = frmIpt + 273.15;
        msg = `${calc}° Celsius`;
    } else if (frmSlct == "fahrenheit" && toSlct == "celsius") {    // F => C
        calc = ((frmIpt - 32) * 1.8);
        msg = `${calc.toFixed(2)}° Fahrenheit`;
    } else if (frmSlct == "fahrenheit" && toSlct == "kelvin") {     // F => K
        calc = (((frmIpt - 32) * 1.8) + 273.15);
        msg = `${calc.toFixed(2)}° Fahrenheit`;
    } else if (frmSlct == "kelvin" && toSlct == "celsius") {        // K => C
        calc = frmIpt - 273.15;
        msg = `${calc}° Kelvin`;
    } else if (frmSlct == "kelvin" && toSlct == "fahrenheit") {     // K => F
        calc = (((frmIpt - 273.15) * 1.8) + 32);
        msg = `${calc.toFixed(2)}° Kelvin`;
    } else {
        alert("You should select a valid unit combination of temperature.");
    }

    return msg;

};

// Listen the submit event
form.addEventListener("submit", (e) => {

    e.preventDefault();     // Prevent the default submission of form

    // Get the values from the "From" inputs
    const frmSlct = fromSelect.value;
    const frmIpt = Number(fromInput.value);

    // Get the value from the "To" input
    const toSlct = toSelect.value;

    out.innerHTML = converter(frmSlct, frmIpt, toSlct);

});