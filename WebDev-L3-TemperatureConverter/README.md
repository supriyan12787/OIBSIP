# Temperature Converter Website 🌡️

## OIBSIP Web Development Internship — Task 3

A simple, modern, and responsive Temperature Converter built using **HTML5, CSS3, and JavaScript**. It converts temperatures between Celsius, Fahrenheit, and Kelvin and displays the equivalent values in all three units.

## Features

- Convert temperatures from Celsius, Fahrenheit, or Kelvin.
- Display the converted value in all three temperature units.
- Validate empty and invalid input with friendly error messages.
- Prevent temperatures below absolute zero.
- Clear and accessible result displays.
- Responsive layout for desktop and mobile devices.
- Reset-free, lightweight implementation with no JavaScript libraries required.

## Technologies Used

- **HTML5** — page structure and form elements.
- **CSS3** — styling, layout, gradients, and responsive design.
- **JavaScript** — temperature conversion, input validation, and result updates.

## Project Structure

```text
temperature-converter/
├── index.html   # Website structure
├── style.css    # Styling and responsive layout
├── script.js    # Conversion logic and validation
└── README.md    # Project documentation
```

## Getting Started

### Run Locally

1. Clone or download this repository.
2. Open the project folder in Visual Studio Code.
3. Make sure `index.html`, `style.css`, and `script.js` are in the same folder.
4. Open `index.html` in your browser, or use the **Live Server** extension in VS Code.
5. Enter a temperature, select its unit, and click **Convert Temperature**.

No build tools or package installation are required.

## Conversion Formulas

The converter first converts the input to Celsius, then calculates the other units.

| Conversion | Formula |
|---|---|
| Fahrenheit to Celsius | `(°F - 32) × 5 / 9` |
| Kelvin to Celsius | `K - 273.15` |
| Celsius to Fahrenheit | `(°C × 9 / 5) + 32` |
| Celsius to Kelvin | `°C + 273.15` |

Temperatures below absolute zero are rejected:

- **Celsius:** −273.15 °C
- **Fahrenheit:** −459.67 °F
- **Kelvin:** 0 K

Results are displayed to two decimal places.

## Example Tests

| Input | Input Unit | Celsius | Fahrenheit | Kelvin |
|---:|---|---:|---:|---:|
| 25 | Celsius | 25.00 °C | 77.00 °F | 298.15 K |
| 32 | Fahrenheit | 0.00 °C | 32.00 °F | 273.15 K |
| 300 | Kelvin | 26.85 °C | 80.33 °F | 300.00 K |
| −273.15 | Celsius | −273.15 °C | −459.67 °F | 0.00 K |

### Validation Tests

- Submit an empty value — an error message should appear.
- Enter `-300` Celsius — the converter should reject the value.
- Enter `-500` Fahrenheit — the converter should reject the value.
- Enter `-1` Kelvin — the converter should reject the value.

## Design

The interface uses a clean card-based layout, purple accents, soft background gradients, and separate result cards for each temperature unit. The layout adapts to smaller screens for mobile usability.

## Future Improvements

- Add a clear/reset button.
- Convert automatically as the user types.
- Add a temperature conversion history.
- Add more unit explanations and examples.

## Author

Created as part of the **OIBSIP Web Development Internship — Task 3**.

---

⭐ If you find this project useful, feel free to star the repository.
