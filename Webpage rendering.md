🔹 What is Webpage Rendering?
- Rendering = the process by which the browser converts your HTML, CSS, and JS into pixels on the screen that you can see and interact with.

🔹 Step-by-Step: How Rendering Works
1. You enter a URL
- Browser sends an HTTP request to the server.
- Server responds with an HTML file.

2. 2. Browser parses HTML → builds DOM
- Browser creates a DOM (Document Object Model) = tree structure of elements.

3. Browser loads CSS → builds CSSOM
- CSS files are downloaded.
- Browser builds a CSSOM (CSS Object Model) = rules for how DOM elements should look.

4. Combine DOM + CSSOM → Render Tree
- Browser merges DOM (structure) + CSSOM (styles).

5. Layout (Reflow)
- Browser calculates position & size of each element.
- Example: where the <h1> appears, how wide the <p> is, etc.

6. Painting  
- Browser fills in pixels (colors, borders, shadows, text).

7. Compositing
- Modern pages have multiple layers (like Photoshop).
- Browser combines layers into the final image you see.

🔹 Types of Rendering (important for SPAs like React)
- CSR (Client-Side Rendering) → JS builds DOM in the browser (React, Angular).
- SSR (Server-Side Rendering) → HTML is pre-built on the server, then styled in browser.