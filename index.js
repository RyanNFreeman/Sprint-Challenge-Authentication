require("dotenv").config(); // adding our environmental vars

const server = require("./api/server.js");

const port = process.env.PORT || 5000; //runs off port in .env file
server.listen(port, () => {
  console.log(`\n=== Server listening on port ${port}\n`);
});
