| Feature             | Web Worker 🧑‍💻                 | Service Worker 📡                                  |
| ------------------- | -------------------------------- | -------------------------------------------------- |
| Purpose             | Run heavy JS tasks in background | Handle caching, offline, push notifications        |
| Runs in             | Background thread                | Background (but linked to browser lifecycle)       |
| Can access network? | ❌ No (only via main thread)      | ✅ Yes (fetch, cache, intercept requests)           |
| Can access DOM?     | ❌ No                             | ❌ No                                               |
| Lifespan            | Ends when page closes            | Can live beyond page (runs even if site is closed) |
| Use case            | Performance (parallel tasks)     | PWA, offline apps, notifications                   |
