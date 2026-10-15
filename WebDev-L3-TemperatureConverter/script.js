
const form = document.getElementById("converterForm");
const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const errorMessage = document.getElementById("errorMessage");

const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");

const ABSOLUTE_ZERO_C = -273.15;

function showError(message) {
    errorMessage.textContent = message;

    celsiusResult.textContent = "—";
    fahrenheitResult.textContent = "—";
    kelvinResult.textContent = "—";

    temperatureInput.setAttribute("aria-invalid", "true");
}

function clearError() {
    errorMessage.textContent = "";
    temperatureInput.removeAttribute("aria-invalid");
}

function convertTemperature(event) {
    event.preventDefault();
    clearError();

    const rawValue = temperatureInput.value.trim();
    const value = Number(rawValue);
    const unit = unitSelect.value;

    // Check for empty or invalid numeric input.
    if (rawValue === "" || !Number.isFinite(value)) {
        showError("Please enter a valid numeric temperature.");
        temperatureInput.focus();
        return;
    }

    let celsius;

    // Convert the input to Celsius first.
    if (unit === "C") {
        celsius = value;
    } else if (unit === "F") {
        celsius = (value - 32) * 5 / 9;
    } else {
        celsius = value - 273.15;
    }

    // No temperature can be below absolute zero.
    if (celsius < ABSOLUTE_ZERO_C) {
        showError(
            "Temperature cannot be below absolute zero " +
            "(-273.15 °C, -459.67 °F, or 0 K)."
        );
        temperatureInput.focus();
        return;
    }

    // Convert Celsius to the other units.
    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;

    // Avoid displaying negative zero due to rounding.
    const format = (number) => {
        const rounded = Number(number.toFixed(2));
        return (Object.is(rounded, -0) ? 0 : rounded).toFixed(2);
    };

    celsiusResult.textContent = `${format(celsius)} °C`;
    fahrenheitResult.textContent = `${format(fahrenheit)} °F`;
    kelvinResult.textContent = `${format(kelvin)} K`;
}

// Convert only when the form is submitted.
form.addEventListener("submit", convertTemperature);

// Clear stale error messages when the user edits the value.
temperatureInput.addEventListener("input", clearError);
unitSelect.addEventListener("change", clearError);
