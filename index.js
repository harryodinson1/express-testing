import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.status(200).json({ status: "It's working!!!" });
});

app.listen(8080, () => console.log("Server is running on port 8080..."));
