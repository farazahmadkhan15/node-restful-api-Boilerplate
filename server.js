const http = require("http");
const app = require("./app");

const port = process.env.PORT || 3000;

try {
  const server = http.createServer(app);

  server.listen(port);
  console.log(server);
} catch (error) {
  console.log(error);
}
