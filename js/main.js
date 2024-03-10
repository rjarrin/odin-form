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

// Account container paragraph
const paragraph = document.createElement("p");
paragraph.textContent = "Already have an account? ";

// Account container login button 
const loginLink = document.createElement("a");
loginLink.href = "#";
loginLink.textContent = "Log In";
loginLink.classList.add("login-link");

paragraph.appendChild(loginLink);
account.appendChild(paragraph);