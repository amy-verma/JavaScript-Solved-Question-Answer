1. Both localstorage and session storage are a part of Web storage API IN JS.
2. They allow you to store key-value-pair in the browser.

   Feature Local Storage Session Storage

3. Scope Entire Browser Per Tab
4. Expiry Never Clear on tab/browserclose
5. Capacity ~5-10mb ~5-10mb
6. use Cases cart,preferences,dark mode One-time login,form draft

Real-World Example: E-commerce Website
-You are building a shopping website with user login and a cart system

Session Storage – Temporary Login Token
-When a user logs in, store a temporary token

// Storing a temporary login token
Example- sessionStorage.setItem("userToken","243")

// Retrieving it later in the same tab
const token = sessionStorage.getItem("userToken");
console.log("Token:", token);

2. Local Storage

- Let’s say the user adds items to their cart. You want to save their cart even if they come back next week.

let settings = {
theme: "dark",
fontSize: "16px"
};

// Save settings in session storage
sessionStorage.setItem("settings", JSON.stringify(settings));

// Retrieve and use them
let savedSettings = JSON.parse(sessionStorage.getItem("settings"));
console.log(savedSettings.theme); // dark
