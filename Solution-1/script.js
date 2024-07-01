const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    document.querySelectorAll('.error').forEach(e => e.remove());

    const inputFields = document.querySelectorAll("input");

    const table = document.createElement("table");
    const tBody = document.createElement("tbody");
    const row = document.createElement("tr");

    let formIsValid = true;

    inputFields.forEach((inputField) => {
        const label = inputField.previousElementSibling;

        if (inputField.value.trim() !== "") {
            const submittedEntry = document.createElement("td");
            submittedEntry.textContent = inputField.value;
            row.appendChild(submittedEntry);
            tBody.appendChild(row);
        } else {
            formIsValid = false;

            const errorElement = document.createElement("p");
            errorElement.textContent = `${label.textContent} is required`;
            errorElement.classList.add("error");

            inputField.parentElement.appendChild(errorElement);
        }
    });

    if (formIsValid) {
        table.appendChild(tBody);
        document.body.appendChild(table);
        form.reset();
    }
});
