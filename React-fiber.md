Q.  What is React Fiber?
- React Fiberis an internal rendering engine, so there's no public api to write fiber code
directly. But we can observe its behaviour through features like concurrent rendering with 
startTransition , deferred renderingwith useDferredValue, error boundaries

-React fiber is the newer version of core engine of react,introduced in REact 16.
- It is not someting you dierectly use like componenet or Hooks

Q. Why did React need Fiber?
- Before fiber, React use a redering system that was fast but not very flexible.
- It had a big problem-once it startted rendering, it couldn't stop until it was done.
- This cause jenky user experience-like UI freeze,especially in large application

Question. What does Fiber do better?

