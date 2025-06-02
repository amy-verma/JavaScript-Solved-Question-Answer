When loading JS in an HTML page there are three main ways to do it:
1. Normal Parsing
2. Using async
3. Using defer

NORMAL Parsing
<script src="script.js"><scriot>

1. HTML parsing stops  when the browser encounters the <script> tag
2. Ths browser downloads the scripts.
3. Once downloaded, it executes the scripts immediatelly
4. Then it resumes parsing the rest of the HTML

CONS
1. Blocks rendering — leads to slower page load times.
--------------------
2. Async 
<script src="script.js" async></script> 

How it works:
1. The script is downloaded asyncronously while the HTML is still parsing
2. Once the scripts finishes downloading  it's executed immediatelly
3. HTML parsing is paused for the script executing
Pros:
- Faster than normal parsing — downloads while parsing.
- Useful for independent scripts like analytics or ads.

-------
3. Defer
<script src="script.js" defer></script>
How it works:
- The script is dowloaded ion parallel with html parsing
2. The script is executed only after the entire HTML document is parsed.

Pros:
Doesn’t block HTML parsing
Preserves script order — scripts are executed in the order they appear in HTML.

