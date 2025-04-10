// What is Client-Side Rendering (CSR)?
// - Means that browser(client) is responsible for rendering the content using JS
// - the server sends the barebones(only html with id ) HTML files and then JS takes over it to render the rest of 
// the page in browser
// -----------------------------------------------------
// 2. What happens in CSR?
// a. You type url and hit enter
// b. The browser request the page from the server
// c. The server responds with basic html (ofter with <div id="root"/>)
// d. the broser will now download the Javasvript files like(bundle.js )
// e. the JS runs in the browser,builds the ui, and injects it into the HTML dynamically.
// -------------------------------------------
// Tools that use CSR:
// React (with CRA – Create React App)
// Angular
// Vue.js (by default)
// --------------------------------------------
// Pros of CSR:
// 1. Smooth user experience after the first load
// 2. Fast page transitions (no full-page reloads)
// 3. Great for building single-page applications (SPAs)
// ------------------------------------
// Cons of CSR:
// 1. Slower initial load (waiting for JS to load and run)
// 2. Poor SEO (search engines may not see the content if not handled properly)
// 3. Can be heavy on low-end devices

// ------------------------------------------------------------------------------------
                //    SERVER SIDE RENDERING

// What is Server-Side Rendering (SSR)?               
// HTML is rendered on the server, not in the browser

// When a user visits a website:

// 1. The browser requests a page.
// 2. The server processes everything (data fetching, templating, rendering).
// 3. The server sends back a fully rendered HTML page.
// 4. The browser simply displays it. 
// ------------------------
// Flow of SSR:
// User → Server → HTML (already rendered) → Browser shows content
