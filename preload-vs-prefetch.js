// | Feature      | `preload`                        | `prefetch`                           |
// | ------------ | -------------------------------- | ------------------------------------ |
// | **Purpose**  | Load **needed resources early**  | Load **future resources in advance** |
// | **When**     | For current page                 | For **next page** or likely future   |
// | **Priority** | High (immediate)                 | Low (idle time)                      |
// | **Use for**  | Fonts, images, CSS/JS needed now | Next-page JS, routes, images, data   |
