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

Fiber allows React to

1.  Split work into chunk
- Think of rendering like a bigtask ,Fiber split it into smaller task that React can pause and resume.This is called Inceremental Rendering.

- This way, React can pause to handle to handle more important things like animation and user input
then continue Rendering.

2. Prioritize updates
- Not all updates are equaly important. If the user clicks a button, that updates should happen 
faster than somtimes less urgent like a  background animation.

3.  Handle errors better
-With fiber raect can handle error during rendering more gracefully.It intriducess error 
boundaries.so the whole app doesn't crash if one part  fails.