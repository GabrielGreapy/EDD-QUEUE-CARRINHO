const express = require("express");
const app = express();
const PORT = 3000;

const pageRouter = require("./routes/pages");
const apiRouter = require(".routes/api"); // ✅

app.use(express.static("public"));
app.use(express.json());

app.use("/", pageRouter);
app.use("/api", apiRouter); 

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
