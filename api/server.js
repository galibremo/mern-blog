import app from "./app.js";
import { connectDatabase } from "./db/database.js";

const port = 3000;
connectDatabase();

app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});
