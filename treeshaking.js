// | Type of Code                     | Can Tree Shaking Remove It? |
// | -------------------------------- | --------------------------- |
// | Unused functions                 | ✅ Yes                       |
// | Unused imports                   | ✅ Yes                       |
// | Unreachable code                 | ✅ Sometimes                 |
// | Dead branches (if false)         | ✅ Often                     |
// | Used code                        | ❌ No (obviously)            |
// | Side effects (e.g., global code) | ❌ Not always                |

// Tree shaking is a JavaScript optimization technique used during the build process to remove unused code (a.k.a. "dead code") from your final bundle.

// It helps make your final app bundle smaller and faster.