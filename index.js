const jsonServer = require("json-server");
const server = jsonServer.create();

const restFulDataGenerator = require("./DBGenerator");
const APIrouter = jsonServer.router(restFulDataGenerator());

server.use("/api", APIrouter);
server.listen(3001, () => {
  console.log("JSON server is running");
});
