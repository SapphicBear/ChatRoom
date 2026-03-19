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

// TODO: add 404 view
app.use((req, res, next) => {
    res.status(404).send("<p>404 page not found! Sorry!</p>");
})
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).send(err.message);
});

app.listen(3000, (err) => {
    if (err) {
        throw err;
    }
    console.log(`Live on localhost:3000`)
});