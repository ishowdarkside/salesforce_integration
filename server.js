const app = require("./app");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_LINK)
  .then(() => console.log("Successfully conntected to database"))
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
