1. Both localstorage and session storage are a part of Web storage API IN JS.
2. They allow you to store key-value-pair in the browser.

    Feature              Local Storage               Session Storage
1. Scope                  Entire Browser                 Per Tab
2. Expiry                   Never                         Clear on tab/browserclose
3. Capacity                   ~5-10mb                        ~5-10mb
4. use Cases           cart,preferences,dark mode         One-time login,form draft


 Real-World Example: E-commerce Website
 -You are building  a shopping website with user login and a cart system

  Session Storage – Temporary Login Token
  -When a user logs in, store a temporary token

  // Storing a temporary login token
  Example- sessionStorage.setItem("userToken","243")

  
// Retrieving it later in the same tab
const token = sessionStorage.getItem("userToken");
console.log("Token:", token);

2. Local Storage
- Let’s say the user adds items to their cart. You want to save their cart even if they come back next week.

//save cart data
const cart=[
    {id:1,name:"laptop",qty:1},
    {id:2,name:"Mouse",qty:2},
]
localStorage.setItem("cartItem",JSON.stringify(cart))

// Get cart data
const savedCart=JSON.parse(localStorage.getItem("cartItems));
cobsole.log("cart",savedCart)