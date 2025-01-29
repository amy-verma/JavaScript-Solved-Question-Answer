What is virtual DOM?
-Is a lightweight JS representaion of the real DOM.Is a virtual copy of actual DOM,that
 react uses to optimize UI Updates.

 - Instead of directly manipulating the real DOM, React creates a virtual DOM and updates it whenever there is a change in the application state. Then React determines the minimal changes needed to update the real DOM, improving performance.

 How Does React Use the Virtual DOM to Render the UI?
STEPS
1. Initial Rendering
 - When app starts ,React build a virtul DOM tree that Mirrors the structure of UI.
 - This virtual DOM  tree is used to render the UI to the real DOM.

2. State or Data Changes;
- Whenever there is a change in the apptn state or props,React creates a new Virtual Dom tree to represent the Updated UI.

3. DIFFING
- React compares the new virtual DOM tree with previous DOM tree. This process is called reconciliation or diffing.
- React identifies the minimal set of changes (differences) between the two virtual DOM trees.

4. Patching
- Based on the differences found in the diffing process, React updates only the parts of the real DOM that have changed.
- This is done using efficient DOM manipulation techniques, avoiding costly full re-renders.

Why Use the Virtual DOM?
1. Performance Optimization:
- Direct manipulation of the real DOM is slow because of layout recalculations, reflows, and repainting.
- By batching and minimizing updates, the virtual DOM makes React applications faster.

2. Declarative UI:
- Developers describe what the UI should look like in its final state, and React handles the complex DOM operations to achieve it.

3. Cross-Platform Compatibility:
- React’s virtual DOM works independently of the browser’s DOM, making it suitable for rendering UIs in non-browser environments (e.g., React Native for mobile apps).
