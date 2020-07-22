// const Vue = require("vue");
const server = require("express")();
const renderer = require("vue-server-renderer").createRenderer();
const createApp = require("./src/pages/second/second");
server.get("*", (req, res) => {
  // const app = ;
// console.log(secondPage)
  renderer.renderToString(createApp(), (err, html) => {
    if (err) {
      res.status(500).end("Internal Server Error");
      return;
    }
    console.log(html)
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
          <head><title>Hello</title></head>
          <body>${html}</body>
        </html>
      `);
  });
});

server.listen(3000);
