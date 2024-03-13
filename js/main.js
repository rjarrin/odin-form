function validateNames(name) {
    const nameRegex = /^[A-Z][a-z]*$/;
    return nameRegex.test(name);
}

function validatePhoneNumbers(phoneNumber) {
    const phoneNumberRegex = /^\d{3}-\d{3}-\d{4}$/;
    return phoneNumberRegex.test(phoneNumber);
}

function validatePasswords(password, confirmPassword) {
    if ((password !== confirmPassword) || password === "" || confirmPassword === "") {
        return false;
    }
    return true;
}

function handleFormSubmission(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    console.log("Submitted hit");
    // Retrieve values of the input fields
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phoneNumber = document.getElementById("phoneNumber").value;

    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const phoneNumberInput = document.getElementById("phoneNumber");

    // Validate passwords
    if(!validatePasswords(password, confirmPassword)) {
        passwordInput.style.borderColor = "red";
        confirmPasswordInput.style.borderColor = "red";
        // Check if the error message already exists
        let existingMessage = document.getElementById("passwordMismatchMessage");
        if (!existingMessage) {
            // Create a span element for the message
            const message = document.createElement("span");
            message.textContent = "* Passwords do not match";
            message.style.color = "red";
            message.style.fontSize = "small";
            // Assign id to message for future reference (and prevent multiple appends)
            message.id = "passwordMismatchMessage";
            // Append the message to the confirm password input's parent
            confirmPasswordInput.parentNode.appendChild(message);
        }
    } else {
        passwordInput.style.borderColor = "green";
        confirmPasswordInput.style.borderColor = "green";
        // If passwords match, remove any existing message
        const existingMessage = document.getElementById("passwordMismatchMessage");
        if (existingMessage) {
            existingMessage.remove();
        }
    }

    // Validate names
    if (!validateNames(firstName) || firstName === "") {
        firstNameInput.style.borderColor = "red";
    } else {
        firstNameInput.style.borderColor = "green";
    }

    if (!validateNames(lastName) || lastName === "") {
        lastNameInput.style.borderColor = "red";
    } else {
        lastNameInput.style.borderColor = "green";
    }

    // Validate phone number
    if (!validatePhoneNumbers(phoneNumber)) {
        phoneNumberInput.style.borderColor = "red";
    } else {
        phoneNumberInput.style.borderColor = "green";
    }

    // Retrieve email input field
    const emailInput = document.getElementById("email");
    if (!emailInput.checkValidity() || emailInput.value === "") {
        emailInput.style.borderColor = "red";
    } else {
        emailInput.style.borderColor = "green";
    }

    // Check if all fields are valid
    if (validateNames(firstName) && validateNames(lastName) && validatePhoneNumbers(phoneNumber) && emailInput.checkValidity() && validatePasswords(password, confirmPassword)) {
        // If all fields are valid, show an alert
        alert("All fields are valid!");
    }
}

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
        { label: "First Name", type: "text", id: "firstName", placeholder: "Enter your first name (John)"},
        { label: "Last Name", type: "text", id: "lastName", placeholder: "Enter your last name (Smith)"},
        { label: "Email", type: "email", id: "email", placeholder: "Enter your email address"},
        { label: "Phone Number", type: "tel", id: "phoneNumber", placeholder: "123-123-1234"},
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
        if (field.placeholder) {
            input.placeholder = field.placeholder;
        }
        
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

    const createAccountBtn = document.querySelector(".create-account-btn");
    createAccountBtn.addEventListener("click", handleFormSubmission);
    form.addEventListener("submit", handleFormSubmission);
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
