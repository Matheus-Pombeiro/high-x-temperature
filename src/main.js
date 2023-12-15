// Get the referrences from HTML
const theme = document.querySelector("[data-theme]");               // Theme switching
const form = document.querySelector("form");                        // Form
const fromSelect = document.querySelector("[data-from-select]");    // From
const fromInput = document.querySelector("[data-from-in]");
const toSelect = document.querySelector("[data-to-select]");        // To
const out = document.querySelector("[data-output]");                   // Output

// Temperature converter function
const converter = (frmSlct, frmIpt, toSlct) => {

    let calc;
    let msg = "";

    if (frmSlct == "celsius" && toSlct == "fahrenheit") {
        calc = ((frmIpt * 1.8) + 32);
        msg = `${calc.toFixed(1)}° Celsius`;
    } else if (frmSlct == "celsius" && toSlct == "kelvin") {

    } else if (frmSlct == "fahrenheit" && toSlct == "celsius") {

    } else if (frmSlct == "fahrenheit" && toSlct == "kelvin") {

    } else if (frmSlct == "kelvin" && toSlct == "celsius") {

    } else if (frmSlct == "kelvin" && toSlct == "fahrenheit") {

    }

    return msg;

};

// Listen the submit event
form.addEventListener("submit", (e) => {

    e.preventDefault();     // Prevent the default submission of form

    // Get the values from the "From" inputs
    const frmSlct = fromSelect.value;
    const frmIpt = fromInput.value;

    // Get the value from the "To" input
    const toSlct = toSelect.value;

    console.log(frmSlct);
    console.log(frmIpt);

    out.innerHTML = converter(frmSlct, frmIpt, toSlct);

});