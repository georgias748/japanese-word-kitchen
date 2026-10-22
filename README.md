# Japanese Word Kitchen

A small browser-based Japanese vocabulary app. Each word earns the next
illustrated ingredient for a Japanese dish.

## Run locally

From this folder, start a simple local web server:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000> in a browser. Stop the local server with
`Control+C` in the terminal.

## Run the session-logic checks

Node.js is used only for the built-in test runner; the app has no installed
JavaScript dependencies or build step.

```sh
node --test
```
