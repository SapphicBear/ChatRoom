const express = require("express");
const path = require("node:path");
const app = express();
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use(express.static(path.join(__dirname, "public")));


app.use("/", indexRouter);
app.use("/new", newRouter);

app.listen(3000, (err) => {
    if (err) {
        throw err;
    }
    console.log(`Listening on port 3000`)
});