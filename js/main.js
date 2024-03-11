function createForm() {
    // Select the form container
    const formContainer = document.querySelector(".form-container");
    // Create the paragraph element
    const paragraph = document.createElement("p");
    paragraph.textContent = "Let's do this!";
    // Append the paragraph to the form container
    formContainer.appendChild(paragraph);

    // Create the form element
    const form = document.createElement("form");

    // Create two columns for the form
    const leftColumn = document.createElement("div");
    const rightColumn = document.createElement("div");
    leftColumn.classList.add("form-column");
    rightColumn.classList.add("form-column");

    // Array of form fields
    const formFields = [
        { label: "First Name", type: "text", id: "firstName"},
        { label: "Last Name", type: "text", id: "lastName"},
        { label: "Email", type: "email", id: "email"},
        { label: "Phone Number", type: "tel", id: "phoneNumber"},
        { label: "Password", type: "password", id: "password"},
        { label: "Confirm Password", type: "password", id: "confirmPassword"}
    ];

    // Loop through the form fields and create elements
    formFields.forEach((field, index) => {
        // Create a div for each form field
        const formRow = document.createElement("div");
        formRow.classList.add("form-row");
        // Prepare labels
        const label= document.createElement("label");
        label.htmlFor = field.id;
        label.textContent = field.label;
        // Prepare input fields
        const input = document.createElement("input");
        input.type = field.type;
        input.id = field.id;
        input.name = field.id;
        // Append label and input field to the form
        formRow.appendChild(label);
        formRow.appendChild(input);
        // Append the form row to the appropriate column
        if (index < 3) {
            leftColumn.appendChild(formRow);
        } else {
            rightColumn.appendChild(formRow);
        }
    });
    form.appendChild(leftColumn);
    form.appendChild(rightColumn);
    formContainer.appendChild(form);
}

// Select the overlay div
const overlay = document.querySelector(".overlay");

// Create the image element
const logo = document.createElement('img');
logo.src = '../images/odin-lined.png';
logo.alt = 'Odin logo';
logo.classList.add('logo');

// Create the text element
const logoText = document.createElement("div");
logoText.textContent = "Odin";
logoText.classList.add("logo-text");

overlay.appendChild(logo);
overlay.appendChild(logoText);

// Select the account container
const account = document.querySelector(".account-container");

// Create the button element
const accountButton = document.createElement("button");
accountButton.classList.add("create-account-btn");
accountButton.textContent = "Create Account";

// Account container paragraph
const paragraph = document.createElement("p");
paragraph.textContent = "Already have an account? ";
paragraph.style.fontWeight = "bold";

// Account container login button 
const loginLink = document.createElement("a");
loginLink.href = "#";
loginLink.textContent = "Log In";
loginLink.classList.add("login-link");

account.appendChild(accountButton);
paragraph.appendChild(loginLink);
account.appendChild(paragraph);

createForm();
