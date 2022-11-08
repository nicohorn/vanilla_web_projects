const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.writeHead(200, { "Content-Type": "text/html" });

  let path = "./";

  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/progress_steps":
      path += "progress_steps/index.html";
      break;
    case "/rotating_navigation":
      path += "rotating_navigation/index.html";
      break;
    case "/blurry_loading":
      path += "blurry_loading/index.html";
      break;
    case "/expanding_cards":
      path += "expanding_cards/index.html";
      break;
    case "/hidden_search_widget":
      path += "hidden_search_widget/index.html";
      break;
    case "/scroll_animation":
      path += "scroll_animation/index.html";
      break;
  }
  console.log(path);
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end("route not found");
    } else {
      res.end(data);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
