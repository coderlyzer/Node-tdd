const app = require("./app");
const CONNECTDB = require("./mongoDB/Connect");

const start = async () => {
  try {
    await CONNECTDB();
    app.listen(3000, () => {
      console.log("Server is listening for request on port 3000");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
