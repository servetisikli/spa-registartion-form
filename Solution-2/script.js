const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear previous error messages
    document.querySelectorAll('.error').forEach(e => e.remove());

    const inputFields = document.querySelectorAll("input");
    let formIsValid = true;

    // Check each input field
    inputFields.forEach((inputField) => {
        const label = inputField.previousElementSibling;

        // If input is empty, show error
        if (inputField.value.trim() === "") {
            formIsValid = false;
            const errorElement = document.createElement("p");
            errorElement.textContent = `${label.textContent} is required`;
            errorElement.classList.add("error");
            inputField.parentElement.appendChild(errorElement);
        }
    });

    // If form is valid, update the table
    if (formIsValid) {
        let table = document.querySelector("table");
        let tBody = table.querySelector("tbody");

        // If table body doesn't exist, create it
        if (!tBody) {
            tBody = document.createElement("tbody");
            table.appendChild(tBody);
        }

        // Create new row
        const row = document.createElement("tr");

        // Populate row with input values
        inputFields.forEach((inputField) => {
            const cell = document.createElement("td");
            cell.textContent = inputField.value.trim();
            row.appendChild(cell);
        });

        // Append row to table body
        tBody.appendChild(row);

        // Reset form after submission
        form.reset();
    }
});
