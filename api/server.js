import app from "./app.js";
import { connectDatabase } from "./db/database.js";

connectDatabase();

app.listen(300, () => {
  console.log("server is running on port 3000!");
});
